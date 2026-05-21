"use client";

import React from "react";
import { motion } from "framer-motion";
import CarCard from "@/components/shared/CarCard";

const AvailableCarsContent = ({ limitedCars }) => {
  return (
    <section className="my-40 max-w-7xl mx-auto px-5">
      <div>
        {/* header */}
        <motion.div
          className="mb-15 flex flex-col gap-4 justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl text-primary font-bold">Available Cars</h2>
          
          <p>Choose your perfect ride from our collection</p>
        </motion.div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {limitedCars.map((car, index) => (
            <motion.div
              key={car?._id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvailableCarsContent;
