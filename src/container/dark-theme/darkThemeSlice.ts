import { createSlice } from "@reduxjs/toolkit";
import { DarkThemeState } from "../../types/types";

const darkThemeMemory: boolean = JSON.parse(localStorage.getItem("theme")!);

export const DarkThemeInitialState: DarkThemeState = {
  dark: darkThemeMemory,
};

export const darkThemeSlice = createSlice({
  name: "darkTheme",
  initialState: DarkThemeInitialState,
  reducers: {
    setDark: (state) => {
      state.dark = false;
      localStorage.setItem(
        "theme",
        JSON.stringify(false)
      )
    },
    setLight: (state) => {
      state.dark = true;

      localStorage.setItem(
        "theme",
        JSON.stringify(true)
      )

    },
  },
});

export const { setDark, setLight } = darkThemeSlice.actions;

export const { actions: darkThemeActions, reducer: darkThemeReducer } =
  darkThemeSlice;
