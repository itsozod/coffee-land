import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  coffees: [],
  loader: false,
  query: "",
  currentPage: 1,
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
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { setDatas, setLoader, setQuery, setCurrentPage } =
  coffeesSlice.actions;

export const getDatas = (page, query) => {
  return async (dispatch) => {
    try {
      dispatch(setLoader(true));
      const response = await fetch(
        `http://localhost:3000/coffees?title_like=${query}&_page=${page}&_limit=4`
      );
      const data = await response.json();
      dispatch(setDatas(data));
      dispatch(setLoader(false));
    } catch (error) {
      console.log(error);
    }
  };
};
