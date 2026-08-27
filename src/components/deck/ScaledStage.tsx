"use client";

import { useEffect, useRef, useState } from "react";

const SLIDE_W = 1280;
const SLIDE_H = 720;

/**
 * Renders a fixed 1280x720 design-size stage, scaled via CSS transform to
 * fit whatever viewport it's shown in — the classic PowerPoint-style
 * letterboxed slide, so every slide's layout is pixel-exact regardless of
 * window size.
 */
export function ScaledStage({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const resize = () => {
      const { clientWidth, clientHeight } = el;
      setScale(Math.min(clientWidth / SLIDE_W, clientHeight / SLIDE_H));
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative flex h-full w-full items-center justify-center"
    >
      <div
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          transform: `scale(${scale})`,
        }}
        className="flex-none origin-center shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]"
      >
        {children}
      </div>
    </div>
  );
}
