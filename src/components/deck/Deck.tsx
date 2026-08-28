"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ScaledStage } from "./ScaledStage";
import type { ReactNode } from "react";

export function Deck({ slides, initialIndex = 0 }: { slides: ReactNode[]; initialIndex?: number }) {
  const total = slides.length;
  const [index, setIndex] = useState(initialIndex);
  // Avoid rewriting the URL for the index we were mounted with.
  const lastPushed = useRef(initialIndex);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(total - 1, next)));
    },
    [total],
  );

  useEffect(() => {
    if (index === lastPushed.current) return;
    lastPushed.current = index;
    // Update the URL via the History API directly rather than next/navigation's
    // router: pushing a new dynamic-route segment there remounts this whole
    // tree (canvas re-inits, CSS re-triggers), producing a visible flicker on
    // every slide change. A plain pushState just moves the address bar.
    window.history.pushState(null, "", `/${index + 1}`);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(index + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, go, total]);

  return (
    <div className="fixed inset-0 bg-[#1a1d21]">
      <ScaledStage>{slides[index]}</ScaledStage>

      {/* Click zones for advancing/going back without hunting for arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute top-0 left-0 h-full w-[8%] cursor-w-resize"
      />
      <button
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute top-0 right-0 h-full w-[8%] cursor-e-resize"
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
        <button
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          className="text-white/70 hover:text-white disabled:opacity-30"
        >
          ‹
        </button>
        <span className="tabular text-[11px] text-white/70">
          {index + 1} / {total}
        </span>
        <button
          aria-label="Next slide"
          onClick={() => go(index + 1)}
          disabled={index === total - 1}
          className="text-white/70 hover:text-white disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </div>
  );
}
