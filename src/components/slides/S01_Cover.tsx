import Image from "next/image";
import { Slide } from "../deck/Slide";
import { HeroTriangle } from "./hero-triangle";
import { MASBadge } from "./mas-badge";

const STATS = [
  { v: "60M+", l: "Data points" },
  { v: "256k+", l: "Discussions" },
  { v: "46k+", l: "Companies covered" },
  { v: "$14T", l: "Client AUM" },
];

export function S01_Cover({ index, total }: { index: number; total: number }) {
  return (
    <Slide index={index} total={total} bare noFooter>
      <div className="relative flex h-[720px] w-[1280px] flex-col bg-white px-16 pt-12 pb-6">
        <div className="relative flex items-center justify-between">
          <Image
            src="/logos/smartkarma-logo.png"
            alt="Smartkarma"
            width={156}
            height={30}
            className="h-[26px] w-auto"
            priority
          />
          <div className="eyebrow !text-[var(--muted)]">Private &amp; Confidential</div>
        </div>

        <div className="relative grid flex-1 grid-cols-[1.25fr_1fr] items-center gap-10">
          <div>
            <span className="rule mb-6 block" />
            <h1 className="max-w-[480px] text-[38px] font-bold leading-[1.18] tracking-[-0.015em] text-[var(--ink)]">
              The proprietary investment intelligence platform{" "}
              <span className="text-[var(--accent-deep)]">for the AI era.</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-[var(--body)]">
              Smartkarma is a proprietary investment intelligence platform that unifies
              real-time independent research, specialist alternative data and
              on-demand access to the analysts behind it — with an AI layer,{" "}
              <span className="font-semibold text-[var(--ai-pink)]">αSK</span>, grounded
              in a decade of vetted research.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <HeroTriangle />
          </div>
        </div>

        <div className="relative grid grid-cols-5 items-center divide-x divide-[var(--hairline)] border-t border-[var(--hairline)] pt-4">
          {STATS.map((s, i) => (
            <div key={s.l} className={i === 0 ? "pr-6" : "px-6 last:pr-0"}>
              <div className="tabular text-[20px] font-bold leading-none text-[var(--accent-deep)]">
                {s.v}
              </div>
              <div className="mt-1 text-[11px] font-medium text-[var(--body)]">{s.l}</div>
            </div>
          ))}
          <div className="flex items-center px-6">
            <MASBadge className="h-[48px] w-auto" />
          </div>
        </div>

        <div className="relative mt-2 flex items-center gap-6 border-t border-[var(--hairline)] pt-2">
          <span className="caption uppercase tracking-wide">Shareholders</span>
          <div className="flex items-center gap-5 opacity-80">
            <Image src="/logos/sgx.png" alt="SGX" width={50} height={20} className="object-contain" />
            <Image
              src="/logos/peak-xv.jpg"
              alt="Peak XV"
              width={50}
              height={20}
              className="object-contain"
            />
            <Image
              src="/logos/jungle.jpg"
              alt="Jungle Ventures"
              width={70}
              height={26}
              className="h-4 w-auto object-contain"
            />
            <Image
              src="/logos/wavemaker.webp"
              alt="Wavemaker Partners"
              width={69}
              height={18}
              className="h-4 w-auto object-contain"
              unoptimized
            />
            <Image
              src="/logos/enterprise-singapore.png"
              alt="Enterprise Singapore"
              width={40}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}
