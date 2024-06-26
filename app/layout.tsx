import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/header/Hero";
import Footer from "@/components/layout/footer/Footer";

import ReduxProviders from "@/redux/ReduxProvider";
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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProviders>
          <Header />
          <Hero />
          {children}
          <Footer />
        </ReduxProviders>
      </body>
    </html>
  );
}
