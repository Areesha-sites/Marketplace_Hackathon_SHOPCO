import { ReactNode } from "react";
export interface NewArrivalCardsPropsTypes {
  id: string;
  image: string;
  title: string;
  price: string | number;
  discount?: string;
  rating: string;
  ratingReview?: string;
  des: string;
  offer?: string;
  positionStyles?: {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
export interface ProductDetaildCardsPropsType {
  id: string;
  image: string;
  title: string;
  price: string | number;
  discount?: string;
  rating: string;
  ratingReview?: string;
  des: string;
  offer?: string;
  positionStyles?: {
    left: string;
  } | {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
export interface ReviewCardPropsTypes {
  id: string;
  rating: string;
  title: string;
  correct: string;
  des: string;
  date: string;
  positionStyles?: {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
export interface HappyCustomerCardPropsTypes {
  id: string;
  rating: string;
  title: string;
  correctImg: string;
  des: string;
  positionStyles?: {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
export interface TopSellingDetailPagePropsTypes {
  id: string;
  image: string;
  title: string;
  price: number;
  discount?: string;
  rating: string;
  ratingReview: string;
  des: string;
  offer?: string;
  positionStyles?: {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
export interface AddToCartItemPropsTypes {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  offer: string;
  discount: string;
  rating: string;
  product:
    | {
        id: string;
        image: string;
        title: string;
        price: number;
        rating: string;
      }
    | {};
  isStock: boolean;
}

export interface CartContextTypes {
  cart: AddToCartItemPropsTypes[];
  addItemToCart: (item: AddToCartItemPropsTypes) => void;
  deleteItemFromCart: (id: string) => void;
  clearCart: () => void;
}
export interface CartProviderProps {
  children: ReactNode;
}
export interface CasualCardsPropsTypes {
  id: string;
  image: string;
  title: string;
  rating: string;
  ratingReview: string;
  price: number;
  offer?: string;
  discount?: number | string;
  positionStyles?: {
    mobile?: {
      left?: string;
      top?: string;
    };
    desktop?: {
      left?: string;
      top?: string;
    };
  };
}
