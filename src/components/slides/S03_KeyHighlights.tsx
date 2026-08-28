import type { ReactNode } from "react";
import { Slide } from "../deck/Slide";
import { Mark, Stat } from "../deck/ui";

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconTrendUp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 6h6v6" />
    </svg>
  );
}

function IconNetwork() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="18" cy="12" r="2.4" />
      <path d="M7.2 6.8L15.8 11M7.2 17.2L15.8 13" />
    </svg>
  );
}

const CARDS: { title: string; icon: ReactNode; points: ReactNode[] }[] = [
  {
    title: "Durable, Competitive Advantage",
    icon: <IconShield />,
    points: [
      <>
        <Mark>Only platform</Mark> unifying real-time insight, specialist alt-data, and
        on-demand expertise across special-sits, index and ECM
      </>,
      <>
        Global blue-chip customer base of <Mark>300+ Tier-1 institutions</Mark>, corporates
        and exchanges with US$14T+ in AUM
      </>,
      <>
        <Mark>10+ year insight archive</Mark> serves as a proprietary data exhaust and
        grounding layer for AI-ready workflows
      </>,
    ],
  },
  {
    title: "Financial Inflection",
    icon: <IconTrendUp />,
    points: [
      <>
        Advance-payment model with <Mark>95%+ recurring revenue</Mark>; shifting mix
        towards first-party data assets with 90%+ gross margin
      </>,
      <>
        Premium subscriptions scaling to 65% of mix. Proven land-and-expand, with
        top-5 client revenue <Mark>up 3× in the last 4 years</Mark>
      </>,
      <>
        Material operating leverage driving <Mark>2026E gross profit +70% YoY</Mark>,
        EBITDA margin 2% → 11% (Base) / 15% (Bull)
      </>,
    ],
  },
  {
    title: "Consolidation Thesis",
    icon: <IconNetwork />,
    points: [
      <>
        Fragmented market ripe for a <Mark>Buy &amp; Build</Mark>; global contracts allow
        for immediate cross-sell. APAC-leadership &amp; asset-light
      </>,
      <>
        Identified pipeline of <Mark>$100M+ cumulative LTM ARR</Mark> across target
        opportunities, plus a maiden acquisition of a commodities data platform
      </>,
      <>
        Demonstrable track record with <Mark>10.6× valuation growth</Mark> across 6
        consecutive, structured up-rounds
      </>,
    ],
  },
];

const STATS = [
  { value: "$112B", label: "TAM by 2030" },
  { value: "60%+", label: "Gross margin, long-term target" },
  { value: "+70%", label: "2026E gross profit, YoY" },
  { value: "2%→11%", label: "EBITDA margin, 2025→FY26E" },
  { value: ">$100M", label: "M&A pipeline, ARR identified" },
  { value: "6/6", label: "Up-rounds, track record" },
  { value: "30%", label: "Growth per year" },
  { value: "25", label: "Team" },
];

export function S03_KeyHighlights({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Smartkarma Highlights"
      subtitle="Proven · Profitable · Scaling"
    >
      <div className="flex h-full flex-col justify-center gap-8">
        <div className="grid grid-cols-3 divide-x divide-[var(--hairline)]">
          {CARDS.map((c, i) => (
            <div key={c.title} className={i === 0 ? "flex flex-col gap-4 pr-8" : "flex flex-col gap-4 px-8 last:pr-0"}>
              <div className="flex items-center gap-2.5 border-b border-[var(--hairline)] pb-3">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[9px] accent-gradient">
                  {c.icon}
                </span>
                <h3 className="text-[18px] font-bold leading-tight tracking-[-0.01em] text-[var(--ink)]">
                  {c.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {c.points.map((p, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-1.5 h-[5px] w-[5px] flex-none rounded-full bg-[var(--muted)]" />
                    <span className="text-[13px] leading-snug text-[var(--body)]">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-x-8 gap-y-5 border-t border-[var(--hairline)] pt-5">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </Slide>
  );
}
