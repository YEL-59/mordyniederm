import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import navlogo from "../../../../../assets/navlogo.png";
const Navbar = () => {
  const navItems = [
    "Home",
    "Properties",
    "Contact Us",
    "About Us",
    "Residential Portal",
    "Property Improvement",
  ];

  return (
    <nav className="w-full bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          <img src={navlogo} alt="" />
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-primary cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-700">
            <Phone className="w-5 h-5" />
            <span>+603-1234-5678</span>
          </div>
          <Button variant="default">Sign In</Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <span
                    key={item}
                    className="text-lg font-medium hover:text-primary cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
                <div className="mt-6 flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <span>+603-1234-5678</span>
                </div>
                <Button className="mt-4 w-full rounded-full bg-primary text-primary">
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
