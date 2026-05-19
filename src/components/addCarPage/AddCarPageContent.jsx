"use client";
import React from "react";
import AddCarForm from "./AddCarForm";
import Image from "next/image";
import { motion } from "framer-motion";

const AddCarPageContent = ({ carAddAction }) => {
  return (
    <div className="flex min-h-screen">
      {/* form */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <AddCarForm carAddAction={carAddAction} />
      </motion.div>

      {/* image */}
      <motion.div
        className="relative hidden w-full lg:1/2 flex-1 lg:block shadow-2xl"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative w-full h-full min-h-screen overflow-hidden">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Image
              src={"/assets/add-2.jpg"}
              alt="A car dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddCarPageContent;
