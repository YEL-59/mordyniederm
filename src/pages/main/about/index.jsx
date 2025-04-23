import AboutHero from "@/components/main/about/abouthero";
import Timeline from "@/components/main/about/history";
import CarouselSlider from "@/components/main/home/carousel";
import Contact from "@/components/main/home/contact";
import FAQ from "@/components/main/home/faq";

const About = () => {
  return (
    <>
      <div>
        <AboutHero />
        <Timeline />
        <CarouselSlider />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};

export default About;
