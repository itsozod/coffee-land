import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  orders: JSON.parse(localStorage.getItem("orders")) || [],
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getFromOrders: (state, { payload }) => {
      state.orders = payload;
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
  },
});
export const { getFromOrdersPrev, getFromOrders } = orderSlice.actions;
