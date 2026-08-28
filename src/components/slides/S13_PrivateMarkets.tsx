import Image from "next/image";
import { Slide } from "../deck/Slide";
import { Mark, Stat } from "../deck/ui";

const POINTS = [
  {
    t: "Smartkarma launched pvtIQ in Nov 2025",
    d: (
      <>to provide <Mark>intelligence into Asian private markets</Mark>.</>
    ),
  },
  {
    t: "$74bn has been invested since 2014 in private markets across SE Asia,",
    d: (
      <>
        of which only $24bn has founded exits. A{" "}
        <Mark>strong research ecosystem is essential</Mark> for sustained growth.
      </>
    ),
  },
  {
    t: "Initial focus on emerging sectors and new economy companies,",
    d: (
      <>
        with <Mark>proprietary data and insight</Mark> into leading private companies.
      </>
    ),
  },
  {
    t: "Leverages Smartkarma&apos;s strong industry collaborations,",
    d: (
      <>
        distribution and technology to ensure{" "}
        <Mark>reliable, high-quality coverage</Mark>, with links into pre-existing
        strength in ECM.
      </>
    ),
  },
  {
    t: "Expected to accelerate growth, expand TAM and diversify customer base,",
    d: (
      <>
        directly contributing to topline, enhancing profitability, and{" "}
        <Mark>strengthening alignment with SGX&apos;s strategic priorities</Mark>.
      </>
    ),
  },
];

export function S13_PrivateMarkets({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Expansion into Private Markets"
      subtitle="Proprietary research & data on a fast-growing yet opaque asset class"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col justify-center gap-5">
          {POINTS.map((p, i) => (
            <li
              key={i}
              className="fade-up flex gap-2.5"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="mt-1.5 h-[6px] w-[6px] flex-none rounded-full accent-gradient" />
              <span className="text-[13.5px] leading-snug text-[var(--body)]">
                <span className="font-semibold text-[var(--ink)]">{p.t}</span> {p.d}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center gap-6 border-l border-[var(--hairline)] pl-10">
          <div className="pop-in" style={{ animationDelay: "0.2s" }}>
            <Image
              src="/logos/pvtiq.png"
              alt="pvtIQ by Smartkarma"
              width={210}
              height={84}
              className="h-20 w-auto rounded-[6px] object-contain"
            />
            <div className="mt-3 text-[14px] font-bold text-[var(--ink)]">
              Private Markets Research and Data, Reimagined
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
              pvtIQ leverages Smartkarma&apos;s technology and distribution to deliver
              high-quality research and data on Asian private markets.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-[var(--hairline)] pt-5">
            {[
              { value: "$50b+", label: "Exit potential" },
              { value: "50k+", label: "Investors" },
              { value: "7+", label: "Press mentions/day" },
            ].map((s, i) => (
              <Stat key={s.label} value={s.value} label={s.label} delay={0.35 + i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
