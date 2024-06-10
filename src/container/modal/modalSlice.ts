import { ModalState } from "../../types/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useModalStore = create<ModalState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        openModal: () =>
          set((state) => ({
            isOpen: (state.isOpen = true),
          })),
        closeModal: () =>
          set((state) => ({
            isOpen: (state.isOpen = false),
          })),
      }),
      { name: "modal-storage" }
    )
  )
);
