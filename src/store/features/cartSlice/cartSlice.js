import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
