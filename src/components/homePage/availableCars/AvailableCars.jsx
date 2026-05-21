import { getAllCars } from "@/lib/data";
import React from "react";
import AvailableCarsContent from "./AvailableCarsContent";

const AvailableCars = async () => {
  const allCars = await getAllCars();

  const availableCars = allCars.filter(
    (car) => car.availabilityStatus === true,
  );
  const limitedCars = availableCars.slice(0, 6);

  return <AvailableCarsContent limitedCars={limitedCars} />;
};

export default AvailableCars;
