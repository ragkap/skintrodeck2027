"use client";

import { useEffect, useRef } from "react";

/**
 * Go-to-market flywheel, drawn in the same visual language as the cover's
 * HeroTriangle: a canvas node-diagram (soft halo, gradient-stroked
 * connectors, glowing node dots) with DOM label chips repositioned each
 * frame. Unlike the hero triangle, node positions are fixed (steps have a
 * strict 1->2->3 order) — curved connectors with arrowheads carry the
 * flow motion instead, and a small spinning Smartkarma mark sits at the hub.
 */

const STEPS = ["Direct Sales", "Platform Upsell", "Channel Partners"];
const ANGLES = [180, 0, 90]; // degrees; left, right, bottom
const ACCENT = "#4db364";
const ACCENT_DEEP = "#24a9a7";
const SIZE = 320;

export function Flywheel() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = SIZE / 2;
    const cy = SIZE / 2;
    const R = 108;
    const rad = (deg: number) => (deg * Math.PI) / 180;
    const pt = (r: number, deg: number) => ({
      x: cx + r * Math.cos(rad(deg)),
      y: cy + r * Math.sin(rad(deg)),
    });
    const nodes = ANGLES.map((a) => pt(R, a));
    const nodeColor = (i: number) => (i === 1 ? ACCENT : ACCENT_DEEP);

    const draw = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      const halo = ctx.createRadialGradient(cx, cy, 10, cx, cy, R + 55);
      halo.addColorStop(0, "rgba(58,154,83,0.10)");
      halo.addColorStop(1, "rgba(77,179,100,0)");
      ctx.fillStyle = halo;
      ctx.beginPath();
      ctx.arc(cx, cy, R + 55, 0, Math.PI * 2);
      ctx.fill();

      const fill = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      fill.addColorStop(0, "rgba(58,154,83,0.1)");
      fill.addColorStop(1, "rgba(77,179,100,0.1)");
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      ctx.lineTo(nodes[1].x, nodes[1].y);
      ctx.lineTo(nodes[2].x, nodes[2].y);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();

      ctx.strokeStyle = "rgba(58,154,83,0.18)";
      ctx.lineWidth = 1;
      for (const v of nodes) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();
      }

      const NODE_GAP = 13;
      const ARROW_GAP = 15;
      const strokeGrad = ctx.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
      strokeGrad.addColorStop(0, ACCENT_DEEP);
      strokeGrad.addColorStop(1, ACCENT);

      ANGLES.forEach((a, i) => {
        const next = ANGLES[(i + 1) % ANGLES.length];
        const start = a + NODE_GAP;
        const end = (i === ANGLES.length - 1 ? next + 360 : next) - ARROW_GAP;

        ctx.beginPath();
        ctx.arc(cx, cy, R, rad(start), rad(end));
        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = 2.25;
        ctx.lineCap = "round";
        ctx.stroke();

        const tip = pt(R, end);
        const tangentAngle = rad(end + 90);
        ctx.save();
        ctx.translate(tip.x, tip.y);
        ctx.rotate(tangentAngle);
        ctx.beginPath();
        ctx.moveTo(0, -7);
        ctx.lineTo(5.5, 5);
        ctx.lineTo(-5.5, 5);
        ctx.closePath();
        ctx.fillStyle = ACCENT_DEEP;
        ctx.fill();
        ctx.restore();
      });

      ctx.fillStyle = "rgba(58,154,83,0.5)";
      ctx.beginPath();
      ctx.arc(cx, cy, 3, 0, Math.PI * 2);
      ctx.fill();

      nodes.forEach((v, i) => {
        const accent = nodeColor(i);
        ctx.fillStyle = i === 1 ? "rgba(77,179,100,0.16)" : "rgba(58,154,83,0.16)";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 17, 0, Math.PI * 2);
        ctx.fill();
        ctx.save();
        ctx.shadowColor = accent;
        ctx.shadowBlur = 18;
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(v.x, v.y, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        ctx.fillStyle = accent;
        ctx.font = "700 11px var(--font-roboto), system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(i + 1), v.x, v.y + 0.5);
      });

      ANGLES.forEach((a, i) => {
        const el = labelRefs.current[i];
        if (!el) return;
        const lp = pt(R + 4, a);
        el.style.transform = `translate(-50%, -50%) translate(${lp.x}px, ${lp.y}px)`;
      });
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const renderedScale = rect.width > 0 ? rect.width / SIZE : 1;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const scaleFactor = Math.min(renderedScale * dpr, 3);
      canvas.width = Math.round(SIZE * scaleFactor);
      canvas.height = Math.round(SIZE * scaleFactor);
      ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
      draw();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="relative mx-auto"
      style={{ width: SIZE, height: SIZE, maxWidth: "100%", transform: "translateY(-18px)" }}
      aria-hidden
    >
      <canvas ref={canvasRef} style={{ width: SIZE, height: SIZE, maxWidth: "100%" }} />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logos/smartkarma-icon-brand.jpg"
          alt=""
          className="spin-slow h-full w-full object-cover"
          style={{ transform: "scale(0.82)" }}
        />
      </div>

      {STEPS.map((label, i) => (
        <div
          key={label}
          ref={(el) => {
            labelRefs.current[i] = el;
          }}
          className="pointer-events-none absolute top-0 left-0 whitespace-nowrap rounded-full border border-[rgba(58,154,83,0.35)] bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[var(--accent-deep)] shadow-sm backdrop-blur-sm will-change-transform"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
