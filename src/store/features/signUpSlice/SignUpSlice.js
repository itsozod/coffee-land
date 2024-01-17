import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  regUsername: "",
  regPassword: "",
};

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.users.push(payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    setRegUsername: (state, { payload }) => {
      state.regUsername = payload;
    },
    setRegPassword: (state, { payload }) => {
      state.regPassword = payload;
    },
  },
});

export const { setUser, setRegUsername, setRegPassword } = signUpSlice.actions;
