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
  category: string;
  // isExisting:boolean
};

export type ProductInitialType = {
  products: Product[];
  cartItems:CartItemType[];
  searchedProducts:Product[]
  amount:number;
  totalPrice:number;
};

export type CartInitialStateType = {
  products: Product[];

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

export type DarkThemeState = {
  dark : boolean
}


export type CategoriesType = {
  category :  "ALL" | "MEATS" | "BREADS" | "FRUITS"
}


export type SearchInitialStateType = {
  products: Product[]
}