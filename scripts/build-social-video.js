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
//   ELEVEN_API_KEY=... node scripts/build-social-video.js <rawVideoPath> <scriptTextPath> <lang> <outLabel> [reuseVoicePath|-] [brollQuery] [hookText]
//
// scriptTextPath is a plain .txt file with the voiceover script.
// Output goes to C:/Users/matia/Downloads/gha_videos_final/<outLabel>.mp4
//
// brollQuery (optional): a Pexels video search string. When passed, the
// video is built as a split-screen -- app footage on top, a silent looping
// b-roll clip on the bottom -- added 2026-08-24 after retention data showed
// viewers dropping at 0:01 on the single-frame format (the static homepage
// hero card at the start had no motion/travel signal). Pass "-" for
// reuseVoicePath if skipping it but still passing brollQuery/hookText.
//
// EXPERIENTIAL, not literal-landmark queries -- changed 2026-08-26 per user
// feedback: a generic monument/skyline shot doesn't sell the trip, a moment
// of the actual experience does (a espresso pour, a wine terrace over the
// sea). Suggested queries:
//   barcelona: tapas rooftop terrace spain
//   paris: street artist painting easel paris
//   roma: italian street cafe espresso
//   tokio: japanese street food night market
//   bali: bali indonesia rice terraces temple sunset
//   nuevayork: new york city rooftop bar skyline
//   dubai: dubai skyline burj khalifa desert
//   dubrovnik/croatia: wine tasting terrace sea view
//   feat-traslados: airport suitcase walking travel
//   feat-seguridad: passport travel documents safety
//   feat-mapa: road trip map navigation travel
//   feat-excursiones: adventure tour activities travel
//
// hookText (optional, requires brollQuery): a short punchy line ("Asi se
// siente Roma." / "This is what Rome feels like."). When passed, the first
// HOOK_DUR seconds of the FINAL video are the brollQuery footage shown
// full-frame (not split) with this text burned in, silent, before cutting to
// the real split-screen app demo + voiceover. Added 2026-08-26: TikTok
// analytics across 8 posted videos and 4 different pipeline versions
// (brand-card placement, split-screen, rhythm-scroll, loading-speed caps)
// all plateaued at ~1-2.4s avg watch time / ~0-2% completion, dropping at
// 0:01 regardless -- strong signal the problem isn't internal video pacing
// anymore, it's that the opening frame itself (a screenshot of a search
// form) has no hook. This reuses the SAME experiential b-roll clip already
// fetched for the split-screen bottom half, so it costs nothing extra in
// Pexels calls.

const fs = require('fs');
const https = require('https');
const path = require('path');
const { execFileSync } = require('child_process');

const sharp = require('sharp');
const FFMPEG = require('ffmpeg-static');
const API_KEY = process.env.ELEVEN_API_KEY;
const VOICE_ID = 'TX3LPaxmHKxFdv7VOQHJ'; // Liam - Energetic, Social Media Creator (free-tier ElevenLabs voice, works well multilingually)
// Same free Pexels key already used by scripts/generate-pinterest-destinos.js
// and src/lib/imageSearchPexels.ts -- reused here for video search too, zero
// new signup/cost.
const PEXELS_KEY = 'aHXrcSFbITumyVM8gA84eUlX5FI5ckOMCdTOsLSaVrcYcQ9Vp0Bl0s8R';
const LOADING_SPEEDUP = 8;
const INTRO_SPEEDUP = 3;
// Hard caps on the "getting started" phase's OUTPUT duration, not just a
// fixed multiplier -- added 2026-08-25 after TikTok analytics on all 7
// posted videos showed avg watch time of 1-2.4s, and frame-by-frame
// extraction confirmed real itinerary content never appeared before ~5-6s
// in (verified via nuevayork-es's own meta.json: 33.45s of raw loading,
// which even at the old fixed 8x was still 4.2s of a static "preparing
// your trip" progress bar; the intro/typing segment added another ~1.4s of
// an equally static hero-card screenshot, since the search box lives below
// the fold and typing was never actually visible on screen). A fixed
// multiplier can't keep up with real AI-wait times that vary run to run --
// capping the OUTPUT duration and solving for whatever speedup that
// requires guarantees the payoff arrives inside the window viewers are
// actually still watching, regardless of how long the raw wait was.
const MAX_INTRO_DUR = 0.4;
const MAX_LOADING_DUR = 0.8;
// Lowered 2026-08-25 (was 1.7, then 1.3) -- explicit user request to slow
// the itinerary scroll down further than the 2026-08-24 rhythm fix, on top
// of the extra real-time budget this now gets for free since intro+loading
// no longer eat 5-6s of it. The first 1.3 cap turned out not to even bind
// (the natural browsingDur/remainingBudget ratio landed at 1.28x, just
// under it) -- user asked for it slower still after reviewing that build,
// so this needs to actually clamp now.
const MAX_BROWSING_SPEEDUP = 1.1; // never compress the scroll past this, or it looks rushed/impulsive
const END_BUFFER = 0.6; // small buffer after the voice stops, not a fixed minimum length
const MAX_TOTAL_DUR = 34; // don't let it drag even if the script is long
const VIDEO_W = 480, VIDEO_H = 854; // must match capture-itinerary-video.js VIDEO_SIZE
const REPO_ROOT = path.join(__dirname, '..');
const BRAND_CARD_DUR = 1.2; // short bumper, same clip reused at open and close
const BRAND_BG = '#152060'; // matches the logo's own dark navy gradient stop
const HOOK_DUR = 1.5; // full-frame experiential-b-roll + text open, before the split-screen app demo starts
const HOOK_FONT = 'C\\:/Windows/Fonts/arialbd.ttf'; // ffmpeg drawtext needs the drive-colon escaped inside the filter string
// Added 2026-08-26 per user feedback on the first hook-test round ("mas
// lentas, como hipnoticas, y que no se repitan las imagenes"): the
// experiential b-roll was playing at native speed and, since each of the 3
// clips was trimmed to only 5s (15s raw total), it visibly looped/repeated
// partway through anything longer than ~15s. BROLL_SLOW_STRETCH re-times
// the b-roll (setpts) to play at roughly 1/1.7 speed -- slower, more
// "hypnotic" -- and BROLL_CLIP_TRIM_SEC keeps more of each source clip so
// the stretched sequence (3 * 7s = 21s raw -> ~35.7s once slowed) covers a
// full video's length without needing to loop back to clip 0 at all in the
// common case (MAX_TOTAL_DUR is 34s).
const BROLL_CLIP_TRIM_SEC = 7;
const BROLL_SLOW_STRETCH = 1.7;

// Only parsed/validated when run directly -- guarded so this file can also
// be require()'d for its helpers (ensureBrandCard, concatBrandCardAtClose)
// without needing dummy CLI args.
let rawVideoPath, scriptPath, lang, outLabel, reuseVoicePath, brollQuery, hookText;
if (require.main === module) {
  [rawVideoPath, scriptPath, lang, outLabel, reuseVoicePath, brollQuery, hookText] = process.argv.slice(2);
  if (reuseVoicePath === '-') reuseVoicePath = undefined;
  if (!rawVideoPath || !scriptPath || !lang || !outLabel) {
    console.error('Usage: node scripts/build-social-video.js <rawVideoPath> <scriptTextPath> <lang> <outLabel> [reuseVoicePath|-] [brollQuery] [hookText]');
    console.error('  reuseVoicePath: skip the ElevenLabs call and reuse an existing voice mp3 (script text unchanged, only the raw footage changed -- saves credits). Pass "-" to skip this but still pass brollQuery/hookText.');
    console.error('  brollQuery: Pexels video search string -- builds a split-screen (app top, silent b-roll loop bottom) instead of the single-frame format.');
    console.error('  hookText: short punchy line burned over brollQuery footage, shown full-frame and silent for HOOK_DUR seconds before the real content starts. Requires brollQuery.');
    process.exit(1);
  }
  if (!reuseVoicePath && !API_KEY) {
    console.error('Missing ELEVEN_API_KEY env var');
    process.exit(1);
  }
}

const WORKDIR = path.join(require('os').tmpdir(), 'gha-video-build');
if (!fs.existsSync(WORKDIR)) fs.mkdirSync(WORKDIR, { recursive: true });
const BROLL_DIR = path.join(WORKDIR, 'broll');
if (!fs.existsSync(BROLL_DIR)) fs.mkdirSync(BROLL_DIR, { recursive: true });
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

// The raw capture scrolls at one constant speed (a script-driven
// scrollTo(), not a human gesture) -- confirmed via user feedback
// 2026-08-24 that compressing that at one uniform multiplier reads as
// relentless/robotic, especially in the middle and final stretch. Real
// flick-scrolling has rhythm: a strong impulse, a slower coasting glide,
// another impulse. Splits the raw browsing range into fixed-length chunks
// and alternates a fast ("impulse") and slow ("glide") speed multiplier
// between them, rather than one constant speed. The multipliers are solved
// (via `scale` below) so the chunks' total compressed duration still lands
// on exactly `targetCompressedDur` -- the rhythm changes, not the overall
// pacing budget the rest of the pipeline (audio sync, MAX_TOTAL_DUR) relies
// on. Individual chunks CAN briefly exceed MAX_BROWSING_SPEEDUP during an
// impulse (that contrast against the slower glide is the point), clamped
// only at RHYTHM_MAX_MULT so it never turns to blur.
const RHYTHM_CHUNK_RAW = 2.0; // seconds of raw footage per impulse/glide chunk
const RHYTHM_PATTERN = [2.4, 0.65]; // relative impulse/glide weights, rescaled to hit the target duration exactly
const RHYTHM_MAX_MULT = 2.1; // lowered 2026-08-25 (was 3.5, then 2.5) -- explicit user request, scroll still read as too fast/relentless
const RHYTHM_MIN_MULT = 0.5;
function buildRhythmicBrowsingSegments(rawStart, rawEnd, targetCompressedDur, labelPrefix) {
  const chunks = [];
  for (let t = rawStart, i = 0; t < rawEnd; t += RHYTHM_CHUNK_RAW, i++) {
    const end = Math.min(rawEnd, t + RHYTHM_CHUNK_RAW);
    chunks.push({ start: t, end, dur: end - t, patternMult: RHYTHM_PATTERN[i % RHYTHM_PATTERN.length] });
  }
  const unscaledSum = chunks.reduce((a, c) => a + c.dur / c.patternMult, 0);
  const scale = targetCompressedDur > 0 ? unscaledSum / targetCompressedDur : 1;
  return chunks.map((c, i) => {
    const mult = Math.min(RHYTHM_MAX_MULT, Math.max(RHYTHM_MIN_MULT, c.patternMult * scale));
    return `[0:v]trim=${c.start}:${c.end},setpts=(PTS-STARTPTS)/${mult}[${labelPrefix}${i}]`;
  });
}

// Prepares the raw capture to roughly match targetDur: the "getting
// started" phase (typing the destination + the AI loading screen) gets
// sped up -- nobody needs to watch that in real time -- so the actual
// payoff (scrolling the finished itinerary) gets the lion's share of the
// budget and can stay fluid instead of racing to fit.
function prepRawVideo(rawPath, targetDur) {
  const metaPath = rawPath.replace(/\.webm$/, '.meta.json');
  const rawDur = getDuration(rawPath);
  let loadingStart = 0, loadingEnd = 0, contentReady = 0;
  if (fs.existsSync(metaPath)) {
    ({ loadingStart = 0, loadingEnd = 0, contentReady = 0 } = JSON.parse(fs.readFileSync(metaPath, 'utf8')));
  }
  const hasLoading = loadingEnd - loadingStart >= 2;
  // Pre-content: blank page-load sliver before the search form is even on
  // screen. Dropped ENTIRELY (not just compressed) -- confirmed 2026-08-19
  // that even a hard-capped 0.3s of it still read as a noticeable blank gap
  // right after the brand card's solid-color close, since both are visually
  // "nothing happening." There's nothing worth seeing in these frames
  // regardless, so the content segment now starts exactly at contentReady
  // with zero blank frames carried over.
  const hasPreContent = contentReady > 0.1 && contentReady < loadingStart;
  const introRawStart = hasPreContent ? contentReady : 0;
  const introDur = hasLoading ? loadingStart - introRawStart : 0;
  // Solve for whatever speedup is needed to hit the hard duration cap,
  // never going below the base multiplier (a short intro/loading doesn't
  // need to be sped up further just to "use up" the cap).
  const introSpeedup = introDur > 0 ? Math.max(INTRO_SPEEDUP, introDur / MAX_INTRO_DUR) : INTRO_SPEEDUP;
  const introCompressed = introDur / introSpeedup;
  const loadingRawDur = hasLoading ? loadingEnd - loadingStart : 0;
  const loadingSpeedup = loadingRawDur > 0 ? Math.max(LOADING_SPEEDUP, loadingRawDur / MAX_LOADING_DUR) : LOADING_SPEEDUP;
  const loadingCompressed = loadingRawDur / loadingSpeedup;
  const browsingStart = hasLoading ? loadingEnd : introRawStart;
  const browsingDur = Math.max(0.1, rawDur - browsingStart);
  const remainingBudget = Math.max(1, targetDur - introCompressed - loadingCompressed - 0.5);
  const browsingSpeed = Math.min(MAX_BROWSING_SPEEDUP, Math.max(1, browsingDur / remainingBudget));
  const browsingCompressed = browsingDur / browsingSpeed;
  const finalDur = introCompressed + loadingCompressed + browsingCompressed;

  console.log(`[${outLabel}]   intro=${introCompressed.toFixed(1)}s(${introSpeedup.toFixed(1)}x) loading=${loadingCompressed.toFixed(1)}s(${loadingSpeedup.toFixed(1)}x) browsing=${browsingCompressed.toFixed(1)}s(${browsingSpeed.toFixed(2)}x) -> ${finalDur.toFixed(1)}s`);

  const outPath = path.join(WORKDIR, `${outLabel}-detimed.mp4`);
  const segments = [];
  if (hasLoading) {
    segments.push(`[0:v]trim=${introRawStart}:${loadingStart},setpts=(PTS-STARTPTS)/${introSpeedup}[vintro]`);
    segments.push(`[0:v]trim=${loadingStart}:${loadingEnd},setpts=(PTS-STARTPTS)/${loadingSpeedup}[vload]`);
  }
  segments.push(...buildRhythmicBrowsingSegments(browsingStart, rawDur, browsingCompressed, 'vbrowse'));
  const labels = segments.map(s => s.match(/\[v\w+\]$/)[0]).join('');
  const n = segments.length;
  const filter = `${segments.join(';')};${labels}concat=n=${n}:v=1:a=0[vout]`;
  sh(['-y', '-i', rawPath, '-filter_complex', filter, '-map', '[vout]', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', outPath]);
  return { path: outPath, dur: finalDur };
}

// Short branded slate (logo on a solid navy card) reused at the open and
// close of every video -- cached to disk since it's identical across all
// runs/languages, so it's only rendered once per machine. Delete
// WORKDIR/brand-card.mp4 by hand if the logo art or card design changes.
async function ensureBrandCard() {
  const cardPath = path.join(WORKDIR, 'brand-card.mp4');
  if (fs.existsSync(cardPath)) return cardPath;
  console.log(`[${outLabel}]   Building brand card (first run, cached after this)...`);
  const logoSvg = fs.readFileSync(path.join(REPO_ROOT, 'public', 'logo.svg'));
  const logoPng = await sharp(logoSvg, { density: 300 }).resize({ width: 300 }).png().toBuffer();
  const { width: logoW, height: logoH } = await sharp(logoPng).metadata();
  const cardPngPath = path.join(WORKDIR, 'brand-card.png');
  await sharp({ create: { width: VIDEO_W, height: VIDEO_H, channels: 3, background: BRAND_BG } })
    .composite([{ input: logoPng, left: Math.round((VIDEO_W - logoW) / 2), top: Math.round((VIDEO_H - logoH) / 2) }])
    .png()
    .toFile(cardPngPath);
  sh([
    '-y', '-loop', '1', '-i', cardPngPath,
    '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo',
    '-t', String(BRAND_CARD_DUR),
    '-vf', `scale=${VIDEO_W}:${VIDEO_H},format=yuv420p`,
    '-c:v', 'libx264', '-crf', '18',
    '-c:a', 'aac', '-shortest',
    cardPath,
  ]);
  return cardPath;
}

// Re-encodes (rather than the concat demuxer's stream-copy) two clips end to
// end so mismatched source fps/audio params (a still-image card vs. a real
// screen-recording) splice together cleanly instead of risking a demuxer
// mismatch error. Shared by the brand-card-at-close splice and the
// hook-at-open splice below -- same mechanics, just which clip goes first.
function concatTwo(firstPath, secondPath, outPath) {
  const filter =
    `[0:v]scale=${VIDEO_W}:${VIDEO_H},setsar=1,fps=30[v0];[0:a]aformat=sample_rates=44100:channel_layouts=stereo[a0];` +
    `[1:v]scale=${VIDEO_W}:${VIDEO_H},setsar=1,fps=30[v1];[1:a]aformat=sample_rates=44100:channel_layouts=stereo[a1];` +
    `[v0][a0][v1][a1]concat=n=2:v=1:a=1[vout][aout]`;
  sh([
    '-y',
    '-i', firstPath, '-i', secondPath,
    '-filter_complex', filter,
    '-map', '[vout]', '-map', '[aout]',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '20',
    '-c:a', 'aac', '-b:a', '128k',
    outPath,
  ]);
}

// Concats [main][brandCard] into the final output -- brand card at the
// CLOSE ONLY. Previously ran at open+close too, but that put a static,
// silent 1.2s logo card in the very first frame of every video. Retention
// data confirmed this was killing videos outright: average watch time on
// the first 2 posts with this intro card was ~1.1s, matching the card's
// duration almost exactly -- viewers were swiping away before the card even
// finished, never reaching the actual hook. Fixed 2026-08-21.
function concatBrandCardAtClose(mainPath, brandCardPath, outPath) {
  concatTwo(mainPath, brandCardPath, outPath);
}

// Builds a silent, full-frame (not split) clip from the b-roll footage with
// a bold hookText line burned in over the last third of the frame -- the
// "cold open" shown before the real app-demo content. Escapes drawtext's
// special chars (: ' \ %) since hookText is free-form copy, not a constant.
function buildHookOpen(brollPath, text, dur) {
  const escaped = text
    .replace(/\\/g, '\\\\\\\\')
    .replace(/:/g, '\\:')
    .replace(/'/g, '’')
    .replace(/%/g, '\\%');
  const hookPath = path.join(WORKDIR, `${outLabel}-hook.mp4`);
  const vf =
    `setpts=(PTS-STARTPTS)*${BROLL_SLOW_STRETCH},scale=${VIDEO_W}:${VIDEO_H}:force_original_aspect_ratio=increase,crop=${VIDEO_W}:${VIDEO_H},fps=30,format=yuv420p,` +
    `drawtext=fontfile='${HOOK_FONT}':text='${escaped}':fontcolor=white:fontsize=34:borderw=3:bordercolor=black:` +
    `x=(w-text_w)/2:y=h*0.72:line_spacing=6`;
  sh([
    '-y', '-i', brollPath,
    '-f', 'lavfi', '-i', 'anullsrc=r=44100:cl=stereo',
    '-t', String(dur),
    '-vf', vf,
    '-map', '0:v', '-map', '1:a',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18',
    '-c:a', 'aac', '-shortest',
    hookPath,
  ]);
  return hookPath;
}

function slugifyQuery(q) {
  return q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function fetchJson(url, headers) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, res => {
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => { try { resolve(JSON.parse(data)); } catch (e) { reject(e); } });
    }).on('error', reject);
  });
}

function downloadFile(url, outPath) {
  return new Promise((resolve, reject) => {
    const doGet = (u, redirects = 0) => {
      https.get(u, res => {
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location && redirects < 5) {
          return doGet(res.headers.location, redirects + 1);
        }
        const file = fs.createWriteStream(outPath);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      }).on('error', reject);
    };
    doGet(url);
  });
}

// Silent, destination-relevant b-roll for the split-screen bottom half.
// Cached per query (WORKDIR/broll/<slug>.mp4) so an ES/EN pair of the same
// destination only hits the Pexels API and downloads once. Concatenates 3
// short clips (not 1) -- when this sequence later gets stream_loop'd to fill
// a longer video, looping 3 clips reads far less repetitive than looping a
// single one.
async function fetchBRollSequence(query) {
  const slug = slugifyQuery(query);
  const cachePath = path.join(BROLL_DIR, `${slug}.mp4`);
  if (fs.existsSync(cachePath)) return cachePath;
  console.log(`[${outLabel}]   Fetching b-roll for "${query}"...`);
  const data = await fetchJson(
    `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&orientation=portrait&per_page=3`,
    { Authorization: PEXELS_KEY }
  );
  if (!data.videos || !data.videos.length) throw new Error(`No Pexels video results for "${query}"`);
  const clipPaths = [];
  for (let i = 0; i < data.videos.length; i++) {
    const files = data.videos[i].video_files;
    const wideEnough = files.filter(f => f.width >= VIDEO_W).sort((a, b) => a.width - b.width);
    const file = wideEnough[0] || [...files].sort((a, b) => b.width - a.width)[0];
    const rawPath = path.join(BROLL_DIR, `${slug}-src${i}.mp4`);
    await downloadFile(file.link, rawPath);
    // Cover-crop to exactly VIDEO_W x VIDEO_H (Pexels portrait clips are
    // close to but not always exactly 9:16) so every clip in the sequence
    // shares identical params -- required for the concat demuxer below.
    const normPath = path.join(BROLL_DIR, `${slug}-norm${i}.mp4`);
    sh([
      '-y', '-i', rawPath, '-t', String(BROLL_CLIP_TRIM_SEC),
      '-vf', `scale=${VIDEO_W}:${VIDEO_H}:force_original_aspect_ratio=increase,crop=${VIDEO_W}:${VIDEO_H},fps=30,format=yuv420p`,
      '-an', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18',
      normPath,
    ]);
    clipPaths.push(normPath);
  }
  const listPath = path.join(BROLL_DIR, `${slug}-list.txt`);
  fs.writeFileSync(listPath, clipPaths.map(p => `file '${p.replace(/'/g, "'\\''")}'`).join('\n'));
  sh(['-y', '-f', 'concat', '-safe', '0', '-i', listPath, '-c', 'copy', cachePath]);
  return cachePath;
}

// Crops the (silent, already speed-ramped) app footage to its top half and
// the looped b-roll sequence to its bottom half, then stacks them into one
// silent 480x854 clip exactly finalDur long. Captions + voice get muxed on
// top of this in main() exactly like the single-frame path -- nothing else
// in the pipeline needs to know a split-screen was used.
function buildSplitScreen(topRawPath, topRawDur, brollPath, finalDur) {
  const halfH = VIDEO_H / 2;
  // A straight crop=W:halfH:0:0 on full-scale footage only shows the literal
  // top half of the 854-tall source at 1:1 -- confirmed via review
  // 2026-08-24 that this reads as way too zoomed in on both halves (content
  // that used to occupy half of a tall frame now fills the entire, much
  // shorter pane). Fix: squeeze each source down to PANEL_SCALE_H
  // (854*~0.75) before cropping -- shows ~67% of the original height in the
  // pane instead of 50%, at a mild ~25% vertical compression that still
  // reads fine (scrolling app footage / b-roll, not a static screenshot).
  // Applied to both halves, not just the app footage -- the b-roll got the
  // same "too zoomed" feedback on the first pilot.
  const PANEL_SCALE_H = Math.round(VIDEO_H * 0.75);
  const videoPad = Math.max(0, finalDur - topRawDur);
  const topPath = path.join(WORKDIR, `${outLabel}-top.mp4`);
  sh([
    '-y', '-i', topRawPath,
    '-vf', `tpad=stop_mode=clone:stop_duration=${videoPad},scale=${VIDEO_W}:${PANEL_SCALE_H},crop=${VIDEO_W}:${halfH}:0:0,fps=30,format=yuv420p`,
    '-t', String(finalDur),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18',
    topPath,
  ]);
  const bottomPath = path.join(WORKDIR, `${outLabel}-bottom.mp4`);
  // Bottom (b-roll) crop is CENTERED (crop=W:H with x/y omitted defaults to
  // centered in ffmpeg), not top-anchored like the app panel above --
  // confirmed via review 2026-08-24 that a top-anchored crop on skyline/
  // building b-roll mostly showed empty sky above the subject and cut off
  // the buildings themselves. The app panel stays top-anchored on purpose
  // (that's the header/nav, worth keeping in frame).
  sh([
    '-y', '-stream_loop', '-1', '-i', brollPath,
    '-vf', `setpts=(PTS-STARTPTS)*${BROLL_SLOW_STRETCH},scale=${VIDEO_W}:${PANEL_SCALE_H},crop=${VIDEO_W}:${halfH},fps=30,format=yuv420p`,
    '-t', String(finalDur), '-an',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18',
    bottomPath,
  ]);
  const combinedPath = path.join(WORKDIR, `${outLabel}-split.mp4`);
  sh([
    '-y', '-i', topPath, '-i', bottomPath,
    '-filter_complex', '[0:v][1:v]vstack=inputs=2[vout]',
    '-map', '[vout]',
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18',
    combinedPath,
  ]);
  return combinedPath;
}

async function main() {
  const text = fs.readFileSync(scriptPath, 'utf8').trim();
  let sourceVoicePath;
  if (reuseVoicePath) {
    console.log(`[${outLabel}] 1/5 Reusing existing voice (no ElevenLabs call): ${reuseVoicePath}`);
    if (!fs.existsSync(reuseVoicePath)) throw new Error(`reuseVoicePath not found: ${reuseVoicePath}`);
    sourceVoicePath = reuseVoicePath;
  } else {
    console.log(`[${outLabel}] 1/5 Generating voiceover (${lang}) via ElevenLabs...`);
    sourceVoicePath = path.join(WORKDIR, `${outLabel}-voice.mp3`);
    await generateVoice(text, sourceVoicePath);
  }
  const voicePath = trimVoiceTail(sourceVoicePath);
  const audioDur = getDuration(voicePath);
  if (!audioDur) throw new Error('Could not read audio duration');

  const targetDur = Math.min(MAX_TOTAL_DUR, audioDur + END_BUFFER);
  console.log(`[${outLabel}] 2/5 audio=${audioDur.toFixed(1)}s target_total=${targetDur.toFixed(1)}s`);

  console.log(`[${outLabel}] 3/5 Prepping raw footage (loading speed-up + capped browsing speed-up)...`);
  const prepped = prepRawVideo(rawVideoPath, targetDur);

  let videoForMux = prepped.path;
  if (brollQuery) {
    console.log(`[${outLabel}] 3b/5 Building split-screen (b-roll: "${brollQuery}")...`);
    const brollPath = await fetchBRollSequence(brollQuery);
    videoForMux = buildSplitScreen(prepped.path, prepped.dur, brollPath, targetDur);
  }

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

  console.log(`[${outLabel}] 5/6 Rendering captioned video with ffmpeg...`);
  const mainPath = path.join(WORKDIR, `${outLabel}-main.mp4`);
  const srtRel = `${outLabel}.srt`;
  // BackColour + BorderStyle=3 draws a solid readable box behind the text
  // (BorderStyle=1 outline-only rendered oversized/unreadable before --
  // fixed here via original_size, which was the real bug: libass defaults
  // to a 384x288 script resolution when the input is a plain .srt and
  // scales the font up to match the real video size).
  // White fill + black outline (no background box) -- the semi-transparent
  // box (BorderStyle=3) still lost contrast against bright/white app
  // backgrounds; a per-glyph outline (BorderStyle=1) stays legible
  // regardless of what's behind it. Confirmed by user feedback 2026-08-19.
  const style = "FontName=Arial,FontSize=11,Bold=1,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BorderStyle=1,Outline=1.4,Shadow=0,Alignment=2,MarginV=25,MarginL=20,MarginR=20";
  // finalDur is always audioDur-driven (the narration is the thing that
  // must play in full) -- NOT capped by the prepped video's own length.
  // A real bug lived here: capping finalDur at prepped.dur assumed the
  // video is always >= the audio, which held for full-page destination
  // scrolls but broke for short targeted feature clips (confirmed
  // 2026-08-19: a 23.7s voiceover got hard-cut to 15.8s because the prepped
  // footage was only 15.8s). If the video is shorter, pad it (tpad, hold
  // last frame) instead of truncating the audio. If it's longer (browsing
  // speed-up hit its cap), trim it via `-t` below instead of dragging the
  // tail out in silence.
  const finalDur = targetDur;
  // videoForMux (the split-screen clip) is already built to exactly
  // finalDur -- padding it again here would double-pad. Only the
  // single-frame path (prepped.path, arbitrary length) needs this tpad.
  const videoPad = brollQuery ? 0 : Math.max(0, finalDur - prepped.dur);
  const audioPad = Math.max(0, finalDur - audioDur);
  sh([
    '-y',
    '-i', videoForMux,
    '-i', voicePath,
    '-filter_complex',
    `[0:v]tpad=stop_mode=clone:stop_duration=${videoPad},subtitles=${srtRel}:original_size=${VIDEO_W}x${VIDEO_H}:force_style='${style}'[v];` +
    `[1:a]apad=pad_dur=${audioPad}[a]`,
    '-map', '[v]', '-map', '[a]',
    '-t', String(finalDur),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '20',
    '-c:a', 'aac', '-b:a', '128k',
    mainPath,
  ]);

  let videoWithHook = mainPath;
  let hookAddedDur = 0;
  if (brollQuery && hookText) {
    console.log(`[${outLabel}] 5b/6 Building opening hook ("${hookText}")...`);
    const brollPath = await fetchBRollSequence(brollQuery); // already cached from the split-screen step above
    const hookPath = buildHookOpen(brollPath, hookText, HOOK_DUR);
    videoWithHook = path.join(WORKDIR, `${outLabel}-hooked.mp4`);
    concatTwo(hookPath, mainPath, videoWithHook);
    hookAddedDur = HOOK_DUR;
  }

  console.log(`[${outLabel}] 6/6 Adding brand card at close...`);
  const brandCardPath = await ensureBrandCard();
  const outPath = path.join(OUT_DIR, `${outLabel}.mp4`);
  concatBrandCardAtClose(videoWithHook, brandCardPath, outPath);

  console.log(`[${outLabel}] Done: ${outPath} (~${(finalDur + hookAddedDur + BRAND_CARD_DUR).toFixed(1)}s incl. hook + brand card)`);
}

module.exports = { ensureBrandCard, concatBrandCardAtClose, concatTwo, buildHookOpen, fetchBRollSequence, buildSplitScreen, WORKDIR, OUT_DIR, VIDEO_W, VIDEO_H, REPO_ROOT, BRAND_CARD_DUR, HOOK_DUR };

if (require.main === module) {
  main().catch(e => { console.error(`[${outLabel}] FAILED:`, e.message); process.exitCode = 1; });
}
