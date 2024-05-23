import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { CategoryInitialState } from "./categorySlice";

export const Category = {
  category: (state: RootState) =>
    state.category.category || CategoryInitialState.category,
};

export const CategorySelector = {
  category: createSelector(Category.category, (category) => category),
};
