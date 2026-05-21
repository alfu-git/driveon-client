"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Airport Service",
    desc: "Fast, reliable airport pickup and drop-off with premium comfort.",
    img: "/assets/car-with-airport.jpg",
  },
  {
    title: "Wedding Service",
    desc: "Luxury cars for your special day with elegant and stylish rides.",
    img: "/assets/weeding.jpg",
  },
  {
    title: "National Tour",
    desc: "Explore Bangladesh with comfortable long-distance travel options.",
    img: "/assets/national-tour.jpg",
  },
];

const OurServices = () => {
  return (
    <section className="my-40 max-w-7xl mx-auto px-5">
      <div>
        {/* header */}
        <motion.div
          className="mb-15 flex flex-col gap-4 justify-center items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl text-primary font-bold">Our Services</h2>

          <p className="dark:text-white/70 max-w-xl">
            Premium travel solutions tailored for every moment — from airport
            transfers to luxury wedding rides and unforgettable tours.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              {/* content */}
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-primary">
                  {service.title}
                </h3>

                <p className="dark:text-white/70 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
