"use client";

import { useEffect, useRef } from "react";

/**
 * Hero visual ported from skweb2026's home page: a slowly rotating,
 * shape-shifting triangle whose three vertices are the platform's pillars.
 * The triangle morphs (each vertex breathes on its own phase) and rotates on
 * a canvas; the three labels are DOM chips repositioned every frame so their
 * text stays upright as the vertices orbit.
 *
 * Honours prefers-reduced-motion (renders a single static frame, no rAF).
 */

const NODES = ["Real-time Insight", "Specialist Alt Data", "On-Demand Access"];
const TEAL = "#24a9a7";
const GREEN = "#4db364";
const SIZE = 460; // logical px (canvas is DPR-scaled)

export function HeroTriangle() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = SIZE * dpr;
    canvas.height = SIZE * dpr;
    ctx.scale(dpr, dpr);

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const R = 132;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const verts = (t: number) => {
      const spin = reduce ? -Math.PI / 2 : t * 0.00013 - Math.PI / 2;
      return NODES.map((_, i) => {
        const base = spin + (i * 2 * Math.PI) / 3;
        const wobble = reduce ? 0 : Math.sin(t * 0.0009 + i * 2.1) * 18;
        const r = R + wobble;
        return { x: cx + r * Math.cos(base), y: cy + r * Math.sin(base) };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      const p = verts(t);

      const halo = ctx.createRadialGradient(cx, cy, 10, cx, cy, R + 60);
      halo.addColorStop(0, "rgba(36,169,167,0.10)");
      halo.addColorStop(1, "rgba(77,179,100,0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 60, 0, Math.PI * 2);
      ctx.fill();

      const fill = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      fill.addColorStop(0, "rgba(36,169,167,0.13)");
      fill.addColorStop(1, "rgba(77,179,100,0.13)");
      ctx.beginPath();
      ctx.moveTo(p[0].x, p[0].y);
      ctx.lineTo(p[1].x, p[1].y);
      ctx.lineTo(p[2].x, p[2].y);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();

      const stroke = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      stroke.addColorStop(0, TEAL);
      stroke.addColorStop(1, GREEN);
      ctx.strokeStyle = stroke;
      ctx.lineWidth = 1.75;
      ctx.lineJoin = "round";
      ctx.stroke();

      ctx.strokeStyle = "rgba(36,169,167,0.18)";
      ctx.lineWidth = 1;
      for (const v of p) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(36,169,167,0.5)";
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      p.forEach((v, i) => {
        const accent = i === NODES.length - 1 ? GREEN : TEAL;
        ctx.fillStyle = i === NODES.length - 1 ? "rgba(77,179,100,0.16)" : "rgba(36,169,167,0.16)";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.save();
        ctx.shadowColor = accent;
        ctx.shadowBlur = 20;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 9.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(v.x, v.y, 5.4, 0, Math.PI * 2);
        ctx.fill();
      });

      p.forEach((v, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const ox = (v.x - cx) * 0.16;
        const oy = (v.y - cy) * 0.16;
        el.style.transform = `translate(-50%, -50%) translate(${v.x + ox}px, ${v.y + oy - 26}px)`;
      });
    };

    if (reduce) {
      draw(0);
      return;
    }
    let raf = 0;
    const loop = (t: number) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative mx-auto" style={{ width: SIZE, height: SIZE, maxWidth: "100%" }} aria-hidden>
      <canvas ref={canvasRef} style={{ width: SIZE, height: SIZE, maxWidth: "100%" }} />
      {NODES.map((label, i) => (
        <div
          key={label}
          ref={(el) => {
            labelRefs.current[i] = el;
          }}
          className="pointer-events-none absolute top-0 left-0 whitespace-nowrap rounded-full border border-[rgba(36,169,167,0.35)] bg-white/90 px-2.5 py-1 text-[11.5px] font-semibold text-[var(--accent-deep)] shadow-sm backdrop-blur-sm will-change-transform"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
