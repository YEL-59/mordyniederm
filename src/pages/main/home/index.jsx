import AboutUs from "@/components/ui/main/home/aboutus";
import BestProperties from "@/components/ui/main/home/bestproperties";
import Hero from "@/components/ui/main/home/hero";
import { Whychoseus } from "@/components/ui/main/home/whychoseus";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Whychoseus />
        <BestProperties />
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
