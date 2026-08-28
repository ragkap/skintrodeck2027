import { S01_Cover } from "@/components/slides/S01_Cover";
import { S02_MarketShift } from "@/components/slides/S02_MarketShift";
import { S03_KeyHighlights } from "@/components/slides/S03_KeyHighlights";
import { S04_BusinessModel } from "@/components/slides/S04_BusinessModel";
import { S05_ProvenTraction } from "@/components/slides/S05_ProvenTraction";
import { S06_CompetitiveLandscape } from "@/components/slides/S06_CompetitiveLandscape";
import { S07_GoToMarket } from "@/components/slides/S07_GoToMarket";
import { S08_RevenueGrowth } from "@/components/slides/S08_RevenueGrowth";
import { S09_Retention } from "@/components/slides/S09_Retention";
import { S10_SpecialistOffering } from "@/components/slides/S10_SpecialistOffering";
import { S11_AIAccelerator } from "@/components/slides/S11_AIAccelerator";
import { S12_SpecialistDatasets } from "@/components/slides/S12_SpecialistDatasets";
import { S13_PrivateMarkets } from "@/components/slides/S13_PrivateMarkets";
import { S14_WhyNow } from "@/components/slides/S14_WhyNow";
import { S15_Consolidation } from "@/components/slides/S15_Consolidation";
import { S16_UniquelyPositioned } from "@/components/slides/S16_UniquelyPositioned";
import { S17_SynergisticMA } from "@/components/slides/S17_SynergisticMA";
import { S18_FundraiseHistory } from "@/components/slides/S18_FundraiseHistory";
import { S19_ThankYou } from "@/components/slides/S19_ThankYou";

export const SLIDE_COMPONENTS = [
  S01_Cover,
  S02_MarketShift,
  S03_KeyHighlights,
  S04_BusinessModel,
  S05_ProvenTraction,
  S06_CompetitiveLandscape,
  S07_GoToMarket,
  S08_RevenueGrowth,
  S09_Retention,
  S10_SpecialistOffering,
  S11_AIAccelerator,
  S12_SpecialistDatasets,
  S13_PrivateMarkets,
  S14_WhyNow,
  S15_Consolidation,
  S16_UniquelyPositioned,
  S17_SynergisticMA,
  S18_FundraiseHistory,
  S19_ThankYou,
];

export const SLIDE_COUNT = SLIDE_COMPONENTS.length;

export function buildSlides() {
  return SLIDE_COMPONENTS.map((Comp, i) => <Comp key={i} index={i + 1} total={SLIDE_COUNT} />);
}
