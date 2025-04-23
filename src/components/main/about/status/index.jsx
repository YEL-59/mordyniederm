import React from "react";

const stats = [
  {
    number: "18M",
    label: "Owned from properties transactions",
  },
  {
    number: "26K",
    label: "Properties for Buy",
  },
  {
    number: "15K",
    label: "Properties for Sell",
  },
  {
    number: "800",
    label: "Daily completed transactions.",
  },
];

export default function StatsBar() {
  return (
    <div className="bg-teal-600 py-10">
      <div className="container mx-auto w-full flex justify-between items-center px-4 flex-wrap gap-x-6 gap-y-6">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center text-white min-w-[160px]">
              <h3 className="text-[#10423E] font-roboto text-[56px] not-italic font-medium leading-none">
                {stat.number}
              </h3>
              <p className="text-white font-roboto text-base not-italic font-normal leading-[26px] mt-2">
                {stat.label}
              </p>
            </div>

            {index !== stats.length - 1 && (
              <div className="text-gray-900 text-2xl">•</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
