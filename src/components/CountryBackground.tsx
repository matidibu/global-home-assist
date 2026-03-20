"use client";

import { useEffect, useRef } from "react";

const countryColors: Record<string, [string, string, string]> = {
  "france": ["#002395", "#FFFFFF", "#ED2939"],
  "spain": ["#AA151B", "#F1BF00", "#AA151B"],
  "italy": ["#009246", "#FFFFFF", "#CE2B37"],
  "germany": ["#000000", "#DD0000", "#FFCE00"],
  "portugal": ["#006600", "#FF0000", "#FFD700"],
  "greece": ["#0D5EAF", "#FFFFFF", "#0D5EAF"],
  "netherlands": ["#AE1C28", "#FFFFFF", "#21468B"],
  "switzerland": ["#FF0000", "#FFFFFF", "#FF0000"],
  "austria": ["#ED2939", "#FFFFFF", "#ED2939"],
  "belgium": ["#000000", "#FAE042", "#EF3340"],
  "sweden": ["#006AA7", "#FECC02", "#006AA7"],
  "norway": ["#EF2B2D", "#FFFFFF", "#002868"],
  "denmark": ["#C60C30", "#FFFFFF", "#C60C30"],
  "finland": ["#FFFFFF", "#003580", "#FFFFFF"],
  "poland": ["#FFFFFF", "#DC143C", "#FFFFFF"],
  "czech republic": ["#D7141A", "#FFFFFF", "#11457E"],
  "hungary": ["#CE2939", "#FFFFFF", "#477050"],
  "croatia": ["#FF0000", "#FFFFFF", "#0000FF"],
  "turkey": ["#E30A17", "#FFFFFF", "#E30A17"],
  "united kingdom": ["#012169", "#FFFFFF", "#C8102E"],
  "ireland": ["#169B62", "#FFFFFF", "#FF883E"],
  "united states": ["#B22234", "#FFFFFF", "#3C3B6E"],
  "canada": ["#FF0000", "#FFFFFF", "#FF0000"],
  "mexico": ["#006847", "#FFFFFF", "#CE1126"],
  "brazil": ["#009C3B", "#FFDF00", "#002776"],
  "argentina": ["#74ACDF", "#FFFFFF", "#74ACDF"],
  "colombia": ["#FCD116", "#003087", "#CE1126"],
  "peru": ["#D91023", "#FFFFFF", "#D91023"],
  "chile": ["#D52B1E", "#FFFFFF", "#003087"],
  "cuba": ["#002A8F", "#FFFFFF", "#CF142B"],
  "dominican republic": ["#002D62", "#FFFFFF", "#CF142B"],
  "japan": ["#FFFFFF", "#BC002D", "#FFFFFF"],
  "china": ["#DE2910", "#FFDE00", "#DE2910"],
  "thailand": ["#A51931", "#FFFFFF", "#2D2A4A"],
  "indonesia": ["#CE1126", "#FFFFFF", "#CE1126"],
  "india": ["#FF9933", "#FFFFFF", "#138808"],
  "vietnam": ["#DA251D", "#FFFF00", "#DA251D"],
  "cambodia": ["#032EA1", "#E00025", "#032EA1"],
  "malaysia": ["#CC0001", "#FFFFFF", "#CC0001"],
  "singapore": ["#EF3340", "#FFFFFF", "#EF3340"],
  "philippines": ["#0038A8", "#CE1126", "#FFFFFF"],
  "south korea": ["#FFFFFF", "#CD2E3A", "#0047A0"],
  "united arab emirates": ["#00732F", "#FFFFFF", "#FF0000"],
  "australia": ["#00008B", "#FFFFFF", "#FF0000"],
  "new zealand": ["#00247D", "#FFFFFF", "#CC142B"],
  "palau": ["#4AADD6", "#FFDE00", "#4AADD6"],
  "morocco": ["#C1272D", "#006233", "#C1272D"],
  "egypt": ["#CE1126", "#FFFFFF", "#000000"],
  "south africa": ["#007A4D", "#FFB81C", "#DE3831"],
  "kenya": ["#006600", "#FFFFFF", "#BB0000"],
  "tanzania": ["#1EB53A", "#FCD116", "#00A3DD"],
  "maldives": ["#D21034", "#FFFFFF", "#007E3A"],
  "jamaica": ["#000000", "#FED100", "#007749"],
};

function getColors(country: string): [string, string, string] {
  const key = country.toLowerCase();
  for (const [k, v] of Object.entries(countryColors)) {
    if (key.includes(k) || k.includes(key)) return v;
  }
  return ["#1a6eb5", "#FFFFFF", "#87CEEB"];
}

interface Props {
  country: string;
  active: boolean;
}

export default function CountryBackground({ country, active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [c1, c2, c3] = active ? getColors(country) : ["#1565c0", "#FFFFFF", "#87CEEB"];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const img = new window.Image();
    img.src = "/sky.jpg";
    imgRef.current = img;

    const SPEED = 0.4;

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      if (!imgRef.current?.complete || imgRef.current.naturalWidth === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const iw = imgRef.current.naturalWidth;
      const ih = imgRef.current.naturalHeight;

      const scale = h / ih;
      const sw = iw * scale;
      const sh = h;

      offsetRef.current = (offsetRef.current + SPEED) % sw;
      const x = -offsetRef.current;

      ctx.clearRect(0, 0, w, h);

      let pos = x;
      let mirror = false;

      while (pos < w) {
        ctx.save();
        if (mirror) {
          ctx.translate(pos + sw, 0);
          ctx.scale(-1, 1);
          ctx.drawImage(imgRef.current, 0, 0, sw, sh);
        } else {
          ctx.drawImage(imgRef.current, pos, 0, sw, sh);
        }
        ctx.restore();
        pos += sw;
        mirror = !mirror;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    img.onload = () => {
      rafRef.current = requestAnimationFrame(draw);
    };

    if (img.complete) {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {active && (
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          transition: "opacity 1.5s ease",
          display: "flex",
          flexDirection: "column",
          pointerEvents: "none",
        }}>
          <div style={{ flex: 1, background: c1 }} />
          <div style={{ flex: 1, background: c2 === "#FFFFFF" ? "#e0e0e0" : c2 }} />
          <div style={{ flex: 1, background: c3 }} />
        </div>
      )}

      {active && (
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          display: "flex",
          opacity: 0.9,
          pointerEvents: "none",
        }}>
          <div style={{ flex: 1, background: c1 }} />
          <div style={{ flex: 1, background: c2 === "#FFFFFF" ? "#ddd" : c2 }} />
          <div style={{ flex: 1, background: c3 }} />
        </div>
      )}
    </div>
  );
}