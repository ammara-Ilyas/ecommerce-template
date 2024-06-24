"use client";
import React from "react";
import { FaHeart, FaRetweet, FaShoppingCart } from "react-icons/fa";
import IconLinks from "./Icons";
/////////import redux
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slice/CartSlice";
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
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl h-64 ">
      <div
        className="group duration-700 relative bg-cover object-fill overflow-hidden flex flex-col items-end justify-end bg-center h-64"
        style={{ backgroundImage: `url(${product.image})` }}
      >
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
      </div>
    </div>
  );
};

export default ProductCard;
