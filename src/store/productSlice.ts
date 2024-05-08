import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductSliceType } from "../types/types";
import products from "../../server/db.json";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

const items: Product[] =
  localStorage.getItem("cart-item") !== null
    ? JSON.parse(localStorage.getItem("cart-item")!)
    : [];

const initialState: ProductSliceType = {
  products: allProducts,
  cartItems: items,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
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

    decreaseQuantity: (state, action) => {
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

    addToCart: (state, action) => {
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

          localStorage.setItem(
            "cart-item",
            JSON.stringify(state.cartItems.map((item) => item))
          );
        }
      }
    },

    removeProductFromCart: (state, action) => {
      const itemId = action.payload;

      const cartProduct = state.cartItems.find((item) => item.id === itemId);

      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartProduct!.id
      );

      const product = state.products.find((item) => item.id === itemId);

      product!.quantity = 0;

      localStorage.setItem(
        "cart-item",
        JSON.stringify(
          state.cartItems.filter((item) => item.id !== product!.id)
        )
      );
    },

    clearCart: (state) => {
      state.cartItems = [];

      state.products.map((item) => (item.quantity = 0));

      localStorage.clear();
    },

    increaseCartQuantity: (state, action) => {
      const itemId = action.payload;

      const cartProduct = state.cartItems.find((item) => item.id === itemId);
      const product = state.products.find((item) => item.id === itemId);

      cartProduct!.quantity = cartProduct!.quantity + 1;

      localStorage.setItem(
        "cart-item",
        JSON.stringify(
          state.cartItems.map((item) => {
            return { ...item, quantity: item.quantity };
          })
        )
      );

      product!.quantity = cartProduct!.quantity;
    },

    decreaseCartQuantity: (state, action) => {
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
      } else if (cartProduct!.quantity > 1) {
        cartProduct!.quantity = cartProduct!.quantity - 1;

        localStorage.setItem(
          "cart-item",
          JSON.stringify(
            state.cartItems.map((item) => {
              return { ...item, quantity: item.quantity };
            })
          )
        );

        product!.quantity = cartProduct!.quantity;
      }
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
} = productSlice.actions;

export default productSlice.reducer;
