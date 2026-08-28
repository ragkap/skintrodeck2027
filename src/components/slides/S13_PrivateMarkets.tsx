import { Slide } from "../deck/Slide";
import { Bullet, Stat } from "../deck/ui";

export function S13_PrivateMarkets({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Expansion into Private Markets"
      subtitle="Proprietary research & data on a fast-growing yet opaque asset class"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] gap-16 pt-2">
        <ul className="flex flex-col gap-4">
          <Bullet title="Smartkarma launched pvtIQ in Nov 2025">
            to provide intelligence into Asian private markets.
          </Bullet>
          <Bullet title="$74bn has been invested since 2014 in private markets across SE Asia">
            of which only $24bn has founded exits. A strong research ecosystem is
            essential for sustained growth.
          </Bullet>
          <Bullet title="Initial focus on emerging sectors and new economy companies,">
            with proprietary data and insight into leading private companies.
          </Bullet>
          <Bullet title="Leverages Smartkarma&apos;s strong industry collaborations,">
            distribution and technology to ensure reliable, high-quality coverage, with
            links into pre-existing strength in ECM.
          </Bullet>
          <Bullet title="Expected to directly contribute to topline, enhance profitability,">
            diversify revenue streams, and strengthen alignment with SGX&apos;s strategic
            priorities.
          </Bullet>
        </ul>

        <div className="flex flex-col justify-center gap-6 border-l border-[var(--hairline)] pl-10">
          <div>
            <div className="text-[14px] font-bold text-[var(--ink)]">
              pvtIQ — Private Markets Research and Data, Reimagined
            </div>
            <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--body)]">
              pvtIQ leverages Smartkarma&apos;s technology and distribution to deliver
              high-quality research and data on Asian private markets.
            </p>
            <div className="mt-3 text-[10px] font-medium text-[var(--muted)]">
              Backed by SGX Group · Peak XV · Jungle · Wavemaker · Enterprise Singapore
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 border-t border-[var(--hairline)] pt-5">
            <Stat value="$50b+" label="Exit potential" />
            <Stat value="50k+" label="Investors" />
            <Stat value="7+" label="Press mentions/day" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
