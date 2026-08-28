export function MASBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={116}
      height={116}
      className={className}
      role="img"
      aria-label="MAS Knowledge Enterprise Award — Winner"
    >
      <circle cx="100" cy="100" r="97" fill="none" stroke="var(--hairline-strong)" strokeWidth="1" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="var(--ink)" strokeWidth="1.3" />

      <text
        x="100"
        y="82"
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="38"
        fontWeight="800"
        fill="var(--ink)"
        textAnchor="middle"
      >
        WINNER
      </text>

      <text
        x="100"
        y="112"
        fontSize="17"
        textAnchor="middle"
        letterSpacing="4"
        fill="var(--muted)"
      >
        ★★★★★
      </text>

      <text
        x="100"
        y="140"
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="11.5"
        fontWeight="700"
        letterSpacing="0.4"
        textAnchor="middle"
        fill="var(--accent-deep)"
      >
        MAS Enterprise Award
      </text>
    </svg>
  );
}
