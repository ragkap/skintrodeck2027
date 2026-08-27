import { Slide } from "../deck/Slide";

const ACV = [
  { l: "Top 5", v: 43 },
  { l: "Top 10", v: 34 },
  { l: "Top 20", v: 32 },
];

const MIX = [
  { year: "2023", premium: 54, platform: 46 },
  { year: "2024", premium: 63, platform: 37 },
  { year: "2025", premium: 65, platform: 35 },
];

const ACV_SCALE = 6.5;
const MIX_SCALE = 2.9;

export function S08_RevenueGrowth({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Revenue Growth"
      subtitle="Deepening traction across tier-1 accounts, with an increasing mix of high-margin products"
    >
      <div className="grid h-full grid-cols-2 divide-x divide-[var(--hairline)] pt-2">
        <div className="flex flex-col pr-10">
          <div className="caption uppercase tracking-wide">Top Clients — ACV Growth</div>
          <div className="text-[11px] text-[var(--muted)]">CAGR (2021-25)</div>
          <div className="flex flex-1 items-end justify-center gap-12 pb-2 pt-4">
            {ACV.map((b) => (
              <div key={b.l} className="flex flex-col items-center gap-2">
                <div className="tabular text-[14px] font-bold text-[var(--accent-deep)]">
                  {b.v}%
                </div>
                <div style={{ height: b.v * ACV_SCALE }} className="w-14 bg-[var(--accent)]" />
                <div className="caption uppercase tracking-wide">{b.l}</div>
              </div>
            ))}
          </div>
          <p className="border-t border-[var(--hairline)] pt-4 text-center font-serif text-[13px] italic text-[var(--body)]">
            Revenue from top clients has tripled in the last four years
          </p>
        </div>

        <div className="flex flex-col pl-10">
          <div className="flex items-center justify-between">
            <div className="caption uppercase tracking-wide">Share of Premium Subscriptions</div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[var(--accent)]" /> Premium
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#e7eaee]" /> Platform
              </span>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center gap-12 pb-2 pt-4">
            {MIX.map((m) => (
              <div key={m.year} className="flex flex-col items-center gap-2">
                <div className="flex w-16 flex-col-reverse">
                  <div
                    style={{ height: m.platform * MIX_SCALE }}
                    className="flex items-start justify-center bg-[#e7eaee] pt-1"
                  >
                    <span className="tabular text-[10px] text-[var(--body)]">{m.platform}%</span>
                  </div>
                  <div
                    style={{ height: m.premium * MIX_SCALE }}
                    className="flex items-start justify-center bg-[var(--accent)] pt-1"
                  >
                    <span className="tabular text-[10px] text-white">{m.premium}%</span>
                  </div>
                </div>
                <div className="caption uppercase tracking-wide">{m.year}</div>
              </div>
            ))}
          </div>
          <p className="border-t border-[var(--hairline)] pt-4 text-center font-serif text-[13px] italic text-[var(--body)]">
            Higher-margin premium subscriptions continue to gain share
          </p>
        </div>
      </div>
    </Slide>
  );
}
