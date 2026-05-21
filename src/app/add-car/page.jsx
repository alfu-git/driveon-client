import AddCarPageContent from "@/components/addCarPage/AddCarPageContent";
import { carAddAction } from "@/lib/actions";
import React from "react";

export const metadata = {
  title: "Add New Car | DriveOn",
  description:
    "List your car on DriveOn and start earning by renting it to trusted users. Add car details, images, pricing and availability easily.",
};

const AddCarPage = async () => {
  return (
    <section className="pt-12">
      <div className="container mx-auto w-full px-5">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Add New Car Listing</h2>

          <p className="mt-2 text-sm">
            Create a premium listing for your DriveOn platform
          </p>
        </div>

        <AddCarPageContent carAddAction={carAddAction} />
      </div>
    </section>
  );
};

export default AddCarPage;
