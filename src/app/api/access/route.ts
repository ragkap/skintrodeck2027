import { validateAccess } from "@/lib/access";

// Identifies this deck in the webhook payload, so submissions from different
// decks or one-pagers can share one webhook and still be told apart.
const DECK_NAME = "Intro Deck";

/**
 * POST /api/access
 * Validates name + business email, then forwards the submission to WEBHOOK_URL
 * (Slack / Zapier / Make / HubSpot incoming webhook). The webhook is the system
 * of record: nothing is stored here.
 */
export async function POST(request: Request) {
  let body: { name?: unknown; email?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const result = validateAccess(body?.name, body?.email);
  if (!result.ok) {
    return Response.json({ ok: false, error: result.error }, { status: 400 });
  }

  const webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl) {
    // Local development: let the deck open without a webhook. In production a
    // missing webhook must fail closed so no access goes unrecorded.
    if (process.env.NODE_ENV !== "production") {
      console.warn("WEBHOOK_URL not set; accepting access without recording it (dev only)");
      return Response.json({ ok: true });
    }
    console.error("WEBHOOK_URL not configured");
    return Response.json(
      { ok: false, error: "Server is not configured. Please try again later." },
      { status: 500 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for") ?? "";
  const entry = {
    deck: DECK_NAME,
    name: result.name,
    email: result.email,
    domain: result.domain,
    timestamp: new Date().toISOString(),
    ip: forwardedFor.split(",")[0].trim(),
    userAgent: request.headers.get("user-agent") ?? "",
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!res.ok) {
      console.error(`Webhook responded ${res.status}`);
      return Response.json(
        { ok: false, error: "Could not record your details. Please try again." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Webhook error:", err instanceof Error ? err.message : err);
    return Response.json(
      { ok: false, error: "Could not record your details. Please try again." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
