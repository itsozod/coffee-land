import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getFromOrders: (state, { payload }) => {
      state.orders = payload;
    },
  },
});
export const { getFromOrders } = orderSlice.actions;
