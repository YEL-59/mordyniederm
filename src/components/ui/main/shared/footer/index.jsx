import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import footerlogo from "../../../.././../assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#123c39] text-white px-6 md:px-20 py-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-72 items-start justify-between">
        {/* Left Section */}
        <div className="md:w-[36%]">
          <div className="space-y-4">
            <img
              src={footerlogo}
              alt="Lamond Grove Apartments"
              className="h-20"
            />
            <p className="text-sm leading-relaxed text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of.
            </p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-medium mb-2">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Facebook className="h-4 w-4 cursor-pointer" />
              <Twitter className="h-4 w-4 cursor-pointer" />
              <Instagram className="h-4 w-4 cursor-pointer" />
              <Linkedin className="h-4 w-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Section: Quick Links, Other Links, Contact */}
        <div className="md:w-[70%] grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Home</li>
              <li>Properties</li>
              <li>Property Improvements</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Resident Portal</li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Other Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Privacy Policy</li>
              <li>Terms And Conditions</li>
              <li>Booking Now</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>(307) 555-0133</li>
              <li>debbie.baker@example.com</li>
              <li>
                1901 Thornridge Cir. Shiloh,
                <br />
                Hawaii 81063
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-5 text-center text-sm text-gray-300">
        Copyright © 2025. Lamond Grove Apartments
      </div>
    </footer>
  );
}
