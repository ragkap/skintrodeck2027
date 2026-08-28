import Image from "next/image";
import { Slide } from "../deck/Slide";

const COMPARISONS = [
  {
    label: "AI Tools",
    desc: "Trusted primary insight vs public AI outputs",
    names: ["ChatGPT", "Perplexity", "Hebbia"],
  },
  {
    label: "News & Data Terminals",
    desc: "Real-time insight & data vs after-market reports",
    names: ["Bloomberg", "FactSet", "AlphaSense"],
  },
  {
    label: "Expert Networks",
    desc: "Always-on access & data vs one-off, potential MNPI-risk calls",
    names: ["GLG", "Tegus", "Guidepoint"],
  },
  {
    label: "Specialist Data Firms",
    desc: "Multi-asset data plus context vs single-vertical silos",
    names: ["ReOrg", "CFRA", "CB Insights"],
  },
  {
    label: "Crowdsourced Research",
    desc: "Institutional-grade & compliant vs variable quality",
    names: ["SeekingAlpha", "SumZero", "StockTwits"],
  },
];

export function S06_CompetitiveLandscape({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Competitive Landscape"
      subtitle="AI tools and data terminals are becoming commoditised. Real-time proprietary insight and on-demand expertise are not — an APAC-first edge in the consolidation path of global strategics"
    >
      <div className="grid h-full grid-cols-[1.85fr_0.85fr] items-center gap-6">
        <Image
          src="/graphics/competitive-landscape.png"
          alt="Competitive landscape quadrant: Smartkarma positioned as the unified platform combining on-demand access and specialist depth, versus AI tools, expert networks, specialist research firms, broker research, news platforms, and crowd-sourced tools"
          width={1270}
          height={754}
          className="h-auto max-h-full w-full object-contain"
        />

        <div className="flex flex-col justify-center gap-3">
          <div className="caption mb-1 uppercase tracking-wide">Smartkarma vs Alternatives</div>
          {COMPARISONS.map((c) => (
            <div
              key={c.label}
              className="border-t border-[var(--hairline)] pt-3 first:border-t-0 first:pt-0"
            >
              <div className="text-[13.5px] font-bold text-[var(--ink)]">{c.label}</div>
              <div className="mt-0.5 text-[12px] leading-snug text-[var(--body)]">{c.desc}</div>
              <div className="mt-1 text-[11px] text-[var(--muted)]">{c.names.join(" · ")}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
