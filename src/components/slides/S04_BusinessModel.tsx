import { Slide } from "../deck/Slide";

const TIERS = [
  {
    step: "Land",
    title: "Platform Subscription",
    desc: "Real-time insight from 300+ curated sources, under 1 subscription.",
    focusLabel: "Specialist Focus:",
    focus: "Event-Driven, Index Rebalance, ECM, Private Markets.",
    price: "US$10,950",
    priceSub: "per user",
    terms: "Annual, in advance",
    margin: "30%+",
    icon: "package" as const,
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
    icon: "gem" as const,
  },
];

function TierIcon({ kind }: { kind: "package" | "gem" }) {
  if (kind === "gem") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
        <path d="M6 3h12l3 5-9 13L3 8Z" strokeLinejoin="round" />
        <path d="M3 8h18M9 3l-2 5 5 13 5-13-2-5" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M21 8 12 3 3 8l9 5 9-5Z" strokeLinejoin="round" />
      <path d="M3 8v8l9 5 9-5V8M12 13v8" strokeLinejoin="round" />
    </svg>
  );
}

function PriceTagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.12 0l-6.38-6.38a1.5 1.5 0 0 1 0-2.12L11.5 4H19a1 1 0 0 1 1 1v7.5Z" strokeLinejoin="round" />
      <circle cx="15" cy="8" r="1.4" />
    </svg>
  );
}

function MarginIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M19 5 5 19" strokeLinecap="round" />
      <circle cx="7" cy="7" r="2.5" />
      <circle cx="17" cy="17" r="2.5" />
    </svg>
  );
}

function TermsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}

function TierCard({ t }: { t: (typeof TIERS)[number] }) {
  return (
    <div className="flex h-full flex-col rounded-[12px] border border-[var(--hairline)] p-7">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent-deep)]">
          <TierIcon kind={t.icon} />
        </div>
        <div>
          <div className="eyebrow !text-[var(--muted)]">{t.step}</div>
          <h3 className="text-[20px] font-bold leading-tight text-[var(--ink)]">{t.title}</h3>
        </div>
      </div>

      <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--body)]">{t.desc}</p>
      <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
        <span className="font-semibold text-[var(--ink)]">{t.focusLabel}</span> {t.focus}
      </p>

      <div className="mt-auto grid grid-cols-[140px_90px_1fr] gap-4 border-t border-[var(--hairline)] pt-5">
        <div>
          <div className="mb-1 text-[var(--accent-deep)]">
            <PriceTagIcon />
          </div>
          <div className="text-[20px] font-bold text-[var(--accent-deep)]">{t.price}</div>
          <div className="text-[11px] text-[var(--muted)]">{t.priceSub}</div>
        </div>
        <div>
          <div className="mb-1 text-[var(--muted)]">
            <MarginIcon />
          </div>
          <div className="text-[20px] font-bold text-[var(--ink)]">{t.margin}</div>
          <div className="text-[11px] text-[var(--muted)]">Gross margin</div>
        </div>
        <div>
          <div className="mb-1 text-[var(--muted)]">
            <TermsIcon />
          </div>
          <div className="text-[13px] font-semibold text-[var(--ink)]">{t.terms}</div>
          <div className="text-[11px] text-[var(--muted)]">Contract terms</div>
        </div>
      </div>
    </div>
  );
}

export function S04_BusinessModel({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Business Model"
      subtitle="From Platform Subscriptions to Premium Subscriptions, supporting a land and expand strategy"
    >
      <div className="grid h-full grid-cols-[1fr_auto_1fr] content-center gap-x-8">
        <TierCard t={TIERS[0]} />

        <svg viewBox="0 0 40 24" className="h-5 w-10 self-center text-[var(--accent)]">
          <defs>
            <marker id="tierArrow" markerWidth="7" markerHeight="7" refX="3.2" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="var(--accent)" />
            </marker>
          </defs>
          <line
            x1="2"
            y1="12"
            x2="30"
            y2="12"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="4 3"
            strokeLinecap="round"
            markerEnd="url(#tierArrow)"
            className="arrow-flow"
          />
        </svg>

        <TierCard t={TIERS[1]} />
      </div>
    </Slide>
  );
}
