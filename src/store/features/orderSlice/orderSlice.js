import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  ordersPrev: JSON.parse(localStorage.getItem("ordersPrev")) || [],
  orders: JSON.parse(localStorage.getItem("orders")) || [],
  address: "",
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getFromOrdersPrev: (state, { payload }) => {
      state.ordersPrev = payload;
      localStorage.setItem("ordersPrev", JSON.stringify(state.ordersPrev));
    },
    getFromOrders: (state, { payload }) => {
      state.orders = payload;
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
  },
});
export const { getFromOrdersPrev, getFromOrders, setAddress } =
  orderSlice.actions;
