import { Slide } from "../deck/Slide";

const ROUNDS = [
  { date: "May 2016", round: "Series A", label: "Grow Supplyside", rev: "-", val: "1.6x" },
  { date: "Oct 2017", round: "Series B1", label: "Grow Demandside", rev: "1.5x", val: "2.3x" },
  { date: "Jul 2019", round: "Series B2", label: "Expand Offerings", rev: "2.3x", val: "1.3x" },
  { date: "May 2026", round: "Series B2 Strategic Top-Up", label: "Accelerate Scale-Up", rev: "3.5x", val: "2x", highlight: true },
];

export function S18_FundraiseHistory({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Fundraise History"
      subtitle="Smartkarma closed its latest round in May 2026"
    >
      <div className="flex h-full flex-col justify-center pt-2">
        <div className="relative grid grid-cols-4">
          <div
            className="bar-grow-x absolute top-[42px] right-0 left-0 h-[2px] accent-gradient"
            style={{ animationDuration: "1.4s" }}
          />
          {ROUNDS.map((r, i) => (
            <div
              key={r.round}
              className={
                i === 0
                  ? "pop-in relative pr-6 text-center"
                  : "pop-in relative px-6 text-center last:pr-0"
              }
              style={{ animationDelay: `${0.15 + i * 0.28}s` }}
            >
              <div className="caption uppercase tracking-wide">{r.date}</div>
              <div className="relative z-10 mx-auto mt-1 mb-3 flex h-3 w-3 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-white" />
              <div className="text-[15px] font-bold text-[var(--ink)]">{r.round}</div>
              <div
                className={`mt-1 text-[11.5px] font-semibold ${
                  r.highlight ? "text-gradient" : "text-[var(--body)]"
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
      </div>
    </Slide>
  );
}
