import React from "react";
import { BedDouble, Bath, Expand, Eye } from "lucide-react";
import PropertyCardContent from './PropertyCardContent';
import { Button } from "./button";

const PropertyCard = ({ property }) => {
  const {
    image,
    status,
    title,
  } = property;

  const getStatusStyle = (label) => {
    switch (label) {
      case "FOR RENT":
        return "bg-green-700 text-white";
      case "FOR LEASE":
        return "bg-[#EFFBFA] text-teal-700";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="relative h-72 rounded-xl overflow-hidden shadow-md lg:h-full">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Status badges */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
        {status.map((label, index) => (
          <Button
            key={index}
            className={`text-xs font-semibold px-5 py-1 rounded-full cursor-pointer ${getStatusStyle(
              label
            )}`}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Card content */}
      <div className="absolute  bottom-[22px] left-[22px] right-[22px]  z-10 ">
        <PropertyCardContent
          title={property.title}
          address={property.address}
          price={property.price}
          beds={property.beds}
          baths={property.baths}
          area={property.area}
        />
      </div>
    </div>
  );
};

export default PropertyCard;
