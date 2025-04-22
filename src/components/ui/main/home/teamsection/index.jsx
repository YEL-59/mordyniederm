import React from "react";

const teamMembers = [
  {
    name: "John Powell",
    role: "Service Support",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Samuel Palmer",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
  {
    name: "Thomas Powell",
    role: "Marketing",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Tom Wilson",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white text-white py-16 px-4 text-center">
      <h2 className="text-4xl font-bold text-black mb-4">
        Meet Our Team Of Experts
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden  group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[300px] rounded-2xl object-cover"
            />
            <div className=" w-full  p-4 text-left">
              <h3 className="text-black text-lg font-semibold">
                {member.name}
              </h3>
              <p className="text-primary text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
