import LogInForm from "@/components/loginPage/LogInForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "DriveOn | Login",
  description: "DriveOn app login page",
};

const LogInPage = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-5">
        <div className="flex min-h-screen">
          {/* form */}
          <div className="mx-auto w-full max-w-sm lg:min-w-96">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Login</h2>

              <p className="mt-2 text-sm">
                Welcome back, continue your journey
              </p>
            </div>

            <div>
              <LogInForm />
            </div>
          </div>

          {/* image */}
          <div className="relative hidden w-full lg:max-w-xl flex-1 lg:block">
            <div className="relative w-full h-full min-h-screen">
              <Image
                src={"/assets/login-final-banner.jpg"}
                alt="A car dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogInPage;
