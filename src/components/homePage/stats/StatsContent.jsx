"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ value, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // 👈 only start when visible

    let start = 0;
    const duration = 1200;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const counter = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [value, inView]);

  return <span>{count}</span>;
};

const StatsContent = ({ totalCars }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const statsData = [
    { label: "Total Cars", value: totalCars?.length || 0 },
    { label: "Total Bookings", value: 210 },
    { label: "Total Users", value: 560 },
  ];

  return (
    <section ref={ref} className="my-40 max-w-7xl mx-auto px-5">
      {/* header */}
      <motion.div
        className="mb-15 flex flex-col gap-4 justify-center items-center text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl text-primary font-bold">DriveOn in Numbers</h2>

        <p>Real-time insights about cars, bookings, and users on DriveOn</p>
      </motion.div>

      {/* stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-8 text-center bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-primary">
              <AnimatedNumber value={stat.value} inView={inView} />+
            </h3>

            <p className="mt-2 dark:text-gray-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsContent;
