"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { TbArmchair } from "react-icons/tb";

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
      <div className="p-5 space-y-3">
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

        <h3 className="text-lg font-semibold">{car.carName}</h3>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            ${car.dailyRentPrice}{" "}
            <span className="text-xs text-gray-400">/day</span>
          </p>

          <span className="text-xs text-gray-400">{car.category}</span>
        </div>

        {/* Info Row */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>🚗 {car.carType}</span>
          <span className="flex gap-2 items-center">
            <TbArmchair /> <span>{car.seatCapacity} Seats</span>
          </span>
        </div>

        {/* Location */}
        <p className="text-xs text-gray-500">📍 {car.pickupLocation}</p>

        {/* Buttons */}

        <Button className="mt-3 w-full bg-primary">View Details</Button>
      </div>
    </div>
  );
};

export default CarCard;
