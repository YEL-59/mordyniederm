import React from "react";
import { BedDouble, Bath, Expand, Eye } from "lucide-react";

const PropertyCard = ({ property }) => {
  const {
    image,
    status,
    title,
    address,
    price,
    beds,
    baths,
    area,
    views,
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
    <div className="relative h-72 rounded-xl overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* Status badges */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
        {status.map((label, index) => (
          <span
            key={index}
            className={`text-xs font-semibold px-2 py-1 rounded ${getStatusStyle(label)}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Card content */}
      <div className="absolute rounded-[8px] bg-[#FFF]  bottom-[22px] left-[22px] right-[22px] p-4 z-10 text-[#10423E]">
        <h3 className="text-primary font-[Roboto] text-[20px] not-italic font-medium leading-[normal]">{title}</h3>
        <p className="text-primary font-[Roboto] text-[16px] not-italic font-normal leading-[normal]">{address}</p>
        <p className="text-xl text-red-400 font-bold mt-1">{price}</p>

        <div className="flex justify-between items-center text-sm text-white mt-3">
          <div className="flex items-center gap-1">
            <BedDouble size={16} /> {beds}
          </div>
          <div className="flex items-center gap-1">
            <Bath size={16} /> {baths}
          </div>
          <div className="flex items-center gap-1">
            <Expand size={16} /> {area}
          </div>
          <div className="flex items-center gap-1">
            <Eye size={16} /> {views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
