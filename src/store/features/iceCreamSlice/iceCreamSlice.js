import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  iceCreams: [],
  iceLoader: false,
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
  },
});
export const { setIceCreams, setIceLoader } = iceCreamSlice.actions;

export const getIceCreams = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(setIceLoader(true));
      const response = await fetch(
        `http://localhost:3000/ice-creams?_page=${page}&_limit=5`
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
