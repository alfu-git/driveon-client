import { headers } from "next/headers";
import { auth } from "./auth";

// data fetching
export const getAllCars = async (searchValue = "", carType = "") => {
  const res = await fetch(
    `http://localhost:5000/cars?search=${searchValue}&carType=${carType}`,
    { cache: "no-store" },
  );
  const data = await res.json();
  return data;
};

export const getCarById = async (carId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/cars/${carId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getCarByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/added-cars/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const getBookingsDataByUserId = async (userId) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(`http://localhost:5000/user-bookings/${userId}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};
