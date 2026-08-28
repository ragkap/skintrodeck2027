export function MASBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 60"
      className={className}
      role="img"
      aria-label="MAS Knowledge Enterprise Award — Winner"
    >
      <text
        x="0"
        y="24"
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="20"
        fontWeight="800"
        fill="var(--ink)"
      >
        WINNER
      </text>

      <text x="0" y="42" fontSize="13" letterSpacing="3" fill="var(--accent)">
        ★★★★★
      </text>

      <text
        x="0"
        y="56"
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="9.5"
        fontWeight="700"
        letterSpacing="0.3"
        fill="var(--accent-deep)"
      >
        MAS Enterprise Award
      </text>
    </svg>
  );
}
