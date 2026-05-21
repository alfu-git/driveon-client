"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { TbArmchair } from "react-icons/tb";
import { FaCar, FaMapPin } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const CarCard = ({ car }) => {
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
      className="group relative w-full flex flex-col h-full rounded-2xl bg-white/1 backdrop-blur-md shadow-2xl overflow-hidden"
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

      {/* car image */}
      <div className="relative w-full h-55 overflow-hidden">
        <Image
          src={car.carImage}
          alt={car.carName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* content */}
      <div className="p-5 flex flex-col space-y-4 flex-1">
        {car.brandImage ? (
          <div className="flex items-center gap-2">
            <Image
              src={car.brandImage}
              alt={car.brandName}
              width={24}
              height={24}
              className="rounded-full"
            />
            <p className="text-xs text-gray-400">{car.brandName}</p>
          </div>
        ) : (
          <p className="text-xs text-gray-400">N/A</p>
        )}

        <h3 className="text-2xl font-semibold">{car.carName}</h3>

        <div className="flex items-baseline">
          <span className="text-2xl font-bold">${car.dailyRentPrice}</span>

          <span className="text-sm ">/day</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="flex gap-2 items-center">
            <FaCar className="text-primary" />

            <span>{car.carType}</span>
          </span>

          <span className="flex gap-2 items-center">
            <TbArmchair className="text-primary" />

            <span>{car.seatCapacity} Seats</span>
          </span>
        </div>

        <p className="text-sm flex gap-2 items-center">
          <FaMapPin className="text-primary" />

          <span>{car.pickupLocation}</span>
        </p>

        <div className="flex-1" />

        <Link href={`/explore-cars/${car._id}`}>
          <Button className="mt-3 w-full bg-[#B81D23] hover:bg-[#B81D23]/80 active:bg-[#91060a] rounded-md">
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
