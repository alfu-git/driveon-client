import LogInPageContent from "@/components/loginPage/LogInPageContent";
import React from "react";

export const metadata = {
  title: "Login | DriveOn",
  description:
    "Login to your DriveOn account to book cars, manage bookings and access your dashboard.",
};

const LogInPage = () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto px-5">
        <LogInPageContent />
      </div>
    </section>
  );
};

export default LogInPage;
