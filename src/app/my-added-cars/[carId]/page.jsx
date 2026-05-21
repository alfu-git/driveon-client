import CarUpdateForm from "@/components/carUpdatePage/CarUpdateForm";
import { carEditAction } from "@/lib/actions";
import { getCarById } from "@/lib/data";
import React from "react";

export const metadata = {
  title: "Update Your Ride | DriveOn",
  description:
    "Modify your car listing easily on DriveOn. Update pricing, features, and availability to maximize your bookings.",
};

const CarUpdatePage = async ({ params }) => {
  const { carId } = await params;
  const car = await getCarById(carId);

  const carEditActionWrapper = async (formData) => {
    "use server";
    return carEditAction(carId, formData);
  };

  return (
    <section className="my-15 sm:my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        <div className="md:max-w-2/3 lg:max-w-5/8 mx-auto">
          <h2 className="mb-10 text-3xl font-bold">Update Your Ride</h2>

          <div>
            <CarUpdateForm
              car={car}
              carEditActionWrapper={carEditActionWrapper}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarUpdatePage;
