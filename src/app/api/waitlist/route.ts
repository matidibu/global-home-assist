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
    const { email, days, destination } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 });
    }

    // Log (visible in Vercel Functions logs under vercel.com → project → logs)
    console.log(`[WAITLIST] ${new Date().toISOString()} | ${email} | ${days} días | ${destination}`);

    // ─────────────────────────────────────────────────────────────
    // ACTIVAR CUANDO TENGAS LEMONSQUEEZY (descomentá y completá):
    // ─────────────────────────────────────────────────────────────
    // const LS_API_KEY = process.env.LEMONSQUEEZY_API_KEY;
    // if (LS_API_KEY) {
    //   await fetch("https://api.lemonsqueezy.com/v1/customers", {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${LS_API_KEY}`,
    //       "Content-Type": "application/vnd.api+json",
    //     },
    //     body: JSON.stringify({
    //       data: {
    //         type: "customers",
    //         attributes: { email, name: destination },
    //       }
    //     }),
    //   });
    // }
    // ─────────────────────────────────────────────────────────────

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[WAITLIST ERROR]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
