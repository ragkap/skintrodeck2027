import { Slide } from "../deck/Slide";

const TIERS = [
  {
    step: "Land",
    title: "Platform Subscription",
    desc: "Real-time insight from 300+ curated sources, under 1 subscription.",
    focusLabel: "Specialist Focus:",
    focus: "Event-Driven, Index Rebalance, ECM, Private Markets.",
    price: "US$10,950",
    priceSub: "per user, annual, in advance",
    margin: "30%+",
    icon: "package" as const,
  },
  {
    step: "Expand",
    title: "Premium Subscription",
    desc: "Specialist alternative data subscriptions and high-touch access.",
    focusLabel: "Delivery:",
    focus: "Sold per-team, per-dataset basis, via API and MCP.",
    price: "US$35k–200k",
    priceSub: "per dataset, per team, annual, in advance",
    margin: "30–90%",
    icon: "gem" as const,
    premium: true,
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

function TierCard({ t }: { t: (typeof TIERS)[number] }) {
  const premium = "premium" in t && t.premium;
  return (
    <div
      className={
        premium
          ? "relative flex h-full flex-col rounded-[12px] border-[1.5px] border-[var(--premium)] bg-[rgba(13,69,103,0.035)] p-7 shadow-[0_8px_24px_rgba(13,69,103,0.14)]"
          : "flex h-full flex-col rounded-[12px] border border-[var(--hairline)] p-7"
      }
    >
      {premium && (
        <span className="absolute -top-3 left-7 rounded-full bg-[var(--premium)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Premium
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 flex-none items-center justify-center">
          {premium && (
            <span className="glow-pulse pointer-events-none absolute inset-[-4px] rounded-full border-[1.5px] border-[var(--premium)]" />
          )}
          <div
            className={
              premium
                ? "relative flex h-10 w-10 items-center justify-center rounded-full bg-[var(--premium)] text-white"
                : "relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent-deep)]"
            }
          >
            <TierIcon kind={t.icon} />
          </div>
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

      <div className="mt-auto grid grid-cols-[1fr_90px] gap-4 border-t border-[var(--hairline)] pt-5">
        <div>
          <div className="text-[20px] font-bold text-[var(--ink)]">{t.price}</div>
          <div className="text-[11px] text-[var(--muted)]">{t.priceSub}</div>
        </div>
        <div>
          <div className="text-[20px] font-bold text-[var(--ink)]">{t.margin}</div>
          <div className="text-[11px] text-[var(--muted)]">Gross margin</div>
        </div>
      </div>
    </div>
  );
}

function ExpansionMath() {
  return (
    <div className="flex w-[168px] flex-none flex-col items-center gap-2 self-center">
      <div className="flex flex-col items-center rounded-[10px] border border-[var(--hairline)] px-3 py-2 text-center">
        <div className="tabular text-[16px] font-bold leading-none text-[var(--ink)]">1 team</div>
        <div className="mt-1 text-[10px] text-[var(--muted)]">arrives on Platform</div>
      </div>

      <svg viewBox="0 0 24 20" className="h-4 w-4 text-[var(--accent)]">
        <line x1="12" y1="1" x2="12" y2="16" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round" className="arrow-flow" />
        <path d="M7 13 L12 18 L17 13" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="flex flex-col items-center rounded-[10px] border border-[var(--hairline)] px-3 py-2 text-center">
        <div className="tabular text-[16px] font-bold leading-none text-[var(--ink)]">3–4 logins</div>
        <div className="mt-1 text-[10px] text-[var(--muted)]">each a distinct upsell path</div>
      </div>

      <svg viewBox="0 0 24 20" className="h-4 w-4 text-[var(--accent)]">
        <line x1="12" y1="1" x2="12" y2="16" stroke="var(--accent)" strokeWidth="2" strokeDasharray="3 2.5" strokeLinecap="round" className="arrow-flow" />
        <path d="M7 13 L12 18 L17 13" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="flex flex-col items-center rounded-[10px] bg-[var(--premium)] px-3 py-2 text-center">
        <div className="tabular text-[16px] font-bold leading-none text-white">N× Premium</div>
        <div className="mt-1 text-[10px] text-white/85">subscriptions per login</div>
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
      <div className="flex h-full flex-col justify-center gap-5">
        <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-x-8">
          <TierCard t={TIERS[0]} />
          <ExpansionMath />
          <TierCard t={TIERS[1]} />
        </div>
        <p className="text-center text-[12.5px] leading-relaxed text-[var(--body)]">
          <span className="font-semibold text-[var(--ink)]">The content layer drives the funnel:</span>{" "}
          Platform Subscription content fuels discovery, and every login becomes an upsell path — expanding
          one team account into multiple Premium dataset sales.
        </p>
      </div>
    </Slide>
  );
}
