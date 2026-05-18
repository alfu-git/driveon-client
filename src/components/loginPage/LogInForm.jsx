"use client";
import React, { useState } from "react";
import { Envelope, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, Lock } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LogInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    setLoading(true);

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      callbackURL: "/",
    });

    setLoading(false);

    if (error) {
      toast.error(<h6 className="font-bold text-black">{error.message}</h6>);
    }

    if (data) {
      toast.success(<h6 className="font-bold text-black">Login Successful</h6>);
      router.push("/");
    }
  };

  const inputGroupClass =
    "bg-[#FCFBF8] dark:bg-white/1 rounded-lg overflow-hidden  focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] focus-within:shadow-[0_0_15px_rgb(184, 29, 35)] transition-all duration-200";

  return (
    <div className="pb-12">
      <Form onSubmit={handleOnSubmit} className="space-y-6">
        {/* email */}
        <TextField
          isRequired
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email address</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Envelope className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="email"
              placeholder="you@example.com"
              className={"pl-3"}
            />
          </InputGroup>

          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          isRequired
          minLength={8}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[a-z]/.test(value)) {
              return "Password must contain at least one lowercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <Lock className="size-4 text-primary" />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="password"
              type={isVisible ? "text" : "password"}
              placeholder="Create a password"
              className={"pl-3"}
            />

            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>

          <Description>Must be at least 8 characters</Description>

          <FieldError />
        </TextField>

        <Button
          isDisabled={loading}
          type="submit"
          className={
            "w-full bg-[#B81D23] hover:bg-[#B81D23]/80 active:bg-[#8F161B]/90 rounded-md"
          }
        >
          {loading ? "Logging in..." : "login"}
        </Button>
      </Form>

      <div className="my-6 flex items-center">
        <div className="grow border-t border-[#6E5F5D] dark:border-[#FAFAFA]"></div>

        <span className="mx-2 text-[#6E5F5D] dark:text-white/80 text-sm uppercase">
          or Continue with
        </span>

        <div className="grow border-t border-[#6E5F5D] dark:border-[#FAFAFA]"></div>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className={
            "px-15 flex gap-4 rounded-lg hover:bg-zinc-100 dark:hover:text-[#020909] active:bg-zinc-200"
          }
        >
          <span>
            <FaGoogle />
          </span>

          <span>Google</span>
        </Button>
      </div>

      <p className="mt-6 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-[#B81D23] hover:text-[#B81D23]/80"
        >
          Register
        </Link>
      </p>
    </div>
  );
};

export default LogInForm;
