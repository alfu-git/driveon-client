"use client";

import { Button, Dropdown, Label } from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const FilterBar = () => {
  const [carType, setCarType] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFiltering = (value) => {
    setCarType(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("carType", value);
    } else {
      params.delete("carType");
    }

    router.push(`/explore-cars?${params.toString()}`);
  };

  return (
    <div className="flex gap-3">
      <Dropdown className="bg-transparent outline-none">
        <Button
          className={`px-3 py-7.5 w-full lg:w-sm rounded-xl justify-between bg-white dark:bg-[#18181B] shadow-sm
          ${carType ? "text-primary font-bold" : "text-[#868588] font-light"}`}
        >
          {carType || "Filter by type"} <ChevronDown />
        </Button>

        <Dropdown.Popover className={"rounded-md"}>
          <Dropdown.Menu onAction={(key) => handleFiltering(key)}>
            <Dropdown.Item id="SUV">
              <Label>SUV</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Sedan">
              <Label>Sedan</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Luxury">
              <Label>Luxury</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Hatchback">
              <Label>Hatchback</Label>
            </Dropdown.Item>

            <Dropdown.Item id="MPV">
              <Label>MPV</Label>
            </Dropdown.Item>

            <Dropdown.Item id="Microbus">
              <Label>Microbus</Label>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>

      {carType && (
        <Button
          onClick={() => handleFiltering("")}
          className="px-7 py-7.5 rounded-xl bg-primary text-white"
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default FilterBar;
