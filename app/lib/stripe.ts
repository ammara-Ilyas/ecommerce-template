import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripPromise: Promise<Stripe | null>;
const getSripePromise = () => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
  if (!stripPromise && !!key) {
    stripPromise = loadStripe(key);
  }
  return stripPromise;
};

export default getSripePromise;
