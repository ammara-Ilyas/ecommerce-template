import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, { apiVersion: "2024-06-20" });

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body, "body");
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1PXG7UP6rkGL2v3sqsTfxWOw" },
          { shipping_rate: "shr_1PXG88P6rkGL2v3sW70W796h" },
        ],

        phone_number_collection: {
          enabled: true,
        },
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      //   res.redirect(303, session.url);
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No data found" });
    }
    // Create Checkout Sessions from body params.
  } catch (err: any) {
    console.log("err", err);

    return NextResponse.json(err.message);
  }
}
