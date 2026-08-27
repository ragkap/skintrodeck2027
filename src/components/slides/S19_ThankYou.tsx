import Image from "next/image";
import { Slide } from "../deck/Slide";

function StarMark() {
  return (
    <svg viewBox="0 0 520 520" className="h-full w-full">
      <g transform="translate(260 260)">
        <path
          d="M0 -190 L46 -46 L190 0 L46 46 L0 190 L-46 46 L-190 0 L-46 -46 Z"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M0 -90 L22 -22 L90 0 L22 22 L0 90 L-22 22 L-90 0 L-22 -22 Z"
          fill="var(--accent)"
        />
      </g>
    </svg>
  );
}

export function S19_ThankYou({ index, total }: { index: number; total: number }) {
  return (
    <Slide index={index} total={total} bare noFooter>
      <div className="relative flex h-[720px] w-[1280px] flex-col justify-between bg-white p-16">
        <div className="absolute top-0 right-0 h-[480px] w-[480px] opacity-90">
          <StarMark />
        </div>

        <div className="relative">
          <Image
            src="/logos/smartkarma-logo.png"
            alt="Smartkarma"
            width={156}
            height={30}
            className="h-[26px] w-auto"
          />
        </div>

        <div className="relative flex flex-col gap-6">
          <span className="rule" />
          <h1 className="text-[64px] font-bold leading-none text-[var(--ink)]">
            <span className="font-serif italic text-[var(--accent-deep)]">Thank you</span>
          </h1>
        </div>

        <div className="relative flex items-end justify-between border-t border-[var(--hairline)] pt-6 text-[12px] text-[var(--body)]">
          <div>
            <div className="font-medium text-[var(--accent-deep)]">www.smartkarma.com</div>
            <div className="mt-0.5 text-[var(--muted)]">#03-01, 6 Battery Road, Singapore</div>
          </div>
          <div className="caption uppercase tracking-wide">
            Private &amp; Confidential · {String(index).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </div>
        </div>
      </div>
    </Slide>
  );
}
