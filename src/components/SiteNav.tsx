import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Planificador" },
  { href: "/blog", label: "Blog de viajes" },
  { href: "/destino/paris", label: "Destinos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
];

export function SiteNav() {
  return (
    <header style={{
      background: "rgba(6,12,44,0.97)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "0 20px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 200,
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        height: "52px",
        gap: "4px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", marginRight: "16px", flexShrink: 0 }}>
          <img src="/logo.svg" alt="Global Home Assist" style={{ height: "22px", width: "auto" }} />
        </Link>

        <nav style={{ display: "flex", gap: "2px", alignItems: "center", flex: 1 }}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
            }}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/" style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          Crear itinerario →
        </Link>
      </div>
    </header>
  );
}
