import { createSlice } from "@reduxjs/toolkit";
import { CartInitialStateType } from "../types/types";
import products from "../../server/db.json";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

const initialState: CartInitialStateType = {
  products: allProducts,
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
