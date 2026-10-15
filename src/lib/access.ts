// Shared by the access gate (browser) and /api/access (server) so both apply
// identical rules. Personal email domains are rejected: the deck is for
// business recipients only.
const BLOCKED_DOMAINS = new Set([
  "gmail.com", "googlemail.com", "hotmail.com", "hotmail.co.uk", "outlook.com",
  "live.com", "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.co.in", "ymail.com",
  "aol.com", "icloud.com", "me.com", "mac.com", "proton.me", "protonmail.com",
  "gmx.com", "gmx.net", "mail.com", "zoho.com", "yandex.com", "yandex.ru",
  "qq.com", "163.com", "126.com", "foxmail.com", "pm.me", "hey.com",
  "inbox.com", "fastmail.com", "tutanota.com", "hushmail.com", "rediffmail.com",
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type AccessValidation =
  | { ok: true; name: string; email: string; domain: string }
  | { ok: false; error: string };

export function validateAccess(rawName: unknown, rawEmail: unknown): AccessValidation {
  const name = typeof rawName === "string" ? rawName.trim() : "";
  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

  if (name.length < 2 || !/[a-zA-Z]/.test(name)) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  const domain = email.split("@")[1];
  if (BLOCKED_DOMAINS.has(domain)) {
    return {
      ok: false,
      error: "Please use your business email address (personal email domains are not accepted).",
    };
  }
  return { ok: true, name, email, domain };
}
