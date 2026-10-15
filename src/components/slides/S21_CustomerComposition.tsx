import { Slide } from "../deck/Slide";

const SEGMENTS = [
  {
    name: "Institutional Investors",
    acv: "75%",
    share: 75,
    nrr: "111%",
    color: "var(--accent)",
  },
  {
    name: "Sellside & Intermediaries",
    acv: "22%",
    share: 22,
    nrr: "122%",
    color: "var(--premium)",
  },
];

const OTHER_SHARE = 3;

type Footprint = { l: string; v: number; label?: string };

const GROUPS: { title: string; total: string; multi?: boolean; rows: Footprint[] }[] = [
  {
    title: "Single region",
    total: "70%",
    rows: [
      { l: "APAC only", v: 62 },
      { l: "EMEA only", v: 6 },
      { l: "North America only", v: 3 },
    ],
  },
  {
    title: "Multi-region or global",
    total: "30%",
    multi: true,
    rows: [
      { l: "Global", v: 11 },
      { l: "APAC + EMEA", v: 11 },
      { l: "APAC + North America", v: 8 },
      { l: "EMEA + North America", v: 0.5, label: "<1%" },
    ],
  },
];

const MAX = 62;

export function S21_CustomerComposition({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Customer Composition"
      subtitle="Institutional and sellside customers drive 97% of ACV; usage is Asia-first and expanding under global master service agreements"
    >
      <div className="flex h-full flex-col">
        <div className="grid min-h-0 flex-1 grid-cols-2 divide-x divide-[var(--hairline)] pt-8 pb-1">
          <div className="flex flex-col pr-10">
            <div className="flex items-baseline justify-between">
              <div className="caption uppercase tracking-wide">ACV by Customer Segment</div>
              <div className="text-[11px] text-[var(--muted)]">At 30 Jun 2026</div>
            </div>

            <div className="flex flex-1 flex-col justify-center">
            <div className="flex h-11 w-full overflow-hidden rounded-[3px]">
              {SEGMENTS.map((s) => (
                <div
                  key={s.name}
                  style={{ width: `${s.share}%`, background: s.color }}
                  className="bar-grow-x flex items-center justify-center text-[12px] font-bold text-white"
                >
                  {s.share}%
                </div>
              ))}
              <div
                style={{ width: `${OTHER_SHARE}%` }}
                className="bar-grow-x bg-[#d7dce2]"
                title="Other: 3%"
              />
            </div>

            <div className="mt-6 grid grid-cols-[1fr_52px_52px] items-end gap-x-3 border-b-2 border-[var(--ink)] pb-1.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--ink)]">
              <span>Segment</span>
              <span className="text-right">ACV %</span>
              <span className="text-right">NRR</span>
            </div>
            {SEGMENTS.map((s) => (
              <div
                key={s.name}
                className="grid grid-cols-[1fr_52px_52px] items-center gap-x-3 border-b border-[var(--hairline)] py-5"
              >
                <div className="flex gap-2.5">
                  <span
                    className="mt-1 h-3 w-3 flex-none rounded-sm"
                    style={{ background: s.color }}
                  />
                  <div>
                    <div className="text-[14px] font-semibold text-[var(--ink)]">{s.name}</div>
                  </div>
                </div>
                <span className="tabular text-right text-[14px] text-[var(--body)]">{s.acv}</span>
                <span className="tabular text-right text-[14px] text-[var(--body)]">{s.nrr}</span>
              </div>
            ))}
            </div>
            <p className="flex min-h-[48px] items-center justify-center text-center font-serif text-[13px] italic text-[var(--body)]">
              Every customer segment is expanding, with healthy net retention
            </p>
          </div>

          <div className="flex flex-col pl-10">
            <div className="flex items-baseline justify-between">
              <div className="caption uppercase tracking-wide">ACV by Usage Footprint</div>
              <div className="text-[11px] text-[var(--muted)]">At 30 Jun 2026</div>
            </div>
            <div className="mt-4 flex flex-1 flex-col justify-center gap-5">
              {GROUPS.map((g, gi) => (
                <div
                  key={g.title}
                  className={`rounded-[8px] px-4 py-3 ${
                    g.multi ? "bg-[rgba(77,179,100,0.10)]" : ""
                  }`}
                >
                  <div className="mb-2.5 flex items-baseline justify-between border-b border-[var(--hairline)] pb-1.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--ink)]">
                      {g.title}
                    </span>
                    <span
                      className={`tabular text-[22px] font-bold leading-none ${
                        g.multi ? "text-gradient" : "text-[var(--ink)]"
                      }`}
                    >
                      {g.total}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {g.rows.map((f, i) => (
                      <div key={f.l} className="grid grid-cols-[140px_1fr] items-center gap-3">
                        <span className="text-right text-[12px] text-[var(--body)]">{f.l}</span>
                        <div className="flex items-center gap-2">
                          <div
                            style={{
                              width: `${Math.max((f.v / MAX) * 85, 1)}%`,
                              animationDelay: `${(gi * 3 + i) * 0.06}s`,
                            }}
                            className={`bar-grow-x h-[16px] ${
                              g.multi ? "accent-gradient" : "bg-[#a9c4d8]"
                            }`}
                          />
                          <span className="tabular text-[12px] font-semibold text-[var(--ink)]">
                            {f.label ?? `${f.v}%`}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="flex min-h-[48px] items-center justify-center text-center font-serif text-[13px] italic text-[var(--body)]">
              30% of ACV already multi-region or global
            </p>
          </div>
        </div>

        <p className="mt-6 text-[9.5px] leading-snug text-[var(--muted)]">
          Source: Smartkarma customer cube, ACV at 30 Jun 2026; USD. Retention is for the year to 30 Jun 2026,
          weighted by opening ACV. Figures may not sum due to rounding.
          <br />
          Institutional: HFs, AMs, PE, Asset Owners, FOs. Sellside:
          banks, broker-dealers, exchanges, wealth. Other (3% of ACV; NRR 101%): corporate
          intel/commodities, IR.
          <br />
          Geography reflects contract usage coverage (mixed-region contracts counted once), not revenue
          allocation or customer headquarters.
        </p>
      </div>
    </Slide>
  );
}
