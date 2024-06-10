import { DarkThemeState } from "../../types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useDarkThemeStore = create<DarkThemeState>()(
  devtools(
    persist(
      (set) => ({
        dark: false,
        setDark: () =>
          set((state) => ({
            dark: (state.dark = true),
          })),
        setLight: () =>
          set((state) => ({
            dark: (state.dark = false),
          })),
      }),
      { name: "darkTheme-storage" }
    )
  )
);
