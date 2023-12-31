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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increaseQuantity: (state, { payload }) => {
      state.cart = payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseQuantity: (state, { payload }) => {
      state.cart = payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, { payload }) => {
      state.cart = payload;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  updateCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
