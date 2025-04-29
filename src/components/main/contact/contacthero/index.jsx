import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import Message from "@/assets/svg/message";
import Phone from "@/assets/svg/phone";
import Location from "@/assets/svg/location";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  scheduleDate: z.string().min(1, "Date is required"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(1, "Message is required"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms" }),
  }),
});

export default function ContactUs() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      scheduleDate: "",
      phone: "",
      message: "",
      terms: false,
    },
  });

  function onSubmit(values) {
    console.log("Form Data:", values);
  }

  return (
    <div className="bg-[#f3fdfc] py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-[#10423E] font-roboto text-[35px] lg:text-[72px] font-semibold leading-none mb-6">
            Contact us
          </h2>
          <p className="text-[#8A8787] font-roboto text-[16px] font-normal leading-[26px] mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <ul className="space-y-4 text-[#008278]">
            <li className="flex items-center space-x-2">
              <span className="text-lg">
                <Message />
              </span>
              <span className="text-[#23938B] font-poppins text-[16px] font-medium leading-[26px]">
                lamondgrove@apartments.com
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-lg">
                <Phone />
              </span>
              <span className="text-[#23938B] font-poppins text-[16px] font-medium leading-[26px]">
                +1 (555) 000–0000
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-lg">
                <Location />
              </span>
              <span className="text-[#23938B] font-poppins text-[16px] font-medium leading-[26px]">
                300 Lake Lamond Rd, Longview, TX
              </span>
            </li>
          </ul>

          <div className="bg-white border border-[#F5F5F5] rounded mt-10 p-6 px-10 w-fit">
            <h3 className="text-[#10423E] text-center font-roboto text-[24px] font-semibold leading-[31.5px] mb-2">
              Office Hours
            </h3>
            <p className="text-[#8A8787] font-poppins text-[16px] font-normal leading-[26px]">
              Mon - Fri: 09:00 AM - 06:00 PM
            </p>
            <p className="text-[#8A8787] font-poppins text-[16px] font-normal leading-[26px]">
              Sat: 10:00 AM - 05:00 PM
            </p>
            <p className="text-[#8A8787] font-poppins text-[16px] font-normal leading-[26px]">
              Sun: 12:00 AM - 05:00 PM
            </p>
          </div>
        </div>

        {/* Right Side - ShadCN Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#10423E]">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Ali"
                        {...field}
                        className="bg-[#fff] py-5"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#10423E]">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tufan"
                        className="bg-[#fff] py-5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#10423E]">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example.com"
                      type="email"
                      className="bg-[#fff] py-5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="scheduleDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-[#10423E]">
                      Schedule Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <div className="relative w-full">
                            <button
                              type="button"
                              className={cn(
                                "w-full text-left font-normal h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm pl-10",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value
                                ? format(field.value, "PPP")
                                : "Pick a date"}
                            </button>
                            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#10423E]">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123 456 7890"
                        className="bg-[#fff] py-5"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#10423E]">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[150px] bg-[#fff]"
                      placeholder="Your message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      id="terms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel htmlFor="terms" className="text-sm text-gray-600">
                    I accept the <span className="underline">Terms</span>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="bg-[#2A9D8F] hover:bg-[#21867a] font-medium rounded-full px-30 text-[16px] w-full md:w-[150px]">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
