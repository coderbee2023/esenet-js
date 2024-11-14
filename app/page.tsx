import { EventPromotion } from "@/components/event-promotion";
import { HappySponsors } from "@/components/happy-sponsors";
import { ImagesSliderDemo } from "@/components/hero-section";
import OventExpoBanner from "@/components/ovent-expo-banner";
import { EventProgram } from "@/components/program";
import { Speaker } from "@/components/speakers";

export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <EventPromotion />
      <Speaker />
      <OventExpoBanner />
      <EventProgram />
      <HappySponsors />
    </div>
  );
}
