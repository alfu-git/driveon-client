"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
