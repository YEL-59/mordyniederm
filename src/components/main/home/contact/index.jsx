import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define validation schema with Zod
const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

function Contact() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log("Form values:", values);
    form.reset();
  }
  return (
    <div className="relative">
      <div className="w-full max-h-[800px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79490.29089582972!2d-0.18734208518024356!3d51.49355372870869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sbd!4v1745322336934!5m2!1sen!2sbd"
          width="1900"
          height="800"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-lg absolute top-[20%] right-[10%] rounded-sm bg-[#FFF] p-6"
        >
          <div className="flex flex-col gap-1">
            <h1 className="text-[30px] leading-[36px] font-semibold text-[#10423E]">
              Get In Touch
            </h1>
            <p className="text-[#8A8787] text-base leading-[26px]">
              Aliquam lacinia diam quis lacus euismod
            </p>
          </div>
          <div className="w-full flex gap-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                    First name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your first name"
                      className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                    Last name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your last name"
                      className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    className="px-4 py-3 border border-[#8A8787] rounded placeholder:text-[#8A8787]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base leading-[26px] font-medium text-[#10423E]">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your message"
                    rows={8}
                    className="w-full border p-2 rounded placeholder:text-[#8A8787]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="py-5 px-6 rounded w-full text-base font-medium bg-[#23938B] text-[#FFF]"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default Contact;
