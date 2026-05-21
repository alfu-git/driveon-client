import { headers } from "next/headers";
import { auth } from "./auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCarById } from "./data";

export const carAddAction = async (formData) => {
  "use server";

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;

  const carData = Object.fromEntries(formData.entries());

  const addedCarData = {
    userId,
    carName: carData?.carName,
    carType: carData?.carType,
    dailyRentPrice: Number(carData?.rentPrice),
    seatCapacity: Number(carData?.seatCapacity),
    carImage: carData?.imageUrl,
    pickupLocation: carData?.pickupLocation,
    description: carData?.description,
    availabilityStatus: carData?.availability === "Available",
    bookingCount: 0,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/added-cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
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

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const carData = Object.fromEntries(formData.entries());

  const updatedCarData = {
    category: carData?.carType,
    dailyRentPrice: Number(carData?.rentPrice),
    pickupLocation: carData?.pickupLocation,
    description: carData?.description,
    availabilityStatus: carData?.availability === "Available",
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/added-cars/${carId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedCarData),
    },
  );

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

export const addedCarDeleteAction = async (carId) => {
  "use server";

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/added-cars/${carId}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to delete car data");
  }

  const result = await res.json();

  if (result?.deletedCount > 0) {
    revalidatePath("/cars");
    revalidatePath("/my-added-cars");
  }

  return result;
};

export const bookingsAddAction = async (data) => {
  "use server";

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user;

  const car = await getCarById(data?.carId);

  const bookingData = {
    userId: user?.id,
    userName: user?.name,
    carName: car?.carName,
    carImage: car?.carImage,
    carType: car?.carType,
    dailyRentPrice: Number(car?.dailyRentPrice),
    seatCapacity: Number(car?.seatCapacity),
    pickupLocation: car?.pickupLocation,
    availabilityStatus: car?.availabilityStatus,
    description: car?.description,
    bookingDate: new Date(),
    driverNeeded: data?.driverNeeded?.toLowerCase() === "yes",
    specialNote: data?.note,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user-bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookingData),
    },
  );

  if (!res.ok) {
    throw new Error("Failed to booking car");
  }

  const result = await res.json();

  if (result?.insertedId) {
    revalidatePath("/my-bookings");
    redirect("/my-bookings");
  }

  return result;
};
