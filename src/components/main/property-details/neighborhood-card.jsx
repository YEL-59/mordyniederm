import React from 'react'

function NeighborhoodCard({data}) {
    const {rating, name, grades, distance} = data;
  return (
    <div className="p-4 flex flex-col items-center gap-6 rounded-[8px] border border-[#E9E9E9]">
      <div className="rounded-full bg-[#23938B] p-6 w-max">
        <p className="text-xl text-[#FFF]">
          <span className="text-3xl font-medium">{rating}</span>/10
        </p>
      </div>
      <div className="flex flex-col gap-1 justify-between">
        <h1 className="text-[#10423E] text-lg font-medium text-center">{name}</h1>
        <div className="flex items-center gap-4">
          <p className="text-base font-medium shrink-0">Grade: <span className='text-[#10423E]'>{grades}</span></p>
          <p className="text-base font-medium shrink-0">Distance: <span className='text-[#10423E]'>{distance}</span></p>
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodCard;