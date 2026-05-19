import { Orbitron, Manrope } from "next/font/google";
import "./globals.css";
import ThemeProviderWrapper from "@/components/shared/ThemeProviderWrapper";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveOn | Home",
  description:
    "A modern car rental app where users can explore available cars, view car details, rent vehicles, manage their bookings, and maintain profiles. Users can add, update, and delete car listings. The system include with secure authentication, JWT protection, booking management, and responsive modern UI",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFA] dark:bg-[#020909] text-[#020909] dark:text-[#FAFAFA]">
        <ThemeProviderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
