import home1 from '@/assets/home1.jpg';
import home2 from '@/assets/home2.jpg';
import home3 from '@/assets/home3.jpg';
import home4 from '@/assets/home4.jpg';
import home5 from '@/assets/home5.jpg';
import home6 from '@/assets/home6.jpg';
import bathIcon from '@/assets/icons/bath-icon.svg';
import bedIcon from '@/assets/icons/bed-icon.svg';
import flatSize from '@/assets/icons/flat-size.svg';
import locationIcon from '@/assets/icons/location.svg';
import messageIcon from '@/assets/icons/message.svg';
import phoneIcon from '@/assets/icons/phone.svg';
import backIcon from '@/assets/icons/previous-arrow.svg';
import sizeIcon from '@/assets/icons/size.svg';
import StarRating from '@/components/main/shared/star-rating';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router';

function PropertyDetails() {
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
  const [activeTab, setActiveTab] = useState('Available');
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

  return (
    <div className="container mx-auto flex flex-col gap-6 py-12">
      <div className="flex items-center gap-2">
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
              }`}
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
                      className="w-max [&:has(>svg)]:py-6 [&:has(>svg)]:px-12 text-base text-[#8A8787] bg-[#fff] hover:bg-none"
                    >
                      <Button className="rounded-full px-4  py-5 flex items-center gap-2">
                        For Rent <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-2">
                      <DropdownMenuItem>Apartment</DropdownMenuItem>
                      <DropdownMenuItem>Villa</DropdownMenuItem>
                      <DropdownMenuItem>Studio</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div></div>
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
                    <ul className="text-base font-[26px] text-[#8A8787] list-disc ml-6">
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
                    <ul className="text-base font-[26px] text-[#8A8787] list-disc">
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
                </div>
              </>
            )}
            {activeTab === 'Location' && (
              <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                Location
              </h1>
            )}
            {activeTab === 'Neighborhood' && (
              <h1 className="text-[#10423E] border-b-2 border-b-[#10423E] w-max text-3xl font-semibold leading-[32px] py-6 px-8">
                Neighborhood
              </h1>
            )}
          </div>
          {/* contact card created */}
          <div className="bg-[#F5F5F5] border border-[#F5F5F5] py-8 px-12 rounded-[8px] flex flex-col gap-8">
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
