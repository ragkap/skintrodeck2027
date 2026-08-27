import { Slide } from "../deck/Slide";

const PILLARS = [
  {
    n: "1",
    t: "Proprietary Grounding",
    d: "A decade of structured investment intelligence, alternative datasets, private market research, and user interaction data not available in public training sets.",
  },
  {
    n: "2",
    t: "Intelligence Network",
    d: "Hundreds of specialists generating original forecasts, event-driven analysis, and domain expertise that AI can amplify but not easily replace.",
  },
  {
    n: "3",
    t: "Workflow Ownership",
    d: "Deep integration into institutional research and investment workflows, where switching costs are process change and trust, not subscription fees.",
  },
  {
    n: "4",
    t: "Application-Layer AI",
    d: "Our agentic workflows sit above foundation models, combining the best available AI with proprietary content and investment-specific workflows.",
  },
];

function IconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M4 5h16v11H8l-4 4V5Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M6 3h9l4 4v14H6V3Z" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6" strokeLinecap="round" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" strokeLinecap="round" />
    </svg>
  );
}
function IconMic() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" strokeLinecap="round" />
    </svg>
  );
}
function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M9 18h6M10 21h4M8 14a5 5 0 1 1 8 0c-.8.9-1.5 1.7-1.5 3h-5c0-1.3-.7-2.1-1.5-3Z" strokeLinejoin="round" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  );
}

const FEATURES = [
  { t: "Ask AI", d: "Your investment research AI sidekick", icon: IconChat },
  { t: "Primer", d: "Up to speed on any company in minutes", icon: IconDoc },
  { t: "Meeting Prep", d: "Walk into any meeting fully briefed", icon: IconCalendar },
  { t: "SmartScript", d: "A synthetic expert call, on demand", icon: IconMic },
  { t: "Smart Takes", d: "Any insight's thesis, distilled by AI", icon: IconBulb },
  { t: "Chartbook", d: "Every analytics chart, one click", icon: IconChart },
];

export function S11_AIAccelerator({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      eyebrow="AI Strategy"
      title="AI is a Force Multiplier"
      subtitle="Foundation models are becoming abundant. Proprietary data and expert networks are not."
    >
      <div className="flex h-full flex-col gap-8 pt-2">
        <div className="grid grid-cols-4 divide-x divide-[var(--hairline)]">
          {PILLARS.map((p, i) => (
            <div key={p.n} className={i === 0 ? "pr-6" : "px-6 last:pr-0"}>
              <div className="font-serif text-[22px] italic text-[var(--accent-deep)]">{p.n}</div>
              <div className="mt-1 text-[13.5px] font-bold text-[var(--ink)]">{p.t}</div>
              <p className="mt-1.5 text-[11.5px] leading-snug text-[var(--body)]">{p.d}</p>
            </div>
          ))}
        </div>

        <p className="border-t border-b border-[var(--hairline)] py-4 text-[13px] leading-snug text-[var(--body)]">
          Recent fund raise participation from one of the world&apos;s fastest-growing
          quantitative hedge funds and a leader in AI-driven investing, alongside
          Singapore Exchange, reinforces this view — the most sophisticated AI users are
          seeking <em>more</em> proprietary content and data, not less.
        </p>

        <div className="flex flex-1 flex-col justify-center">
          <div className="caption mb-4 uppercase tracking-wide">
            AI-Augmented — Live in the Platform Today
          </div>
          <div className="grid grid-cols-6 gap-6">
            {FEATURES.map((f) => (
              <div key={f.t} className="flex flex-col gap-2">
                <div className="text-[var(--accent-deep)]">
                  <f.icon />
                </div>
                <div className="text-[12px] font-bold text-[var(--ink)]">{f.t}</div>
                <div className="text-[10px] leading-tight text-[var(--muted)]">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}
