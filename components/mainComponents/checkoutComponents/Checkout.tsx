"use client";
import React from "react";
import { json } from "stream/consumers";

const Checkout = () => {
  const products = [
    {
      name: "Product2",
      product: 2,
      price: 400,
    },
  ];
  const handleStripe = async () => {
    const response = await fetch("api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    console.log("res", response);
  };
  return (
    <div>
      <button
        className="border-2 bg-blue-500 text-white px-2 py-3"
        onClick={handleStripe}
      >
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
