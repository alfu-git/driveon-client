"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";
import { CgCalendarDates } from "react-icons/cg";

const UserBookingCard = ({ booking }) => {
  const {
    carImage,
    carName,
    carType,
    dailyRentPrice,
    bookingDate,
    pickupLocation,
    driverNeeded,
    specialNote,
  } = booking;

  const formattedDate = new Date(bookingDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group w-full grid grid-cols lg:grid-cols-12 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:scale-[1.01]"
    >
      {/* Image */}
      <div className="relative w-full col-span-4 h-60 sm:h-65 md:h-75 lg:h-60">
        <Image
          src={carImage}
          alt={carName}
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* content */}
      <div className="p-4 space-y-3 col-span-4">
        {/* title + type */}
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-semibold">{carName}</h2>

          <span className="text-xs px-2 py-1 rounded-full bg-[#B81D23]/20 border border-[#B81D23]/30">
            {carType}
          </span>
        </div>

        {/* price + date */}
        <div className="flex items-center justify-between text-sm dark:text-gray-300">
          <p className="font-medium dark:text-white">${dailyRentPrice} / day</p>

          <p className="flex items-center gap-2">
            <CgCalendarDates className="text-primary text-base" />{" "}
            {formattedDate.toLocaleDateString()}
          </p>
        </div>

        {/* location */}
        <div className="flex items-center gap-2 dark:text-gray-300 text-sm">
          <FaMapMarkerAlt className="text-[#B81D23]" />

          <span>{pickupLocation}</span>
        </div>

        {/* driver */}
        <div className="flex items-center gap-2 text-sm">
          <FaUserTie className="text-[#B81D23]" />
          <span className="dark:text-gray-300">
            Driver Needed:{" "}
            <span className={driverNeeded ? "text-green-400" : "text-red-400"}>
              {driverNeeded ? "Yes" : "No"}
            </span>
          </span>
        </div>
      </div>

      {/* note */}
      <div className="col-span-4 text-sm dark:text-gray-400 bg-zinc-300 dark:bg-transparent p-2 border border-white/10">
        <strong className="text-[#020909] dark:text-white">Note:</strong>{" "}
        {specialNote}
      </div>
    </motion.div>
  );
};

export default UserBookingCard;
