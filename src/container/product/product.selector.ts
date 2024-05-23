import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { ProductInitialState } from "./productSlice";

export const ProductDomains = {
    products:(state:RootState)=> state.product.products || ProductInitialState.products,
    cartItems: (state:RootState)=>state.product.cartItems || ProductInitialState.cartItems
}

export const ProductSelector = {
    products: createSelector(ProductDomains.products , (products)=>products),
    cartItems: createSelector(ProductDomains.cartItems , (cartItems)=>cartItems)
}