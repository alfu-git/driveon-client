import EmptyCarsState from "@/components/exploreCarsPage/EmptyCarsState";
import SearchBar from "@/components/exploreCarsPage/SearchBar";
import CarCard from "@/components/shared/CarCard";
import { getAllCars } from "@/lib/data";
import React from "react";

const ExploreCarsPage = async ({ searchParams }) => {
  const params = await searchParams;
  const searchValue = params?.search || "";

  const cars = await getAllCars(searchValue);

  return (
    <section className="my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        <div>
          <h2 className="mb-15 text-3xl font-bold">Find your perfect ride</h2>

          <div className="mb-10">
            <SearchBar />
          </div>

          {cars?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {cars?.map((car) => (
                <CarCard key={car._id} car={car} />
              ))}
            </div>
          ) : (
            <EmptyCarsState searchValue={searchValue} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExploreCarsPage;
