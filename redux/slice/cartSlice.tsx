import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  products: [],
  productList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      // console.log("product", state.products);
    },
    setFilteredProducts(state, action) {
      state.productList = action.payload;
    },
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((data) => {
        return data.id === item.id;
      });
      // console.log("item", item);
      if (existingItem) {
        toast.error("Already exist in cart!", {
          theme: "dark",
        });
      } else {
        const defaultQuantity = 1;
        state.items.push({
          ...item,
          quantity: defaultQuantity,
        });
      }
    },
    removefromCart(state, action) {
      console.log(action.payload);
      state.items.splice(action.payload, 1);
    },
    increCartItems(state, action) {
      const index = action.payload;
      const updatedItems = state.items.map((data, i) => {
        if (i === index) {
          return {
            ...data,
            quantity: data.quantity + 1,
            totalPrice: data.price * (data.quantity + 1),
          };
        }
        return data;
      });
      state.items = updatedItems;
    },
    decreCartItems(state, action) {
      const index = action.payload;
      const item = state.items[index];

      if (item.quantity > 1) {
        const updatedItems = state.items.map((data, i) => {
          if (i === index) {
            return {
              ...data,
              quantity: data.quantity - 1,
              totalPrice: data.price * (data.quantity + 1),
            };
          }
          return data;
        });
        state.items = updatedItems;
      }
    },
  },
});
export const {
  addToCart,
  removefromCart,
  increCartItems,
  decreCartItems,
  setProducts,
  setFilteredProducts,
} = cartSlice.actions;
export default cartSlice.reducer;
