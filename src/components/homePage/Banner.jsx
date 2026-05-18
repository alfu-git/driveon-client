import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/banner-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/30 md:bg-linear-to-r md:from-black/80 md:via-black/40 md:to-black/10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 w-full h-full py-20 md:py-30 lg:py-40">
        <div>
          <div>
            <h1 className="text-[32px] text-[#FAFAFA] sm:text-4xl md:text-[50px] md:max-w-full lg:max-w-180 font-bold leading-tight">
              Drive Without <span className="text-primary">Limits</span> Arrive
              Without Stress
            </h1>

            <p className="mt-7 max-w-110 md:text-lg text-[#FAFAFA] font-medium">
              Modern car rental for modern travelers.Experience smooth, fast and
              reliable travel.
            </p>

            <Link className="block mt-5" href={"/explore-cars"}>
              <Button
                className={
                  "h-auto w-auto px-5 py-2 md:px-7 md:py-3 bg-primary rounded-xl md:text-lg"
                }
              >
                Explore Cars
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
