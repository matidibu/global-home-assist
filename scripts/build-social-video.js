// Builds one finished vertical Reel from a raw Playwright screen-recording
// (see capture-itinerary-video.js) + an ElevenLabs voiceover: speeds up the
// "loading" segment (using the sidecar .meta.json the capture script
// writes), caps how much the post-loading browsing segment gets compressed
// so scrolling never turns into a blur, trims a short breath/mouth-noise
// artifact ElevenLabs occasionally tacks on at the very end, and burns in
// synced captions. No background music (no royalty-free source available
// in this environment).
//
// Usage:
//   ELEVEN_API_KEY=... node scripts/build-social-video.js <rawVideoPath> <scriptTextPath> <lang> <outLabel>
//
// scriptTextPath is a plain .txt file with the voiceover script.
// Output goes to C:/Users/matia/Downloads/gha_videos_final/<outLabel>.mp4

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const FFMPEG = require('ffmpeg-static');
const API_KEY = process.env.ELEVEN_API_KEY;
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam - Energetic, Social Media Creator (free-tier ElevenLabs voice, works well multilingually)
const LOADING_SPEEDUP = 8;
const INTRO_SPEEDUP = 3;
const MAX_BROWSING_SPEEDUP = 1.7; // never compress the scroll past this, or it looks rushed/impulsive
const END_BUFFER = 0.6; // small buffer after the voice stops, not a fixed minimum length
const MAX_TOTAL_DUR = 34; // don't let it drag even if the script is long
const VIDEO_W = 480, VIDEO_H = 854; // must match capture-itinerary-video.js VIDEO_SIZE

const [rawVideoPath, scriptPath, lang, outLabel] = process.argv.slice(2);
if (!rawVideoPath || !scriptPath || !lang || !outLabel) {
  console.error('Usage: node scripts/build-social-video.js <rawVideoPath> <scriptTextPath> <lang> <outLabel>');
  process.exit(1);
}
if (!API_KEY) {
  console.error('Missing ELEVEN_API_KEY env var');
  process.exit(1);
}

const WORKDIR = path.join(require('os').tmpdir(), 'gha-video-build');
if (!fs.existsSync(WORKDIR)) fs.mkdirSync(WORKDIR, { recursive: true });
const OUT_DIR = 'C:/Users/matia/Downloads/gha_videos_final';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function sh(args) {
  return execFileSync(FFMPEG, args, { cwd: WORKDIR, stdio: ['ignore', 'pipe', 'pipe'] }).toString();
}

function getDuration(file) {
  try {
    execFileSync(FFMPEG, ['-i', file], { cwd: WORKDIR, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    const out = e.stderr.toString();
    const m = out.match(/Duration: (\d+):(\d+):(\d+\.\d+)/);
    if (m) return (+m[1]) * 3600 + (+m[2]) * 60 + (+m[3]);
  }
  return null;
}

function srtTime(sec) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor(sec % 60);
  const ms = Math.round((sec - Math.floor(sec)) * 1000);
  const p2 = n => String(n).padStart(2, '0');
  const p3 = n => String(n).padStart(3, '0');
  return `${p2(h)}:${p2(m)}:${p2(s)},${p3(ms)}`;
}

async function generateVoice(text, outPath) {
  const body = JSON.stringify({
    text,
    model_id: 'eleven_multilingual_v2',
    voice_settings: { stability: 0.85, similarity_boost: 0.75, style: 0, use_speaker_boost: true },
  });
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`, {
    method: 'POST',
    headers: { 'xi-api-key': API_KEY, 'Content-Type': 'application/json' },
    body,
  });
  if (!res.ok) throw new Error(`ElevenLabs error ${res.status}: ${await res.text()}`);
  fs.writeFileSync(outPath, Buffer.from(await res.arrayBuffer()));
}

// ElevenLabs occasionally tacks on a short (<1s) breath/mouth-noise or
// half-hallucinated sound after the real speech ends -- confirmed by ear
// 2026-08-19 even with conservative voice_settings. Fix: find the last
// real pause (silencedetect at a sensitive -45dB threshold) and hard-trim
// there instead of trusting the file's natural end. Safe even when there's
// no artifact -- it just trims trailing silence, which is harmless.
function trimVoiceTail(voicePath) {
  let out;
  try {
    execFileSync(FFMPEG, ['-i', voicePath, '-af', 'silencedetect=noise=-45dB:d=0.15', '-f', 'null', '-'], { cwd: WORKDIR, stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    out = e.stderr.toString();
  }
  const starts = [...(out || '').matchAll(/silence_start:\s*([\d.]+)/g)].map(m => +m[1]);
  const fullDur = getDuration(voicePath);
  if (!starts.length || !fullDur) return voicePath;
  const lastGapStart = starts[starts.length - 1];
  // Only trim if that last pause is reasonably late (avoid chopping a real
  // mid-sentence gap in a short/odd script) and there's meaningfully less
  // than a full second being cut (a real trailing artifact, not content).
  if (lastGapStart < fullDur * 0.6 || fullDur - lastGapStart > 1.5) return voicePath;
  const trimmedPath = voicePath.replace(/\.mp3$/, '-trimmed.mp3');
  const cutAt = lastGapStart + 0.08;
  sh(['-y', '-i', voicePath, '-t', String(cutAt), '-c', 'copy', trimmedPath]);
  console.log(`[${outLabel}]   Trimmed voice tail: ${fullDur.toFixed(2)}s -> ${cutAt.toFixed(2)}s`);
  return trimmedPath;
}

// Prepares the raw capture to roughly match targetDur: the "getting
// started" phase (typing the destination + the AI loading screen) gets
// sped up -- nobody needs to watch that in real time -- so the actual
// payoff (scrolling the finished itinerary) gets the lion's share of the
// budget and can stay fluid instead of racing to fit.
function prepRawVideo(rawPath, targetDur) {
  const metaPath = rawPath.replace(/\.webm$/, '.meta.json');
  const rawDur = getDuration(rawPath);
  let loadingStart = 0, loadingEnd = 0;
  if (fs.existsSync(metaPath)) {
    ({ loadingStart, loadingEnd } = JSON.parse(fs.readFileSync(metaPath, 'utf8')));
  }
  const hasLoading = loadingEnd - loadingStart >= 2;
  const introDur = hasLoading ? loadingStart : 0;
  const introCompressed = introDur / INTRO_SPEEDUP;
  const loadingCompressed = hasLoading ? (loadingEnd - loadingStart) / LOADING_SPEEDUP : 0;
  const browsingStart = hasLoading ? loadingEnd : 0;
  const browsingDur = Math.max(0.1, rawDur - browsingStart);
  const remainingBudget = Math.max(1, targetDur - introCompressed - loadingCompressed - 0.5);
  const browsingSpeed = Math.min(MAX_BROWSING_SPEEDUP, Math.max(1, browsingDur / remainingBudget));
  const browsingCompressed = browsingDur / browsingSpeed;
  const finalDur = introCompressed + loadingCompressed + browsingCompressed;

  console.log(`[${outLabel}]   intro=${introCompressed.toFixed(1)}s(${INTRO_SPEEDUP}x) loading=${loadingCompressed.toFixed(1)}s(${LOADING_SPEEDUP}x) browsing=${browsingCompressed.toFixed(1)}s(${browsingSpeed.toFixed(2)}x) -> ${finalDur.toFixed(1)}s`);

  const outPath = path.join(WORKDIR, `${outLabel}-detimed.mp4`);
  let filter;
  if (hasLoading) {
    filter =
      `[0:v]trim=0:${introDur},setpts=(PTS-STARTPTS)/${INTRO_SPEEDUP}[v1];` +
      `[0:v]trim=${loadingStart}:${loadingEnd},setpts=(PTS-STARTPTS)/${LOADING_SPEEDUP}[v2];` +
      `[0:v]trim=${browsingStart},setpts=(PTS-STARTPTS)/${browsingSpeed}[v3];` +
      `[v1][v2][v3]concat=n=3:v=1:a=0[vout]`;
  } else {
    filter = `[0:v]setpts=(PTS-STARTPTS)/${browsingSpeed}[vout]`;
  }
  sh(['-y', '-i', rawPath, '-filter_complex', filter, '-map', '[vout]', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', outPath]);
  return { path: outPath, dur: finalDur };
}

async function main() {
  console.log(`[${outLabel}] 1/5 Generating voiceover (${lang}) via ElevenLabs...`);
  const text = fs.readFileSync(scriptPath, 'utf8').trim();
  const rawVoicePath = path.join(WORKDIR, `${outLabel}-voice.mp3`);
  await generateVoice(text, rawVoicePath);
  const voicePath = trimVoiceTail(rawVoicePath);
  const audioDur = getDuration(voicePath);
  if (!audioDur) throw new Error('Could not read audio duration');

  const targetDur = Math.min(MAX_TOTAL_DUR, audioDur + END_BUFFER);
  console.log(`[${outLabel}] 2/5 audio=${audioDur.toFixed(1)}s target_total=${targetDur.toFixed(1)}s`);

  console.log(`[${outLabel}] 3/5 Prepping raw footage (loading speed-up + capped browsing speed-up)...`);
  const prepped = prepRawVideo(rawVideoPath, targetDur);

  console.log(`[${outLabel}] 4/5 Building captions (SRT)...`);
  // Short phrase-sized chunks (not whole sentences) so each caption fits on
  // 1-2 lines instead of a giant text block covering the screen.
  function splitIntoChunks(sentence, maxChars = 26) {
    const words = sentence.trim().split(/\s+/);
    const chunks = [];
    let cur = '';
    for (const w of words) {
      const next = cur ? `${cur} ${w}` : w;
      if (next.length > maxChars && cur) {
        chunks.push(cur);
        cur = w;
      } else {
        cur = next;
      }
    }
    if (cur) chunks.push(cur);
    return chunks;
  }
  // Proportional-by-character timing with a per-item floor naively drifts:
  // sequentially clamping each item to `min(t+dur, budget)` means any floor
  // applied to early short items steals time from later ones, and it all
  // piles up on the very last chunk (this is exactly what squeezed a final
  // "Link in bio." caption down to 0.5s). Fix: compute floored weights for
  // ALL items first, then rescale so they sum to exactly `budget` -- no
  // drift, no clamping needed.
  function distributeWithFloor(items, budget, floorSec) {
    const raw = items.map(it => (it.length / (items.reduce((a, x) => a + x.length, 0) || 1)) * budget);
    const floored = raw.map(d => Math.max(floorSec, d));
    const scale = budget / floored.reduce((a, d) => a + d, 0);
    return floored.map(d => d * scale);
  }

  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  const sentenceDurs = distributeWithFloor(sentences, audioDur, 0.9);
  let t = 0;
  let idx = 1;
  const srtLines = [];
  sentences.forEach((s, i) => {
    const sentenceDur = sentenceDurs[i];
    const chunks = splitIntoChunks(s);
    const chunkDurs = distributeWithFloor(chunks, sentenceDur, 0.5);
    let ct = t;
    chunks.forEach((c, j) => {
      const start = ct;
      const end = ct + chunkDurs[j];
      srtLines.push(String(idx++));
      srtLines.push(`${srtTime(start)} --> ${srtTime(end)}`);
      srtLines.push(c.trim());
      srtLines.push('');
      ct = end;
    });
    t += sentenceDur;
  });
  const srtPath = path.join(WORKDIR, `${outLabel}.srt`);
  fs.writeFileSync(srtPath, srtLines.join('\n'), 'utf8');

  console.log(`[${outLabel}] 5/5 Rendering final video with ffmpeg...`);
  const outPath = path.join(OUT_DIR, `${outLabel}.mp4`);
  const srtRel = `${outLabel}.srt`;
  // BackColour + BorderStyle=3 draws a solid readable box behind the text
  // (BorderStyle=1 outline-only rendered oversized/unreadable before --
  // fixed here via original_size, which was the real bug: libass defaults
  // to a 384x288 script resolution when the input is a plain .srt and
  // scales the font up to match the real video size).
  const style = "FontName=Arial,FontSize=11,Bold=1,PrimaryColour=&H00FFFFFF,BackColour=&H90000000,BorderStyle=3,Outline=0,Shadow=0,Alignment=2,MarginV=25,MarginL=20,MarginR=20";
  // Video ends a beat after the voice, never dragged out further -- if the
  // prepped footage still runs longer (browsing speed-up hit its cap), trim
  // it rather than let the tail sit in silence.
  const finalDur = Math.min(prepped.dur, audioDur + END_BUFFER);
  const videoPad = Math.max(0, finalDur - prepped.dur);
  const audioPad = Math.max(0, finalDur - audioDur);
  sh([
    '-y',
    '-i', prepped.path,
    '-i', voicePath,
    '-filter_complex',
    `[0:v]tpad=stop_mode=clone:stop_duration=${videoPad},subtitles=${srtRel}:original_size=${VIDEO_W}x${VIDEO_H}:force_style='${style}'[v];` +
    `[1:a]apad=pad_dur=${audioPad}[a]`,
    '-map', '[v]', '-map', '[a]',
    '-t', String(finalDur),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '20',
    '-c:a', 'aac', '-b:a', '128k',
    outPath,
  ]);

  console.log(`[${outLabel}] Done: ${outPath} (~${finalDur.toFixed(1)}s)`);
}

main().catch(e => { console.error(`[${outLabel}] FAILED:`, e.message); process.exitCode = 1; });
