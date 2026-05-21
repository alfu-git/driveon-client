export const getAllCars = async (searchValue = "", carType = "") => {
  const res = await fetch(`http://localhost:5000/cars?search=${searchValue}&carType=${carType}`, {cache: "no-store"});
  const data = await res.json();
  return data;
};

export const getCarById = async (carId) => {
  const res = await fetch(`http://localhost:5000/cars/${carId}`);
  const data = await res.json();
  return data;
};

export const getCarByUserId = async (userId) => {
  const res = await fetch(`http://localhost:5000/added-cars/${userId}`);
  const data = await res.json();
  return data;
};

export const getBookingsDataByUserId = async (userId) => {
  const res = await fetch(`http://localhost:5000/user-bookings/${userId}`);
  const data = await res.json();
  return data;
};
