import { headers } from "next/headers";
import { auth } from "./auth";

// data fetching
export const getAllCars = async (
  searchValue = "",
  carType = "",
  userId = "",
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/cars?search=${searchValue}&carType=${carType}&userId=${userId}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
};

export const getCarById = async (carId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/cars/${carId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getCarByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/added-cars/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

export const getBookingsDataByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/user-bookings/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
