import PropertyCard from '@/components/ui/PropertyCard';
import { useState } from 'react';

function ExploreProperties({ properties }) {
  const [activeTab, setActiveTab] = useState('all properties');

  const tabs = ['all properties', 'villa', 'apartment', 'office'];

  const filteredProperties =
    activeTab === 'all properties'
      ? properties
      : properties.filter(
          (property) => property.property.toLowerCase() === activeTab
        );

  return (
    <div className="p-16 sm:p-20 lg:p-24 xl:p-28 2xl:p-32">
      <div className="flex flex-col gap-16 max-w-[70%] w-full mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[44px] sm:text-[48px] lg:text-[52px] xl:text-[56px] font-medium capitalize text-[#10423E]">
            Explore Properties
          </h1>
          <p className="text-base leading-[26px] text-[#8A8787] w-full lg:w-[80%] xl:w-[60%] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="p-4 flex flex-col gap-6">
          {/* Tabs */}
          <div className="flex justify-center gap-8 mb-6 flex-wrap">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`capitalize px-4 py-1 text-base font-medium flex items-center justify-center rounded-[40px] cursor-pointer ${
                  activeTab === tab
                    ? 'text-[#23938B] border border-[#23938B]'
                    : 'text-[#10423E]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property, index) => (
              <div
                key={index}
                className="rounded-lg shadow border overflow-hidden"
              >
                <PropertyCard property={property} classname='h-[446px]' />
              </div>
            ))}
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#23938B] text-white px-12 py-2 rounded-full hover:bg-teal-700 cursor-pointer">
              See All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreProperties;
