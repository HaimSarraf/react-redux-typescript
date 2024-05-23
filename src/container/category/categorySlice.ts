import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoriesType } from "../../types/types";

export const CategoryInitialState: CategoriesType = {
  category: "ALL",
};

export const categorySlice = createSlice({
  name: "category",
  initialState: CategoryInitialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload as CategoriesType['category']
    },
  },
});

export const { setCategory } = categorySlice.actions;

export const { actions: categoryActions, reducer: categoryReducer } =
  categorySlice;
