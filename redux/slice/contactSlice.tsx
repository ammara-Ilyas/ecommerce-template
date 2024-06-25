import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; // Ensure you're importing toast correctly
let idCounter: number = 0;
// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the initial state type
interface ContactState {
  registeredList: User[];
}

const initialState: ContactState = {
  registeredList: [],
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addToRegisteredList(state, action: PayloadAction<User>) {
      const register = action.payload;
      const alreadyRegistered = state.registeredList.find(
        (data) => data.id === register.id
      );
      if (alreadyRegistered) {
        toast.error("Already exist in cart!", {
          theme: "dark",
        });
      } else {
        state.registeredList.push({
          ...register,
        });
      }
    },
  },
});

export const { addToRegisteredList } = contactSlice.actions;
export default contactSlice.reducer;
