import { Deck } from "@/components/deck/Deck";
import { buildSlides } from "@/slides";

export default function Home() {
  return <Deck slides={buildSlides()} initialIndex={0} />;
}
