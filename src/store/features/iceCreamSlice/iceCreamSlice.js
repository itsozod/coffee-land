import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  iceCreams: [],
  iceLoader: false,
  currentIcePage: 1,
  iceQuery: "",
};

export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    setIceCreams: (state, { payload }) => {
      state.iceCreams = payload;
    },
    setIceLoader: (state, { payload }) => {
      state.iceLoader = payload;
    },
    setIceQuery: (state, { payload }) => {
      state.iceQuery = payload;
    },
    setCurrentIcePage: (state, { payload }) => {
      state.currentIcePage = payload;
    },
  },
});
export const { setIceCreams, setIceLoader, setCurrentIcePage, setIceQuery } =
  iceCreamSlice.actions;

export const getIceCreams = (page, query) => {
  return async (dispatch) => {
    try {
      dispatch(setIceLoader(true));
      const response = await fetch(
        `https://vercel-server-itsozods-projects.vercel.app/ice-creams?title_like=${query}&_page=${page}&_limit=5`
      );
      const data = await response.json();
      console.log(data);
      dispatch(setIceCreams(data));
      dispatch(setIceLoader(false));
    } catch (error) {
      console.error(error);
      dispatch(setIceLoader(false));
    }
  };
};
