import { Slide } from "../deck/Slide";

const STEPS = [
  {
    n: "01",
    title: "Direct Sales",
    desc: "Enterprise-sales team with experience across data and platform sales (ex-MSCI, Credit Suisse, Bloomberg)",
  },
  {
    n: "02",
    title: "Platform Upsell",
    desc: "Leveraging platform data for targeted upselling of premium & data subscriptions",
  },
  {
    n: "03",
    title: "Channel Partners",
    desc: "Reselling Smartkarma solutions to their end customers",
    logos: [
      "AllianceBernstein",
      "Société Générale",
      "BTIG",
      "Maybank",
      "CFA Institute",
      "SGX Group",
      "TIM",
      "DMA",
      "extractAlpha",
      "Barrenjoey",
    ],
  },
];

// Nodes sit on a ring of radius R around (CX, CY) at 120° apart, starting at
// the top and going clockwise.
const CX = 150;
const CY = 132;
const R = 108;
const ANGLES = [-90, 30, 150];
const pt = (deg: number) => ({
  x: CX + R * Math.cos((deg * Math.PI) / 180),
  y: CY + R * Math.sin((deg * Math.PI) / 180),
});
const NODES = ANGLES.map(pt);

function Flywheel() {
  // Trim each 120° segment so it stops short of both node circles,
  // leaving a visible gap for the arrowhead instead of hiding it behind
  // the next node.
  const arc = (fromDeg: number) => {
    const start = pt(fromDeg + 16);
    const end = pt(fromDeg + 104);
    return `M ${start.x} ${start.y} A ${R} ${R} 0 0 1 ${end.x} ${end.y}`;
  };
  return (
    <svg viewBox="0 0 300 260" className="h-full w-full">
      <defs>
        <marker id="flyArrow" markerWidth="8" markerHeight="8" refX="3.5" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--accent)" />
        </marker>
      </defs>
      {ANGLES.map((a) => (
        <path
          key={a}
          d={arc(a)}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          markerEnd="url(#flyArrow)"
        />
      ))}

      {NODES.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r="30" fill="white" stroke="var(--accent)" strokeWidth="1.5" />
          <text
            x={p.x}
            y={p.y + 7}
            textAnchor="middle"
            fontSize="18"
            fontWeight="700"
            fill="var(--accent-deep)"
          >
            {i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function S07_GoToMarket({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Go To Market"
      subtitle="Inbound flywheel repurposing published content, automation stack, and SEO with direct sales-led conversion"
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
                {s.logos && (
                  <div className="mt-3 grid grid-cols-5 gap-1.5">
                    {s.logos.map((l) => (
                      <div
                        key={l}
                        className="rounded-[5px] border border-[var(--hairline)] px-1.5 py-1 text-center text-[9px] font-semibold text-[var(--ink)]"
                      >
                        {l}
                      </div>
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
