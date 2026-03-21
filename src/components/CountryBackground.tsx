"use client";

import { useEffect, useRef } from "react";

interface Props {
  country: string;
  active: boolean;
}

export default function CountryBackground({ country: _country, active: _active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const imgRef = useRef<HTMLImageElement | null>(null);

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

    img.onload = () => { rafRef.current = requestAnimationFrame(draw); };
    if (img.complete) { rafRef.current = requestAnimationFrame(draw); }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}
