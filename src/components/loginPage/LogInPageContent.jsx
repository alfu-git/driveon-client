"use client";

import React from "react";
import LogInForm from "@/components/loginPage/LogInForm";
import Image from "next/image";
import { motion } from "framer-motion";

const LogInPageContent = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* form */}
      <motion.div
        initial={{ opacity: 0, x: -60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.8, 0.25, 1] }}
        className="mx-auto w-full max-w-sm lg:min-w-96"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Login</h2>

          <p className="mt-2 text-sm">Welcome back, continue your journey</p>
        </div>

        <div>
          <LogInForm />
        </div>
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ opacity: 0, x: 60, scale: 1.05 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative hidden w-full lg:max-w-xl flex-1 lg:block"
      >
        <div className="relative w-full h-full min-h-screen overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={"/assets/login-final-banner.jpg"}
              alt="A car dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LogInPageContent;
