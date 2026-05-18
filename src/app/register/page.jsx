import RegisterForm from "@/components/registerPage/RegisterForm";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "DriveOn | Register",
  description: "DriveOn user account registering page",
};

const RegisterPage = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-5">
        <div className="flex min-h-screen">
          {/* image */}
          <div className="relative hidden w-full lg:max-w-lg xl:max-w-xl flex-1 lg:block">
            <div className="relative w-full h-full min-h-screen">
              <Image
                src={"/assets/register-final-banner.jpg"}
                alt="A beach view with a sunglass"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* form */}
          <div className="mx-auto w-full max-w-sm lg:min-w-96">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Register</h2>

              <p className="mt-2">
                Start the first step of your luxury journey
              </p>
            </div>

            <div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
