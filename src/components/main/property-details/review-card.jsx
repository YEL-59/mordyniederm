import React from 'react'

function ReviewCard({review}) {
    const {image, name, date, comment} = review;
  return (
    <div className='flex flex-col gap-3'>
      <div className="flex items-center gap-4">
        <img src={image} alt="profile" className='w-16 h-16 rounded-full'/>
        <div className="flex flex-col gap-1">
          <h1 className="text-[#10423E] text-xl font-medium">{name}</h1>
          <p className="text-[#8A8787] text-base leading-[26px]">{date}</p>
        </div>
      </div>
      <p className="text-[#8A8787] text-base">{comment}</p>
    </div>
  );
}

export default ReviewCard;