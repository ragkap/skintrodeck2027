import Image from "next/image";
import { Slide } from "../deck/Slide";
import { Bullet } from "../deck/ui";

export function S06_CompetitiveLandscape({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Competitive Landscape"
      subtitle="Smartkarma is uniquely positioned as the only platform combining real-time insight, specialist alternative data, and on-demand analyst expertise across the full institutional decision cycle"
    >
      <div className="grid h-full grid-cols-[1.15fr_1fr] items-center gap-10">
        <Image
          src="/graphics/competitive-landscape.png"
          alt="Competitive landscape quadrant: Smartkarma positioned as the unified platform combining on-demand access and specialist depth, versus AI tools, expert networks, specialist research firms, broker research, news platforms, and crowd-sourced tools"
          width={1270}
          height={754}
          className="h-auto max-h-full w-full object-contain"
        />

        <ul className="flex flex-col justify-center gap-4">
          <Bullet title="Traditional broker research is slow, gated, and relationship-dependent —">
            built around PDFs, restricted distribution, and often conflicted interests.
            Smartkarma replaces this with real-time, independent intelligence and direct
            analyst access.
          </Bullet>
          <Bullet title="Beyond AI-only tools:">
            unlike generalist LLMs, Smartkarma delivers vetted, primary intelligence and
            specialist data from trusted experts — AI is embedded to enhance workflow,
            not replace insight.
          </Bullet>
          <Bullet title="Superior to traditional news & market data platforms:">
            that rely on bank/broker-generated after-market PDFs and closed ecosystems.
            Smartkarma offers real-time independent insight + expert access integrated
            in a single system.
          </Bullet>
          <Bullet title="More scalable than expert networks:">
            that provide one-off, transactional calls with MNPI risk. Smartkarma
            delivers always-on analyst interaction, continuous insight flow, and
            compliance-safe engagement.
          </Bullet>
          <Bullet title="Higher quality than crowdsourced platforms:">
            provide volume but not reliability or compliance; Smartkarma offers curated,
            institutional-grade research from vetted analysts and data providers.
          </Bullet>
        </ul>
      </div>
    </Slide>
  );
}
