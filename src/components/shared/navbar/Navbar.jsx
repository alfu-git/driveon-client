"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import { X } from "lucide-react";
import ThemeToggleButton from "../ThemeToggleButton";
import { authClient } from "@/lib/auth-client";
import AvatarDropdown from "./AvatarDropdown";
import Spinner from "../Spinner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

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

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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
              <span className="block py-0.5 px-1 hover:bg-[#B81D23] rounded-md text-[#020909]! dark:text-[#FAFAFA]! hover:text-[#FAFAFA]! transition-colors duration-300">
                <X />
              </span>
            ) : (
              <span className="block py-1 px-2 hover:bg-[#B81D23] rounded-md text-[#020909]! dark:text-[#FAFAFA]! hover:text-[#FAFAFA]! transition-colors duration-300">
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
              className="cursor-pointer"
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

      {isMenuOpen && (
        <div className="border-t border-separator lg:hidden">
          <ul className="flex flex-col gap-2 p-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
