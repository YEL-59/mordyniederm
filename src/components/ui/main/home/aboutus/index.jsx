import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-[#f6fefd] py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Image Section */}
        <div className="lg:col-span-6 relative rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Team Meeting"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-md flex items-center gap-4">
            <div className="bg-teal-100 text-teal-800 p-2 rounded-full">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Clients</p>
              <p className="text-xl font-bold text-teal-700">7000 M</p>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:col-span-6">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum.
          </p>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full">
            Learn More
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-2xl font-bold text-teal-900">18M</h3>
          <p className="text-gray-500 text-sm">
            Owned from properties transactions
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-900">26K</h3>
          <p className="text-gray-500 text-sm">Properties for Buy</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-900">15K</h3>
          <p className="text-gray-500 text-sm">Properties for Sell</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-teal-900">800</h3>
          <p className="text-gray-500 text-sm">Daily completed transactions.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
