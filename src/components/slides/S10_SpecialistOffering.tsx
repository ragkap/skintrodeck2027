import { Slide } from "../deck/Slide";
import { Stat } from "../deck/ui";

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconRebalance() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M4 7h16M4 7l3-3M4 7l3 3M20 17H4M20 17l-3-3M20 17l-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconECM() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M7.5 11V7.5a4.5 4.5 0 0 1 9 0V11" strokeLinecap="round" />
    </svg>
  );
}

const EXPERTISE = [
  {
    t: "Event-Driven",
    d: "Special situations, deals & catalysts tracked in real time",
    icon: IconBolt,
  },
  {
    t: "Index Rebalance",
    d: "APAC, Americas & EMEA index event coverage",
    icon: IconRebalance,
  },
  { t: "ECM", d: "Equity capital markets — IPOs, placements, block trades", icon: IconECM },
  {
    t: "Private Capital Markets",
    d: "New — Asia's private & pre-IPO markets (pvtIQ)",
    icon: IconLock,
  },
];

export function S10_SpecialistOffering({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Specialist Product Offering"
      subtitle="Multi-asset, differentiated and demand-driven — specialist, Asia-first, with a growing private markets edge"
    >
      <div className="flex h-full flex-col justify-center gap-10">
        <div className="grid grid-cols-4 divide-x divide-[var(--hairline)]">
          <Stat value="300+" label="Insight providers" />
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
            Specialist Areas of Expertise
          </div>
          <div className="grid grid-cols-4 divide-x divide-[var(--hairline)] border-t border-[var(--hairline)] pt-4">
            {EXPERTISE.map((e, i) => (
              <div key={e.t} className={i === 0 ? "pr-6" : "px-6 last:pr-0"}>
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[var(--accent)] text-gradient">
                  <e.icon />
                </div>
                <div className="mt-2 text-[13.5px] font-bold text-[var(--ink)]">{e.t}</div>
                <div className="mt-1 text-[11.5px] leading-snug text-[var(--body)]">{e.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 border-t border-[var(--hairline)] pt-6">
          <div>
            <div className="caption mb-3 uppercase tracking-wide">Research Focus — Asia-First</div>
            <BarRow label="APAC" value={50} delay={0} />
            <BarRow label="Americas & EMEA" value={24} delay={0.08} />
            <BarRow label="Macro / Thematic" value={26} delay={0.16} />
          </div>
          <div>
            <div className="caption mb-3 uppercase tracking-wide">
              Market Cap Distribution — Small & Mid-Cap Focus
            </div>
            <BarRow label="Small Cap" value={44} delay={0} />
            <BarRow label="Large Cap" value={42} delay={0.08} />
            <BarRow label="Mid Cap" value={14} delay={0.16} />
          </div>
        </div>
      </div>
    </Slide>
  );
}

function BarRow({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div className="mb-2 flex items-center gap-3 last:mb-0">
      <span className="w-[120px] shrink-0 text-[11.5px] text-[var(--body)]">{label}</span>
      <div className="h-1.5 flex-1 bg-[#eef1f4]">
        <div
          style={{ width: `${value}%`, animationDelay: `${delay}s` }}
          className="bar-grow-x h-full accent-gradient"
        />
      </div>
      <span className="tabular w-9 text-right text-[11.5px] font-semibold text-[var(--ink)]">
        {value}%
      </span>
    </div>
  );
}
