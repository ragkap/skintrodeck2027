import { Slide } from "../deck/Slide";
import { Bullet } from "../deck/ui";

const COLS = [40, 130, 220, 310];
const ROWS = [30, 120, 210, 300];
const NODE_COLOR = (i: number, j: number) => ((i + j) % 3 === 0 ? "var(--accent)" : "#d7dce2");

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
  return (
    <svg viewBox="0 0 350 330" className="h-full w-full">
      {edges.map(([x1, y1, x2, y2], k) => (
        <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#eef1f4" strokeWidth="1.5" />
      ))}
      {nodes.map((n, k) => (
        <circle key={k} cx={n.x} cy={n.y} r="10" fill={NODE_COLOR(n.i, n.j)} />
      ))}
      <circle cx="175" cy="165" r="40" fill="white" stroke="var(--accent)" strokeWidth="1.5" />
      <path
        d="M175 133 L185 160 L175 197 L165 160 Z M143 165 L170 155 L207 165 L170 175 Z"
        fill="var(--accent)"
      />
    </svg>
  );
}

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
          <Bullet title="Multi-Channel Distribution & Plug-and-Play Model:">
            global enterprise contracts already in place enable seamless onboarding and
            immediate cross-sell opportunities for target customers.
          </Bullet>
          <Bullet title="Scalable Technology & Easy Integration:">
            cloud-native, AI-powered infrastructure supports rapid deployment across
            diverse data assets, driving significant operational efficiencies.
          </Bullet>
          <Bullet title="Proven Market Credibility:">
            recognized industry expertise, quoted 6+ times per day in financial media;
            recipient of the MAS Knowledge Enterprise Award (2021).
          </Bullet>
          <Bullet title="Strong Institutional Backing:">
            supported by trusted stakeholders including SGX, Enterprise Singapore, Peak
            XV (Sequoia), and Temasek-backed funds — reinforcing trust and execution
            strength.
          </Bullet>
          <Bullet title="Attractive Valuations & Accretive M&A Landscape:">
            compelling public and precedent valuations create accretive acquisition
            opportunities that accelerate scale and market leadership.
          </Bullet>
        </ul>

        <div className="flex items-center justify-center border-l border-[var(--hairline)]">
          <NetworkGraphic />
        </div>
      </div>
    </Slide>
  );
}
