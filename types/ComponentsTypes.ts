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
}
export interface ReviewCardPropsTypes {
  id: string;
  rating: string;
  title: string;
  correct: string;
  description: string;
  date: string;
}
export interface HappyCustomerCardPropsTypes {
  id: string;
  rating: string;
  title: string;
  correctImg: string;
  des: string;
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
}

export interface NextArrowsProps {
  onClick: () => void;
}
export interface PrevArrowsProps {
  onClick: () => void;
}

export interface NewArrivalDetailsPropsTypes {
  id: string | number;
  image: string;
  title: string;
  size?: string;
  color?: string;
  price: number;
  rating: string;
  ratingReview: string;
  discount?: string;
  offer?: string | number
  des: string;
}

export interface CartItem {
  id: number; 
  name: string; 
  title: string;
  image: string; 
  price: number; 
  quantity: number; 
  size?: string;
  color?: string; 
}
export interface CategorySelectionTypes {
  name: string;
  bgColor: string;
  imgSrc: string;
}
export interface CategorySelectionPropTypes {
  onSelectCategory: (category: string | null) => void;
  activeCategory: string | null;
  selectedCategory: string | null;
}
export interface WishlistProductsType {
  _id: string; 
  name: string;
  imageUrl: string;
  price: number;
}

export interface NavbarProps {
  wishlist: WishlistProductsType[]; 
  onSearch: (searchTerm: string) => void; 
}
export interface CasualDetailsProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity?: number;
  selectedSize?: string;
  selectedColor?: string;
  sizes: string;
  colors: string;
  description: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  ratingReviews: number;
  offer: number;
}
export interface CasualDetailsProducts {
  _id: string;
  name: string;
  description?: string;
  imageUrl: string;
  price: number;
  category?: string;
  discountPercent?: number | null;
  isNew?: boolean | null;
  colors: string[];
  sizes: string[];
  ratingReviews?: number;
  offer?: number;
}
