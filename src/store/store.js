import { configureStore } from "@reduxjs/toolkit";
import { coffeesSlice } from "./features/coffees/coffeesSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeesSlice.reducer,
  },
});
