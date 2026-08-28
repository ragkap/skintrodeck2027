import { Slide } from "../deck/Slide";
import { Bullet } from "../deck/ui";

export function S14_WhyNow({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Why Now?"
      subtitle="Winners will be those that move fastest, with insight and AI"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col gap-5">
          <Bullet title="Explosion of real-time & specialist data:">
            high-frequency, alternative, and unstructured data volumes now far exceed the
            capacity of manual research.
          </Bullet>
          <Bullet title="AI becoming core to investment workflows:">
            automating research, extracting signals, and accelerating insight — making
            speed a decisive edge.
          </Bullet>
          <Bullet title="Increasing market complexity:">
            cross-asset dynamics, index events, and special situations require instant,
            expert interpretation.
          </Bullet>
          <Bullet title="Need for operational leverage:">
            institutions must scale insight, not headcount — driving adoption of
            AI-native intelligence platforms.
          </Bullet>
          <Bullet title="Fragmented global markets:">
            liquidity dispersion and multi-venue trading demand integrated, real-time
            intelligence across asset classes and geographies.
          </Bullet>
        </ul>

        <div className="relative flex flex-col justify-center pl-10">
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
