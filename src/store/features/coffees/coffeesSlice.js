import { createSlice } from "@reduxjs/toolkit";
const initialData = {
  coffees: [],
  loader: false,
};
export const coffeesSlice = createSlice({
  name: "coffees",
  initialData,
  reducers: {
    setDatas: (state, { payload }) => {
      state.coffees = payload;
    },
    setLoader: (state, { payload }) => {
      state.loader = payload;
    },
  },
});

export const { setDatas, setLoader } = coffeesSlice.actions;
