import { notFound } from "next/navigation";
import { Deck } from "@/components/deck/Deck";
import { buildSlides, SLIDE_COUNT } from "@/slides";

export function generateStaticParams() {
  return Array.from({ length: SLIDE_COUNT }, (_, i) => ({ slide: String(i + 1) }));
}

export default async function SlidePage({ params }: { params: Promise<{ slide: string }> }) {
  const { slide } = await params;
  const n = Number(slide);
  if (!Number.isInteger(n) || n < 1 || n > SLIDE_COUNT) {
    notFound();
  }
  return <Deck slides={buildSlides()} initialIndex={n - 1} />;
}
