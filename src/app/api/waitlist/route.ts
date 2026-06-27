import { NextRequest, NextResponse } from "next/server";

// TODO: When ready to go live with payments, connect this to one of:
//   - LemonSqueezy (recommended — ya tenés cuenta): store email + trigger
//     checkout link via LemonSqueezy API
//   - Resend (resend.com — free 3k/month): send email notification to owner
//   - Vercel KV: persist waitlist in key-value store
//
// For now: logs the signup and returns success so the UI flow works end-to-end.

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: "JSON inválido en request" }, { status: 400 });
    }

    const { email, days, destination } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    console.log(`[WAITLIST] ${new Date().toISOString()} | ${email} | ${days} días | ${destination}`);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Error desconocido";
    console.error("[WAITLIST ERROR]", errorMsg);
    return NextResponse.json({ error: "No se pudo procesar tu solicitud. Intenta de nuevo más tarde." }, { status: 500 });
  }
}
