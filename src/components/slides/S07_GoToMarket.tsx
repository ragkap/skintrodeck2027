import { Slide } from "../deck/Slide";

const RINGS = [
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

export function S07_GoToMarket({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Go To Market"
      subtitle="Inbound flywheel repurposing published content, automation stack, and SEO with direct sales-led conversion"
    >
      <div className="grid h-full grid-cols-3 divide-x divide-[var(--hairline)]">
        {RINGS.map((r, i) => (
          <div
            key={r.n}
            className={
              i === 0
                ? "flex flex-col justify-center pr-8"
                : "flex flex-col justify-center px-8 last:pr-0"
            }
          >
            <div className="mb-4 font-serif text-[26px] italic text-[var(--accent-deep)]">
              {r.n}
            </div>
            <h3 className="text-[16px] font-bold text-[var(--ink)]">{r.title}</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--body)]">{r.desc}</p>
            {r.logos && (
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-[var(--hairline)] pt-4">
                {r.logos.map((l) => (
                  <div
                    key={l}
                    className="rounded-[6px] border border-[var(--hairline)] px-2 py-1.5 text-center text-[10.5px] font-semibold text-[var(--ink)]"
                  >
                    {l}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Slide>
  );
}
