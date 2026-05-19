import { headers } from "next/headers";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const carAddAction = async (formData) => {
  "use server";

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;

  const carData = Object.fromEntries(formData.entries());

  const addedCarData = {
    userId,
    carName: carData?.carName,
    category: carData?.carType,
    dailyRentPrice: Number(carData?.rentPrice),
    seatCapacity: Number(carData?.seatCapacity),
    carImage: carData?.imageUrl,
    pickupLocation: carData?.pickupLocation,
    description: carData?.description,
    availabilityStatus: carData?.availability === "Available",
  };

  const res = await fetch("http://localhost:5000/added-cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addedCarData),
  });

  if (!res.ok) {
    throw new Error("Failed to add car");
  }

  const result = await res.json();

  if (result?.insertedId) {
    revalidatePath("/explore-cars");
    redirect("/explore-cars");
  }

  return result;
};

export const carEditAction = async (carId, formData) => {
  "use server";

  const carData = Object.fromEntries(formData.entries());

  const updatedCarData = {
    category: carData?.carType,
    dailyRentPrice: Number(carData?.rentPrice),
    pickupLocation: carData?.pickupLocation,
    description: carData?.description,
    availabilityStatus: carData?.availability === "Available",
  };

  const res = await fetch(`http://localhost:5000/added-cars/${carId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCarData),
  });

  if (!res.ok) {
    throw new Error("Failed to update car data");
  }

  const result = await res.json();

  if (result?.modifiedCount > 0) {
    revalidatePath("/my-added-cars");
    redirect("/my-added-cars");
  }

  return result;
};
