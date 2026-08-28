import type { ReactNode } from "react";
import Image from "next/image";

interface SlideProps {
  index: number;
  total: number;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  bare?: boolean;
  noFooter?: boolean;
  className?: string;
}

/**
 * Standard slide chrome: eyebrow + title/subtitle header, content area,
 * and a persistent footer (confidentiality line + page number). `bare`
 * skips the header entirely for full-bleed slides (cover, thank you).
 */
export function Slide({
  index,
  total,
  eyebrow,
  title,
  subtitle,
  children,
  bare = false,
  noFooter = false,
  className = "",
}: SlideProps) {
  return (
    <div
      className={`relative flex h-[720px] w-[1280px] flex-col overflow-hidden text-[var(--ink)] ${className}`}
      style={{
        background:
          "radial-gradient(1100px 620px at 78% -12%, rgba(77,179,100,0.16), rgba(77,179,100,0) 62%), linear-gradient(180deg, #eef1f0 0%, #f2f4f5 40%, #f6f7f8 100%)",
      }}
    >
      {!bare && (
        <div className="relative px-16 pt-12 pb-6">
          <Image
            src="/logos/smartkarma-logo.png"
            alt="Smartkarma"
            width={104}
            height={20}
            className="absolute top-12 right-16 h-[17px] w-auto opacity-90"
          />
          {eyebrow ? (
            <div className="mb-2 flex items-center gap-2.5">
              <span className="rule" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          ) : (
            <span className="rule mb-3 block" />
          )}
          {title && (
            <h1 className="text-[34px] leading-[1.15] font-bold tracking-[-0.01em] text-[var(--ink)]">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="mt-2.5 max-w-[1100px] text-[15.5px] leading-snug text-[var(--body)]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`min-h-0 flex-1 ${bare ? "" : "px-16 pb-8"}`}>{children}</div>

      {!noFooter && (
        <div className="flex items-center justify-between border-t border-[var(--hairline)] px-16 py-3.5">
          <span className="caption tracking-wide uppercase">Private &amp; Confidential</span>
          <span className="caption tabular">
            {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
}
