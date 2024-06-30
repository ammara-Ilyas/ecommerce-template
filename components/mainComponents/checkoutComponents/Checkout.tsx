"use client";
import React from "react";
import getSripePromise from "@/app/lib/stripe";
const Checkout = () => {
  const products = [
    {
      name: "Product2",
      product: 2,
      price: 400,
      quantity: 2,
    },
    {
      name: "Product3",
      product: 3,
      price: 400,
      quantity: 2,
    },
    {
      name: "Product5",
      product: 5,
      price: 400,
      quantity: 2,
    },
  ];
  const handleStripe = async () => {
    const stripe = await getSripePromise();
    const response = await fetch("api/stripe-session/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
      cache: "no-cache",
      body: JSON.stringify(products),
    });
    const data = await response.json();
    console.log("data", data);
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
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
