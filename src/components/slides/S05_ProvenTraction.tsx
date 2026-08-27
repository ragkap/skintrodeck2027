import { Slide } from "../deck/Slide";
import { Stat } from "../deck/ui";

const GROUPS: { label: string; logos: string[] }[] = [
  { label: "Asset Owners", logos: ["GIC", "PSP Investments", "SWIB", "ADIA", "JETRO", "JBIC"] },
  {
    label: "Asset Managers",
    logos: ["Millennium", "Point72", "Brevan Howard", "BlackRock", "Sequoia", "First Sentier"],
  },
  {
    label: "Investment Banks",
    logos: ["J.P. Morgan", "Goldman Sachs", "Morgan Stanley", "Citi", "Société Générale", "HSBC"],
  },
  { label: "Exchanges", logos: ["SGX", "NZX", "SET", "JPX", "ASEAN Exchanges", "ADDX"] },
  {
    label: "Corporates",
    logos: ["Aramco", "Olam", "First REIT", "DBS", "Elevandi", "RedDoorz"],
  },
  {
    label: "Wealth Managers",
    logos: ["grOw", "Syfe", "Maybank", "Interactive Brokers", "CFA Institute", "The Economic Times"],
  },
];

export function S05_ProvenTraction({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Proven Traction"
      subtitle="With global tier-1 asset managers, hedge funds, bulge-bracket banks, exchanges and corporates"
    >
      <div className="grid h-full grid-cols-[200px_1fr] gap-10 pt-2">
        <div className="flex flex-col justify-center gap-8 border-r border-[var(--hairline)] pr-8">
          <Stat value="$14T" label="Client AUM" />
          <Stat value="70k+" label="Users" />
          <Stat value="30k" label="Press Mentions" />
          <Stat value="10k" label="Companies Covered" />
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-7 self-center">
          {GROUPS.map((g) => (
            <div key={g.label} className="flex flex-col">
              <div className="caption mb-3 uppercase tracking-wide">{g.label}</div>
              <div className="grid grid-cols-2 gap-2">
                {g.logos.map((l) => (
                  <div
                    key={l}
                    className="rounded-[6px] border border-[var(--hairline)] px-2.5 py-2 text-center text-[11.5px] font-semibold text-[var(--ink)]"
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
