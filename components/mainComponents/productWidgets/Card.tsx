"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";
import IconLinks from "./Icons";
/////////import redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/cartSlice";
////////import type
// import Product from "../productComponent/MyProduct";
import { Product } from "./Types";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleCartAddItem = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="bg-white rounded-lg group duration-700 relative bg-cover object-fill  overflow-hidden shadow-lg transition-shadow hover:shadow-xl h-64 ">
      <ul className="group-hover:bottom-0 absolute left-0 -bottom-[25%] duration-700  items-center w-full h-1/4 flex  justify-center  gap-5 text-xl">
        <li
          className=" h-full flex items-center justify-center  "
          onClick={() => handleCartAddItem(product)}
        >
          <IconLinks icon={<FaHeart />} />
        </li>
        <li className=" h-full flex items-center justify-center  ">
          <IconLinks icon={<FaRetweet />} />
        </li>
        <li className=" h-full flex items-center justify-center  ">
          <IconLinks icon={<FaShoppingCart />} />
        </li>
      </ul>
      <Link href="" className="text-gray-800">
        <div className="flex justify-center items-center h-64 p-4">
          <Image
            src={product.image}
            alt=""
            width={300}
            height={300}
            className="rounded-md"
          />
        </div>

        <div className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-sm">
          New
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
