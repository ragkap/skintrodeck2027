import Image from "next/image";
import { Slide } from "../deck/Slide";

export function S06_CompetitiveLandscape({ index, total }: { index: number; total: number }) {
  return (
    <Slide
      index={index}
      total={total}
      title="Competitive Landscape"
      subtitle="The only platform combining real-time insight, specialist data, and on-demand analyst expertise"
    >
      <div className="flex h-full items-center justify-center">
        <Image
          src="/graphics/competitive-landscape.png"
          alt="Competitive landscape quadrant: Smartkarma positioned as the unified platform combining on-demand access and specialist depth, versus AI tools, expert networks, specialist research firms, broker research, news platforms, and crowd-sourced tools"
          width={1270}
          height={754}
          className="h-auto max-h-full w-auto max-w-full object-contain"
        />
      </div>
    </Slide>
  );
}
