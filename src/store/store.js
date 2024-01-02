import { configureStore } from "@reduxjs/toolkit";
import { coffeesSlice } from "./features/coffees/coffeesSlice";
import { coffeeCupSlice } from "./features/coffeeCupSelection/coffeeCupSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeesSlice.reducer,
    coffeeCup: coffeeCupSlice.reducer,
  },
});
