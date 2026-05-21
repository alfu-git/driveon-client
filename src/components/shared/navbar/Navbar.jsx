"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import { X } from "lucide-react";
import ThemeToggleButton from "../ThemeToggleButton";
import { authClient } from "@/lib/auth-client";
import AvatarDropdown from "./AvatarDropdown";
import Spinner from "../Spinner";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkColor = isSticky ? "text-white" : "text-black dark:text-white";

  const navLinks = (
    <>
      <li>
        <Link
          className={`
            text-base ${linkColor}
        ${pathname === "/" ? "text-[#b81d23]! font-bold" : "font-normal"}
          `}
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base ${linkColor}
        ${pathname === "/explore-cars" ? "text-[#b81d23]! font-bold" : "font-normal"}
          `}
          href="/explore-cars"
        >
          Explore Cars
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base ${linkColor}
        ${pathname === "/add-car" ? "text-[#b81d23]! font-bold" : "font-normal"}
          `}
          href="/add-car"
        >
          Add Car
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base ${linkColor}
        ${pathname === "/my-bookings" ? "text-[#b81d23]! font-bold" : "font-normal"}
          `}
          href="/my-bookings"
        >
          My Bookings
        </Link>
      </li>
    </>
  );


  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-500
  ${
    isSticky
      ? "bg-[#020909] dark:bg-white/5 dark:backdrop-blur-md dark:shadow-2xl"
      : "bg-transparent"
  }`}
    >
      <header className="h-17 flex items-center justify-between max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-3">
          <Button
            className="lg:hidden px-0 max-h-fit bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span
                className={`block py-0.5 px-1 hover:bg-[#B81D23] rounded-md hover:text-[#FAFAFA]! transition-colors duration-200
                  ${isSticky ? "text-[#FAFAFA]!" : "text-[#020909]! dark:text-[#FAFAFA]!"}
                  `}
              >
                <X />
              </span>
            ) : (
              <span
                className={`block py-1 px-2 hover:bg-[#B81D23] rounded-md hover:text-[#FAFAFA]! transition-colors duration-200 
                ${isSticky ? "text-[#FAFAFA]!" : "text-[#020909]! dark:text-[#FAFAFA]!"} `}
              >
                <VscMenu />
              </span>
            )}
          </Button>

          <Link href="/">
            <Image
              src={"/assets/driveon-logo.png"}
              alt="DriveOn Logo"
              width={130}
              height={130}
              className="w-25 sm:w-30 h-auto cursor-pointer"
              priority
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-4 lg:flex">{navLinks}</ul>

        <div className="flex gap-2 items-center">
          {isPending ? (
            <Spinner size={24} />
          ) : user ? (
            <AvatarDropdown user={user} />
          ) : (
            <div>
              <Link href="/login">
                <Button
                  className={`h-auto px-0 bg-transparent text-base ${linkColor}`}
                >
                  Login/
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  className={
                    "h-auto px-0 bg-transparent text-primary font-medium text-base"
                  }
                >
                  Register
                </Button>
              </Link>
            </div>
          )}

          <ThemeToggleButton />
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute top-full left-0 w-full lg:hidden z-50"
          >
            <div className="mx-4 mt-3 max-w-fit rounded-2xl border border-white/10 bg-white! dark:bg-[#020909]!  backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <ul
                onClick={() => setIsMenuOpen(false)}
                className="flex flex-col gap-3 p-4"
              >
                {navLinks}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
