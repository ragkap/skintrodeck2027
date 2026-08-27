import { Slide } from "../deck/Slide";
import { Stat } from "../deck/ui";

const EXPERTISE = [
  { t: "Event-Driven", d: "Special situations, deals & catalysts tracked in real time" },
  { t: "Index Rebalance", d: "APAC, Americas & EMEA index event coverage" },
  { t: "ECM", d: "Equity capital markets — IPOs, placements, block trades" },
  { t: "Private Capital Markets", d: "New — Asia's private & pre-IPO markets (pvtIQ)" },
];

export function S10_SpecialistOffering({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Specialist Product Offering"
      subtitle="Multi-asset, differentiated and demand-driven — specialist, Asia-first, with a growing private markets edge"
    >
      <div className="flex h-full flex-col gap-8 pt-2">
        <div className="grid grid-cols-4 divide-x divide-[var(--hairline)]">
          <Stat value="300+" label="Content providers" />
          <div className="pl-8">
            <Stat value="100k" label="Insights" />
          </div>
          <div className="pl-8">
            <Stat value="10k" label="Companies" />
          </div>
          <div className="pl-8">
            <Stat value="58%" label="Small & mid-cap coverage" />
          </div>
        </div>

        <div>
          <div className="caption mb-3 uppercase tracking-wide">
            Areas of Expertise — On-Demand, Specialist Verticals
          </div>
          <div className="grid grid-cols-4 divide-x divide-[var(--hairline)] border-t border-[var(--hairline)] pt-4">
            {EXPERTISE.map((e, i) => (
              <div key={e.t} className={i === 0 ? "pr-6" : "px-6 last:pr-0"}>
                <div className="text-[13.5px] font-bold text-[var(--ink)]">{e.t}</div>
                <div className="mt-1 text-[11.5px] leading-snug text-[var(--body)]">{e.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid flex-1 grid-cols-2 gap-16 border-t border-[var(--hairline)] pt-6">
          <div className="flex flex-col justify-center">
            <div className="caption mb-3 uppercase tracking-wide">Research Focus — Asia-First</div>
            <BarRow label="APAC" value={50} />
            <BarRow label="Americas & EMEA" value={24} />
            <BarRow label="Macro / Thematic" value={26} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="caption mb-3 uppercase tracking-wide">
              Market Cap Distribution — Small & Mid-Cap Focus
            </div>
            <BarRow label="Small Cap" value={44} />
            <BarRow label="Large Cap" value={42} />
            <BarRow label="Mid Cap" value={14} />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function BarRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="mb-2 flex items-center gap-3 last:mb-0">
      <span className="w-[120px] shrink-0 text-[11.5px] text-[var(--body)]">{label}</span>
      <div className="h-1.5 flex-1 bg-[#eef1f4]">
        <div style={{ width: `${value}%` }} className="h-full bg-[var(--accent)]" />
      </div>
      <span className="tabular w-9 text-right text-[11.5px] font-semibold text-[var(--ink)]">
        {value}%
      </span>
    </div>
  );
}
