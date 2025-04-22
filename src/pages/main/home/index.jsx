import CarouselSlider from "@/components/ui/main/home/carousel";
import Contact from "@/components/ui/main/home/contact";
import FAQ from "@/components/ui/main/home/faq";
import Hero from "@/components/ui/main/home/hero";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <CarouselSlider/>
        <FAQ/>
        <Contact/>
      </div>
    </>
  );
};

export default Home;
