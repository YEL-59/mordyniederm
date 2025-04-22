import CarouselSlider from "@/components/main/home/carousel";
import Contact from "@/components/main/home/contact";
import FAQ from "@/components/main/home/faq";
import AboutUs from "@/components/main/home/aboutus";
import BestProperties from "@/components/main/home/bestproperties";
import Hero from "@/components/main/home/hero";
import TeamSection from "@/components/main/home/teamsection";
import { Whychoseus } from "@/components/main/home/whychoseus";

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
