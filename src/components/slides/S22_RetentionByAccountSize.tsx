import { Slide } from "../deck/Slide";

const BANDS = [
  { l: "Below $25k", grr: 83, logo: 83, fill: "#c3e6cc" },
  { l: "$25k to <$50k", grr: 87, logo: 96, fill: "#86cc98" },
  { l: "$50k and above", grr: 93, logo: 100, fill: "#4db364", featured: true },
];

const CALLOUTS = [
  {
    value: "100%",
    text: "of accounts ≥ $50k retained, representing 67% of ACV",
  },
  {
    value: "$8.2k",
    text: "median ACV of churned logos: churn sat in small accounts",
  },
  {
    value: "83% → 87% → 93%",
    text: "GRR rises with account size",
  },
];

const W = 600;
const H = 280;
const X0 = 44;
const X1 = 588;
const Y_TOP = 40;
const Y_BOT = 230;
const PLOT_H = Y_BOT - Y_TOP;
const BAR_W = 76;

const y = (v: number) => Y_BOT - (v / 100) * PLOT_H;
const bandW = (X1 - X0) / BANDS.length;
const cx = (i: number) => X0 + bandW * (i + 0.5);

export function S22_RetentionByAccountSize({ index, total }: { index: number; total: number }) {
  const line = BANDS.map((b, i) => `${cx(i)},${y(b.grr)}`).join(" ");
  return (
    <Slide
      index={index}
      total={total}
      title="Retention"
    >
      <div className="flex h-full flex-col">
        <div className="grid min-h-0 flex-1 grid-cols-[1.7fr_1fr] divide-x divide-[var(--hairline)] pt-10">
          <div className="flex flex-col pr-10">
            <div className="flex items-baseline justify-between">
              <div className="caption uppercase tracking-wide">
                Retention by Account Size (Opening ACV)
              </div>
              <div className="text-[11px] text-[var(--muted)]">Year to 30 Jun 2026</div>
            </div>
            <div className="mt-2 flex items-center gap-5">
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-2.5 w-2.5 rounded-sm accent-gradient" /> Logo retention
              </span>
              <span className="flex items-center gap-1.5 text-[11px] text-[var(--body)]">
                <span className="h-[3px] w-4 rounded-full bg-[var(--premium)]" /> Gross retention (GRR)
              </span>
            </div>

            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="mt-2 min-h-0 w-full flex-1"
              role="img"
              aria-label="GRR and logo retention by opening ACV band"
            >
              {BANDS.map(
                (b, i) =>
                  b.featured && (
                    <rect
                      key={b.l}
                      x={X0 + bandW * i + 6}
                      y={Y_TOP - 22}
                      width={bandW - 12}
                      height={Y_BOT - Y_TOP + 22}
                      rx={6}
                      fill="rgba(77,179,100,0.10)"
                    />
                  ),
              )}
              {[0, 50, 100].map((g) => (
                <g key={g}>
                  <line
                    x1={X0}
                    x2={X1}
                    y1={y(g)}
                    y2={y(g)}
                    stroke={g === 0 ? "#9aa5b1" : "#e7eaee"}
                    strokeDasharray={g === 0 ? undefined : "3 3"}
                  />
                  <text x={X0 - 8} y={y(g) + 4} textAnchor="end" fontSize="11" fill="#64748b">
                    {g}%
                  </text>
                </g>
              ))}
              {BANDS.map((b, i) => (
                <g key={b.l}>
                  <rect
                    className="bar-grow"
                    style={{ transformBox: "fill-box", animationDelay: `${i * 0.1}s` }}
                    x={cx(i) - BAR_W / 2}
                    y={y(b.logo)}
                    width={BAR_W}
                    height={Y_BOT - y(b.logo)}
                    fill={b.fill}
                  />
                  <text
                    x={cx(i)}
                    y={Y_BOT - 14}
                    textAnchor="middle"
                    fontSize="17"
                    fontWeight="700"
                    fill="#111827"
                  >
                    {b.logo}%
                  </text>
                  <text
                    x={cx(i)}
                    y={Y_BOT + 22}
                    textAnchor="middle"
                    fontSize="12.5"
                    fontWeight="600"
                    fill="#111827"
                  >
                    {b.l}
                  </text>
                </g>
              ))}
              <polyline
                points={line}
                fill="none"
                stroke="#0d4567"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {BANDS.map((b, i) => (
                <g key={b.l}>
                  <circle cx={cx(i)} cy={y(b.grr)} r="6" fill="white" stroke="#0d4567" strokeWidth="3" />
                  <text
                    x={cx(i)}
                    y={y(b.grr) + 26}
                    textAnchor="middle"
                    fontSize="15"
                    fontWeight="700"
                    fill="#0d4567"
                  >
                    {b.grr}%
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="flex flex-col justify-center gap-6 pl-10">
            {CALLOUTS.map((c, i) => (
              <div
                key={c.value}
                className="pop-in flex flex-col gap-1.5 border-b border-[var(--hairline)] pb-5 last:border-b-0 last:pb-0"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className="tabular text-[30px] font-bold leading-none tracking-[-0.01em] text-gradient">
                  {c.value}
                </div>
                <div className="text-[14px] leading-snug text-[var(--body)]">{c.text}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-2 text-[9.5px] leading-snug text-[var(--muted)]">
          Source: Smartkarma customer cube; USD. Account size is measured at 30 Jun 2025 and retention
          covers the year to 30 Jun 2026.
          <br />
          Logo retention measures whether a customer remains active;
          spending reductions within retained customers are captured in GRR. Figures are rounded.
        </p>
      </div>
    </Slide>
  );
}
