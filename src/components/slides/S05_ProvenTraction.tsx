import Image from "next/image";
import { Slide } from "../deck/Slide";
import { Stat } from "../deck/ui";

type Logo = { name: string; file?: string };

const GROUPS: { label: string; logos: Logo[] }[] = [
  {
    label: "Asset Owners",
    logos: [
      { name: "GIC", file: "gic.webp" },
      { name: "PSP Investments", file: "psp-investments.webp" },
      { name: "SWIB", file: "swib.png" },
      { name: "ADIA", file: "adia.webp" },
      { name: "JETRO", file: "jetro.png" },
      { name: "JBIC", file: "jbic.jpg" },
    ],
  },
  {
    label: "Asset Managers",
    logos: [
      { name: "Millennium", file: "millennium.webp" },
      { name: "Point72", file: "point72.webp" },
      { name: "Brevan Howard", file: "brevan-howard.webp" },
      { name: "BlackRock", file: "blackrock.webp" },
      { name: "Sequoia", file: "sequoia.webp" },
      { name: "Citadel", file: "citadel.webp" },
    ],
  },
  {
    label: "Investment Banks",
    logos: [
      { name: "J.P. Morgan", file: "jpmorgan.webp" },
      { name: "Goldman Sachs", file: "goldman-sachs.webp" },
      { name: "Morgan Stanley", file: "morgan-stanley.webp" },
      { name: "Citi", file: "citi.webp" },
      { name: "Société Générale", file: "societe-generale.webp" },
      { name: "HSBC", file: "hsbc.webp" },
    ],
  },
  {
    label: "Exchanges",
    logos: [
      { name: "SGX", file: "sgx.webp" },
      { name: "NZX", file: "nzx.webp" },
      { name: "SET", file: "set.webp" },
      { name: "JPX", file: "jpx.gif" },
      { name: "ASEAN Exchanges" },
      { name: "ADDX", file: "addx.webp" },
    ],
  },
  {
    label: "Corporates",
    logos: [
      { name: "Aramco", file: "aramco.webp" },
      { name: "Olam", file: "olam.webp" },
      { name: "First REIT", file: "first-reit.webp" },
      { name: "DBS", file: "dbs.webp" },
      { name: "Veon", file: "veon.webp" },
      { name: "Geo Energy" },
    ],
  },
  {
    label: "Wealthtecs",
    logos: [
      { name: "grOw", file: "grow.webp" },
      { name: "Syfe" },
      { name: "Maybank", file: "maybank.webp" },
      { name: "Interactive Brokers", file: "interactive-brokers.webp" },
      { name: "CFA Institute", file: "cfa-institute.webp" },
      { name: "Caixin", file: "caixin.webp" },
    ],
  },
];

function LogoCell({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-9 items-center justify-center rounded-[6px] border border-[var(--hairline)] px-2.5">
      {logo.file ? (
        <Image
          src={`/logos/clients/${logo.file}`}
          alt={logo.name}
          width={120}
          height={32}
          className="h-[18px] w-auto object-contain"
          unoptimized
        />
      ) : (
        <span className="text-center text-[11px] font-semibold leading-tight text-[var(--ink)]">
          {logo.name}
        </span>
      )}
    </div>
  );
}

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
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-7 self-center">
          {GROUPS.map((g) => (
            <div key={g.label} className="flex flex-col">
              <div className="caption mb-3 uppercase tracking-wide">{g.label}</div>
              <div className="grid grid-cols-2 gap-2">
                {g.logos.map((l) => (
                  <LogoCell key={l.name} logo={l} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
