import React from "react";
import payment from "@/image/footer/payment.png";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const FooterCopyright = () => (
  <div className="flex justify-between  items-center mx-10 py-1">
    <div className="">
      <p className="flex items-center gap-1 text-gray-600">
        Copyright &copy;
        {new Date().getFullYear()} All rights reserved | This template is made
        with <FaHeart className="text-gray-700 text-xl" />
        by
        <Link
          href="https://colorlib.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          Colorlib
        </Link>
      </p>
    </div>
    <div className="w-1/3  ">
      <Image
        src={payment}
        alt="Payment Methods"
        className="w-[60%] ml-auto h-[40px]"
      />
    </div>
  </div>
);

export default FooterCopyright;
