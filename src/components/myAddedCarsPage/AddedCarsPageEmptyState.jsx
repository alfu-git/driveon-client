"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@heroui/react";

const AddedCarsPageEmptyState = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center  text-center">
      {/* icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-6xl text-primary mb-6"
      >
        <FaCar />
      </motion.div>

      {/* text */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-semibold mb-2"
      >
        No Cars Added Yet
      </motion.h2>

      {/* description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-sm max-w-md mb-6"
      >
        Looks like your garage is empty. Start adding your cars and manage them
        easily from here
      </motion.p>

      {/* button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link href="/add-car">
          <Button className="bg-primary  font-medium px-6">
            Add Your First Car
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AddedCarsPageEmptyState;
