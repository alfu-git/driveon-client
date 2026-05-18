export const getAllCars = async () => {
  const res = await fetch("http://localhost:5000/cars");
  const data = await res.json();
  return data;
};
