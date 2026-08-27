import { Slide } from "../deck/Slide";
import { Pill } from "../deck/ui";

const ROUNDS = [
  { date: "Jan 2015", round: "Seed", label: "Launch Tech", rev: "-", val: "-" },
  { date: "May 2016", round: "Series A", label: "Scale Supplyside", rev: "-", val: "1.6x" },
  { date: "Oct 2017", round: "Series B1", label: "Grow Demandside", rev: "1.5x", val: "2.3x" },
  { date: "Jul 2019", round: "Series B2", label: "Expand Offerings", rev: "2.3x", val: "1.3x" },
  { date: "May 2026", round: "Latest Raise", label: "Accelerated Scale-Up", rev: "3.5x", val: "2x", highlight: true },
];

export function S18_FundraiseHistory({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Fundraise History"
      subtitle="Smartkarma closed its latest round in May 2026, with SGX and QRT Ventures among participating investors"
    >
      <div className="flex h-full flex-col justify-center gap-12 pt-2">
        <div className="grid grid-cols-5 divide-x divide-[var(--hairline)]">
          {ROUNDS.map((r, i) => (
            <div key={r.round} className={i === 0 ? "pr-6 text-center" : "px-6 text-center last:pr-0"}>
              <div className="caption uppercase tracking-wide">{r.date}</div>
              <div className="mt-1 mb-3 text-[15px] font-bold text-[var(--ink)]">{r.round}</div>
              <div
                className={`text-[11.5px] font-semibold ${
                  r.highlight ? "text-[var(--accent-deep)]" : "text-[var(--body)]"
                }`}
              >
                {r.label}
              </div>
              <div className="mt-4 border-t border-[var(--hairline)] pt-3 text-[11.5px] text-[var(--body)]">
                <span className="text-[var(--muted)]">Revenue Δ </span>
                {r.rev}
              </div>
              <div className="text-[11.5px] text-[var(--body)]">
                <span className="text-[var(--muted)]">Valuation Δ </span>
                {r.val}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex w-[64%] flex-col items-center gap-4 border-t border-[var(--hairline)] pt-8 text-center">
          <Pill>Fundraise · May 2026</Pill>
          <div className="flex gap-16">
            <div>
              <div className="text-[28px] font-bold text-[var(--accent-deep)]">2x</div>
              <div className="caption uppercase tracking-wide">Valuation</div>
            </div>
            <div>
              <div className="text-[28px] font-bold text-[var(--accent-deep)]">3.5x</div>
              <div className="caption uppercase tracking-wide">Revenue</div>
            </div>
          </div>
          <div className="text-[13px] text-[var(--body)]">
            <span className="font-semibold text-[var(--ink)]">Investors:</span> SGX ·
            QRT Ventures · a Tier-1 Global Multi-Strat Fund
          </div>
        </div>
      </div>
    </Slide>
  );
}
