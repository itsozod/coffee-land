import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffeeName: "",
  coffeeCupImg: "/coffee-cup-bisque.png",
  coffeePrice: null,
  coffeeQuantity: null,
};

export const coffeeCupSlice = createSlice({
  name: "coffeeCup",
  initialState,
  reducers: {
    setCoffeeName: (state, { payload }) => {
      state.coffeeName = payload;
    },
    setCoffeeCupImg: (state, { payload }) => {
      state.coffeeCupImg = payload;
    },
    setCoffeePrice: (state, { payload }) => {
      state.coffeePrice = payload;
    },
    setCoffeeQuantity: (state, { payload }) => {
      state.coffeeQuantity = payload;
    },
  },
});

export const {
  setCoffeeName,
  setCoffeeCupImg,
  setCoffeePrice,
  setCoffeeQuantity,
} = coffeeCupSlice.actions;
