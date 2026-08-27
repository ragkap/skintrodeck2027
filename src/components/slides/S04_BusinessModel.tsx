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
      <div className="grid h-full grid-cols-[1fr_auto_1fr] content-center items-center gap-x-8">
        {[TIERS[0]].map((t) => (
          <div
            key={t.title}
            className="flex flex-col rounded-[12px] border border-[var(--hairline)] p-7"
          >
            <div className="eyebrow !text-[var(--muted)]">{t.step}</div>
            <h3 className="mt-1.5 text-[22px] font-bold leading-tight text-[var(--ink)]">
              {t.title}
            </h3>

            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--body)]">{t.desc}</p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
              <span className="font-semibold text-[var(--ink)]">{t.focusLabel}</span>{" "}
              {t.focus}
            </p>

            <div className="mt-6 grid grid-cols-[140px_90px_1fr] gap-4 border-t border-[var(--hairline)] pt-5">
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
          </div>
        ))}

        <svg viewBox="0 0 40 24" className="h-5 w-10 text-[var(--accent)]">
          <path
            d="M2 12h28M24 4l10 8-10 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {[TIERS[1]].map((t) => (
          <div
            key={t.title}
            className="flex flex-col rounded-[12px] border border-[var(--hairline)] p-7"
          >
            <div className="eyebrow !text-[var(--muted)]">{t.step}</div>
            <h3 className="mt-1.5 text-[22px] font-bold leading-tight text-[var(--ink)]">
              {t.title}
            </h3>

            <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--body)]">{t.desc}</p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
              <span className="font-semibold text-[var(--ink)]">{t.focusLabel}</span>{" "}
              {t.focus}
            </p>

            <div className="mt-6 grid grid-cols-[140px_90px_1fr] gap-4 border-t border-[var(--hairline)] pt-5">
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
          </div>
        ))}
      </div>
    </Slide>
  );
}
