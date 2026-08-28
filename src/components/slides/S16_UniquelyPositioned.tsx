import { Slide } from "../deck/Slide";
import { Mark } from "../deck/ui";

const COLS = [40, 130, 220, 310];
const ROWS = [30, 120, 210, 300];
const NODE_COLOR = (i: number, j: number) => ((i + j) % 3 === 0 ? "var(--accent)" : "#d7dce2");
const ICON_R = 34;

function NetworkGraphic() {
  const nodes: { x: number; y: number; i: number; j: number }[] = [];
  COLS.forEach((x, i) =>
    ROWS.forEach((y, j) => {
      const dx = i === 1 || i === 2 ? (j % 2 === 0 ? 14 : -14) : 0;
      nodes.push({ x: x + dx, y, i, j });
    }),
  );
  const at = (i: number, j: number) => nodes.find((n) => n.i === i && n.j === j)!;
  const edges: [number, number, number, number][] = [];
  for (let i = 0; i < COLS.length; i++) {
    for (let j = 0; j < ROWS.length; j++) {
      const n = at(i, j);
      if (i < COLS.length - 1) {
        const r = at(i + 1, j);
        edges.push([n.x, n.y, r.x, r.y]);
      }
      if (j < ROWS.length - 1) {
        const d = at(i, j + 1);
        edges.push([n.x, n.y, d.x, d.y]);
      }
    }
  }
  const cx = 175;
  const cy = 165;
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 350 330" className="h-full w-full">
        {edges.map(([x1, y1, x2, y2], k) => (
          <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#eef1f4" strokeWidth="1.5" />
        ))}
        {nodes.map((n, k) => (
          <circle key={k} cx={n.x} cy={n.y} r="10" fill={NODE_COLOR(n.i, n.j)} />
        ))}
        <defs>
          <clipPath id="uniquelyIconClip">
            <circle cx={cx} cy={cy} r={ICON_R} />
          </clipPath>
        </defs>
        <circle cx={cx} cy={cy} r="40" fill="white" stroke="var(--accent)" strokeWidth="1.5" />
        <image
          href="/logos/smartkarma-icon.png"
          x={cx - ICON_R}
          y={cy - ICON_R}
          width={ICON_R * 2}
          height={ICON_R * 2}
          clipPath="url(#uniquelyIconClip)"
          className="spin-slow"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}

const POINTS = [
  {
    t: "Multi-Channel Distribution & Plug-and-Play Model:",
    d: (
      <>
        <Mark>global enterprise contracts already in place</Mark> enable seamless
        onboarding and immediate cross-sell opportunities for target customers.
      </>
    ),
  },
  {
    t: "Scalable Technology & Easy Integration:",
    d: (
      <>
        cloud-native, AI-powered infrastructure supports{" "}
        <Mark>rapid deployment across diverse data assets</Mark>, driving significant
        operational efficiencies.
      </>
    ),
  },
  {
    t: "Proven Market Credibility:",
    d: (
      <>
        recognized industry expertise, <Mark>quoted 6+ times per day</Mark> in financial
        media; recipient of the MAS Knowledge Enterprise Award (2021).
      </>
    ),
  },
  {
    t: "Strong Institutional Backing:",
    d: (
      <>
        supported by trusted stakeholders including{" "}
        <Mark>SGX, Enterprise Singapore, Peak XV (Sequoia), and Temasek-backed funds</Mark>{" "}
        — reinforcing trust and execution strength.
      </>
    ),
  },
  {
    t: "Attractive Valuations & Accretive M&A Landscape:",
    d: (
      <>
        compelling public and precedent valuations create{" "}
        <Mark>accretive acquisition opportunities</Mark> that accelerate scale and market
        leadership.
      </>
    ),
  },
];

export function S16_UniquelyPositioned({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Smartkarma is Uniquely Positioned in the Path of Consolidation"
      subtitle="Digital distribution platform for insight, data and expertise"
    >
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col justify-center gap-5">
          {POINTS.map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1.5 h-[6px] w-[6px] flex-none rounded-full bg-[var(--accent)]" />
              <span className="text-[13.5px] leading-snug text-[var(--body)]">
                <span className="font-semibold text-[var(--ink)]">{p.t}</span> {p.d}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center border-l border-[var(--hairline)]">
          <NetworkGraphic />
        </div>
      </div>
    </Slide>
  );
}
