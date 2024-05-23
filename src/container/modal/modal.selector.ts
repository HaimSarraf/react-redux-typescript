import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import {ModalInitialState}  from "./modalSlice";


export const ModalDomains = {
    isOpen: (state:RootState) => state.modal.isOpen || ModalInitialState.isOpen
}

export const ModalSelector = {
    isOpen : createSelector(ModalDomains.isOpen, (isOpen)=> isOpen)
}