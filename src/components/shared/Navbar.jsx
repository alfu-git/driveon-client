"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const pathname = usePathname();

  const navLinks = (
    <>
      <li>
        <Link
          className={`
            text-base
        ${pathname === "/" ? "text-primary font-medium" : "text-[#FAFAFA]"}
          `}
          href="/"
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base
        ${
          pathname === "/explore-cars"
            ? "text-primary font-medium"
            : "text-[#FAFAFA]"
        }
          `}
          href="/explore-cars"
        >
          Explore Cars
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base
        ${
          pathname === "/add-car"
            ? "text-primary font-medium"
            : "text-[#FAFAFA]"
        }
          `}
          href="/add-car"
        >
          Add Car
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base
        ${
          pathname === "/my-bookings"
            ? "text-primary font-medium"
            : "text-[#FAFAFA]"
        }
          `}
          href="/my-bookings"
        >
          My Bookings
        </Link>
      </li>

      <li>
        <Link
          className={`
            text-base
        ${
          pathname === "/my-added-cars"
            ? "text-primary font-medium"
            : "text-[#FAFAFA]"
        }
          `}
          href="/my-added-cars"
        >
          My Added Cars
        </Link>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-500
  ${
    isSticky
      ? "backdrop-blur-md bg-white/5 border-b border-white/10 shadow-2xl"
      : "bg-transparent"
  }`}
    >
      <header className="h-17 flex items-center justify-between max-w-7xl mx-auto px-5">
        <div className="flex items-center gap-1">
          <Button
            className="lg:hidden px-0 max-h-fit bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="block py-0.5 px-1 hover:bg-[#B81D23] rounded-md">
                <X />
              </span>
            ) : (
              <span className="block py-1 px-2 hover:bg-[#B81D23] rounded-md">
                <VscMenu />
              </span>
            )}
          </Button>

          <Link href="/" className={"mt-2"}>
            <Image
              src={"/assets/driveon-logo.png"}
              alt="DriveOn Logo"
              width={150}
              height={150}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        <ul className="hidden items-center gap-4 lg:flex">{navLinks}</ul>

        <div>
          <Link href="/login">
            <Button className={"h-auto px-0 bg-transparent text-base"}>
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
