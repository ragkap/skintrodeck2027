import Image from "next/image";
import { Slide } from "../deck/Slide";
import { Pill, Stat } from "../deck/ui";

function IconScan() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" strokeLinecap="round" />
      <path d="M4 12h16" strokeLinecap="round" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}
function IconPulse() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M3 12h4l2-7 4 14 2-7h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconSatellite() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="8" y="8" width="8" height="8" rx="1.5" transform="rotate(45 12 12)" />
      <path d="M4 20l3-3M14 6l4-4M17 3l4 4-3 3-4-4Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconCart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M3 4h2l2.4 12.2A2 2 0 0 0 9.36 18H18a2 2 0 0 0 1.96-1.6L21.5 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="21" r="1.2" />
      <circle cx="18" cy="21" r="1.2" />
    </svg>
  );
}

const CATEGORIES = [
  { t: "Machine-Readable Research", icon: IconScan },
  { t: "Specialist Alpha-Capture", icon: IconTarget },
  { t: "Sentiment, Flow & Liquidity", icon: IconPulse },
  { t: "Commodities Pricing / Satellite", icon: IconSatellite },
  { t: "Point of Sales, E-commerce", icon: IconCart },
];

type Client = { name: string; file?: string; dark?: boolean };

const CLIENTS: Client[] = [
  { name: "B.A.M", file: "bam.webp" },
  { name: "BlackRock", file: "blackrock.webp" },
  { name: "Marshall Wace", file: "marshallwace.webp" },
  { name: "Millennium", file: "millennium.webp" },
  { name: "Morgan Stanley", file: "morgan-stanley.webp" },
  { name: "Point72", file: "point72.webp" },
  { name: "Susquehanna", file: "susquehanna.webp", dark: true },
  { name: "QRT", file: "qrt.webp" },
  { name: "ExodusPoint", file: "exoduspoint.webp" },
  { name: "Schonfeld", file: "schonfeld.webp" },
];

function ClientLogo({ c }: { c: Client }) {
  return (
    <div
      className={
        c.dark
          ? "flex h-8 items-center justify-center rounded-[5px] bg-[var(--ink)] px-1.5"
          : "flex h-8 items-center justify-center rounded-[5px] border border-[var(--hairline)] px-1.5"
      }
    >
      {c.file ? (
        <Image
          src={`/logos/clients/${c.file}`}
          alt={c.name}
          width={100}
          height={28}
          className="h-[15px] w-auto object-contain"
          unoptimized
        />
      ) : (
        <span className="text-center text-[9.5px] font-semibold leading-tight text-[var(--ink)]">
          {c.name}
        </span>
      )}
    </div>
  );
}

export function S12_SpecialistDatasets({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Premium Alternative Datasets"
      subtitle="Specialist alt-datasets for systematic & quant desks across flow, credit, POS & commodities, sold per-pod (US$25–200k)"
    >
      <div className="grid h-full grid-cols-[1fr_1.15fr] gap-14 pt-2">
        <div className="flex flex-col justify-center">
          <div className="caption mb-3 uppercase tracking-wide">
            Quantitative &amp; Systematic Institutional Investors
          </div>
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.map((c, i) => (
              <div
                key={c.t}
                className={
                  i === CATEGORIES.length - 1
                    ? "col-span-2 rounded-[10px] border border-[var(--hairline)] p-4"
                    : "rounded-[10px] border border-[var(--hairline)] p-4"
                }
              >
                <div className="text-[var(--accent-deep)]">
                  <c.icon />
                </div>
                <div className="mt-2 text-[12px] font-semibold leading-snug text-[var(--ink)]">
                  {c.t}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="grid grid-cols-3 divide-x divide-[var(--hairline)]">
            <Stat value="30+" label="Premium Datasets" />
            <div className="pl-8">
              <Stat value="50%+" label="Data as % of total Revenue" />
            </div>
            <div className="pl-8">
              <Stat value="65%" label="Data as % of new sales" />
            </div>
          </div>

          <div className="border-t border-[var(--hairline)] pt-5">
            <div className="caption mb-3 uppercase tracking-wide">Existing Data Clients</div>
            <div className="grid grid-cols-5 gap-2">
              {CLIENTS.map((c) => (
                <ClientLogo key={c.name} c={c} />
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--hairline)] pt-5">
            <div className="flex items-center gap-2.5">
              <Pill>Wealth-Tech</Pill>
              <span className="text-[14px] font-bold text-[var(--ink)]">
                SmartWealth API &amp; MCP
              </span>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-[var(--body)]">
              Supports the Model Context Protocol, so wealth platforms build AI-powered,
              personalised conversational experiences grounded in trusted Smartkarma
              intelligence.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
