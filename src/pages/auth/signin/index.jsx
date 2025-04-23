import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    console.log("Submitting:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-2xl p-8 shadow-lg">
        <CardContent>
          <h2 className="text-3xl font-semibold text-center mb-2 text-teal-900">
            Welcome Back
          </h2>
          <p className="text-center text-base text-teal-900 underline mb-6 font-medium cursor-pointer">
            Sign In
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Input
                          placeholder="Enter your email address"
                          {...field}
                          className="pl-10"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password*</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={18}
                        />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          {...field}
                          className="pl-10 pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <div className="text-sm text-right text-teal-600 hover:underline cursor-pointer">
                      Forgot password?
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full py-2 text-sm font-medium"
                type="submit"
              >
                Sign In
              </Button>
              <div className="flex items-center justify-center gap-2">
                <hr className="w-full border border-gray-200" />
                <span className="text-sm text-muted-foreground">Or</span>
                <hr className="w-full border border-gray-200" />
              </div>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2 border-teal-600 text-teal-600 rounded-full py-2 text-sm font-medium"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign In With Google
              </Button>
            </form>
          </Form>

          <p className="text-center text-sm mt-6">
            Don’t have an account?{" "}
            <span className="text-teal-600 underline cursor-pointer">
              Sign Up
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
