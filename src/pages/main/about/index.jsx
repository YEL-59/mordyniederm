import AboutHero from "@/components/main/about/abouthero";
import Timeline from "@/components/main/about/history";
import MissionSection from "@/components/main/about/ourmission";
import CarouselSlider from "@/components/main/home/carousel";
import Contact from "@/components/main/home/contact";
import FAQ from "@/components/main/home/faq";
import TeamSection from "@/components/main/home/teamsection";

const About = () => {
  return (
    <>
      <div>
        <AboutHero />
        <Timeline />
        <MissionSection />
        <TeamSection />
        <CarouselSlider />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};

export default About;
