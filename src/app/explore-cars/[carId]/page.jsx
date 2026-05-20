import CarDetailsCard from "@/components/carDetailsPage/CarDetailsCard";
import { bookingsAddAction } from "@/lib/actions";
import { getCarById } from "@/lib/data";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const { carId } = await params;

  const car = await getCarById(carId);

  return {
    title: car.carName,
    description: car.description,
  };
};

const CarDetailsPage = async ({ params }) => {
  const { carId } = await params;

  const car = await getCarById(carId);

  return (
    <section className="my-10 sm:my-20 max-w-7xl w-full mx-auto px-5">
      <div>
        <div>
          <h2 className="mb-10 text-3xl font-bold">Pick Your Ride</h2>

          <div>
            <CarDetailsCard car={car} bookingsAddAction={bookingsAddAction} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
