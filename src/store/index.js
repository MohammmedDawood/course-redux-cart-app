import { configureStore } from "@reduxjs/toolkit";

// import cartSlice from "./cart-slice";, cart: cartSlice.reducer
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
