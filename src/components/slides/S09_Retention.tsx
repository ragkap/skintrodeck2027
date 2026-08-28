import { Slide } from "../deck/Slide";

const SCALE = 4.5;

const CHURN = [
  { l: "Left firm", v: 54, featured: true },
  { l: "Other (not provided)", v: 37, featured: false },
  { l: "Budget", v: 9, featured: false },
  { l: "Engagement", v: 1, featured: false },
];

const RESUB = [
  { l: "1", v: 6, featured: false },
  { l: "2", v: 70, featured: true },
  { l: "3", v: 17, featured: true },
  { l: "4", v: 6, featured: true },
  { l: "5", v: 1, featured: true },
];

function BarChart({
  data,
  dividerAfter,
}: {
  data: { l: string; v: number; featured: boolean }[];
  dividerAfter: number;
}) {
  return (
    <div
      className="relative grid flex-1 items-end pt-4 pb-2"
      style={{ gridTemplateColumns: `repeat(${data.length}, 1fr)` }}
    >
      <div
        className="marching-line pointer-events-none absolute top-0 bottom-0 w-[2px]"
        style={{ left: `${(dividerAfter / data.length) * 100}%` }}
      />
      {data.map((b) => (
        <div key={b.l} className="flex flex-col items-center gap-2">
          <div
            className={`tabular text-[11px] font-semibold ${
              b.featured ? "text-gradient" : "text-[var(--muted)]"
            }`}
          >
            {b.v}%
          </div>
          <div
            style={{ height: Math.max(b.v * SCALE, 4) }}
            className={`w-11 ${b.featured ? "accent-gradient" : "bg-[#d7dce2]"}`}
          />
          <div className="w-16 text-center text-[9px] font-medium leading-tight text-[var(--muted)]">
            {b.l}
          </div>
        </div>
      ))}
    </div>
  );
}

export function S09_Retention({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Retention"
      subtitle="High user loyalty, with churn largely driven by structural employment changes"
    >
      <div className="grid h-full grid-cols-2 divide-x divide-[var(--hairline)] pt-2">
        <div className="flex flex-col pr-10">
          <div className="caption uppercase tracking-wide">Reasons for Churn</div>
          <BarChart data={CHURN} dividerAfter={1} />
          <p className="border-t border-[var(--hairline)] pt-4 text-center font-serif text-[13px] italic text-[var(--body)]">
            Over 50% of reported platform revenue churn is structural, driven by users
            exiting their firms
          </p>
        </div>

        <div className="flex flex-col pl-10">
          <div className="caption uppercase tracking-wide">Resubscription Across Firms</div>
          <BarChart data={RESUB} dividerAfter={1} />
          <p className="border-t border-[var(--hairline)] pt-4 text-center font-serif text-[13px] italic text-[var(--body)]">
            94% of users re-subscribe after joining new firms, highlighting strong
            loyalty and retention
          </p>
        </div>
      </div>
    </Slide>
  );
}
