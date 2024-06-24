import React from "react";
import logo from "@/image/header/logo.webp"; // Adjust the import path accordingly
import Image from "next/image";
import Link from "next/link";
const FooterLogo = () => (
  <div className=" flex flex-col gap-5 py-10">
    <div className="">
      <Link href="/">
        <Image src={logo} alt="Logo" className="w-[130px] h-[80px] " />
      </Link>
    </div>
    <ul className="flex flex-col gap-5">
      <li>Address: 60-49 Road 11378 New York</li>
      <li>Phone: +65 11.188.888</li>
      <li>Email: hello@colorlib.com</li>
    </ul>
  </div>
);

export default FooterLogo;
