import bathsIcon from '@/assets/icons/bath-white-icon.svg';
import bedsIcon from '@/assets/icons/bed-white-icon.svg';
import areaIcon from '@/assets/icons/size.svg';

function AvailableCard({ availableProperty }) {
  const { status, image, title, beds, baths, area, areaLocation, price } =
    availableProperty;
  return (
    <div className="flex flex-col border border-[#E9E9E9] rounded-[12px]">
      <img
        src={image}
        alt="image"
        className="rounded-tl-[12px] rounded-tr-[12px] object-cover w-full h-full"
      />
      <div className="p-6 flex flex-col gap-4">
        <h1 className="text-[#10423E] text-xl font-medium">{title}</h1>
        <div className="flex items-center">
          <div className="flex items-center gap-1 px-4  border-r-2 border-r-[#E9E9E9]">
            <img src={bedsIcon} alt="icon" />
            <p className="text-[#8A8787] text-base">{beds}</p>
          </div>
          <div className="flex items-center gap-1 px-4  border-r-2 border-r-[#E9E9E9]">
            <img src={bathsIcon} alt="icon" />
            <p className="text-[#8A8787] text-base">{baths}</p>
          </div>
          <div className="flex items-center gap-1 px-4 ">
            <img src={areaIcon} alt="icon" />
            <p className="text-[#8A8787] text-base">{area}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[#10423E] text-xl font-medium">{areaLocation}</p>
          <p className="text-[#EB664E] text-3xl font-semibold">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default AvailableCard;
