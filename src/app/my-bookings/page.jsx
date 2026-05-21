import UserBookingsCarCard from "@/components/myBookingsPage/UserBookingCard";
import CarsEmptyState from "@/components/shared/CarsEmptyState";
import { auth } from "@/lib/auth";
import { getBookingsDataByUserId } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

export const metadata = {
  title: "My Bookings | DriveOn",
  description:
    "View and manage all your car bookings in one place. Track your reservations, check booking details, and stay organized with DriveOn.",
};

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userBookings = await getBookingsDataByUserId(user?.id);

  return (
    <section className="my-15 sm:my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        {userBookings.length > 0 ? (
          <div>
            <h2 className="mb-7.5 text-3xl font-bold">Drive History</h2>

            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6">
              {userBookings.map((booking) => (
                <UserBookingsCarCard key={booking?._id} booking={booking} />
              ))}
            </div>
          </div>
        ) : (
          <CarsEmptyState
            title={"No Drive History Available"}
            description={
              "You haven’t taken any rides yet. Start exploring cars and book your first drive with ease."
            }
            buttonLink={"/explore-cars"}
            buttonText={"Start Your First Rides"}
          />
        )}
      </div>
    </section>
  );
};

export default MyBookingsPage;
