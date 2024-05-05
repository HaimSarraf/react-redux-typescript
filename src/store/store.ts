import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import modalSlice from "./modalSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    modal: modalSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
