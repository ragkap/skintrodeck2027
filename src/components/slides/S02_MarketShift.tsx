import { Slide } from "../deck/Slide";
import { Mark } from "../deck/ui";

const POINTS = [
  {
    title: "Real-time proprietary data and insight are now mission-critical:",
    body: (
      <>
        portfolio managers cite real-time specialist data and insight as critical to
        front-office decision-making. <Mark>67% report using alternative data</Mark> in
        2025 (vs ~31% in 2022), with <Mark>94% planning to increase budgets</Mark>.
      </>
    ),
  },
  {
    title: "The Alt-Intelligence market is exploding:",
    body: (
      <>
        projected to grow from <Mark>$12B in 2025 to $112B by 2030</Mark>. APAC will
        outpace the world — jumping from $1.2B in 2022 to $42B by 2030, a major
        monetisation opportunity.
      </>
    ),
  },
  {
    title: "Legacy solutions are being left behind:",
    body: (
      <>
        asset managers and institutions are shifting spend to{" "}
        <Mark>real-time, AI-native alternative-data and insight platforms</Mark>, leaving
        traditional providers with <Mark>shrinking relevance and lower demand</Mark>.
      </>
    ),
  },
];

export function S02_MarketShift({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Institutional Decision-Making is Shifting"
      subtitle="From human-powered research to AI-augmented intelligence — reshaping a $100B B2B research market."
    >
      <div className="flex h-full flex-col">
        <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr] gap-14 pt-2">
          <ol className="flex flex-col justify-center gap-11">
            {POINTS.map((p, i) => (
              <li key={p.title} className="flex gap-4">
                <span className="font-serif text-[24px] italic leading-none text-[var(--accent-deep)]">
                  {i + 1}
                </span>
                <span className="text-[15px] leading-relaxed text-[var(--body)]">
                  <span className="font-semibold text-[var(--ink)]">{p.title} </span>
                  {p.body}
                </span>
              </li>
            ))}
          </ol>

          <div className="flex flex-col border-l border-[var(--hairline)] pl-10">
            <div className="caption mb-6 uppercase tracking-wide">
              Alternative Data &amp; Insight Market — USD Bn
            </div>
            <div className="relative flex flex-1 items-end justify-center gap-20 pb-2">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              >
                <defs>
                  <marker id="growthArrow" markerWidth="7" markerHeight="7" refX="3.2" refY="3.5" orient="auto">
                    <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--ai-pink)" />
                  </marker>
                </defs>
                <line
                  x1="43"
                  y1="76"
                  x2="69"
                  y2="9"
                  stroke="var(--ai-pink)"
                  strokeWidth="1.3"
                  strokeDasharray="4 3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  markerEnd="url(#growthArrow)"
                  className="arrow-flow"
                />
              </svg>
              {[
                { year: "2025", apac: 1.2, row: 10.8, total: "$12B" },
                { year: "2030", apac: 42, row: 70, total: "$112B" },
              ].map((bar, i) => {
                const scale = 3;
                return (
                  <div key={bar.year} className="flex flex-col items-center gap-3">
                    <div className="tabular text-[15px] font-bold text-[var(--ink)]">
                      {bar.total}
                    </div>
                    <div className="flex w-14 flex-col-reverse">
                      <div
                        style={{ height: bar.row * scale, animationDelay: `${i * 0.15}s` }}
                        className="bar-grow flex items-start justify-center bg-[#e7eaee] pt-1"
                      >
                        <span className="tabular text-[10px] text-[var(--body)]">{bar.row}</span>
                      </div>
                      <div
                        style={{ height: bar.apac * scale, animationDelay: `${i * 0.15 + 0.1}s` }}
                        className="bar-grow flex items-start justify-center bg-[var(--accent)] pt-0.5"
                      >
                        {bar.apac >= 10 && (
                          <span className="tabular text-[10px] text-white">{bar.apac}</span>
                        )}
                      </div>
                    </div>
                    <div className="caption uppercase tracking-wide">{bar.year}</div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 border-t border-[var(--hairline)] pt-4">
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)]" /> APAC
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#e7eaee]" /> Rest of World
              </span>
            </div>
          </div>
        </div>
        <div className="pt-4 caption">
          Sources: Lowenstein · Bloomberg · Mordor Intelligence &amp; Grandview Research ·
          Research and Markets · Deloitte
        </div>
      </div>
    </Slide>
  );
}
