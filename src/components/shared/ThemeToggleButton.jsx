import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { HiMoon } from "react-icons/hi";
import { LuSun } from "react-icons/lu";

const ThemeToggleButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="p-4 w-9 h-9 rounded-full bg-[#020909] dark:bg-[#ffffff0a] backdrop-blur-2xl border border-white/10"
    >
      {isDark ? <HiMoon className="w-5 h-5" /> : <LuSun className="w-5 h-5" />}
    </Button>
  );
};

export default ThemeToggleButton;
