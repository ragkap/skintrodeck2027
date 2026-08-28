import type { ReactNode } from "react";

export function Stat({
  value,
  label,
  sub,
}: {
  value: ReactNode;
  label: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="tabular text-[30px] font-bold leading-none tracking-[-0.01em] text-gradient">
        {value}
      </div>
      <div className="text-[13px] font-medium text-[var(--body)]">{label}</div>
      {sub && <div className="caption uppercase tracking-wide">{sub}</div>}
    </div>
  );
}

export function Mark({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-[3px] bg-[rgba(77,179,100,0.16)] px-1 font-semibold text-[var(--ink)]">
      {children}
    </span>
  );
}

export function Bullet({
  title,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-[9px] h-[5px] w-[5px] flex-none rounded-full accent-gradient" />
      <span className="text-[15px] leading-relaxed text-[var(--body)]">
        {title && <span className="font-semibold text-[var(--ink)]">{title} </span>}
        {children}
      </span>
    </li>
  );
}

export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[10px] border border-[var(--hairline)] p-5 ${className}`}>
      {children}
    </div>
  );
}

export function Table({
  columns,
  rows,
  dense = false,
  rowClassName,
}: {
  columns: string[];
  rows: ReactNode[][];
  dense?: boolean;
  rowClassName?: (row: ReactNode[], index: number) => string;
}) {
  const cellPad = dense ? "px-2 py-1" : "px-3 py-2.5";
  const headSize = dense ? "text-[9px]" : "text-[11px]";
  const bodySize = dense ? "text-[10px]" : "text-[13.5px]";
  return (
    <table className={`w-full border-collapse ${bodySize}`}>
      <thead>
        <tr>
          {columns.map((c, i) => (
            <th
              key={i}
              className={`border-b-2 border-[var(--ink)] ${cellPad} text-left ${headSize} font-semibold uppercase tracking-wide text-[var(--ink)]`}
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr
            key={i}
            className={`border-b border-[var(--hairline)] ${rowClassName?.(r, i) ?? ""}`}
          >
            {r.map((cell, j) => (
              <td key={j} className={`${cellPad} text-[var(--body)]`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function IconRing({ icon }: { icon: ReactNode }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--accent)] text-[var(--accent-deep)]">
      {icon}
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--hairline-strong)] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-gradient">
      {children}
    </span>
  );
}
