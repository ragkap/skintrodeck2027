import Image from "next/image";
import { Slide } from "../deck/Slide";
import { Mark } from "../deck/ui";

type Partner = { name: string; file?: string };

const STEPS: {
  n: string;
  title: string;
  desc: React.ReactNode;
  partners?: Partner[];
}[] = [
  {
    n: "01",
    title: "Direct Sales",
    desc: "Enterprise-sales team with experience across data and platform sales (ex-MSCI, Credit Suisse, Bloomberg)",
  },
  {
    n: "02",
    title: "Platform Upsell",
    desc: (
      <>
        Platform usage data drives targeted, personalised upsell pathways — knowing
        what matters most to each user. <Mark>60% of new revenue is inbound</Mark>,
        then converted into premium subscriptions: a highly efficient flywheel.
      </>
    ),
  },
  {
    n: "03",
    title: "Channel Partners",
    desc: "Reselling Smartkarma solutions to their end customers",
    partners: [
      { name: "AllianceBernstein", file: "alliancebernstein.webp" },
      { name: "Société Générale", file: "societe-generale.webp" },
      { name: "BTIG" },
      { name: "Maybank", file: "maybank.webp" },
      { name: "CFA Institute", file: "cfa-institute.webp" },
      { name: "SGX Group", file: "sgx.webp" },
      { name: "TIM" },
      { name: "DMA" },
      { name: "extractAlpha", file: "extractalpha.webp" },
      { name: "Barrenjoey" },
    ],
  },
];

const CX = 150;
const CY = 150;
const OUTER_R = 130;
const INNER_R = 80;
const GAP = 3;
const SEGMENTS = [
  { start: -90, end: 30, color: "var(--accent-deep)" },
  { start: 30, end: 150, color: "var(--accent)" },
  { start: 150, end: 270, color: "var(--accent-deep)" },
];

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => ({
  x: CX + r * Math.cos(rad(deg)),
  y: CY + r * Math.sin(rad(deg)),
});

function donutSlice(startDeg: number, endDeg: number) {
  const s = startDeg + GAP;
  const e = endDeg - GAP;
  const o1 = pt(OUTER_R, s);
  const o2 = pt(OUTER_R, e);
  const i1 = pt(INNER_R, e);
  const i2 = pt(INNER_R, s);
  const largeArc = e - s > 180 ? 1 : 0;
  return `M ${o1.x} ${o1.y} A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${o2.x} ${o2.y} L ${i1.x} ${i1.y} A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${i2.x} ${i2.y} Z`;
}

const NETWORK_SATELLITES = [0, 60, 120, 180, 240, 300].map((deg) => pt(32, deg));

function Flywheel() {
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      {SEGMENTS.map((seg, i) => {
        const mid = (seg.start + seg.end) / 2;
        const labelPos = pt((OUTER_R + INNER_R) / 2, mid);
        return (
          <g key={i}>
            <path d={donutSlice(seg.start, seg.end)} fill={seg.color} />
            <text
              x={labelPos.x}
              y={labelPos.y + 9}
              textAnchor="middle"
              fontSize="26"
              fontWeight="800"
              fill="white"
            >
              0{i + 1}
            </text>
          </g>
        );
      })}

      <circle cx={CX} cy={CY} r={INNER_R - 8} fill="white" />
      <g stroke="var(--accent-deep)" strokeWidth="1.2" opacity="0.55">
        {NETWORK_SATELLITES.map((s, i) => (
          <line key={i} x1={CX} y1={CY} x2={s.x} y2={s.y} />
        ))}
      </g>
      <circle cx={CX} cy={CY} r="5" fill="var(--accent-deep)" />
      {NETWORK_SATELLITES.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r="3.5" fill="var(--accent-deep)" opacity="0.75" />
      ))}
    </svg>
  );
}

function PartnerCell({ p }: { p: Partner }) {
  return (
    <div className="flex h-8 items-center justify-center rounded-[5px] border border-[var(--hairline)] px-1.5">
      {p.file ? (
        <Image
          src={`/logos/clients/${p.file}`}
          alt={p.name}
          width={100}
          height={28}
          className="h-[15px] w-auto object-contain"
          unoptimized
        />
      ) : (
        <span className="text-center text-[9px] font-semibold leading-tight text-[var(--ink)]">
          {p.name}
        </span>
      )}
    </div>
  );
}

export function S07_GoToMarket({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Go To Market"
      subtitle="An inbound-led flywheel — repurposed content, automation and SEO feed direct sales, then platform usage data drives personalised upsell into premium"
    >
      <div className="grid h-full grid-cols-[0.85fr_1.15fr] items-center gap-10">
        <div className="flex h-full items-center justify-center">
          <Flywheel />
        </div>

        <div className="flex flex-col justify-center gap-5">
          {STEPS.map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[var(--accent)] text-[13px] font-bold text-[var(--accent-deep)]">
                {s.n.replace("0", "")}
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold text-[var(--ink)]">{s.title}</h3>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--body)]">{s.desc}</p>
                {s.partners && (
                  <div className="mt-3 grid grid-cols-5 gap-1.5">
                    {s.partners.map((p) => (
                      <PartnerCell key={p.name} p={p} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
