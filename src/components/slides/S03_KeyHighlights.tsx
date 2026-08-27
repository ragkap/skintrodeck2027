import { Slide } from "../deck/Slide";
import { Bullet, Stat } from "../deck/ui";

const CARDS = [
  {
    title: "Durable Competitive Advantage",
    points: [
      "Only platform unifying real-time insight, specialist alt-data, and on-demand expertise",
      "300+ Tier-1 institutions, corporates and exchanges as clients, with US$14T+ in AUM",
    ],
  },
  {
    title: "Financial Inflection",
    points: [
      "Advance-payment model, shifting mix toward first-party data at 30-90% gross margins",
      "Profitable, ~10% net margins, no debt — growing 30% a year",
    ],
  },
  {
    title: "Consolidation Thesis",
    points: [
      "Fragmented market ripe for Buy & Build; global contracts enable immediate cross-sell",
      "$100M+ cumulative LTM ARR pipeline identified, plus a maiden commodities data acquisition",
    ],
  },
];

export function S03_KeyHighlights({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      eyebrow="Proven · Profitable · Scaling"
      title="Key Highlights"
      subtitle="Financial and shareholder profile at a glance"
    >
      <div className="flex h-full flex-col justify-center gap-10">
        <div className="grid grid-cols-3 divide-x divide-[var(--hairline)]">
          {CARDS.map((c, i) => (
            <div key={c.title} className={i === 0 ? "flex flex-col gap-4 pr-8" : "flex flex-col gap-4 px-8 last:pr-0"}>
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-[22px] italic text-[var(--accent-deep)]">
                  {i + 1}
                </span>
                <h3 className="text-[17px] font-bold leading-tight text-[var(--ink)]">
                  {c.title}
                </h3>
              </div>
              <ul className="flex flex-col gap-3.5">
                {c.points.map((p, j) => (
                  <Bullet key={j}>{p}</Bullet>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 divide-x divide-[var(--hairline)] border-t border-[var(--hairline)] pt-6">
          <Stat value="30%" label="Growth per year" />
          <div className="pl-8">
            <Stat value="$6M" label="Cash, no debt" />
          </div>
          <div className="pl-8">
            <Stat value="65%" label="Data as % of new sales" />
          </div>
          <div className="pl-8">
            <Stat value="60%+" label="Inbound revenue" />
          </div>
          <div className="pl-8">
            <Stat value="25" label="Team" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
