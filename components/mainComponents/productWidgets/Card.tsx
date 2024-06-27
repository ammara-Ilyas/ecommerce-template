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
    <div className="bg-gray-200 relative py-2 px-4 mt-6">
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
