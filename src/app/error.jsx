"use client";

import React from "react";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#020909] text-[#FAFAFA]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-xl text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl"
      >
        {/* icon */}
        <div className="flex justify-center mb-6">
          <AlertTriangle size={60} className="text-[#B81D23]" />
        </div>

        {/* title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 font-orbitron">
          Something Went Wrong
        </h1>

        {/* description */}
        <p className="text-white/70 mb-6">
          Oops! An unexpected error occurred. Please try again or go back to
          homepage.
        </p>

        {/* error message */}
        {error?.message && (
          <p className="text-sm text-red-400 mb-6">{error.message}</p>
        )}

        {/* actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onPress={() => reset()}
            className="bg-[#B81D23] text-white font-semibold"
          >
            Try Again
          </Button>

          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white">
              Go Home
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
