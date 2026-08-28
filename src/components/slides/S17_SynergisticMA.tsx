import { Slide } from "../deck/Slide";
import { Pill, Table } from "../deck/ui";

const PIPELINE: [string, string, string, string, string, string][] = [
  ["1", "WealthTech Platform", "APAC Wealth Tech Platform", "Prospect", "APAC", "14.5"],
  ["1", "IR Platform", "SEA IR Tech Platform", "Closed (Pricing)", "APAC", "5"],
  ["1", "Data Platform", "Data Platform as a Service. Exchange Clients", "Exploring (SGX Intro)", "APAC", "4"],
  ["1", "Data Platform", "Credit Data Platform", "KIV (SGX portco)", "APAC", "3"],
  ["1", "WealthTech Platform", "APAC Wealth Tech Platform", "Exploring", "APAC", "0.75"],
  ["2", "Data Platform", "Established Data Vendor; Geo Fit; Roll-up Strat", "Exploring (Organic)", "EMEA", "51"],
  ["2", "Pvt Market Data", "Complementary to Smartkarma push into pvt mkts", "Exploring (Organic)", "APAC", "10"],
  ["2", "IR Solutions Platform", "Japan focused IR Research Solutions Platform", "Commercial Partnership", "APAC", "6"],
  ["2", "Digital Exchange", "Digital exchange and fractionalisation; existing SK clients", "KIV (Existing Client)", "APAC", "4"],
  ["2", "Data Platform", "Data Distribution Platform", "Exploring (SGX Intro)", "US", "0.6"],
  ["3", "WealthTech Platform", "APAC Wealth Tech Platform", "Prospect", "APAC", "12.9"],
  ["3", "IR Solutions", "Issuer IR focused digital media platform", "KIV (downgraded priority)", "EMEA", "12"],
  ["3", "Quant Data Platform", "Global Quant Data Solutions Platform", "Prospect", "APAC", "6"],
  ["3", "IRP", "Independent research provider", "KIV (downgraded priority)", "APAC", "6"],
  ["3", "IRP", "Credit, Credit-data focused IRP", "KIV (Existing IP)", "APAC", "4.5"],
  ["3", "Pvt Market Data", "Private companies data platform", "Exploring", "APAC", "2.5"],
  ["3", "AI Tech", "Fintech Technology Platform", "KIV (downgraded priority)", "APAC", "2.5"],
  ["3", "RMS", "Research Management Platform", "Prospect", "APAC", "1.5"],
];

export function S17_SynergisticMA({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Synergistic M&A Potential"
      subtitle="Opportunities among Smartkarma's existing provider universe"
    >
      <div className="flex h-full flex-col gap-2 pt-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="caption uppercase tracking-wide">Active pipeline</span>
          </div>
          <Pill>Total LTM ARR: US$147m</Pill>
        </div>
        <Table
          dense
          columns={["Tier", "Category", "Description", "Status", "HQ", "LTM Rev ($m)"]}
          rows={PIPELINE}
          rowClassName={(row) => (row[0] === "1" ? "bg-[#f0f8f2]" : "")}
        />
      </div>
    </Slide>
  );
}
