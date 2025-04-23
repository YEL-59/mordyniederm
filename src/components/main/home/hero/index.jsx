import herobg from "../../../../assets/herobg.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin, ChevronDown } from "lucide-react";
import Filter from "@/assets/svg/filter";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <div className="bg-transparent bg-opacity-20 backdrop-blur-xs rounded-lg p-20 border border-white/50 shadow-lg">
          <button className="mb-4 px-6 py-2 bg-transparent border border-black text-black font-semibold rounded-full hover:bg-gray-200 transition">
            LET US GUIDE YOUR HOME
          </button>
          <h1 className="text-center text-[#10423E] font-roboto text-[72px] font-semibold leading-none mb-4">
            Welcome to Lamond Grove Apartments
            <br />
            Your Ideal Home in Longview, TX!
          </h1>
          <p className="text-sm text-[#10423E] ">
            Modern Living, Convenient Location, and a Welcoming Community Await
            You at Lamond Grove Apartments.
          </p>

          <div className="flex items-center gap-2 bg-white p-4 mt-5 rounded-full shadow-sm w-full max-w-5xl mx-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-full px-4  py-5 flex items-center gap-2">
                  Home Type <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2">
                <DropdownMenuItem>Apartment</DropdownMenuItem>
                <DropdownMenuItem>Villa</DropdownMenuItem>
                <DropdownMenuItem>Studio</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center flex-1 bg-white text-[#8A8787] border-2 rounded-full pl-4 pr-2">
              <MapPin className="w-4 h-4 text-[#8A8787]" />
              <Input
                type="text"
                placeholder="Location"
                className="flex-1 border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-sm bg-transparent"
              />
            </div>

            <Button className="rounded-full bg-transparent py-5  text-[#8A8787] hover:text-white border border-[#E9E9E9] px-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#8A8787]" />
              All Filters
            </Button>

            <Button className="rounded-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-5 flex items-center gap-2">
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
