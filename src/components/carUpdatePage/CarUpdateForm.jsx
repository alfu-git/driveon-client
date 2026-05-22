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
  const [carType, setCarType] = useState(car?.carType || "");
  const [availability, setAvailability] = useState(
    car?.availabilityStatus ? "Available" : "Not Available",
  );
  const [errors, setErrors] = useState({});

  const inputGroupClass =
    "bg-[#FCFBF8] dark:bg-white/1 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] focus-within:shadow-[0_0_15px_rgb(184, 29, 35)] transition-all duration-200";

  const iconClass = "size-4 text-primary";

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

    const rentPrice = e.target.rentPrice.value.trim();
    const pickupLocation = e.target.pickupLocation.value.trim();
    const description = e.target.description.value.trim();

    // 🔥 check if anything changed
    const isChanged =
      rentPrice ||
      pickupLocation ||
      description ||
      carType !== car?.carType ||
      availability !==
        (car?.availabilityStatus ? "Available" : "Not Available");

    if (!isChanged) {
      e.preventDefault();
      newErrors.general = "Please update at least one field";
    }

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
      className="dark:bg-white/5 dark:backdrop-blur-md shadow-2xl p-8 md:p-10 rounded-2xl"
    >
      <Form
        action={carEditActionWrapper}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* 🔴 General Error */}
        {errors.general && (
          <p className="text-red-500 text-sm text-center">{errors.general}</p>
        )}

        {/* price */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <TextField>
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
          <TextField>
            <Label>Car Type</Label>

            <Dropdown>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button className="px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm">
                  {carType || "Select type"} <ChevronDown />
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
          </TextField>
        </motion.div>

        {/* location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          <TextField>
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
          <TextField>
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
          <TextField>
            <Label>Availability</Label>

            <Dropdown>
              <motion.div whileTap={{ scale: 0.97 }}>
                <Button className="px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm">
                  {availability} <ChevronDown />
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

            {/* 🔥 backend boolean */}
            <input
              type="hidden"
              name="availability"
              value={availability === "Available"}
            />
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
