import { Slide } from "../deck/Slide";

const TIERS = [
  {
    step: "Land",
    title: "Platform Subscription",
    desc: "Real-time insight from 300+ curated sources, data tools and engagement features under a single streaming subscription.",
    focusLabel: "Specialist Focus:",
    focus: "Event-Driven, Index Rebalance, ECM, Forensic Accounting and more.",
    price: "US$10,950",
    priceSub: "per user",
    terms: "Annual, in advance",
    margin: "30%+",
  },
  {
    step: "Expand",
    title: "Premium Subscription",
    desc: "Specialist alternative data subscriptions and high-touch analyst desk access.",
    focusLabel: "Delivery:",
    focus: "Sold per-team, per-dataset basis, via API and MCP.",
    price: "US$35k–200k",
    priceSub: "per dataset, per team",
    terms: "Annual, in advance",
    margin: "30–90%",
  },
];

export function S04_BusinessModel({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Business Model"
      subtitle="From Platform Subscriptions to Premium Subscriptions, supporting a land and expand strategy"
    >
      <div className="grid h-full grid-cols-2 content-center gap-x-16">
        {TIERS.map((t, i) => (
          <div key={`head-${t.title}`} className="relative flex flex-col justify-end pb-1.5">
            {i === 1 && (
              <svg
                viewBox="0 0 64 24"
                className="absolute top-[6px] -left-[68px] h-5 w-14 text-[var(--accent)]"
              >
                <path
                  d="M2 12h52M46 4l10 8-10 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <div className="eyebrow !text-[var(--muted)]">{t.step}</div>
            <h3 className="mt-1.5 text-[24px] font-bold leading-tight text-[var(--ink)]">
              {t.title}
            </h3>
          </div>
        ))}

        {TIERS.map((t) => (
          <div key={`desc-${t.title}`} className="flex flex-col justify-start pt-3">
            <p className="text-[13.5px] leading-relaxed text-[var(--body)]">{t.desc}</p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
              <span className="font-semibold text-[var(--ink)]">{t.focusLabel}</span>{" "}
              {t.focus}
            </p>
          </div>
        ))}

        <div className="col-span-2 mt-6 border-t border-[var(--hairline)]" />

        {TIERS.map((t) => (
          <div key={`metrics-${t.title}`} className="flex gap-10 pt-5">
            <div>
              <div className="text-[20px] font-bold text-[var(--accent-deep)]">{t.price}</div>
              <div className="text-[11px] text-[var(--muted)]">{t.priceSub}</div>
            </div>
            <div>
              <div className="text-[20px] font-bold text-[var(--ink)]">{t.margin}</div>
              <div className="text-[11px] text-[var(--muted)]">Gross margin</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold text-[var(--ink)]">{t.terms}</div>
              <div className="text-[11px] text-[var(--muted)]">Contract terms</div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}
