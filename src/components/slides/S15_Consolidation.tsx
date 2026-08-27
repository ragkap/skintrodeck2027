import { Slide } from "../deck/Slide";
import { Table } from "../deck/ui";

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
  ["2025", "Clearwater Analytics", "Enfusion"],
  ["2025", "Alphasense", "Tegus"],
  ["2025", "S&P Global", "With Intelligence"],
  ["2026", "Bloomberg", "Canoe Intelligence"],
  ["2026", "MSCI", "PM Insights, Compass & Vantager"],
];

function styleRows(rows: [string, string, string][]) {
  return rows.map(([year, acquirer, target]) => {
    const recent = Number(year) >= 2025;
    return [
      <span key="y" className={recent ? "font-bold text-[var(--accent-deep)]" : undefined}>
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
}

export function S15_Consolidation({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="An Industry Ripe for Consolidation"
      subtitle="Rapidly growing, highly fragmented, increasingly strategic — deal activity is consistent and accelerating"
    >
      <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-10 pt-1 text-[11px]">
        <ul className="flex flex-col gap-3 border-r border-[var(--hairline)] pr-8">
          {[
            ["Fragmented & Inefficient Market:", "niche players, especially in APAC, lack scale, leading to inefficiencies in distribution, pricing, and client acquisition."],
            ["Regulatory Changes:", "MiFID II and other shifts weaken traditional sell-side models, favoring independent, tech-driven platforms."],
            ["Demand for Integrated Solutions:", "investors seek a one-stop platform for research, analytics, and expert access, particularly for APAC's fragmented markets."],
            ["Alpha Capture:", "asset managers prioritize specialist, high-quality research that is differentiated."],
            ["AI & Tech Disruptions:", "legacy players struggle with AI, while cloud-based platforms scale efficiently."],
            ["Investor Interest & Recent Deals:", "consolidation is accelerating, with major transactions involving AlphaSense, S&P and Blackrock."],
          ].map(([t, d], i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-[5px] w-[5px] flex-none rounded-full bg-[var(--accent)]" />
              <span className="leading-snug text-[var(--body)]">
                <span className="font-semibold text-[var(--ink)]">{t}</span> {d}
              </span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 self-start">
          <Table dense columns={["Year", "Acquirer", "Target"]} rows={styleRows(DEALS)} />
          <Table dense columns={["Year", "Acquirer", "Target"]} rows={styleRows(DEALS_2)} />
        </div>
      </div>
    </Slide>
  );
}
