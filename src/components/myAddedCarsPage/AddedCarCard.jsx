"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FaMapPin, FaEdit, FaCar } from "react-icons/fa";
import { TbArmchair } from "react-icons/tb";
import { motion } from "framer-motion";
import Link from "next/link";
import AddedCarCardDeleteDialog from "./AddedCarCardDeleteDialog";

const AddedCarCard = ({ car, addedCarDeleteAction }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{ willChange: "transform, opacity" }}
      className="group relative w-full flex flex-col h-full rounded-2xl bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden border border-white/10"
    >
      {/* badge */}
      <div className="absolute top-3 right-3 z-10">
        <span
          className={`text-sm px-3 py-1 rounded-full font-medium ${
            car.availabilityStatus
              ? "bg-[#020909] text-[#FAFAFA]"
              : "bg-red-500"
          }`}
        >
          {car.availabilityStatus ? "Available" : "Booked"}
        </span>
      </div>

      {/* image */}
      <div className="relative w-full h-55 overflow-hidden">
        <Image
          src={car.carImage}
          alt={car.carName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* content */}
      <div className="p-5 flex flex-col flex-1 space-y-4">
        {/* title */}
        <h3 className="text-xl font-semibold">{car.carName}</h3>

        {/* price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            ${car.dailyRentPrice}/day
          </span>

          <span className="flex gap-2 items-center">
            <FaCar className="text-primary" />

            <span>{car.carType}</span>
          </span>
        </div>

        {/* info */}
        <div className="flex justify-between text-sm">
          <span className="text-sm flex gap-2 items-center">
            <FaMapPin className="text-primary" />{" "}
            <span>{car.pickupLocation}</span>{" "}
          </span>

          <span className="flex items-center gap-2">
            <TbArmchair className="text-primary" />
            {car.seatCapacity} Seats
          </span>
        </div>

        <div className="flex-1" />

        {/* actions */}
        <div className="flex gap-5 mt-3">
          <Link href={`/my-added-cars/${car._id}`} className="w-full">
            <Button className="w-full flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
              <FaEdit /> Edit
            </Button>
          </Link>

          <AddedCarCardDeleteDialog
            car={car}
            addedCarDeleteAction={addedCarDeleteAction}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AddedCarCard;
