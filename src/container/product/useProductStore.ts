import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import products from "../../../server/db.json";
import { ProductInitialType } from "../../types/types";

const fruits = products.products.fruit;
const breads = products.products.bread;
const meats = products.products.meat;

const allProducts = fruits.concat(breads).concat(meats);

export const useProductStore = create<ProductInitialType>()(
  devtools(
    persist(
      (set) => ({
        products: allProducts,
        cartItems: [],
        amount: 0,
        totalPrice: 0,
        addToCart: (id: number) =>
          set((state) => {
            const product = state.products.find((item) => item.id === id);
            const cartProduct = state.cartItems.find((item) => item.id === id);

            if (product!.quantity === 0) {
              alert("Please Click On + First");
            } else if (product!.quantity > 0) {
              if (
                state.cartItems.find((item) => item.id === product!.id) != null
              ) {
                alert(`Your Cart Includes ( "${cartProduct!.quantity}" x "${
                  product!.title
                }") Right Now
                  ${"\n"}Manage The Quantity From Cart`);
              } else {
                alert(
                  `${
                    product!.quantity
                  } x ${product!.title.toUpperCase()} Successfully Added To Cart`
                );

                return {
                  // products:state.products,
                  cartItems: [...state.cartItems, product!],
                  amount: state.amount + product!.quantity,
                  totalPrice:
                    state.totalPrice + product!.price * product!.quantity,
                };
              }
            }

            return state;
          }),
        removeProductFromCart: (id: number) =>
          set((state) => {
            const updatedCartItems = state.cartItems.filter(
              (item) => item.id !== id
            );
            const newAmount =
              state.amount -
              state.products.find((item) => item.id === id)!.quantity;
            const updatedProducts = state.products.map((product) =>
              product.id === id ? { ...product, quantity: 0 } : product
            );

            const price = state.products.find((item) => item.id === id)!.price;
            const quantity = state.cartItems.find(
              (item) => item.id === id
            )!.quantity;
            const updatedTotalPrice = state.totalPrice - price * quantity;
            return {
              products: updatedProducts,
              cartItems: updatedCartItems,
              amount: newAmount,
              totalPrice: updatedTotalPrice,
            };
          }),
        increaseCartQuantity: (id: number) =>
          set((state) => {
            const updatedProducts = state.products.map((product) =>
              product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );
            const updatedCartProducts = state.cartItems.map((product) =>
              product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );
            const newAmount = state.amount + 1;

            const price = state.products.find((item) => item.id === id)!.price;

            const updatedTotalPrice = state.totalPrice + price;

            return {
              products: updatedProducts,
              cartItems: updatedCartProducts,
              amount: newAmount,
              totalPrice: updatedTotalPrice,
            };
          }),
        decreaseCartQuantity: (id: number) =>
          set((state) => {
            const updatedProducts = state.products.map((product) =>
              product.id === id
                ? {
                    ...product,
                    quantity: product.quantity === 0 ? 0 : product.quantity - 1,
                  }
                : product
            );

            const cartProduct = state.cartItems.find(item=>item.id === id);

            let updatedCartProducts;

            if(cartProduct!.quantity  === 1){
              updatedCartProducts = state.cartItems.filter((item) => item.id !== id);
            } else {

              updatedCartProducts = state.cartItems.map((product) =>
                product.id === id
                  ? {
                      ...product,
                      quantity: product.quantity === 0 ? 0 : product.quantity - 1,
                    }
                  : product
              );
            }

            

            const newAmount = state.amount === 0 ? 0 : state.amount - 1;

            const price = state.products.find((item) => item.id === id)!.price;

            const updatedTotalPrice =
              state.totalPrice === 0 ? 0 : state.totalPrice - price;

            return {
              products: updatedProducts,
              cartItems: updatedCartProducts,
              amount: newAmount,
              totalPrice: updatedTotalPrice,
            };
          }),
        clearCart: () =>
          set((state) => {
            state.products.map((product) => (product.quantity = 0));

            return {
              cartItems: [],
              amount: 0,
              totalPrice: 0,
            };
          }),
        increaseQuantity: (id: number) =>
          set((state) => {
            const updatedProducts = state.products.map((product) =>
              product.id === id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            );

            return {
              products: updatedProducts,
            };
          }),
        decreaseQuantity: (id: number) =>
          set((state) => {
            const updatedProducts = state.products.map((product) =>
              product.id === id
                ? {
                    ...product,
                    quantity: product.quantity === 0 ? 0 : product.quantity - 1,
                  }
                : product
            );

            return {
              products: updatedProducts,
            };
          }),
      }),
      { name: "product-storage" }
    )
  )
);
