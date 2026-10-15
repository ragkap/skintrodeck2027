import type { ReactNode } from "react";
import { SkeletonImage } from "../deck/SkeletonImage";
import { Slide } from "../deck/Slide";
import { Stat } from "../deck/ui";

const ICON_PROPS = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "white",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function IconGauge() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 17l4-5" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg {...ICON_PROPS}>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.2-4.2" />
    </svg>
  );
}

function IconBars() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M5 20v-6M12 20V9M19 20V4" />
    </svg>
  );
}

function IconExit() {
  return (
    <svg {...ICON_PROPS}>
      <path d="M4 12h11M11 8l4 4-4 4" />
      <path d="M15 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4" />
    </svg>
  );
}

const CARDS: { title: string; icon: ReactNode; text: string }[] = [
  {
    title: "pvtIQ SmartScore©",
    icon: <IconGauge />,
    text: "Benchmarking across 7 pillars and 21 variables on a 1 to 5 scale",
  },
  {
    title: "pvtIQ Channel Check©",
    icon: <IconSearch />,
    text: "Ground truth beyond management figures: app rankings, employee sentiment",
  },
  {
    title: "pvtIQ Alt-Data Score©",
    icon: <IconBars />,
    text: "The Channel Check, quantified across five independently sourced categories",
  },
  {
    title: "pvtIQ Exit Activity Indicator©",
    icon: <IconExit />,
    text: "Six weighted indicators: odds of an IPO, trade sale or staying private",
  },
];

const COUNTRIES = [
  { l: "United States", v: 485 },
  { l: "India", v: 117 },
  { l: "Singapore", v: 85 },
  { l: "Israel", v: 79 },
  { l: "South Korea", v: 35 },
];

const SECTORS = [
  { l: "Information Technology", v: 484 },
  { l: "Financials", v: 156 },
  { l: "Industrials", v: 130 },
  { l: "Health Care", v: 89 },
  { l: "Consumer Discretionary", v: 74 },
];

function TopList({ title, rows }: { title: string; rows: { l: string; v: number }[] }) {
  const max = Math.max(...rows.map((r) => r.v));
  return (
    <div className="flex flex-col gap-2">
      <div className="caption uppercase tracking-wide">{title}</div>
      {rows.map((r, i) => (
        <div key={r.l} className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between text-[11px] leading-none text-[var(--body)]">
            <span>{r.l}</span>
            <span className="tabular font-semibold text-[var(--ink)]">{r.v}</span>
          </div>
          <div className="h-[5px] w-full rounded-full bg-[#eef1f4]">
            <div
              style={{ width: `${(r.v / max) * 100}%`, animationDelay: `${0.4 + i * 0.06}s` }}
              className="bar-grow-x h-full rounded-full accent-gradient"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function S13_PrivateMarkets({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Expansion into Private Markets"
      subtitle="Quantitative, risk-adjusted scoring and research for private-market assets"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] gap-12 pt-6 pb-5">
        <div className="flex flex-col justify-between gap-5 border-r border-[var(--hairline)] pr-10">
          <div className="pop-in" style={{ animationDelay: "0.2s" }}>
            <SkeletonImage
              src="/logos/pvtiq.png"
              alt="pvtIQ by Smartkarma"
              width={555}
              height={189}
              className="h-14 w-auto rounded-[6px] object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {CARDS.map((c, i) => (
              <div
                key={c.title}
                className="fade-up flex flex-col gap-3 rounded-[10px] border border-[var(--hairline)] bg-white p-5"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-[9px] accent-gradient">
                  {c.icon}
                </span>
                <h3 className="text-[14.5px] font-bold leading-tight text-[var(--ink)]">
                  {c.title}
                </h3>
                <p className="text-[12px] leading-snug text-[var(--muted)]">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center font-serif text-[15px] italic text-[var(--ink)]">
            Rating agency-style proprietary data for private assets
          </p>
        </div>

        <div className="flex flex-col justify-between gap-5">
          <Stat
            value="1,151"
            label="companies covered (last 12 months)"
            sub="47 markets · 11 sectors"
            delay={0.35}
          />

          <div className="grid grid-cols-2 gap-6">
            <TopList title="Top countries" rows={COUNTRIES} />
            <TopList title="Top sectors" rows={SECTORS} />
          </div>

          <p className="text-[9.5px] leading-snug text-[var(--muted)]">
            Source: Smartkarma private companies coverage, last 12 months to 15 Oct 2026.
          </p>

          <div className="flex items-center gap-4 rounded-[10px] border border-[var(--hairline)] px-5 py-4">
            <SkeletonImage
              src="/logos/mas-logo.svg"
              alt="Monetary Authority of Singapore"
              width={234}
              height={77}
              className="h-10 w-auto flex-none object-contain"
            />
            <span className="h-10 w-px flex-none bg-[var(--hairline)]" />
            <p className="text-[12.5px] leading-snug text-[var(--body)]">
              pvtIQ was launched in Q4&apos;2025 with support from the Monetary
              Authority of Singapore.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
