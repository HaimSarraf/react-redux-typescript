import { createSlice } from "@reduxjs/toolkit";
import { ModalInitialType } from "../../types/types";

export const ModalInitialState: ModalInitialType = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState:ModalInitialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const {openModal,closeModal} = modalSlice.actions

export const {
  actions: modalActions,
  reducer: modalReducer
} = modalSlice;
