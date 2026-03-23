"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { LayoutGrid, MapPin, BookOpen, Wallet, Lightbulb, Cpu } from "lucide-react";

const categories = [
  { key: "todos", label: "Todos", icon: <LayoutGrid size={13} strokeWidth={2} /> },
  { key: "destinos", label: "Destinos", icon: <MapPin size={13} strokeWidth={2} /> },
  { key: "guias", label: "Guías", icon: <BookOpen size={13} strokeWidth={2} /> },
  { key: "presupuesto", label: "Presupuesto", icon: <Wallet size={13} strokeWidth={2} /> },
  { key: "consejos", label: "Consejos", icon: <Lightbulb size={13} strokeWidth={2} /> },
  { key: "tecnologia", label: "Tecnología", icon: <Cpu size={13} strokeWidth={2} /> },
];

export function BlogCategoryFilter({ active }: { active: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleClick(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (key === "todos") {
      params.delete("categoria");
    } else {
      params.set("categoria", key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "40px" }}>
      {categories.map((cat) => {
        const isActive = cat.key === active || (cat.key === "todos" && active === "todos");
        return (
          <button
            key={cat.key}
            onClick={() => handleClick(cat.key)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 16px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 600,
              background: isActive ? "rgba(42,181,160,0.2)" : "rgba(255,255,255,0.07)",
              border: `1px solid ${isActive ? "rgba(42,181,160,0.5)" : "rgba(255,255,255,0.12)"}`,
              color: isActive ? "#2ab5a0" : "rgba(255,255,255,0.65)",
              cursor: "pointer",
              transition: "all 0.15s ease",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {cat.icon}
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
