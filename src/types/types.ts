import { ReactNode } from "react";

export type Product = {
  id: number;
  quantity: number;
  title: string;
  src: string;
  price: number;
  category: string;
};

export type CartItemType = {
  id: number;
  quantity: number;
  title: string;
  src: string;
  price: number;
  category?: string;
  // isExisting:boolean
};


export type CartInitialStateType = {
  products: Product[];
};

export type ModalState = {
  isOpen: boolean;
  openModal:()=>void;
  closeModal:()=>void;
};

export type ModalType = {
  children: JSX.IntrinsicElements | JSX.Element;
  onClose: () => void;
};

export type ModalOverlayType = {
  children: ReactNode | Element | JSX.IntrinsicElements;
};

export type BackdropType = {
  onClose: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export type DarkThemeState = {
  dark: boolean;
  setDark: () => void;
  setLight: () => void;
};

export enum category {
  "ALL",
  "MEATS",
  "BREADS",
  "FRUITS"
}

export type CategoriesType = {
  category: category;
  setCategory: (category: category) => void;
};


export type ProductInitialType = {
  products: Product[];
  cartItems: Product[];
  amount: number;
  totalPrice: number;
  addToCart: (id:number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeProductFromCart: (id: number) => void;
  clearCart: () => void;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
};