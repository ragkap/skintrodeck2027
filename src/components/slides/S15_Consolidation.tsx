import { Slide } from "../deck/Slide";
import { Mark, Table } from "../deck/ui";

const DEALS: [string, string, string][] = [
  ["2015", "SS&C", "Advent Software"],
  ["2015", "NeoXam", "SmartCo"],
  ["2016", "Bloomberg", "Barclays RAIS"],
  ["2016", "FactSet", "CYMBA, Vermilion"],
  ["2016", "Morningstar", "PitchBook"],
  ["2017", "Nasdaq", "eVestment"],
  ["2017", "FactSet", "BISAM"],
  ["2017", "LSEG", "The Yield Book"],
  ["2018", "SS&C", "DST Systems, Eze Software"],
  ["2019", "BlackRock", "eFront"],
  ["2019", "Confluence", "StatPro"],
  ["2020", "Nasdaq", "Solovis"],
  ["2020", "Morningstar", "Sustainalytics"],
  ["2020", "FactSet", "Truvalue Labs"],
];

const DEALS_2: [string, string, string][] = [
  ["2021", "LSEG", "Refinitiv"],
  ["2021", "Confluence", "Investment Metrics"],
  ["2021", "FactSet", "CUSIP Global Services"],
  ["2022", "S&P Global", "IHS Markit"],
  ["2023", "MSCI", "Burgiss"],
  ["2023", "Nasdaq", "Adenza"],
  ["2024", "S&P Global", "Visible Alpha"],
  ["2024", "BlackRock", "Preqin"],
  ["2025", "Clearwater", "Enfusion"],
  ["2025", "Alphasense", "Tegus"],
  ["2025", "S&P Global", "With Intelligence"],
  ["2026", "Bloomberg", "Canoe Intelligence"],
  ["2026", "MSCI", "PM Insights, Compass & Vantager"],
];

function styleRows(rows: [string, string, string][], padTo?: number) {
  const styled = rows.map(([year, acquirer, target]) => {
    const recent = Number(year) >= 2025;
    return [
      <span key="y" className={recent ? "font-bold text-gradient" : undefined}>
        {year}
      </span>,
      <span key="a" className={recent ? "font-semibold text-[var(--ink)]" : undefined}>
        {acquirer}
      </span>,
      <span key="t" className={recent ? "font-semibold text-[var(--ink)]" : undefined}>
        {target}
      </span>,
    ];
  });
  while (padTo && styled.length < padTo) {
    styled.push([<span key="pad">&nbsp;</span>, <span key="pad2" />, <span key="pad3" />]);
  }
  return styled;
}

const POINTS = [
  {
    t: "Fragmented & Inefficient Market:",
    d: (
      <>
        niche players, especially in APAC, lack scale, leading to{" "}
        <Mark>inefficiencies in distribution, pricing, and client acquisition</Mark>.
      </>
    ),
  },
  {
    t: "Regulatory Changes:",
    d: (
      <>
        <Mark>falling commission rates</Mark> and other shifts weaken traditional
        sell-side models, favoring independent, tech-driven platforms.
      </>
    ),
  },
  {
    t: "Demand for Integrated Solutions:",
    d: (
      <>
        investors seek a <Mark>one-stop platform</Mark> for research, analytics, and
        expert access, particularly for APAC&apos;s fragmented markets.
      </>
    ),
  },
  {
    t: "Alpha Capture:",
    d: "asset managers prioritize specialist, high-quality research that is differentiated.",
  },
  {
    t: "AI & Tech Disruptions:",
    d: "legacy players struggle with AI, while cloud-based platforms scale efficiently.",
  },
  {
    t: "Investor Interest & Recent Deals:",
    d: (
      <>
        consolidation is accelerating, with major transactions involving{" "}
        <Mark>AlphaSense, S&amp;P and Blackrock</Mark>.
      </>
    ),
  },
];

export function S15_Consolidation({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="An Industry Ripe for Consolidation"
      subtitle="Rapidly growing, highly fragmented, increasingly strategic: deal activity is consistent and accelerating"
    >
      <div className="grid h-full grid-cols-[0.85fr_1.15fr] items-center gap-10 pt-1">
        <ul className="flex flex-col gap-5 border-r border-[var(--hairline)] pr-8">
          {POINTS.map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1.5 h-[6px] w-[6px] flex-none rounded-full accent-gradient" />
              <span className="text-[13.5px] leading-snug text-[var(--body)]">
                <span className="font-semibold text-[var(--ink)]">{p.t}</span> {p.d}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 text-[11px]">
          <Table
            dense
            columns={["Year", "Acquirer", "Target"]}
            rows={styleRows(DEALS, DEALS_2.length)}
          />
          <Table
            dense
            columns={["Year", "Acquirer", "Target"]}
            rows={styleRows(DEALS_2, DEALS.length)}
          />
        </div>
      </div>
    </Slide>
  );
}
