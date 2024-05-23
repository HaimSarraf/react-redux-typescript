import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { DarkThemeInitialState } from "./darkThemeSlice";

export const DarkTheme = {
    dark:(state:RootState)=> state.darkTheme.dark || DarkThemeInitialState.dark!
}

export const DarkThemeSelector = {
    dark: createSelector(DarkTheme.dark, (dark)=>dark)
}