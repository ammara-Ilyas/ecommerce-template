"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

import { socialIcons } from "../widgets/Data";
import { navlinks } from "../widgets/Data";
import Link from "next/link";
////////////import images/////////////////
import shoplogo from "@/image/header/logo.webp";
import usa from "@/image/header/usa.png";

import { FaEnvelope, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";

import { Product } from "@/components/mainComponents/productWidgets/Types";
const Header = () => {
  const [language, setLanguage] = useState("English");
  const cartItems: Product[] = useSelector(
    (state: { cart: { items: Product[] } }) => state.cart.items
  );
  const langList = ["English", "Spanish", "Japanese", "Chinese", "Urdu"];

  const cartIcons = [
    { icon: <FaHeart />, link: "/cart", num: cartItems.length },
    { icon: <FaShoppingBag />, link: "/shop", num: 0 },
  ];
  return (
    <header className="">
      <div className=" bg-gray-200 py-2   px-20">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="header__top__left flex space-x-4">
              <div className=" ">
                <FaEnvelope className="inline-block mr-2" /> hello@colorlib.com
              </div>
              <div className="border-[1px] border-r-black"></div>
              <div>Free Shipping for all Order of $99</div>
            </div>
            <div className=" flex items-center space-x-7">
              <div className=" flex items-center space-x-4 ml-3">
                {socialIcons.map((item, i) => (
                  <Link href={item.link} key={i}>
                    {item.icon}
                  </Link>
                ))}
              </div>
              <div className="border-[1px] border-r-black h-full"></div>

              <div className="relative">
                <Image
                  src={usa}
                  alt="Language"
                  className="inline-block mr-2 w-[30px] h-[20px] "
                />
                <select
                  className="bg-transparent border-none outline-none"
                  name=""
                  id=""
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  {langList.map((lang, i) => (
                    <option value={lang} key={i}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border-[1px] border-r-black h-full"></div>

              <div className="">
                <Link href="/contact/login">
                  <FaUser className="inline-block mr-2" /> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-4  px-20">
        <div className="flex justify-between items-center  border-orange-600">
          <div className="">
            <Link href="/">
              <Image src={shoplogo} alt="Logo" className="w-[90px] h-[80px] " />
            </Link>
          </div>
          <nav className="">
            <ul className="flex items-center space-x-4">
              {navlinks.map((item, i) => (
                <li className="" key={i}>
                  <Link
                    href={item.link}
                    className="text-black text-xl capitalize duration-200s active:text-rose-400 hover:text-red-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            {cartIcons.map((item, i) => (
              <Link href={item.link} key={i} className="relative p-2">
                {item.icon}
                <span className="absolute -top-1 right-0 text-xs bg-red-500 text-white rounded-full px-1">
                  {item.num}
                </span>
              </Link>
            ))}

            <div className="text-sm">
              item: <span className="font-bold">$150.00</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
