import { Slide } from "../deck/Slide";
import { Mark } from "../deck/ui";

const COLS = [40, 130, 220, 310];
const ROWS = [30, 120, 210, 300];
const NODE_COLOR = (i: number, j: number) => ((i + j) % 3 === 0 ? "url(#accentNodeGrad)" : "#d7dce2");
const ICON_R = 16;

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
          <circle
            key={k}
            cx={n.x}
            cy={n.y}
            r="10"
            fill={NODE_COLOR(n.i, n.j)}
            className="node-drift"
            style={{ animationDelay: `${(k % 7) * 0.4}s` }}
          />
        ))}
        <defs>
          <clipPath id="uniquelyIconClip">
            <circle cx={cx} cy={cy} r={ICON_R} />
          </clipPath>
          <linearGradient id="accentNodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#24a9a7" />
            <stop offset="100%" stopColor="#4db364" />
          </linearGradient>
        </defs>
        <circle cx={cx} cy={cy} r={ICON_R + 6} fill="white" />
        <circle
          className="glow-pulse"
          cx={cx}
          cy={cy}
          r={ICON_R + 6}
          fill="none"
          stroke="url(#accentNodeGrad)"
          strokeWidth="1.5"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        <image
          href="/logos/smartkarma-icon-brand.jpg"
          x={cx - ICON_R}
          y={cy - ICON_R}
          width={ICON_R * 2}
          height={ICON_R * 2}
          clipPath="url(#uniquelyIconClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
}

const POINTS = [
  {
    t: "Multi-Channel Distribution:",
    d: (
      <>
        <Mark>global enterprise contracts already in place</Mark> enable seamless
        onboarding and cross-sell.
      </>
    ),
  },
  {
    t: "Scalable, Easy to Integrate:",
    d: (
      <>
        cloud-native, AI-powered infrastructure enables{" "}
        <Mark>rapid deployment across diverse data assets</Mark>.
      </>
    ),
  },
  {
    t: "Proven Market Credibility:",
    d: (
      <>
        <Mark>quoted 7+ times per day</Mark> in financial media; recipient of the MAS
        Knowledge Enterprise Award (2021).
      </>
    ),
  },
  {
    t: "Strong Institutional Backing:",
    d: (
      <>
        supported by{" "}
        <Mark>SGX, Enterprise Singapore, Peak XV (Sequoia), and Temasek-backed funds</Mark>.
      </>
    ),
  },
  {
    t: "Attractive, Accretive M&A Landscape:",
    d: (
      <>
        compelling valuations create <Mark>accretive acquisition opportunities</Mark> that
        accelerate scale.
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
      subtitle="Insight + Data + Expertise + Distribution"
    >
      <div className="grid h-full grid-cols-[1.2fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col justify-center gap-5">
          {POINTS.map((p, i) => (
            <li key={i} className="flex gap-2.5">
              <span className="mt-1.5 h-[6px] w-[6px] flex-none rounded-full accent-gradient" />
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
