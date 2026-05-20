"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { Home } from "lucide-react";

const NotFoundComponent = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-[#020909] text-white overflow-hidden px-6">
      {/* glow bg */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-150 h-150 bg-red-500/20 blur-[140px] rounded-full top--37.5 -left-37.5" />

        <div className="absolute w-150 h-150 bg-red-500/10 blur-[140px] rounded-full -bottom-37.5 -right-37.5" />
      </div>

      {/* content */}
      <div className="text-center z-10 max-w-md flex flex-col items-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[120px] font-extrabold tracking-tight text-red-500"
        >
          404
        </motion.h1>

        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold"
        >
          Page Drifted Away
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-gray-400 mt-3"
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 flex justify-center"
        >
          <Link href="/">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg mx-auto">
              <Home size={18} />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* floating particles */}
      <motion.div
        className="absolute w-2 h-2 bg-red-500 rounded-full top-1/4 left-1/4"
        animate={{ y: [0, 20, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute w-2 h-2 bg-red-400 rounded-full bottom-1/3 right-1/3"
        animate={{ y: [0, -20, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>
  );
};

export default NotFoundComponent;
