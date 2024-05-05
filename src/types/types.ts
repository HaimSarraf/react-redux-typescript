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

export type ProductSliceType = {
  products: Product[];
  cartItems:CartItemType[];
};

export type CartInitialStateType = {
  products: Product[];
  amount: number;
  total: number;
};

export type ModalInitialType = {
  isOpen: boolean;
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
