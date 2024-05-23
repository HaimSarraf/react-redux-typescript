import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { CartInitialState } from "./cartSlice";

export const CartDomains = {
  products: (state: RootState) =>
    state.cart.products || CartInitialState.products,
  amount: (state: RootState) => state.cart.amount || CartInitialState.amount,
  total: (state: RootState) => state.cart.total || CartInitialState.total,
};

export const CartSelector = {
  products: createSelector(CartDomains.products, (products) => products),
  amount: createSelector(CartDomains.amount, (amount) => amount),
  total: createSelector(CartDomains.total, (total) => total),
};
