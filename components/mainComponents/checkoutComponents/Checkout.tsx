"use client";
import React from "react";
import getStripePromise from "@/app/lib/stripe";
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
    try {
      const stripe = await getStripePromise();
      console.log(stripe);

      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`, // Ensure your API key is set as an environment variable
        },
        cache: "no-cache",
        body: JSON.stringify(products),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Server error:", errorData);
        throw new Error("Failed to create checkout session");
      }

      const data = await response.json();
      console.log("data", data);

      if (data.session && data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
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
