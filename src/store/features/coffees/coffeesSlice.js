import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coffees: [],
  loader: false,
};
export const coffeesSlice = createSlice({
  name: "coffees",
  initialState,
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

export const getDatas = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true));
      const response = await fetch(`http://localhost:3000/coffees`);
      const data = await response.json();
      dispatch(setDatas(data));
      dispatch(setLoader(false));
    } catch (error) {
      console.log(error);
    }
  };
};
