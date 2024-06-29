import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, "body");
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin")}/?success=true`,
      cancel_url: `${request.headers.get("origin")}/?canceled=true`,
    });
    //   res.redirect(303, session.url);
    return NextResponse.json({ session });
  } catch (err: any) {
    console.log("err", err);

    return NextResponse.json(err.message);
  }
}
