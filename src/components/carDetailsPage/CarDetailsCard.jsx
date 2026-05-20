"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FaCar, FaMapPin } from "react-icons/fa";
import { TbArmchair } from "react-icons/tb";

const CarDetailsCard = ({ car }) => {
  return (
    <div className="min-h-screen px-4 md:px-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
        {/* car iMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full lg:max-w-140 xl:max-w-180 h-80 md:h-105 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={car.carImage}
            alt={car.carName}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* car info */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-5"
        >
          {/* brand */}
          {car?.brandImage ? (
            <div className="flex items-center gap-3">
              <Image
                src={car.brandImage}
                alt={car.brandName}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span className="text-sm dark:text-gray-400">
                {car.brandName}
              </span>
            </div>
          ) : (
            <span className="text-sm dark:text-gray-400">N/A</span>
          )}

          {/* name */}
          <h1 className="text-3xl md:text-4xl font-bold">{car.carName}</h1>

          {/* price */}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-[#B81D23]">
              ${car.dailyRentPrice}
            </span>

            <span className="text-sm dark:text-gray-400">/day</span>
          </div>

          {/* quick info */}
          <div className="flex flex-wrap gap-4 text-sm dark:text-gray-300">
            <span className="flex items-center gap-2">
              <FaCar /> {car.carType ? car.carType : "N/A"}
            </span>

            <span className="flex items-center gap-2">
              <TbArmchair /> {car.seatCapacity} Seats
            </span>

            <span className="flex items-center gap-2">
              <FaMapPin /> {car.pickupLocation}
            </span>
          </div>

          {/* availability */}
          <span
            className={`w-fit px-4 py-1 rounded-full text-sm font-medium ${
              car.availabilityStatus
                ? "bg-green-600/20 text-green-400"
                : "bg-red-600/20 text-red-400"
            }`}
          >
            {car.availabilityStatus ? "Available" : "Booked"}
          </span>

          {/* booking */}
          <Button
            isDisabled={!car.availabilityStatus}
            className={`mt-4 w-fit px-6 ${
              car.availabilityStatus
                ? "bg-[#B81D23] hover:bg-[#a1161b]"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            {car.availabilityStatus ? "Book Now" : "Not Available"}
          </Button>
        </motion.div>
      </div>

      {/* description + specification */}
      <div className="flex flex-col lg:flex-row gap-6 mt-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-2/3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-3">Description</h2>

          <p className="dark:text-gray-300 leading-relaxed">
            {car.description}
          </p>
        </motion.div>

        {/* Specs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="lg:w-1/3 p-6 rounded-2xl bg-white/5 backdrop-blur-md shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>

          <div className="flex flex-col gap-4 text-sm dark:text-gray-300">
            <p className="flex justify-between">
              <span>Category</span>
              <span>{car.category}</span>
            </p>

            <p className="flex justify-between">
              <span>Type</span>
              <span>{car.carType ? car.carType : "Type Not Mentioned"}</span>
            </p>

            <p className="flex justify-between">
              <span>Seats</span>
              <span>{car.seatCapacity}</span>
            </p>

            <p className="flex justify-between">
              <span>Location</span>
              <span>{car.pickupLocation}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarDetailsCard;
