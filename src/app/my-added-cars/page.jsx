import AddedCarCard from "@/components/myAddedCarsPage/AddedCarCard";
import AddedCarsPageEmptyState from "@/components/myAddedCarsPage/AddedCarsPageEmptyState";
import { auth } from "@/lib/auth";
import { getCarByUserId } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "My Added Cars | DriveOn",
  description:
    "Manage and view all the cars you've added to DriveOn. Keep track of your listings and update them",
};

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userCars = await getCarByUserId(user?.id);

  return (
    <section className="my-15 sm:my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        {userCars.length > 0 ? (
          <div>
            <h2 className="mb-7.5 text-3xl font-bold">Your Garage</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {userCars.map((car) => (
                <AddedCarCard key={car._id} car={car} />
              ))}
            </div>
          </div>
        ) : (
          <AddedCarsPageEmptyState />
        )}
      </div>
    </section>
  );
};

export default MyAddedCarsPage;
