import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BedDouble, Bath, Ruler } from "lucide-react";

const BestProperties = () => {
  return (
    <section className="bg-white text-white py-16 px-4">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-teal-300 mb-4">
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
          <div className="relative h-full">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Luxury Family Home"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex space-x-2">
              <Button
                variant="secondary"
                className="bg-teal-700 text-white px-4 py-1 rounded-full text-xs"
              >
                FOR RENT
              </Button>
              <Button
                variant="ghost"
                className="bg-white text-black px-4 py-1 rounded-full text-xs"
              >
                FOR LEASE
              </Button>
            </div>
            <CardContent className="absolute bottom-5 left-5 right-5 bg-white rounded-xl text-black p-4">
              <h3 className="text-lg font-semibold">Luxury Family Home</h3>
              <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                <span className="inline-block w-4 h-4 bg-gray-400 rounded-full" />
                1800-1818 79th St
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-600 font-bold text-lg">$395,000</span>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1 text-sm">
                    <BedDouble className="w-4 h-4" /> 4
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Bath className="w-4 h-4" /> 1
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Ruler className="w-4 h-4" /> 400
                  </span>
                </div>
              </div>
            </CardContent>
          </div>
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
