import { configureStore } from "@reduxjs/toolkit";
import { coffeesSlice } from "./features/coffees/coffeesSlice";
import { coffeeCupSlice } from "./features/coffeeCupSelection/coffeeCupSlice";
import { cartSlice } from "./features/cartSlice/cartSlice";
import { iceCreamSlice } from "./features/iceCreamSlice/iceCreamSlice";

export const store = configureStore({
  reducer: {
    coffees: coffeesSlice.reducer,
    coffeeCup: coffeeCupSlice.reducer,
    cart: cartSlice.reducer,
    iceCreams: iceCreamSlice.reducer,
  },
});
