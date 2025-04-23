import React from "react";
import team1 from "../../../../assets/team1.jpg"
import team2 from "../../../../assets/team2.jpg"
import team3 from "../../../../assets/team3.jpg"
import team4 from "../../../../assets/team4.jpg"

const teamMembers = [
  {
    name: "John Powell",
    role: "Service Support",
    image: team1,
  },
  {
    name: "Samuel Palmer",
    role: "Marketing",
    image: team2,
  },
  {
    name: "Thomas Powell",
    role: "Marketing",
    image: team3,
  },
  {
    name: "Tom Wilson",
    role: "Designer",
    image: team4,
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white text-white py-16 px-4 text-center">
      <h2 className="text-[#10423E] text-center font-[Roboto] text-[56px] not-italic font-medium leading-[normal] capitalize mb-4">
        Meet Our Team Of Experts
      </h2>
      <p className="text-[#8A8787] text-center font-[Roboto] text-[16px] not-italic font-normal leading-[26px] max-w-2xl mx-auto mb-12">
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
              <h3 className="text-[#10423E] font-[Roboto] text-[24px] not-italic font-medium leading-[normal]">
                {member.name}
              </h3>
              <p className="text-[#8A8787] font-[Roboto] text-[16px] not-italic font-normal leading-[26px]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
