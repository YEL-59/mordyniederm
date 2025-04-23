import React from 'react'
import unfilled from '@/assets/icons/unfilled-icon.svg';
import filled from '@/assets/icons/filled-rating.svg';

const StarRating = ({ rating, showNumber = false }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={i < rating ? filled : unfilled}
          alt={i < rating ? 'Filled star' : 'Empty star'}
          className="w-4 h-4"
        />
      ))}
      {showNumber && (
        <span className="ml-1 text-base text-[#10423E]">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};


export default StarRating;