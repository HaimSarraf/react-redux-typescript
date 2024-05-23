import { createSlice } from "@reduxjs/toolkit";
import { CartInitialStateType } from "../../types/types";
import products from "../../../server/db.json";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

export const CartInitialState: CartInitialStateType = {
  products: allProducts,

};

export const cartSlice = createSlice({
  name: "cart",
  initialState:CartInitialState,
  reducers: {},
});

export const {
  reducer: cartReducer
}  = cartSlice;
