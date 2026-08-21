"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { LayoutGrid, MapPin, BookOpen, Wallet, Lightbulb, Cpu } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const LABELS: Record<string, Record<string, string>> = {
  es: { todos: "Todos", destinos: "Destinos", guias: "Guías", presupuesto: "Presupuesto", consejos: "Consejos", tecnologia: "Tecnología" },
  en: { todos: "All", destinos: "Destinations", guias: "Guides", presupuesto: "Budget", consejos: "Tips", tecnologia: "Technology" },
  fr: { todos: "Tout", destinos: "Destinations", guias: "Guides", presupuesto: "Budget", consejos: "Conseils", tecnologia: "Technologie" },
  it: { todos: "Tutti", destinos: "Destinazioni", guias: "Guide", presupuesto: "Budget", consejos: "Consigli", tecnologia: "Tecnologia" },
  de: { todos: "Alle", destinos: "Reiseziele", guias: "Guides", presupuesto: "Budget", consejos: "Tipps", tecnologia: "Technologie" },
  pt: { todos: "Todos", destinos: "Destinos", guias: "Guias", presupuesto: "Orçamento", consejos: "Dicas", tecnologia: "Tecnologia" },
};

const CATEGORY_KEYS = ["todos", "destinos", "guias", "presupuesto", "consejos", "tecnologia"] as const;
const ICONS: Record<string, React.ReactNode> = {
  todos: <LayoutGrid size={13} strokeWidth={2} />,
  destinos: <MapPin size={13} strokeWidth={2} />,
  guias: <BookOpen size={13} strokeWidth={2} />,
  presupuesto: <Wallet size={13} strokeWidth={2} />,
  consejos: <Lightbulb size={13} strokeWidth={2} />,
  tecnologia: <Cpu size={13} strokeWidth={2} />,
};

export function BlogCategoryFilter({ active }: { active: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [language] = useAutoLanguage();
  const labels = LABELS[language] || LABELS.es;
  const categories = CATEGORY_KEYS.map(key => ({ key, label: labels[key], icon: ICONS[key] }));

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
