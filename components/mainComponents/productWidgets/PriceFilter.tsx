"use client";
import React, { useState } from "react";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "@/redux/slice/CartSlice";
//////////import type
import { Product } from "./Types";

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const dispatch = useDispatch();
  const productsList: Product[] = useSelector(
    (state: { cart: { productList: Product[] } }) => state.cart.productList
  ); // console.log("productList", productsList);
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(e.target.valueAsNumber.toString());
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(e.target.valueAsNumber.toString());
  };

  const applyFilter = () => {
    const filteredProducts = productsList.filter((item: Product) => {
      return (
        Number(item.price) >= Number(minPrice) && item.price <= Number(maxPrice)
      );
    });
    console.log("filtered", filteredProducts);
    dispatch(setProducts(filteredProducts));
  };
  return (
    <>
      <h3 className="text-2xl font-semibold w-3/4 my-1 mx-auto">Price</h3>

      <div className=" flex justify-between items-center w-[80%] mx-auto ">
        <div className="flex flex-col">
          Min{" "}
          <input
            type="number"
            className="border-[1px] h-8 w-20 shadow-sm p-2  "
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <FaArrowRightArrowLeft className=" mt-7 text-xl" />
        <div className="flex flex-col">
          Max
          <input
            type="number"
            className="border-[1px]  h-8 w-20 shadow-sm p-2  "
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <button
          className="border-[1px] bg-green-400 mt-7 p-2 font-semibold text-white rounded-md"
          onClick={applyFilter}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default PriceFilter;
