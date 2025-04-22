import CarouselSlider from "@/components/ui/main/home/carousel";
import Contact from "@/components/ui/main/home/contact";
import FAQ from "@/components/ui/main/home/faq";
import AboutUs from "@/components/ui/main/home/aboutus";
import BestProperties from "@/components/ui/main/home/bestproperties";
import Hero from "@/components/ui/main/home/hero";
import TeamSection from "@/components/ui/main/home/teamsection";
import { Whychoseus } from "@/components/ui/main/home/whychoseus";

const Home = () => {
  return (
    <>
      <div>
        <Hero />

        <Whychoseus />
        <BestProperties />
        <AboutUs />
        <TeamSection />
        <CarouselSlider />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};

export default Home;
