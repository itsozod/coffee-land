import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coffees: [],
  loader: false,
  coffeeQuery: "",
  currentCoffeePage: 1,
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
    setCoffeeQuery: (state, { payload }) => {
      state.coffeeQuery = payload;
    },
    setCurrentCoffeePage: (state, { payload }) => {
      state.currentCoffeePage = payload;
    },
  },
});

export const { setDatas, setLoader, setCoffeeQuery, setCurrentCoffeePage } =
  coffeesSlice.actions;

export const getDatas = (page, query) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true));
      const response = await fetch(
        `https://vercel-server-itsozods-projects.vercel.app/coffees?title_like=${query}&_page=${page}&_limit=4`
      );
      const data = await response.json();
      dispatch(setDatas(data));
      dispatch(setLoader(false));
    } catch (error) {
      console.log(error);
    }
  };
};
