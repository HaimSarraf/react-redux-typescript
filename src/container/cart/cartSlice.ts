import { CartInitialStateType } from "../../types/types";
import products from "../../../server/db.json";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

export const CartInitialState: CartInitialStateType = {
  products: allProducts,
};

export const useCartStore = create<CartInitialStateType>()(
  devtools(
    persist(
      () => CartInitialState,

      { name: "cart-storage" }
    )
  )
);
