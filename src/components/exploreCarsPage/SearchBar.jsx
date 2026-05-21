"use client";

import { SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  // 🔥 Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (searchValue.trim()) {
        params.set("search", searchValue);
      } else {
        params.delete("search");
      }

      router.push(`/explore-cars?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchValue, searchParams, router]);

  const inputGroupClass =
    "focus-within:ring-1 focus-within:ring-[#B81D23] focus-within:shadow-lg-[#B81D23] transition-all duration-200";

  return (
    <SearchField name="search" aria-label="Search" className={"w-full"}>
      <SearchField.Group className={`py-7.5 ${inputGroupClass}`}>
        <SearchField.SearchIcon />

        <SearchField.Input
          className="h-20!"
          placeholder="Search..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchField.ClearButton onPress={() => setSearchValue("")} />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchBar;
