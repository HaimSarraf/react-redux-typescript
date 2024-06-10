import { CategoriesType, category } from "../../types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// state.category = action.payload as CategoriesType['category']

export const useCategoryStore = create<CategoriesType>()(
  devtools(
    persist(
      (set) => ({
        category: category.ALL,
        setCategory: (category:category) =>
          set((state) => ({
            category: state.category = category as category 
          })),
      }),
      { name: "category-storage" }
    )
  )
);
