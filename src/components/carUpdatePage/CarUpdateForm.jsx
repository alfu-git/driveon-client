"use client";

import React, { useState } from "react";
import {
  Form,
  TextField,
  Label,
  InputGroup,
  Button,
  FieldError,
  Dropdown,
} from "@heroui/react";
import { MapPin, DollarSign, FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const CarUpdateForm = ({ car, carEditActionWrapper }) => {
  const [carType, setCarType] = useState("");
  const [availability, setAvailability] = useState("");
  const [errors, setErrors] = useState({});

  const inputGroupClass =
    "bg-[#FCFBF8] dark:bg-white/1 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] focus-within:shadow-[0_0_15px_rgb(184, 29, 35)] transition-all duration-200";

  const iconClass = "size-4 text-primary";

  // animation style property
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const handleSubmit = (e) => {
    const newErrors = {};

    if (!carType) newErrors.carType = "Please select car type";
    if (!availability) newErrors.availability = "Please select availability";

    if (Object.keys(newErrors).length > 0) {
      e.preventDefault();
      setErrors(newErrors);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="dark:bg-white/5 dark:backdrop-blur-md shadow-2xl p-8 md:p-10"
    >
      <Form
        action={carEditActionWrapper}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* price */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <TextField isRequired>
            <Label>Daily Rent</Label>

            <InputGroup className={inputGroupClass}>
              <InputGroup.Prefix>
                <DollarSign className={iconClass} />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="rentPrice"
                type="number"
                min={30}
                placeholder={car?.dailyRentPrice}
                className="pl-1 bg-transparent text-white"
              />
            </InputGroup>
            <FieldError />
          </TextField>
        </motion.div>

        {/* car type */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <TextField isRequired>
            <Label>Car Type</Label>

            <Dropdown className="bg-transparent outline-none">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button className="px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm">
                  {carType || car?.category || "Select type"} <ChevronDown />
                </Button>
              </motion.div>

              <Dropdown.Popover className="rounded-md">
                <Dropdown.Menu onAction={(key) => setCarType(key)}>
                  <Dropdown.Item id="SUV">
                    <Label>SUV</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="Sedan">
                    <Label>Sedan</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="Hatchback">
                    <Label>Hatchback</Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="Luxury">
                    <Label>Luxury</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>

            <input type="hidden" name="carType" value={carType} />

            {errors.carType && (
              <p className="text-sm text-red-500 mt-1">{errors.carType}</p>
            )}
          </TextField>
        </motion.div>

        {/* location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <TextField isRequired>
            <Label>Pickup Location</Label>

            <InputGroup className={inputGroupClass}>
              <InputGroup.Prefix>
                <MapPin className={iconClass} />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="pickupLocation"
                placeholder={car?.pickupLocation}
                className="pl-1"
              />
            </InputGroup>
            <FieldError />
          </TextField>
        </motion.div>

        {/* description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <TextField isRequired>
            <Label>Description</Label>

            <InputGroup className={inputGroupClass}>
              <InputGroup.Prefix>
                <FileText className={iconClass} />
              </InputGroup.Prefix>

              <InputGroup.Input
                name="description"
                placeholder={car?.description}
                className="pl-1 dark:text-white"
              />
            </InputGroup>
            <FieldError />
          </TextField>
        </motion.div>

        {/* availability */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <TextField isRequired>
            <Label>Availability</Label>

            <Dropdown className="bg-transparent outline-none">
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button className="px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm">
                  {availability ||
                    (car?.availabilityStatus === true
                      ? "Available"
                      : "Not Available")}{" "}
                  <ChevronDown />
                </Button>
              </motion.div>

              <Dropdown.Popover className="rounded-md">
                <Dropdown.Menu onAction={(key) => setAvailability(key)}>
                  <Dropdown.Item id="Available">
                    <Label>Available</Label>
                  </Dropdown.Item>

                  <Dropdown.Item id="Not Available">
                    <Label>Not Available</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>

            <input type="hidden" name="availability" value={availability} />

            {errors.availability && (
              <p className="text-sm text-red-500 mt-1">{errors.availability}</p>
            )}
            <FieldError />
          </TextField>
        </motion.div>

        {/* button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          <Button type="submit" className="w-full rounded-md">
            Update
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

export default CarUpdateForm;
