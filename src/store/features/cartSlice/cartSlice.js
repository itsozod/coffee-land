import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCart: (state, { payload }) => {
      state.cart = payload;
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;
