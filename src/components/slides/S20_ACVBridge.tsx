import { Slide } from "../deck/Slide";

const SCALE = 2.5;
const CHART_H = 360;

type Bar = {
  l: string;
  from: number;
  to: number;
  label: string;
  kind: "total" | "subtotal" | "up" | "down";
  tag?: string;
};

const BARS: Bar[] = [
  { l: "Opening ACV", from: 0, to: 100, label: "100", kind: "subtotal" },
  { l: "Expansion", from: 100, to: 123, label: "+23", kind: "up" },
  { l: "Contraction", from: 116, to: 123, label: "−7", kind: "down" },
  { l: "Churn", from: 113, to: 116, label: "−3", kind: "down" },
  { l: "Retained base", from: 0, to: 113, label: "113", kind: "subtotal", tag: "NRR 113%" },
  { l: "Addition", from: 113, to: 133, label: "+20", kind: "up" },
  { l: "Closing ACV", from: 0, to: 133, label: "133", kind: "total" },
];

const TAKEAWAYS = [
  {
    value: "+33%",
    text: "ACV",
  },
  {
    value: "113%",
    text: "Net retention",
  },
  {
    value: "2.3x",
    text: "Expansion / (Churn + Contraction)",
  },
];

function barStyle(kind: Bar["kind"]) {
  if (kind === "total") return "bg-[var(--premium)]";
  if (kind === "subtotal") return "bg-[#7da5c3]";
  if (kind === "up") return "accent-gradient";
  return "bg-[#d4959f]";
}

export function S20_ACVBridge({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="ACV Bridge"
    >
      <div className="flex h-full flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-[1.9fr_1fr] divide-x divide-[var(--hairline)] pt-2">
        <div className="flex flex-col pr-10">
          <div className="flex items-baseline justify-between">
            <div className="caption uppercase tracking-wide">
              ACV Bridge: % of Opening ACV
            </div>
            <div className="text-[11px] text-[var(--muted)]">30 Jun 2025 → 30 Jun 2026</div>
          </div>

          <div className="relative mt-6 flex-1">
            <div
              className="absolute inset-x-0 bottom-[44px] border-t border-[var(--hairline)]"
              aria-hidden
            />
            <div
              className="absolute inset-x-0 border-t border-dashed border-[var(--hairline-strong)]"
              style={{ bottom: 44 + 100 * SCALE }}
              aria-hidden
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end">
              {BARS.map((b, i) => {
                const h = (b.to - b.from) * SCALE;
                return (
                  <div key={b.l} className="flex flex-1 flex-col items-center">
                    <div
                      className="relative w-full"
                      style={{ height: CHART_H }}
                    >
                      <div
                        className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center"
                        style={{ bottom: b.from * SCALE }}
                      >
                        <div
                          style={{ height: h, animationDelay: `${i * 0.08}s` }}
                          className={`bar-grow w-12 ${barStyle(b.kind)}`}
                        />
                      </div>
                      <div
                        className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center gap-0.5"
                        style={{ bottom: b.to * SCALE + 4 }}
                      >
                        {b.tag && (
                          <span className="whitespace-nowrap rounded-full border border-[var(--hairline-strong)] bg-white px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--ink)]">
                            {b.tag}
                          </span>
                        )}
                        <span
                          className={`tabular text-[15px] font-bold ${
                            b.kind === "down"
                              ? "text-[#b8606d]"
                              : b.kind === "up"
                                ? "text-[var(--positive)]"
                                : "text-[var(--ink)]"
                          }`}
                        >
                          {b.label}
                        </span>
                      </div>
                    </div>
                    <div className="h-[44px] w-full px-1 pt-2 text-center text-[10.5px] font-medium leading-tight text-[var(--muted)]">
                      {b.l}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-7 pl-10">
          {TAKEAWAYS.map((t, i) => (
            <div
              key={t.value}
              className="pop-in flex flex-col gap-1.5 border-b border-[var(--hairline)] pb-6 last:border-b-0 last:pb-0"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className="tabular text-[34px] font-bold leading-none tracking-[-0.01em] text-gradient">
                {t.value}
              </div>
              <div className="text-[14px] leading-snug text-[var(--body)]">{t.text}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 text-[9.5px] leading-snug text-[var(--muted)]">
        Source: Smartkarma customer cube, Q1 2022 to Q2 2026; USD. ACV is annual contract value at each
        reporting date and differs from recognised revenue and cash receipts.
        <br />
        GRR = opening ACV less
        contraction and customer churn, divided by opening ACV. NRR = closing ACV from opening
        customers divided by their opening ACV. Both are dollar-weighted. Figures may not sum due to rounding.
      </p>
      </div>
    </Slide>
  );
}
