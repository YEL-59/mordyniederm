
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
import ExploreProperties from '@/components/main/home/explore-properties';


const Home = () => {
const properties = [
  {
    id: 1,
    image: home1,
    status: ['FOR RENT', 'FOR LEASE'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'apartment',
    booking: 'Available',
  },
  {
    id: 2,
    image: home2,
    status: ['FOR LEASE'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'villa',
    booking: 'Not Available',
  },
  {
    id: 3,
    image: home3,
    status: ['FOR RENT'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'office',
    booking: 'Available',
  },
  {
    id: 4,
    image: home4,
    status: ['FOR RENT'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'office',
    booking: 'Available',
  },
  {
    id: 5,
    image: home5,
    status: ['FOR RENT', 'FOR LEASE'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'villa',
    booking: 'Not Available',
  },
  {
    id: 6,
    image: home6,
    status: ['FOR RENT', 'FOR LEASE'],
    title: 'Luxury Family Home',
    address: '1300 3rd Street, NY',
    price: '$395,000',
    beds: 4,
    baths: 5,
    area: '1,200 Sq Ft',
    views: 400,
    property: 'apartment',
    booking: 'Available',
  },
];

  return (
    <>
      <div>
        <Hero />
        <ExploreProperties properties={properties} />
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