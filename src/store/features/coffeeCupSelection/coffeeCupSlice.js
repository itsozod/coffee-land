import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coffeeName: "",
  coffeeCupImg: "",
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
  },
});

export const { setCoffeeName, setCoffeeCupImg } = coffeeCupSlice.actions;
