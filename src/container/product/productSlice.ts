import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductInitialType } from "../../types/types";
import products from "../../../server/db.json";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

const items: Product[] =
  localStorage.getItem("cart-item") !== null
    ? JSON.parse(localStorage.getItem("cart-item")!)
    : [];

const totalAmount: number =
  localStorage.getItem("amount") !== null
    ? JSON.parse(localStorage.getItem("amount")!)
    : 0;

export const ProductInitialState: ProductInitialType = {
  products: allProducts,
  cartItems: items,
  searchedProducts: allProducts,
  amount: totalAmount,
  totalPrice: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState: ProductInitialState,
  reducers: {
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const product = state.products.find((product) => product.id === itemId);

      if (state.cartItems.find((item) => item.id === itemId)) {
        alert(
          `Manage The ${product!.title.toUpperCase()}'s Quantity From Cart`
        );
      } else {
        product!.quantity = product!.quantity + 1;
      }
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const product = state.products.find((product) => product.id === itemId);

      if (state.cartItems.find((item) => item.id === itemId)) {
        alert(
          `Manage The ${product!.title.toUpperCase()}'s Quantity From Cart`
        );
      } else {
        if (product!.quantity > 0) {
          product!.quantity = product!.quantity - 1;
        } else if (product!.quantity === 0) {
          product!.quantity = 0;
        }
      }
    },

    addToCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const product = state.products.find((item) => item.id === itemId);
      const cartProduct = state.cartItems.find((item) => item.id === itemId);

      if (product!.quantity === 0) {
        alert("Please Click On + First");
      } else if (product!.quantity > 0) {
        if (state.cartItems.find((item) => item.id === product!.id) != null) {
          alert(
            `Your Cart Includes ( "${cartProduct!.quantity}" ${" x "} "${
              product!.title
            }" ) Right Now .
            ${"\n"}Manage The Quantity (Increse & Decrease) From Cart.
            `
          );
        } else {
          alert(
            `"${
              product!.quantity
            }" ${" x "} "${product!.title.toUpperCase()}" Succesfully Added To Cart`
          );

          state.cartItems = state.cartItems.concat(product!);

          state.amount = state.amount + product!.quantity;

          localStorage.setItem(
            "cart-item",
            JSON.stringify(state.cartItems.map((item) => item))
          );

          localStorage.setItem("amount", JSON.stringify(state.amount));
        }
      }
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const cartProduct = state.cartItems.find((item) => item.id === itemId);

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartProduct!.id
      );

      const product = state.products.find((item) => item.id === itemId);

      state.amount = state.amount - product!.quantity;

      product!.quantity = 0;

      localStorage.setItem(
        "cart-item",
        JSON.stringify(
          state.cartItems.filter((item) => item.id !== product!.id)
        )
      );

      localStorage.setItem(
        "amount",
        JSON.stringify(state.amount - product!.quantity)
      );
    },

    clearCart: (state) => {
      state.cartItems = [];

      state.products.map((item) => (item.quantity = 0));

      state.amount = 0;

      localStorage.clear();
    },

    increaseCartQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const cartProduct = state.cartItems.find((item) => item.id === itemId);
      const product = state.products.find((item) => item.id === itemId);

      cartProduct!.quantity = cartProduct!.quantity + 1;
      state.amount = state.amount + 1;

      localStorage.setItem(
        "cart-item",
        JSON.stringify(
          state.cartItems.map((item) => {
            return { ...item, quantity: item.quantity };
          })
        )
      );

      localStorage.setItem("amount", JSON.stringify(state.amount));

      product!.quantity = cartProduct!.quantity;
    },

    decreaseCartQuantity: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      const cartProduct = state.cartItems.find(
        (product) => product.id === itemId
      );

      const product = state.products.find((item) => item.id === itemId);

      if (cartProduct!.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartProduct!.id
        );

        product!.quantity = 0;

        cartProduct!.quantity = 0;

        state.amount = state.amount - 1;

        localStorage.setItem(
          "cart-item",
          JSON.stringify(
            state.cartItems.filter((item) => item.id !== product!.id)
          )
        );

        localStorage.setItem("amount", JSON.stringify(state.amount));
      } else if (cartProduct!.quantity > 1) {
        cartProduct!.quantity = cartProduct!.quantity - 1;

        state.amount = state.amount - 1;

        localStorage.setItem(
          "cart-item",
          JSON.stringify(
            state.cartItems.map((item) => {
              return { ...item, quantity: item.quantity };
            })
          )
        );

        localStorage.setItem("amount", JSON.stringify(state.amount));

        product!.quantity = cartProduct!.quantity;
      }
    },

    searchProducts: (state, action: PayloadAction<Product[]>) => {
      const searchValue = action.payload;

      state.products = searchValue
      

      // state.products = state.products.filter(product=> searchValue.includes(product.title))
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  clearCart,
  increaseCartQuantity,
  decreaseCartQuantity,
  searchProducts,
} = productSlice.actions;

export const { actions: productActions, reducer: productReducer } =
  productSlice;
