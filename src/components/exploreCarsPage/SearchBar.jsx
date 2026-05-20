"use client";

import { SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchValue.trim()) {
        router.push(`/explore-cars?search=${searchValue}`);
      } else {
        router.push(`/explore-cars`);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchValue, router]);

  const inputGroupClass =
    "focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] transition-all duration-200";

  return (
    <SearchField name="search" aria-label="Search">
      <SearchField.Group className={`py-7.5 ${inputGroupClass}`}>
        <SearchField.SearchIcon />

        <SearchField.Input
          className="w-full h-20!"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchField.ClearButton onPress={() => setSearchValue("")} />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchBar;
