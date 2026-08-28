import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted, mirroring skweb2026's approach (no network font fetch at build time).
const roboto = localFont({
  variable: "--font-roboto",
  display: "swap",
  src: [
    { path: "./fonts/roboto-300.woff2", weight: "300", style: "normal" },
    { path: "./fonts/roboto-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/roboto-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/roboto-700.woff2", weight: "700", style: "normal" },
  ],
});

const ptSerif = localFont({
  variable: "--font-serif",
  display: "swap",
  src: [
    { path: "./fonts/pt-serif-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/pt-serif-400-italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/pt-serif-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/pt-serif-700-italic.woff2", weight: "700", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Smartkarma — Investor Introduction",
  description:
    "Smartkarma: the proprietary investment intelligence platform for the AI era.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${roboto.variable} ${ptSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
