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

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2 flex gap-2">
          {status.map((label, index) => (
            <span
              key={index}
              className="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{address}</p>
        <p className="text-xl text-red-600 font-bold">{price}</p>
        <div className="flex justify-between text-sm text-gray-600 mt-4">
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
