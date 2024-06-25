import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/cartSlice";
import contactSlice from "./slice/contactSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    contact: contactSlice,
  },
});
