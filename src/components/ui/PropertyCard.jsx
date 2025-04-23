import PropertyCardContent from './PropertyCardContent';
import { Button } from './button';

const PropertyCard = ({ property, classname }) => {
  const { image, status, title } = property;
console.log(title)
  const getStatusStyle = (label) => {
    switch (label) {
      case 'FOR RENT':
        return 'bg-[#10423E] text-white';
      case 'FOR LEASE':
        return 'bg-[#EFFBFA] text-[#10423E]';
      default:
        return 'bg-gray-300 text-gray-800';
    }
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md ${classname}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-lg" />

      {/* Status badges */}
      <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
        {status.map((label, index) => (
          <Button
            variant="outline"
            key={index}
            className={`text-xs font-semibold px-5 py-1 rounded-full cursor-pointer border-none ${getStatusStyle(
              label
            )}`}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Card content */}
      <div className="absolute  bottom-[22px] left-[22px] right-[22px]  z-10 ">
        <PropertyCardContent property={property} />
      </div>
    </div>
  );
};

export default PropertyCard;
