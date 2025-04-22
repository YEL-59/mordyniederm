import Home from "@/assets/svg/home";
import Agent from "@/assets/svg/agent";
import Plist from "@/assets/svg/plist";
import Properties from "@/assets/svg/properties";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    title: "Find Your Future Home",
    description:
      "We help you find a new home by offering a smart real estate experience.",
    icon: Home,
  },
  {
    title: "Experienced Agents",
    description: "Find an experienced agent who knows your market best.",
    icon: Agent,
  },
  {
    title: "Rent Lease Properties",
    description: "Millions of houses and apartments in your favorite cities.",
    icon: Plist,
  },
  {
    title: "List Your Own Property",
    description: "Sign up now and sell or rent your own properties.",
    icon: Properties,
  },
];

export function Whychoseus() {
  return (
    <div className="bg-primary">
      <section className="pt-[130px] pr-[269.337px] pb-[130.2px] pl-[269px] px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-white text-center font-roboto text-[56px] not-italic font-medium leading-none mb-4">
            Why Choose Us
          </h1>
          <p className="text-white/60 text-center font-roboto text-base not-italic font-normal leading-[26px] max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-primary text-sm font-medium py-3 px-8 rounded-full transition-colors">
            Schedule a Tour
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, Icon }) {
  return (
    <Card className="h-full text-center bg-primary border-0 shadow-none">
      <CardHeader>
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-transparent border border-white">
            <Icon className="h-10" />
          </div>
        </div>
        <CardTitle className="text-white text-center font-roboto text-[19px] not-italic font-medium leading-[22.8px] capitalize">
          {title}
        </CardTitle>
        <CardDescription className="text-white/60 text-center font-roboto text-base not-italic font-normal leading-[26px]">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
