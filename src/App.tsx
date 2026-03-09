import Navbar from "./components/Navbar";
import HeroSlideshow from "./components/HeroSlideshow";
import WhoWeAre from "./components/WhoWeAre";

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSlideshow />
      <WhoWeAre />
    </div>
  );
}
