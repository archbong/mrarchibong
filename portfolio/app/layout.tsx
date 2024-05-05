import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof document !== 'undefined') {
    // Code that uses the document object goes here
    AOS.init({
      // Optional settings
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
    });
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
