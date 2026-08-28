import { Slide } from "../deck/Slide";
import { Mark } from "../deck/ui";

const POINTS = [
  {
    t: "Explosion of real-time & specialist data:",
    d: (
      <>
        high-frequency, alternative, and unstructured data volumes now{" "}
        <Mark>far exceed the capacity of manual research</Mark>.
      </>
    ),
  },
  {
    t: "AI becoming core to investment workflows:",
    d: (
      <>
        automating research, extracting signals, and accelerating insight —{" "}
        <Mark>making speed a decisive edge</Mark>.
      </>
    ),
  },
  {
    t: "Increasing market complexity:",
    d: (
      <>
        cross-asset dynamics, index events, and special situations require{" "}
        <Mark>instant, expert interpretation</Mark>.
      </>
    ),
  },
  {
    t: "Need for operational leverage:",
    d: (
      <>
        institutions must <Mark>scale insight, not headcount</Mark> — driving adoption
        of AI-native intelligence platforms.
      </>
    ),
  },
  {
    t: "Fragmented global markets:",
    d: (
      <>
        liquidity dispersion and multi-venue trading demand{" "}
        <Mark>integrated, real-time intelligence</Mark> across asset classes and
        geographies.
      </>
    ),
  },
];

export function S14_WhyNow({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Why Now?"
      subtitle="Winners will be those that move fastest, with insight and AI"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col justify-center gap-5">
          {POINTS.map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1.5 h-[6px] w-[6px] flex-none rounded-full bg-[var(--accent)]" />
              <span className="text-[13.5px] leading-snug text-[var(--body)]">
                <span className="font-semibold text-[var(--ink)]">{p.t}</span> {p.d}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="relative flex flex-col justify-center pl-10"
          style={{ transform: "translateY(-17px)" }}
        >
          <div
            className="bar-grow absolute top-0 -left-[2px] h-full w-[2px] bg-[var(--accent)]"
            style={{ transformOrigin: "top" }}
          />

          <div
            className="glow-pulse pointer-events-none absolute -top-10 -left-4 h-40 w-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(77,179,100,0.16) 0%, rgba(77,179,100,0) 70%)",
            }}
          />

          <span
            className="pop-in font-serif text-[64px] leading-none text-[var(--accent)] opacity-30"
            style={{ animationDelay: "0.15s" }}
          >
            &ldquo;
          </span>

          <p
            className="fade-up -mt-4 font-serif text-[24px] italic leading-[1.5] text-[var(--ink)]"
            style={{ animationDelay: "0.35s" }}
          >
            He who lives by the crystal ball will eat shattered glass. The only way to
            win is to understand more and faster than others — and that comes from
            data.
          </p>
          <div
            className="fade-up mt-6 text-[13px] font-semibold text-[var(--ink)]"
            style={{ animationDelay: "0.75s" }}
          >
            — Ray Dalio, Bridgewater Founder &amp; CIO
          </div>
          <div
            className="fade-up text-[12px] text-[var(--muted)]"
            style={{ animationDelay: "0.85s" }}
          >
            (The world&apos;s largest hedge fund)
          </div>
        </div>
      </div>
    </Slide>
  );
}
