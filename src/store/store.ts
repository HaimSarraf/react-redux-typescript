import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../container/product/productSlice";
import { modalSlice } from "../container/modal/modalSlice";
import { cartSlice } from "../container/cart/cartSlice";
import { darkThemeSlice } from "../container/dark-theme/darkThemeSlice";
import { categorySlice } from "../container/category/categorySlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    modal: modalSlice.reducer,
    cart: cartSlice.reducer,
    darkTheme: darkThemeSlice.reducer,
    category: categorySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
