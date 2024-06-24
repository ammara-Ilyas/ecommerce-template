import { toast } from "react-toastify";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/components/mainComponents/productWidgets/Types";

interface CartState {
  items: Product[];
  products: Product[];
  productList: Product[];
}

const initialState: CartState = {
  items: [],
  products: [],
  productList: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setFilteredProducts(state, action: PayloadAction<Product[]>) {
      state.productList = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      const item = action.payload;
      const existingItem = state.items.find(
        (data: Product) => data.id === item.id
      );
      if (existingItem) {
        toast.error("Already exist in cart!", {
          theme: "dark",
        });
      } else {
        const defaultQuantity = 1;
        state.items.push({ ...item, quantity: defaultQuantity });
      }
    },
    removefromCart(state, action: PayloadAction<number>) {
      state.items.splice(action.payload, 1);
    },
    increCartItems(state, action: PayloadAction<number>) {
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
    decreCartItems(state, action: PayloadAction<number>) {
      const index = action.payload;
      const item = state.items[index];

      if (item.quantity > 1) {
        const updatedItems = state.items.map((data, i) => {
          if (i === index) {
            return {
              ...data,
              quantity: data.quantity - 1,
              totalPrice: data.price * (data.quantity - 1),
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
