import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import navlogo from "../../../../assets/navlogo.png";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties" },
    { label: "Contact Us", href: "/contact" },
    { label: "About Us", href: "/about" },
    { label: "Residential Portal", href: "/residential-portal" },
    { label: "Property Improvement", href: "/property-improvement" },
  ];

  return (
    <nav className="w-full bg-white px-6 py-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={navlogo} alt="Logo" className="h-10" />
        </Link>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-gray-700">
            <Phone className="w-5 h-5" />
            <span>+603-1234-5678</span>
          </div>
          <Link to="/sign-in">
            {" "}
            <Button variant="default">Sign In</Button>
          </Link>
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
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-6 flex items-center gap-2 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <span>+603-1234-5678</span>
                </div>
                <Link to="sign-in">
                  {" "}
                  <Button className="mt-4 w-full rounded-full bg-primary text-primary">
                    Sign In
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
