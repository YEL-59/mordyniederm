import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const formSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <Card className="max-w-md w-full rounded-2xl shadow-xl">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold text-center text-emerald-900">
            Create Your Account
          </h2>
          <p className="text-center text-emerald-700 font-medium underline mt-1">
            Sign Up
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <Input
                    placeholder="Enter your first name"
                    {...register("firstName")}
                    className="pl-10"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <Input
                    placeholder="Enter your last name"
                    {...register("lastName")}
                    className="pl-10"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                placeholder="Enter your email address"
                {...register("email")}
                className="pl-10"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
                className="pl-10 pr-10"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter your confirm password"
                {...register("confirmPassword")}
                className="pl-10 pr-10"
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="bg-emerald-50 text-emerald-900 text-sm p-4 rounded-md">
              <p className="mb-1">Your password must:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Be 8 to 72 characters long</li>
                <li>Not contain your name or email</li>
                <li>
                  Not be commonly used, easily guessed or contain any variation
                  of the word "PENROUTE"
                </li>
              </ul>
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-emerald-700 hover:bg-emerald-800 text-white"
            >
              Sign Up
            </Button>

            <div className="text-center text-sm text-gray-500">Or</div>

            <Button
              variant="outline"
              className="w-full rounded-full flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="h-4 w-4"
              />
              Sign Up With Google
            </Button>

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <a href="#" className="text-emerald-700 underline">
                Sign In
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
