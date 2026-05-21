"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchX, Car } from "lucide-react";

const EmptyCarsState = ({ searchValue, carType }) => {
  const hasSearch = searchValue?.trim()?.length > 0;
  const hasFilter = carType?.trim()?.length > 0;

  let message = "No cars available at the moment";

  if (hasSearch && hasFilter) {
    message = `We couldn’t find any ${carType} cars matching "${searchValue}"`;
  } else if (hasSearch) {
    message = `We couldn’t find any cars matching "${searchValue}"`;
  } else if (hasFilter) {
    message = `No ${carType} cars available right now`;
  }

  return (
    <div className="w-full flex items-center justify-center py-10 md:py-15">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-md text-center"
      >
        {/* glow bg */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-72 h-72 bg-red-500/10 blur-3xl rounded-full animate-pulse" />
        </div>

        {/* floating icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative mx-auto w-fit mb-6"
        >
          <div className="p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
            <Car className="w-10 h-10 text-red-400" />
          </div>
        </motion.div>

        {/* title */}
        <h3 className="text-2xl font-bold text-white mb-2">No cars found</h3>

        {/* dynamic text */}
        <p className="text-white/60 text-sm mb-6">{message}</p>

        {/* hint */}
        <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
          <SearchX className="w-4 h-4" />
          Try adjusting your search or filters
        </div>
      </motion.div>
    </div>
  );
};

export default EmptyCarsState;
