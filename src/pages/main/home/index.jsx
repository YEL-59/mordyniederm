
import PropertyCard from '@/components/ui/PropertyCard';
import React from 'react'
import home1 from "@/assets/home1.jpg";
import home2 from "@/assets/home2.jpg";
import home3 from "@/assets/home3.jpg";
import home4 from "@/assets/home4.jpg";
import home5 from "@/assets/home5.jpg";
import home6 from "@/assets/home6.jpg";
import AboutUs from '@/components/main/home/aboutus';
import BestProperties from '@/components/main/home/bestproperties';
import Hero from '@/components/main/home/hero';
import { Whychoseus } from '@/components/main/home/whychoseus';
import TeamSection from '@/components/main/home/teamsection';
import CarouselSlider from '@/components/main/home/carousel';
import FAQ from '@/components/main/home/faq';
import Contact from '@/components/main/home/contact';


const Home = () => {
    const properties = [
      {
        image: home1,
        status: ['FOR RENT', 'FOR LEASE'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
      {
        image: home2,
        status: ['FOR LEASE'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
      {
        image: home3,
        status: ['FOR RENT'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
      {
        image: home4,
        status: ['FOR RENT'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
      {
        image: home5,
        status: ['FOR RENT', 'FOR LEASE'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
      {
        image: home6,
        status: ['FOR RENT', 'FOR LEASE'],
        title: 'Luxury Family Home',
        address: '1300 3rd Street, NY',
        price: '$395,000',
        beds: 4,
        baths: 5,
        area: '1,200 Sq Ft',
        views: 400,
      },
    ];
  return (
    <>
      <div>
        <Hero />
        <Whychoseus />
        <BestProperties  />
        <AboutUs/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
  </div>
        <TeamSection />
        <CarouselSlider />
        <FAQ />
        <Contact />
      </div>
    </>
  );
};



export default Home;