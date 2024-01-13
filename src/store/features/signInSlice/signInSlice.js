import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loggedIn: JSON.parse(localStorage.getItem("loggedIn")),
  username: "",
  password: "",
};

export const signInSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setUsername: (state, { payload }) => {
      state.username = payload;
    },
    setPassword: (state, { payload }) => {
      state.password = payload;
    },
    setLoggedIn: (state, { payload }) => {
      state.loggedIn = payload;
      localStorage.setItem("loggedIn", JSON.stringify(state.loggedIn));
    },
  },
});

export const { setUsername, setPassword, setLoggedIn } = signInSlice.actions;
