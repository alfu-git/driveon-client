"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { TbArmchair } from "react-icons/tb";
import { FaCar, FaMapPin } from "react-icons/fa";

const CarCard = ({ car }) => {
  return (
    <div className="group relative w-full rounded-2xl bg-white/1 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Availability Badge */}
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

      {/* Car Image */}
      <div className="relative w-full h-55">
        <Image
          src={car.carImage}
          alt={car.carName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-y-4 h-full">
        {/* Brand + Name */}
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

        <h3 className="text-2xl font-semibold">{car.carName}</h3>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline">
            <span className="text-2xl font-bold">${car.dailyRentPrice}</span>
            <span className="text-sm ">/day</span>
          </div>

          <span className="text-sm">{car.category}</span>
        </div>

        {/* Info Row */}
        <div className="flex items-center justify-between text-sm">
          <span className="flex gap-2 items-center">
            <FaCar className="text-primary" /> <span>{car.carType}</span>
          </span>

          <span className="flex gap-2 items-center">
            <TbArmchair className="text-primary" />{" "}
            <span>{car.seatCapacity} Seats</span>
          </span>
        </div>

        {/* Location */}
        <p className="text-sm flex gap-2 items-center">
          <FaMapPin className="text-primary" />{" "}
          <span>{car.pickupLocation}</span>{" "}
        </p>

        {/* Buttons */}

        <Button className="mt-3 w-full bg-[#B81D23] hover:bg-[#B81D23]/80 active:bg-[#91060a]">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
