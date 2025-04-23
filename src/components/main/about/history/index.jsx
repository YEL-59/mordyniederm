const Timeline = () => {
  const timelineData = [
    {
      year: "1987",
      title: "Open Our Company",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them.",
    },
    {
      year: "1995",
      title: "Company Remodulation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them.",
    },
    {
      year: "2000",
      title: "Open To Live",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them.",
    },
    {
      year: "2010",
      title: "21 Countries",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been them.",
    },
  ];

  return (
    <div className=" text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400">Our History</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-px bg-gray-500 z-0" />
        <div className="grid grid-cols-4 gap-6 relative z-10">
          {timelineData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-5xl font-bold text-teal-400 mb-2">
                {item.year}
              </div>
              <div className="w-4 h-4  bg-teal-400 rounded-full mb-6"></div>
              <h3 className="text-lg font-semibold text-teal-300 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 text-center max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
