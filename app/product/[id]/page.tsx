"use client";
import { addToCart } from "@/redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import use from "next/app";

//toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

// import type
import { Product } from "@/components/mainComponents/productWidgets/Types";

const page = () => {
  // const dispatch = useDispatch();
  const param = useParams();
  console.log(param, "pr");
  const { id } = param;

  const [productItem, setProductItem] = useState<Product | null>(null);

  // useEffect(() => {
  //   if (id) {
  //     const fetchProduct = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://fakestoreapi.com/products/${id}`
  //         );
  //         const data: Product = await response.json();
  //         setProductItem(data);
  //       } catch (error) {
  //         console.error("Error fetching product:", error);
  //       }
  //     };

  //     fetchProduct();
  //   }
  // }, [id]);

  // const handlerAddtoCart = (proItem: Product) => {
  //   dispatch(addToCart(proItem));
  // };

  return (
    <div>
      {productItem && (
        <div className="card mx-auto  w-[90%] flex gap-5  justify-center  hover:shadow-xl p-4 ">
          <Image
            src={productItem.image}
            alt="pro"
            width={350}
            height={500}
            className="w-[55%]  h-[450px]   "
          />

          <div className="card-body w-[40%]  flex flex-col gap-5 p-5">
            <h2 className="card-title text-3xl font-bold">
              {productItem.title}
            </h2>
            <p className="p-2 flex text-2xl justify-between capitalize">
              {productItem.category}
            </p>
            <p className=" flex justify-between font-normal ">
              {productItem.description}
            </p>
            <div className=" flex gap-16 justify-center  mx-10 my-5">
              <button className="bg-blue-700 p-3 px-5 hover:bg-blue-500">
                Price:{productItem.price}$
              </button>
              <button className="bg-blue-700 p-3 px-5 hover:bg-blue-500">
                Rating:{productItem.rating.rate}
              </button>
            </div>
            <button
              // onClick={() => handlerAddtoCart(productItem)}
              className="bg-red-700 p-3 mx-auto w-[40%] hover:bg-red-500 active:bg-red-950 active:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
      <ToastContainer stacked />
    </div>
  );
};
export default page;
