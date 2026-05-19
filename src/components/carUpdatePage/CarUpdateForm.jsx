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
import {
  Car,
  MapPin,
  Image as ImageIcon,
  Users,
  DollarSign,
  FileText,
  ChevronDown,
} from "lucide-react";

const CarUpdateForm = ({ car, carEditActionWrapper }) => {
  const [carType, setCarType] = useState("");
  const [availability, setAvailability] = useState("");

  const inputGroupClass =
    "bg-[#FCFBF8] dark:bg-white/1 rounded-lg overflow-hidden  focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] focus-within:shadow-[0_0_15px_rgb(184, 29, 35)] transition-all duration-200";

  const iconClass = "size-4 text-primary";

  return (
    <div className="dark:bg-white/5 dark:backdrop-blur-md shadow-2xl p-8 md:p-10">
      <Form action={carEditActionWrapper} className="space-y-6">
        {/* price */}
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

        {/* car type */}
        <TextField isRequired>
          <Label>Car Type</Label>

          <Dropdown className="bg-transparent outline-none">
            <Button
              className={
                "px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm"
              }
            >
              {carType || car?.category || "Select type"} <ChevronDown />
            </Button>

            <Dropdown.Popover className={"rounded-md"}>
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

          {/* hidden input */}
          <input type="hidden" name="carType" value={carType} />
        </TextField>

        {/* location */}
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

        {/* description */}
        <TextField isRequired>
          <Label>Description</Label>

          <InputGroup className={inputGroupClass}>
            <InputGroup.Prefix>
              <FileText className={iconClass} />
            </InputGroup.Prefix>

            <InputGroup.Input
              name="description"
              placeholder={car?.description}
              className="pl-1  dark:text-white"
            />
          </InputGroup>
          <FieldError />
        </TextField>

        {/* availability */}
        <TextField isRequired>
          <Label>Availability</Label>

          <Dropdown className="bg-transparent outline-none">
            <Button
              className={
                "px-3 py-3 w-full rounded-lg h-auto justify-between bg-transparent dark:bg-white/1 text-zinc-500 dark:text-white/30 shadow-sm"
              }
            >
              {availability ||
                (car?.availabilityStatus === true
                  ? "Available"
                  : "Not Available")}{" "}
              <ChevronDown />
            </Button>

            <Dropdown.Popover className={"rounded-md"}>
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

          {/* hidden input */}
          <input type="hidden" name="availability" value={availability} />

          <FieldError />
        </TextField>

        <Button type="submit" className="w-full  rounded-md">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default CarUpdateForm;
