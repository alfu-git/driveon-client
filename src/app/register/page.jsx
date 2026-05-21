import RegisterPageContent from "@/components/registerPage/RegisterPageContent";
import React from "react";

export const metadata = {
  title: "Register | DriveOn",
  description:
    "Create your DriveOn account and start exploring premium car rentals. Book your perfect ride anytime, anywhere with ease.",
};

const RegisterPage = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-5">
        <RegisterPageContent />
      </div>
    </section>
  );
};

export default RegisterPage;
