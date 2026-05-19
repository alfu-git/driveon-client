import AddedCarCard from "@/components/myAddedCarsPage/AddedCarCard";
import { auth } from "@/lib/auth";
import { getCarByUserId } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const MyAddedCarsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userCars = await getCarByUserId(user?.id);
  console.log(userCars);

  return (
    <section className="my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        <div>
          <h2 className="mb-7.5 text-3xl font-bold">Your Garage</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {userCars.map((car) => (
              <AddedCarCard key={car._id} car={car} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAddedCarsPage;
