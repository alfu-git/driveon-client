import UserBookingsCarCard from "@/components/myBookingsPage/UserBookingCard";
import { auth } from "@/lib/auth";
import { getBookingsDataByUserId } from "@/lib/data";
import { headers } from "next/headers";
import React from "react";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const userBookings = await getBookingsDataByUserId(user?.id);

  return (
    <section className="my-15 sm:my-20 max-w-7xl mx-auto w-full px-5">
      <div>
        <div>
          <h2 className="mb-7.5 text-3xl font-bold">Drive History</h2>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-6">
            {userBookings.map((booking) => (
              <UserBookingsCarCard key={booking?._id} booking={booking} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBookingsPage;
