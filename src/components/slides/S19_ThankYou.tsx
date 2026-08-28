import Image from "next/image";
import { Slide } from "../deck/Slide";

export function S19_ThankYou({ index, total }: { index: number; total: number }) {
  return (
    <Slide index={index} total={total} bare noFooter>
      <div
        className="relative flex h-[720px] w-[1280px] flex-col justify-between p-16"
        style={{
          background:
            "radial-gradient(1100px 620px at 8% -12%, rgba(77,179,100,0.16), rgba(77,179,100,0) 62%), linear-gradient(180deg, #eef1f0 0%, #f2f4f5 40%, #f6f7f8 100%)",
        }}
      >
        <div className="relative">
          <Image
            src="/logos/smartkarma-logo.png"
            alt="Smartkarma"
            width={156}
            height={30}
            className="h-[26px] w-auto"
          />
        </div>

        <div className="relative flex max-w-[520px] flex-col">
          <p className="text-[16px] leading-relaxed text-[var(--muted)]">
            This presentation is confidential and intended solely for the person to whom
            it has been provided by Smartkarma. It may not be reproduced, distributed, or
            disclosed, in whole or in part, without Smartkarma&apos;s prior written
            consent. It does not constitute an offer or solicitation to sell securities
            and should not be relied upon in connection with any investment decision.
          </p>
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
