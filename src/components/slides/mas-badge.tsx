export function MASBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      width={96}
      height={96}
      className={className}
      role="img"
      aria-label="MAS Knowledge Enterprise Award — Winner"
    >
      <circle cx="100" cy="100" r="97" fill="none" stroke="var(--hairline-strong)" strokeWidth="1" />
      <circle cx="100" cy="100" r="74" fill="none" stroke="var(--ink)" strokeWidth="1.3" />

      <path id="masBadgeTopArc" d="M 12,100 A 88,88 0 0 1 188,100" fill="none" />
      <path id="masBadgeBottomArc" d="M 188,100 A 88,88 0 0 1 12,100" fill="none" />

      <text
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="9.2"
        fontWeight="700"
        letterSpacing="1.1"
        fill="var(--ink)"
      >
        <textPath href="#masBadgeTopArc" startOffset="50%" textAnchor="middle">
          KNOWLEDGE ENTERPRISE AWARD
        </textPath>
      </text>
      <text
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="9.2"
        fontWeight="700"
        letterSpacing="1.1"
        fill="var(--ink)"
      >
        <textPath href="#masBadgeBottomArc" startOffset="50%" textAnchor="middle">
          MONETARY AUTHORITY OF SINGAPORE
        </textPath>
      </text>

      <text
        x="100"
        y="107"
        fontFamily="var(--font-roboto), system-ui, sans-serif"
        fontSize="32"
        fontWeight="800"
        fill="var(--ink)"
        textAnchor="middle"
      >
        WINNER
      </text>

      <text
        x="100"
        y="136"
        fontSize="15"
        textAnchor="middle"
        letterSpacing="4"
        fill="var(--muted)"
      >
        ★★★★★
      </text>
    </svg>
  );
}
