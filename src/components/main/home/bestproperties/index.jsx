import { Card } from '@/components/ui/card';
import PropertyCard from '@/components/ui/PropertyCard';

import home1 from '@/assets/home1.jpg';

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
];

const BestProperties = () => {
  return (
    <section className="bg-white text-white py-16 px-4">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-[#10423E] mb-4">
          Best Properties
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 container mx-auto">
        <Card className="lg:col-span-6 row-span-2 overflow-hidden p-0">
          {properties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </Card>

        <Card className="lg:col-span-6 overflow-hidden p-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern Apartment"
            className="w-full h-full object-cover"
          />
        </Card>

        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="overflow-hidden p-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Living Room"
              className="w-full h-full object-cover"
            />
          </Card>

          <Card className="bg-teal-700 text-white flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-3xl font-bold">280+</h3>
            <p className="text-sm mt-2">Properties</p>
            <p className="text-sm text-teal-100 mt-2 max-w-[200px]">
              Explore our wide variety of properties to find your dream home
              today
            </p>
            <div className="mt-4 bg-white text-teal-700 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BestProperties;
