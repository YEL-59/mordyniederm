import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="bg-[#f3fdfc]  py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h2 className="text-5xl font-bold text-[#11403E] mb-6">Contact us</h2>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <ul className="space-y-4 text-[#008278]">
            <li className="flex items-center space-x-2">
              <span className="text-lg">📧</span>
              <span>lamondgrove@apartments.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-lg">📞</span>
              <span>+1 (555) 000–0000</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-lg">📍</span>
              <span>300 Lake Lamond Rd, Longview, TX</span>
            </li>
          </ul>

          <div className="bg-white shadow-md rounded-lg mt-10 p-6 w-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Office Hours
            </h3>
            <p className="text-sm text-gray-600">
              Mon - Fri: 09:00 AM - 06:00 PM
            </p>
            <p className="text-sm text-gray-600">Sat: 10:00 AM - 05:00 PM</p>
            <p className="text-sm text-gray-600">Sun: 12:00 AM - 05:00 PM</p>
          </div>
        </div>

        {/* Right Side */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Ali" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Tufan" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="example.com" type="email" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="scheduleDate">Schedule Date</Label>
              <div className="relative">
                <Input
                  id="scheduleDate"
                  placeholder="12 june 23"
                  className="pl-10"
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="123 456 7890" type="tel" />
            </div>
          </div>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" className="min-h-[150px]" />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm text-gray-600">
              I accept the <span className="underline">Terms</span>
            </Label>
          </div>

          <Button className="bg-[#2A9D8F] hover:bg-[#21867a] w-full md:w-[150px]">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
