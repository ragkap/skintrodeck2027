import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Smartkarma — Investor Introduction";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/logos/smartkarma-icon-brand.jpg"), "base64");
const logoSrc = `data:image/jpeg;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "white",
        }}
      >
        <div
          style={{
            width: 40,
            height: 4,
            borderRadius: 2,
            background: "#4db364",
            marginBottom: 28,
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img
            src={logoSrc}
            width={72}
            height={72}
            style={{ borderRadius: 16 }}
            alt=""
          />
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#111827",
              display: "flex",
            }}
          >
            Smartkarma
          </div>
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.18,
            letterSpacing: "-0.015em",
            color: "#111827",
            maxWidth: 920,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          The Proprietary Investment Intelligence{" "}
          <span style={{ color: "#3a9a53" }}>Platform for the AI Era</span>
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            color: "#64748b",
            display: "flex",
          }}
        >
          Investor Introduction
        </div>
      </div>
    ),
    { ...size },
  );
}
