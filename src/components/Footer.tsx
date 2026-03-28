"use client";

const SOCIAL = [
  {
    name: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || null,
  },
  {
    name: "TikTok",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z"/>
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_TIKTOK_URL || null,
  },
  {
    name: "Pinterest",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_PINTEREST_URL || null,
  },
  {
    name: "YouTube",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    url: process.env.NEXT_PUBLIC_YOUTUBE_URL || null,
  },
];

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hola@globalhomeassist.com";

export function Footer() {
  const activeSocials = SOCIAL.filter(s => s.url);

  return (
    <footer style={{
      background: "rgba(6,12,44,0.97)",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "48px 24px 28px",
      marginTop: "60px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* Top row: logo + tagline + social */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "flex-start", marginBottom: "36px" }}>

          {/* Brand */}
          <div style={{ flex: 1, minWidth: "240px" }}>
            <img src="/logo.svg" alt="Global Home Assist" style={{ width: "160px", height: "auto", marginBottom: "12px", filter: "drop-shadow(0 2px 10px rgba(42,181,160,0.25))" }} />
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: "320px", margin: 0 }}>
              Planificador de viajes con inteligencia artificial. Itinerarios personalizados, fotos reales y todo lo que necesitás para viajar mejor.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: "48px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
                Producto
              </p>
              {[
                { label: "Generá tu itinerario", href: "/" },
                { label: "Revista de viajes", href: "/blog" },
                { label: "Destinos", href: "/destino/paris" },
                { label: "Términos y condiciones", href: "/terminos" },
              ].map(({ label, href }) => (
                <a key={href} href={href} style={{ display: "block", fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "none", marginBottom: "8px", transition: "color 0.15s" }}>
                  {label}
                </a>
              ))}
            </div>

            <div>
              <p style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
                Contacto
              </p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#2ab5a0", textDecoration: "none", marginBottom: "8px", fontWeight: 600 }}>
                ✉️ {CONTACT_EMAIL}
              </a>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.6 }}>
                Respondemos en menos de 24 hs.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "20px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © {new Date().getFullYear()} Global Home Assist. Todos los derechos reservados.
          </p>

          {/* Social icons */}
          {activeSocials.length > 0 && (
            <div style={{ display: "flex", gap: "10px" }}>
              {activeSocials.map(s => (
                <a key={s.name} href={s.url!} target="_blank" rel="noopener noreferrer" aria-label={s.name} style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "36px", height: "36px", borderRadius: "10px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.65)",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}>
                  {s.icon}
                </a>
              ))}
            </div>
          )}

          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: 0 }}>
            Hecho con IA · Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
