import Link from "next/link";
import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full bg-[#020909] dark:bg-white/5 dark:backdrop-blur-md dark:shadow-2xl text-[#020909] dark:text-zinc-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* about + contact */}
        <div>
          <h6 className="text-xl font-bold mb-4 text-[#FAFAFA]">DriveOn</h6>

          <p className="text-sm leading-relaxed text-zinc-300">
            DriveOn is your modern car rental platform. Fast booking, trusted
            vehicles, and smooth travel experience.
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <div className="flex gap-1 items-center">
              {" "}
              <FaMapPin className="text-primary" />{" "}
              <address className="text-zinc-300">Khulna, Bangladesh</address>
            </div>

            <p className="flex gap-1 items-center">
              <IoCallSharp className="text-primary" />{" "}
              <span className="text-zinc-300">+8801819769176</span>
            </p>

            <p className="flex gap-1 items-center">
              <IoIosMail className="text-primary" />{" "}
              <Link
                href={"mailto:mdalfaz.dev@gmail.com"}
                target="_blank"
                className="text-zinc-300"
              >
                mdalfaz.dev@gmail.com
              </Link>{" "}
            </p>
          </div>
        </div>

        {/* useful links */}
        <div>
          <h6 className="text-xl font-bold mb-4 text-[#FAFAFA]">
            Useful Links
          </h6>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-zinc-300 hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/explore-cars"
                className="text-zinc-300 hover:text-white transition"
              >
                Explore Cars
              </Link>
            </li>

            <li>
              <Link
                href="/add-cars"
                className="text-zinc-300 hover:text-white transition"
              >
                Add Cars
              </Link>
            </li>

            <li>
              <Link
                href="/my-bookings"
                className="text-zinc-300 hover:text-white transition"
              >
                My Bookings
              </Link>
            </li>

            <li>
              <Link
                href="/my-added-cars"
                className="text-zinc-300 hover:text-white transition"
              >
                My Added Cars
              </Link>
            </li>
          </ul>
        </div>

        {/* social icons */}
        <div>
          <h6 className="text-xl text-[#FAFAFA] font-bold mb-4">Follow Us</h6>

          <div className="flex gap-4 text-lg">
            <Link
              href="https://www.facebook.com/m.a.faz.495430"
              target="_blank"
              className="p-2 rounded-full bg-white/1"
            >
              <FaFacebookF className="text-primary" />
            </Link>

            <Link
              href="https://x.com/md_alfaz_dev"
              target="_blank"
              className="p-2 rounded-full bg-white/1"
            >
              <FaXTwitter className="text-primary" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/md-alfaz-dev7/"
              target="_blank"
              className="p-2 rounded-full bg-white/1"
            >
              <FaLinkedin className="text-primary" />
            </Link>

            <Link
              href="https://github.com/alfu-git"
              target="_blank"
              className="p-2 rounded-full bg-white/1"
            >
              <FaGithub className="text-primary" />
            </Link>
          </div>

          <p className="mt-5 text-xs text-[#020909] dark:text-zinc-300">
            © {new Date().getFullYear()} DriveOn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
