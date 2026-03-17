import HeroSlideshow from "../components/HeroSlideshow";
import WhoWeAre from "../components/WhoWeAre";
import AnimationVideo from "../components/Animation";
import OurMission from "../components/OurMission";
import Sizzle from "../components/Trailer";
import OurApproach from "../components/OurApproach";

export default function Home() {
  return (
    <div>
      <HeroSlideshow />
      <WhoWeAre />
      <AnimationVideo />
      <OurMission />
      <Sizzle />
      <OurApproach />
    </div>
  );
}
