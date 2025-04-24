import home1 from '@/assets/home1.jpg';
import home2 from '@/assets/home2.jpg';
import home3 from '@/assets/home3.jpg';
import home4 from '@/assets/home4.jpg';
import home5 from '@/assets/home5.jpg';
import home6 from '@/assets/home6.jpg';
import bathIcon from '@/assets/icons/bath-icon.svg';
import bedIcon from '@/assets/icons/bed-icon.svg';
import filledRatingIcon from '@/assets/icons/filled-rating.svg';
import fitnessIcon from '@/assets/icons/fitness.svg';
import flatSize from '@/assets/icons/flat-size.svg';
import laundryIcon from '@/assets/icons/laundry.svg';
import greenLocationIcon from '@/assets/icons/location-green.svg';
import locationIcon from '@/assets/icons/location.svg';
import messageIcon from '@/assets/icons/message.svg';
import parkingIcon from '@/assets/icons/parking.svg';
import phoneIcon from '@/assets/icons/phone.svg';
import poolIcon from '@/assets/icons/pool.svg';
import backIcon from '@/assets/icons/previous-arrow.svg';
import sizeIcon from '@/assets/icons/size.svg';
import unfilledRatingIcon from '@/assets/icons/unfilled-rating-property-details.svg';
import reviewOne from '@/assets/review-1.png';
import reviewTwo from '@/assets/review-2.png';
import reviewThree from '@/assets/review-3.png';
import AvailableCard from '@/components/main/property-details/available-card';
import NeighborhoodCard from '@/components/main/property-details/neighborhood-card';
import ReviewCard from '@/components/main/property-details/review-card';
import TransportationCard from '@/components/main/property-details/transportation-card';
import StarRating from '@/components/main/shared/star-rating';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { z } from 'zod';

// Define validation schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phoneNumber: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
  rating: z.number().min(1, 'Please provide a rating'),
});

// feedback form validation
const feedbackSchema = z.object({
  rating: z.number().min(1, 'Please provide a rating'),
  message: z.string().min(1, 'Message is required'),
});


export  const properties = [
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
    type: 'apartment',
    booking: 'Available',
    rating: 4,
    totalReview: 12,
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
    type: 'villa',
    booking: 'Not Available',
    rating: 4,
    totalReview: 12,
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
    type: 'office',
    booking: 'Available',
    rating: 4,
    totalReview: 12,
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
    type: 'office',
    booking: 'Available',
    rating: 4,
    totalReview: 12,
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
    type: 'villa',
    booking: 'Not Available',
    rating: 4,
    totalReview: 12,
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
    type: 'apartment',
    booking: 'Available',
    rating: 4,
    totalReview: 12,
  },
];
 //   near by school
  export const nearBySchool = [
    {
      rating: 9,
      name: 'Sunflower Kindergarten School',
      grades: 'K - 5',
      distance: '0.8',
    },
    {
      rating: 8,
      name: 'Green Valley Elementary',
      grades: '1 - 5',
      distance: '1.2',
    },
    {
      rating: 7,
      name: 'Bright Future School',
      grades: 'K - 8',
      distance: '1.5',
    },
    {
      rating: 9,
      name: 'Oakridge International',
      grades: '1 - 10',
      distance: '2.0',
    },
    {
      rating: 8,
      name: 'Harmony Public School',
      grades: 'K - 12',
      distance: '2.3',
    },
    {
      rating: 7,
      name: 'Riverdale Primary School',
      grades: 'K - 5',
      distance: '0.9',
    },
    {
      rating: 9,
      name: 'Mount Litera Zee School',
      grades: '1 - 12',
      distance: '1.7',
    },
    {
      rating: 8,
      name: 'City Central School',
      grades: '6 - 12',
      distance: '2.8',
    },
    { rating: 9, name: 'Hilltop Academy', grades: 'K - 10', distance: '3.1' },
    {
      rating: 8,
      name: 'Happy Days School',
      grades: 'Nursery - 5',
      distance: '1.0',
    },
  ];
  // near by college
  export const nearByCollege = [
    {
      rating: 9,
      name: 'Sunrise Junior College',
      grades: '11 - 12',
      distance: '1.4',
    },
    {
      rating: 8,
      name: 'Green Meadows Degree College',
      grades: 'UG - PG',
      distance: '2.1',
    },
    {
      rating: 9,
      name: 'City Science College',
      grades: 'UG - PG',
      distance: '2.9',
    },
    {
      rating: 8,
      name: 'Valley Arts and Commerce College',
      grades: '11 - UG',
      distance: '3.2',
    },
    {
      rating: 7,
      name: 'Metro Polytechnic College',
      grades: 'Diploma - UG',
      distance: '1.8',
    },
    {
      rating: 9,
      name: 'Riverside Law College',
      grades: 'UG - PG',
      distance: '2.5',
    },
    {
      rating: 8,
      name: 'National Engineering Institute',
      grades: 'UG - PG',
      distance: '3.0',
    },
    {
      rating: 9,
      name: 'Harmony College of Management',
      grades: 'UG - PG',
      distance: '2.6',
    },
    {
      rating: 7,
      name: 'Westend Medical College',
      grades: 'UG - PG',
      distance: '3.4',
    },
    {
      rating: 8,
      name: 'Bright Vision Junior College',
      grades: '11 - 12',
      distance: '1.6',
    },
  ];
  export const nearByShoppingMall = [
    { name: 'Sunflower Mall', distance: '0.8', walk: '15min', drive: '3min' },
    {
      name: 'Green Valley Plaza',
      distance: '1.2',
      walk: '18min',
      drive: '4min',
    },
    { name: 'City Center Mall', distance: '2.0', walk: '25min', drive: '6min' },
    {
      name: 'Riverwalk Shopping Center',
      distance: '1.5',
      walk: '20min',
      drive: '5min',
    },
    { name: 'Harmony Galleria', distance: '2.8', walk: '30min', drive: '7min' },
    { name: 'Metro Square', distance: '1.0', walk: '12min', drive: '3min' },
    {
      name: 'Skyline Shopping Hub',
      distance: '3.5',
      walk: '40min',
      drive: '10min',
    },
    {
      name: 'Township Retail Park',
      distance: '2.3',
      walk: '27min',
      drive: '6min',
    },
    {
      name: 'Urban Street Mall',
      distance: '1.8',
      walk: '22min',
      drive: '5min',
    },
    {
      name: 'Lakeside Shopping Plaza',
      distance: '2.1',
      walk: '26min',
      drive: '6min',
    },
  ];
  export const transitSubway = [
    {
      name: 'Sunflower Subway Station',
      distance: '0.8',
      walk: '15min',
      drive: '3min',
    },
    {
      name: 'Downtown Metro Station',
      distance: '1.1',
      walk: '16min',
      drive: '4min',
    },
    {
      name: 'Green Line Station',
      distance: '1.4',
      walk: '19min',
      drive: '5min',
    },
    {
      name: 'Blue Valley Subway',
      distance: '1.9',
      walk: '23min',
      drive: '6min',
    },
    {
      name: 'Oakwood Subway Terminal',
      distance: '2.2',
      walk: '28min',
      drive: '7min',
    },
    {
      name: 'Central Circle Station',
      distance: '2.5',
      walk: '30min',
      drive: '8min',
    },
    { name: 'Eastside Metro', distance: '1.3', walk: '17min', drive: '4min' },
    {
      name: 'Northern Link Station',
      distance: '2.7',
      walk: '33min',
      drive: '8min',
    },
    { name: 'Hillcrest Subway', distance: '1.6', walk: '21min', drive: '5min' },
    {
      name: 'City Square Station',
      distance: '3.0',
      walk: '35min',
      drive: '9min',
    },
  ];

  export const commuterRail = [
    {
      name: 'Sunflower Commuter Station',
      distance: '0.8',
      walk: '15min',
      drive: '3min',
    },
    {
      name: 'Greenfield Rail Depot',
      distance: '1.5',
      walk: '22min',
      drive: '5min',
    },
    {
      name: 'Downtown Commuter Hub',
      distance: '2.0',
      walk: '28min',
      drive: '6min',
    },
    {
      name: 'Riverbend Station',
      distance: '2.6',
      walk: '32min',
      drive: '8min',
    },
    {
      name: 'Northway Commuter Point',
      distance: '3.0',
      walk: '37min',
      drive: '9min',
    },
    {
      name: 'Harmony Rail Junction',
      distance: '2.2',
      walk: '29min',
      drive: '7min',
    },
    { name: 'East Terminal', distance: '1.3', walk: '18min', drive: '4min' },
    {
      name: 'Skyline Rail Station',
      distance: '2.7',
      walk: '33min',
      drive: '8min',
    },
    {
      name: 'Oakridge Rail Yard',
      distance: '1.9',
      walk: '24min',
      drive: '6min',
    },
    {
      name: 'Cityview Commuter Stop',
      distance: '1.0',
      walk: '14min',
      drive: '3min',
    },
  ];

  export const airports = [
    {
      name: 'Sunflower Airport',
      distance: '0.8',
      walk: '15min',
      drive: '3min',
    },
    {
      name: 'Green Hills Airstrip',
      distance: '4.2',
      walk: '—',
      drive: '12min',
    },
    {
      name: 'Valley International Airport',
      distance: '6.5',
      walk: '—',
      drive: '18min',
    },
    {
      name: 'Riverport Domestic Airport',
      distance: '3.7',
      walk: '—',
      drive: '10min',
    },
    {
      name: 'Skyline National Airport',
      distance: '5.0',
      walk: '—',
      drive: '15min',
    },
    {
      name: 'Harmony Aviation Terminal',
      distance: '4.5',
      walk: '—',
      drive: '13min',
    },
    {
      name: 'Downtown Heliport',
      distance: '2.8',
      walk: '35min',
      drive: '8min',
    },
    {
      name: 'Central City Airport',
      distance: '7.1',
      walk: '—',
      drive: '20min',
    },
    { name: 'Eastview Airport', distance: '6.0', walk: '—', drive: '17min' },
    {
      name: 'Oakwood Regional Airport',
      distance: '5.8',
      walk: '—',
      drive: '16min',
    },
  ];

  //    review card
  export const reviews = [
    {
        id: 1,
      image: reviewOne,
      name: 'Hanna',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },
    {
        id: 2,
      image: reviewTwo,
      name: 'Edelyne',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },
    {
        id: 3,
      image: reviewThree,
      name: 'Evgeniy',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },

    {
        id: 4,
      image: reviewTwo,
      name: 'Edelyne',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },

    {
        id: 5,
      image: reviewOne,
      name: 'Edelyne',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },

    {
        id: 6,
      image: reviewThree,
      name: 'Edelyne',
      date: 'January 2023',
      comment:
        'We had a delightful stay! We loved soaking in the tub, hiking in the area, and wine tasting in Truckee.',
    },
  ];



function PropertyDetails() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Available');
  const [selectedOption, setSelectedOption] = useState('For Rent');
  const [availableActiveTab, setAvailableActiveTab] = useState('All');
  //   tabs for available section
  const availableTabs = ['All', 'Studio', '1 Bed', '3 Beds'];
  //   show all properties of available section
  const [showAllProperties, setShowAllProperties] = useState(false);
  //   today date select
  const today = new Date().toISOString().split('T')[0];
//    reviews
const [isShowAllReviews, setIsShowAllReviews] = useState(false);
const filteredReviews = isShowAllReviews ?
reviews : reviews.slice(0,3);
  //   contact section form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  });
  //   feedback form data
  const [hovered, setHovered] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedbackRating: 0,
      message: '',
    },
  });

  const feedbackRating = watch('feedbackRating');

  const { id } = useParams();
  const property = properties?.find((property) => property?.id == id);
  const {
    title,
    address,
    area,
    price,
    booking,
    rating,
    totalReview,
    baths,
    beds,
    type,
  } = property;

  if (!property) {
    return <div>Loading property details...</div>;
  }

  const tabs = [
    'Available',
    'Overview',
    'Amenities',
    'Location',
    'Neighborhood',
    'Transportation',
    'Contact',
    'Reviews',
  ];
  //   available property
  const availableProperties = [
    {
      status: ['FOR RENT'],
      image: home1,
      title: 'Luxury Family Home',
      beds: 4,
      baths: 1,
      area: 400,
      areaLocation: 'Unit 2045',
      price: '395,000',
    },
    {
      status: ['FOR LEASE'],
      image: home2,
      title: 'Modern Downtown Apartment',
      beds: 2,
      baths: 1,
      area: 850,
      areaLocation: 'Unit 301',
      price: '2,500',
    },
    {
      status: ['FOR RENT'],
      image: home3,
      title: 'Cozy Studio',
      beds: 1,
      baths: 1,
      area: 300,
      areaLocation: 'Unit 105',
      price: '1,200',
      apartmentType: 'studio',
    },
    {
      status: ['FOR LEASE'],
      image: home4,
      title: 'Beachfront Villa',
      beds: 5,
      baths: 3,
      area: 2000,
      areaLocation: 'Private Beach',
      price: '8,000',
    },
    {
      status: ['FOR RENT'],
      image: home5,
      title: 'Suburban Townhouse',
      beds: 3,
      baths: 2,
      area: 1200,
      areaLocation: 'Maple Street',
      price: '2,100',
    },
    {
      status: ['FOR LEASE'],
      image: home6,
      title: 'Penthouse Suite',
      beds: 1,
      baths: 3,
      area: 1800,
      areaLocation: 'Top Floor',
      price: '6,500',
    },
    {
      status: ['FOR RENT'],
      image: home1,
      title: 'Rustic Cabin',
      beds: 3,
      baths: 1,
      area: 600,
      areaLocation: 'Woods',
      price: '1,800',
    },
    {
      status: ['FOR LEASE'],
      image: home3,
      title: 'Luxury Condo',
      beds: 3,
      baths: 2,
      area: 1500,
      areaLocation: 'Downtown',
      price: '4,200',
    },
    {
      status: ['FOR RENT'],
      image: home5,
      title: 'Garden Apartment',
      beds: 1,
      baths: 1,
      area: 500,
      areaLocation: 'Back Unit',
      price: '1,500',
    },
    {
      status: ['FOR LEASE'],
      image: home4,
      title: 'Executive Office Space',
      beds: 0,
      baths: 2,
      area: 2500,
      areaLocation: 'Business District',
      price: '10,000',
      apartmentType: 'studio',
    },
  ];
  //   filter available properties
  const filteredAvailableProperties =
    availableActiveTab === 'All'
      ? availableProperties
      : availableActiveTab === 'Studio'
      ? availableProperties.filter(
          (property) => property.apartmentType?.toLowerCase() === 'studio'
        )
      : availableProperties.filter(
          (property) => property.beds === parseInt(availableActiveTab)
        );
  //   show all properties of available section
  const showAvailableProperties = showAllProperties
    ? filteredAvailableProperties
    : filteredAvailableProperties.slice(0, 6);
  //   dropdown select for available
  const handleSelect = (option) => {
    setSelectedOption(option);
    console.log('Selected option:', option); // Log the selected option
  };
 

  //   contact section from & feedback form
  function onSubmit(values) {
    console.log('Form values:', values);
    form.reset();
  }
  return (
    <div className="container mx-auto flex flex-col gap-6 py-12">
      <div
        className="flex items-center gap-2 cursor-pointer transition-all duration-300"
        onClick={() => navigate(-1)}
      >
        <img src={backIcon} alt="icon" />
        <p className="text-[#10423E] text-base">Back to Search</p>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-[36px] font-bold leading-[46px] text-[#23938B]">
            {title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 pr-5 border-r border-[#E6E6ED]">
                <img src={locationIcon} alt="icon" />
                <p className="text-base text-[#8A8787]">{address}</p>
              </div>
              <div className="flex items-center gap-1 pr-5 border-r border-[#E6E6ED]">
                <img src={sizeIcon} alt="icon" />
                <p className="text-base text-[#8A8787]"> {area}</p>
              </div>
              <div className="flex items-center gap-1 pr-5 border-r border-[#E6E6ED]">
                <p className="text-base text-[#8A8787]">{price}</p>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-base text-[#F54040]">{booking}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <StarRating rating={rating} showNumber={true} />
              <p className="text-[#C5C4C4] text-base">
                ({totalReview} Reviews)
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 container mx-auto h-[690px] mb-20 box-border">
          <img
            src={property.image}
            alt="property image"
            className="rounded-md w-full h-full"
          />
          <div className="flex flex-col gap-6">
            <img
              src={property.image}
              alt="property image"
              className="w-full h-full rounded-md"
            />
            <div className="flex items-center gap-3 justify-between">
              <img
                src={property.image}
                alt="property image"
                className="w-[48%] h-full rounded-md"
              />
              <img
                src={property.image}
                alt="property image"
                className="w-[48%] h-full rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="container mx-auto my-7 flex items-center justify-center">
          {tabs.map((tab) => (
            <div
              onClick={() => setActiveTab(tab)}
              className={`border-b p-4 text-base cursor-pointer ${
                activeTab === tab
                  ? 'text-[#23938B] border-b-2 border-[#23938B] font-medium'
                  : 'text-[#8A8787] border-[#E6E6ED]'
              } transition-all duration-300`}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="flex justify-between gap-4">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="bg-[#F5F5F5] rounded-[8px] px-12 py-5 flex items-center justify-center aspext-[229/62] w-[229px]">
                <p className="text-base text-[#10423E] font-medium capitalize shrink-0">
                  {type} Building
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-[8px] px-12 py-5 flex items-center justify-center aspext-[229/62] w-[229px]">
                <p className="text-base text-[#10423E] font-medium shrink-0">
                  Monthly Rent : {price}
                </p>
              </div>
              <div className="bg-[#F5F5F5] rounded-[8px] px-12 py-5 flex items-center justify-center gap-3 aspext-[229/62] w-[229px]">
                <img src={bedIcon} alt="icon" />
                <p className="text-base text-[#10423E] font-medium">{beds}</p>
              </div>
              <div className="bg-[#F5F5F5] rounded-[8px] px-12 py-5 flex items-center justify-center gap-3 aspext-[229/62] w-[229px]">
                <img src={bathIcon} alt="icon" />
                <p className="text-base text-[#10423E] font-medium">{baths}</p>
              </div>
              <div className="bg-[#F5F5F5] rounded-[8px] px-12 py-5 flex items-center justify-center gap-3 aspext-[229/62] w-[229px]">
                <img src={flatSize} alt="icon" className="shrink-0" />
                <p className="text-base text-[#10423E] font-medium shrink-0">
                  {area}
                </p>
              </div>
            </div>
            {activeTab === 'Available' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Available
                </h1>
                <div className="flex flex-col gap-4">
                  <DropdownMenu className="flex items-center gap-6">
                    <DropdownMenuTrigger
                      asChild
                      className="w-max [&:has(>svg)]:py-3 [&:has(>svg)]:px-8 text-base text-[#8A8787] bg-[#fff] hover:bg-none"
                    >
                      <div className="rounded-full px-4 py-3 flex items-center gap-2 border border-[#E9E9E9] cursor-pointer">
                        {selectedOption}{' '}
                        <ChevronDown className="w-4 h-4 cursor-pointer" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                      <DropdownMenuItem
                        onSelect={() => handleSelect('Apartment')}
                      >
                        Apartment
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleSelect('Villa')}>
                        Villa
                      </DropdownMenuItem>
                      <DropdownMenuItem onSelect={() => handleSelect('Studio')}>
                        Studio
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex flex-col gap-6">
                    <div className="border border-[#E9E9E9] grid grid-cols-4">
                      {availableTabs.map((tab) => (
                        <div
                          onClick={() => setAvailableActiveTab(tab)}
                          className={` ${
                            availableActiveTab === tab
                              ? 'bg-[#23938B] text-[#FFF]'
                              : 'text-[#8A8787] bg-transparent'
                          } flex justify-center items-center py-3 border-x border-x-[#E9E9E9] text-base font-medium cursor-pointer transition-all duration-300`}
                        >
                          {tab}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {showAvailableProperties.map((availableProperty) => (
                        <AvailableCard availableProperty={availableProperty} />
                      ))}
                    </div>
                    <div
                      onClick={() => setShowAllProperties(!showAllProperties)}
                      className="text-[#23938B] bg-[#FFF] px-12 py-3 rounded-[60px] border border-[#23938B] hover:text-[#FFF] hover:bg-[#23938B] w-max cursor-pointer"
                    >
                      {showAllProperties ? 'See less' : 'See more'}
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'Overview' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Overview
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    About this Tower
                  </h2>
                  <p className="text-base font-[26px] text-[#8A8787]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="text-base font-[26px] text-[#8A8787] mt-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Unique Feature
                  </h2>
                  <div className="flex gap-40">
                    <ul className="basis-[38%] text-base font-[26px] text-[#8A8787] list-disc ml-6">
                      <li>Columbia College is 1.5 miles away.</li>
                      <li>Online Rent Payments</li>
                      <li>UIC is a mile away.</li>
                      <li>Union Station 0.3 miles away</li>
                      <li>Wood Inspired Flooring*</li>
                      <li>4 Grocery Stores Within a 5 Minute Walk</li>
                      <li>Breakfast Bars*</li>
                      <li>Concentra Urgent care located in the building</li>
                      <li>Cultured Marble Vanities</li>
                      <li>French Market 0.2 miles away</li>
                      <li>Guest Suites</li>
                    </ul>
                    <ul className="basis-[38%] text-base font-[26px] text-[#8A8787] list-disc">
                      <li>Columbia College is 1.5 miles away.</li>
                      <li>Online Rent Payments</li>
                      <li>UIC is a mile away.</li>
                      <li>Union Station 0.3 miles away</li>
                      <li>Wood Inspired Flooring*</li>
                      <li>4 Grocery Stores Within a 5 Minute Walk</li>
                      <li>Breakfast Bars*</li>
                      <li>Concentra Urgent care located in the building</li>
                      <li>Cultured Marble Vanities</li>
                      <li>French Market 0.2 miles away</li>
                      <li>Guest Suites</li>
                    </ul>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'Amenities' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Amenities
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Community Amenities
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 rounded-[8px]">
                      <img src={parkingIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Parking</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 rounded-[8px]">
                      <img src={poolIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Outdoor Pool</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 rounded-[8px]">
                      <img src={fitnessIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Fitness Center</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-8 rounded-[8px]">
                      <img src={laundryIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">
                        Laundry Facilities
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-40">
                    <ul className="basis-[38%] text-[#8A8787] text-base leading-[26px] list-disc ml-6">
                      <li>Laundry Facilities</li>
                      <li> Property Manager on Site</li>
                      <li> Doorman</li>
                      <li> Concierge</li>
                      <li> 24 Hour Access</li>
                      <li>On-Site Retail</li>
                      <li> Health Club Discount</li>
                      <li>Public Transportation</li>
                    </ul>
                    <ul className="basis-[38%] text-[#8A8787] text-base leading-[26px] list-disc ml-6">
                      <li>Elevator</li>
                      <li>Lounge</li>
                      <li>Disposal Chutes</li>
                      <li> Fitness Center</li>
                      <li> Pool</li>
                      <li>Sundeck</li>
                      <li> Courtyard</li>
                      <li> Grill</li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Apartment Features
                  </h2>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 items-center justify-center p-8 rounded-[8px]">
                      <img src={parkingIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Parking</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 items-center justify-center p-8 rounded-[8px]">
                      <img src={poolIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Outdoor Pool</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 items-center justify-center p-8 rounded-[8px]">
                      <img src={fitnessIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">Fitness Center</p>
                    </div>
                    <div className="bg-[#F5F5F5] flex flex-col gap-2 items-center justify-center p-8 rounded-[8px]">
                      <img src={laundryIcon} alt="icon" className="w-10 h-10" />
                      <p className="text-base text-[#10423E]">
                        Laundry Facilities
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-40">
                    <ul className="basis-[38%] text-[#8A8787] text-base leading-[26px] list-disc ml-6">
                      <li>High Speed Internet Access</li>
                      <li> Wi-Fi</li>
                      <li> Washer/Dryer </li>
                      <li> Air Conditioning </li>
                      <li> Heating</li>
                      <li>Cable Ready</li>
                      <li> Dishwasher </li>
                      <li>Granite Countertops</li>
                    </ul>
                    <ul className="basis-[38%] text-[#8A8787] text-base leading-[26px] list-disc ml-6">
                      <li>Kitchen</li>
                      <li>Refrigerator</li>
                      <li>Freezer</li>
                      <li>Office</li>
                      <li> Views</li>
                      <li>Skylights</li>
                      <li> Walk-In Closets</li>
                      <li> Window Coverings</li>
                    </ul>
                  </div>
                </div>
                <div className="text-[#23938B] bg-[#FFF] px-8 py-3 rounded-[60px] border border-[#23938B] hover:text-[#FFF] hover:bg-[#23938B] w-max cursor-pointer">
                  See more
                </div>
              </>
            )}
            {activeTab === 'Location' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Location
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <img src={greenLocationIcon} alt="icon" />
                    <p className="text-[#10423E] text-xl font-medium">
                      {address}
                    </p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79490.29089582972!2d-0.18734208518024356!3d51.49355372870869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sbd!4v1745322336934!5m2!1sen!2sbd"
                    // width="1900"
                    // height="800"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full min-h-[336px]"
                  ></iframe>
                </div>
              </>
            )}
            {activeTab === 'Neighborhood' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Neighborhood
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Near by school
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {nearBySchool.map((school) => (
                      <NeighborhoodCard data={school} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Near by college
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {nearByCollege.map((college) => (
                      <NeighborhoodCard data={college} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Near by Shopping mall
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {nearByShoppingMall?.map((mall) => (
                      <TransportationCard data={mall} />
                    ))}
                  </div>
                </div>
                <div className="text-[#23938B] bg-[#FFF] px-12 py-3 rounded-[60px] border border-[#23938B] hover:text-[#FFF] hover:bg-[#23938B] w-max cursor-pointer">
                  See more
                </div>
              </>
            )}
            {activeTab === 'Transportation' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Transportation
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Transit/Subway
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {transitSubway.map((subway) => (
                      <TransportationCard data={subway} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Commuter Rail
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {commuterRail.map((rail) => (
                      <TransportationCard data={rail} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Airports
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    {airports.map((airport) => (
                      <TransportationCard data={airport} />
                    ))}
                  </div>
                </div>
              </>
            )}
            {activeTab === 'Contact' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Contact
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-[#10423E] text-xl font-medium">
                    Schedule a tour
                  </h2>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4 max-w-fullrounded-sm bg-[#FFF] p-6"
                    >
                      <div className="w-full flex gap-4">
                        {/* First Name */}
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                                First name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your first name"
                                  className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* Last Name */}
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                                Last name
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter your last name"
                                  className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Email */}
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter your email"
                                className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="w-full flex gap-4">
                        {/* date */}
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                                Schedule Date
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type={`date`}
                                  placeholder={today}
                                  className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {/* phone number */}
                        <FormField
                          control={form.control}
                          name="number"
                          render={({ field }) => (
                            <FormItem className="flex-1">
                              <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                                Phone Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="123 456 7890"
                                  className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      {/* Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                              Message
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter your message"
                                rows={8}
                                className="w-full border p-2 rounded placeholder:text-[#8A8787]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="py-5 px-6 rounded-[60px]  cursor-pointer flex ml-auto w-1/2 text-base font-medium bg-[#23938B] text-[#FFF]"
                      >
                        Submit
                      </Button>
                    </form>
                  </Form>
                </div>
              </>
            )}
            {activeTab === 'Reviews' && (
              <>
                <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                  Reviews
                </h1>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <img src={filledRatingIcon} alt="icon" />
                    <p className="text-[#10423E] text-xl font-medium">
                      {rating} - {totalReview} reviews
                    </p>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="p-6 space-y-4 bg-white rounded-md"
                  >
                    <div className="flex items-center gap-20 max-w-4xl">
                      {/* Rating Section */}
                      <div className="flex flex-col gap-2">
                        <h1 className="text-[#10423E] text-xl font-medium leading-[26px]">
                          Rating your service
                        </h1>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((value) => (
                            <img
                              key={value}
                              src={
                                value <= (hovered ?? feedbackRating)
                                  ? filledRatingIcon
                                  : unfilledRatingIcon
                              }
                              alt="star"
                              className="w-6 h-6 cursor-pointer"
                              onClick={() => setValue('feedbackRating', value)}
                              onMouseEnter={() => setHovered(value)}
                              onMouseLeave={() => setHovered(null)}
                            />
                          ))}
                        </div>
                        {errors.feedbackRating && (
                          <p className="text-red-500 text-sm">
                            {errors.feedbackRating.message}
                          </p>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="w-[2px] bg-[#23938B33] h-[10vh]"></div>

                      {/* Message Section */}
                      <div className="flex flex-col gap-2 flex-1">
                        <h1 className="text-[#10423E] font-medium leading-[26px]">
                          Feedback
                        </h1>
                        <textarea
                          {...register('message')}
                          placeholder="Enter your message"
                          rows={5}
                          className="w-full border p-2 rounded placeholder:text-[#8A8787]"
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm">
                            {errors.message.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-4 w-max flex mx-auto cursor-pointer bg-[#23938B] text-white py-2 px-4 rounded font-medium"
                    >
                      Submit Feedback
                    </button>
                  </form>
                  <div className="grid grid-cols-2 gap-12">
                    {filteredReviews.map((review) => (
                      <ReviewCard review={review} />
                    ))}
                  </div>
                  <div
                    onClick={() => setIsShowAllReviews(!isShowAllReviews)}
                    className="text-[#23938B] bg-[#FFF] text-base font-medium px-12 py-3 rounded-[60px] border border-[#23938B] hover:text-[#FFF] hover:bg-[#23938B] w-max cursor-pointer"
                  >
                    {isShowAllReviews
                      ? 'See less'
                      : `See ${reviews.length} reviews`}
                  </div>
                </div>
              </>
            )}
          </div>
          {/* contact card created */}
          <div className="bg-[#F5F5F5] border border-[#F5F5F5] py-8 px-12 rounded-[8px] flex flex-col gap-8 h-max">
            <h1 className="text-[#10423E] text-3xl font-semibold leading-[32px]">
              Contact this Property
            </h1>
            <div className="flex flex-col gap-5">
              <div className="bg-[#23938B] rounded-[60px] py-4 px-8 flex items-center gap-4 justify-center capitalize text-[#fff] cursor-pointer">
                <p className="text-base font-medium">Schedule a tour</p>
              </div>
              <div className="border border-[#23938B] text-[#23938B] rounded-[60px] py-4 px-8 flex items-center gap-4 justify-center capitalize cursor-pointer">
                <img src={phoneIcon} alt="icon" />
                <p className="text-base font-medium">(208) 555-0112</p>
              </div>
              <div className="border border-[#23938B] text-[#23938B] rounded-[60px] py-4 px-8 flex items-center gap-4 justify-center capitalize cursor-pointer">
                <img src={messageIcon} alt="icon" />
                <p className="text-base font-medium">Send message</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-[#10423E] text-3xl font-semibold leading-[32px]">
                Office Hours
              </h1>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#8A8787] text-base">
                  Mon - Fri: 09:00 AM - 06:00 PM
                </p>
                <p className="text-[#8A8787] text-base">
                  Sat: 10:00 AM - 05:00 PM
                </p>
                <p className="text-[#8A8787] text-base">
                  Sun: 12:00 AM - 05:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
