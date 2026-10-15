"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { validateAccess } from "@/lib/access";

const GRANTED_KEY = "sk_deck_access_granted";

export type AccessStatus = "checking" | "locked" | "open";

/**
 * Tracks whether this browser session has already passed the gate. Starts as
 * "checking" so the deck is never exposed (or the form flashed) before
 * sessionStorage has been read.
 */
export function useAccessStatus() {
  const [status, setStatus] = useState<AccessStatus>("checking");

  useEffect(() => {
    let granted = false;
    try {
      granted = sessionStorage.getItem(GRANTED_KEY) === "1";
    } catch {
      // storage blocked: fall through to the gate
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sessionStorage is only readable on the client, after mount
    setStatus(granted ? "open" : "locked");
  }, []);

  const grant = useCallback(() => {
    try {
      sessionStorage.setItem(GRANTED_KEY, "1");
    } catch {
      // ignore: the gate simply returns on the next session
    }
    setStatus("open");
  }, []);

  return { status, grant };
}

function IconLock() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function AccessGate({
  status,
  onGranted,
}: {
  status: AccessStatus;
  onGranted: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState<"name" | "email" | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (status === "locked") nameRef.current?.focus();
  }, [status]);

  if (status === "open") return null;

  // Opaque cover while sessionStorage is being read: no flash of the deck.
  if (status === "checking") {
    return <div className="fixed inset-0 z-[1200] bg-[#1a1d21]" aria-hidden="true" />;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const local = validateAccess(name, email);
    if (!local.ok) {
      setError(local.error);
      setInvalid(/name/i.test(local.error) ? "name" : "email");
      return;
    }

    setError("");
    setInvalid(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && data?.ok) {
        onGranted();
        return;
      }
      setError(data?.error ?? "Something went wrong. Please try again.");
    } catch {
      setError("Could not reach the server. Please check your connection and try again.");
    }
    setSubmitting(false);
  }

  const inputBase =
    "w-full rounded-[10px] border bg-white px-3.5 py-3 text-[15px] text-[var(--ink)] outline-none transition focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(77,179,100,0.18)]";

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-center justify-center bg-[#1a1d21] p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
    >
      <div className="pop-in w-full max-w-[440px] overflow-hidden rounded-[18px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="accent-gradient px-8 pt-7 pb-6 text-white">
          <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-[12px] bg-white/20">
            <IconLock />
          </span>
          <h2 id="gate-title" className="mb-2 text-[22px] leading-tight font-bold tracking-[-0.02em]">
            Confidential access
          </h2>
          <p className="text-[14px] leading-snug text-white/90">
            This presentation is confidential. Please provide your name and business email to
            continue.
          </p>
        </div>

        <form className="px-8 pt-6 pb-7" onSubmit={onSubmit} noValidate>
          <div className="mb-4">
            <label
              htmlFor="gate-name"
              className="mb-1.5 block text-[12.5px] font-semibold text-[var(--body)]"
            >
              Full name
            </label>
            <input
              ref={nameRef}
              id="gate-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={invalid === "name"}
              className={`${inputBase} ${invalid === "name" ? "border-[var(--danger)] focus:border-[var(--danger)] focus:shadow-[0_0_0_3px_rgba(196,51,74,0.15)]" : "border-[var(--hairline)]"}`}
            />
          </div>
          <div>
            <label
              htmlFor="gate-email"
              className="mb-1.5 block text-[12.5px] font-semibold text-[var(--body)]"
            >
              Business email
            </label>
            <input
              id="gate-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={invalid === "email"}
              className={`${inputBase} ${invalid === "email" ? "border-[var(--danger)] focus:border-[var(--danger)] focus:shadow-[0_0_0_3px_rgba(196,51,74,0.15)]" : "border-[var(--hairline)]"}`}
            />
          </div>

          <div className="min-h-[34px] pt-2 text-[12.5px] leading-snug text-[var(--danger)]" role="alert">
            {error}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="accent-gradient w-full rounded-[11px] px-4 py-3.5 text-[15px] font-semibold text-white transition hover:opacity-95 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Checking…" : "View the presentation"}
          </button>
          <p className="mt-4 text-center text-[11.5px] leading-snug text-[var(--muted)]">
            Your details are recorded for confidentiality and security purposes only.
          </p>
        </form>
      </div>
    </div>
  );
}
