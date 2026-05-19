"use client";
import React from "react";
import { GiCartwheel } from "react-icons/gi";

const Spinner = ({ size }) => {
  return (
    <div className="text-[#b81d23]/90">
      <GiCartwheel
        size={size}
        className="animate-spin animation-duration-[1.5s]"
      />
    </div>
  );
};

export default Spinner;
