import { ReactNode } from "react";
import { TypedObject } from "@portabletext/types";
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
  _id: string;
  name: string;
  description: string;
  date: string;
  rating: string;
  correct: string;
  onEdit: () => void;
  onRemove: (id: string) => Promise<void>;
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
  offer?: string | number;
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
  sizes?: string;
  colors?: string;
  description: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  ratingReviews: number;
  offer: number;
}
export type CasualDetailsProducts = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  category?: string;
  discountPercent?: number;
  isNew?: boolean;
  ratingReviews?: number;
  offer?: number;
  colors?: string[]; // Ensure this is defined
  sizes?: string[]; // Ensure this is defined
};

export type WishlistItem = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  description?: string;
  category?: string;
  discountPercent?: number;
  isNew?: boolean;
  ratingReviews?: number;
  offer?: number;
  colors?: string[]; // Add this if missing
  sizes?: string[]; // Add this if missing
};
// export interface CasualCardPropsTypes {
//   product: {
//     _id: string;
//     name: string;
//     price: number;
//     discountPercent: number | null;
//     offer: number;
//     imageUrl: string;
//     ratingReviews: number;
//   };
//   addToCompare: (product: any) => void;
// }
export interface GridProps {
  products: {
    _id: string;
    name: string;
    price: number;
    discountPercent: number | null;
    offer?: boolean | undefined;
    imageUrl: string;
    ratingReviews?: number; 
  }[];
  addToCompare: (product: {
    _id: string;
    name: string;
    price: number;
    discountPercent: number | null;
    offer?: boolean | undefined;
    imageUrl: string;
    ratingReviews?: number; 
  }) => void;
}
export interface GridsProps {
  products: Product[]; 
  addToCompare: (product: Product) => void;
}
export interface CartProduct extends CasualDetailsProduct {
  quantity: number;
}
export interface WishlistCartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity?: number;
  description: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  ratingReviews: number;
  offer: number;
}
// export interface WishlistItem {
//   _id: string;
// }
export interface Product {
  _createdAt: string;
  ratingReviews?: number;
  sizes?: string[];     
  colors?: string[];  
  offer?: number;       
  name: string;
  _id: string;
  imageUrl: string;
  discountPercent?: number; 
  category: string;
  description: string;
  price: number;
}
export interface CasualCardPropsTypes {
  product: Product;
  addToCompare: (product: Product) => void;
}
export interface CartItems {
  id: string;
  image: string;
  title: string;
  price: number;
  color: string;
  size: string;
}
 export interface CartContextData {
  cartItems: CartItems[];
  addToCart: (product: CartItems) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}
export interface Category {
  name: string;
  bgColor: string;
  imgSrc: string;
}
export interface CustomerCommnetsProps {
  name: string,
  description: string,
  date: string
}
// export interface ModalProps {
//   onClose: () => void;
//   onSubmit: (review: {
//     name: string;
//     description: string;
//     date: string;
//     _id?: string;
//   }) => void;
//   currentReview: {
//     _id?: string;
//     name: string;
//     description: string;
//     date: string;
//   } | null;
// }
export interface NavProduct {
  id: string;
  title: string;
  price: number;
}
// export interface SearchbarTypes {
//   _id: string;
//   name: string;
//   route: any;
// }
export interface NewArrivalProduct {
  ratingReviews?: number;
  sizes?: string[];
  colors?: string[];
  offer?: number;
  name: string;
  _id: string;
  imageUrl: string;
  discountPercent?: number;
  category: string;
  description: string;
  price: number;
}
export interface RangeSliderProps {
  category: string;
  setFilteredProducts: (products: any[]) => void;
  setTotalPages: (totalPages: number) => void;
  currentPage: number;            // Add currentPage to props
  setCurrentPage: (page: number) => void; // Add setCurrentPage to props
}

export interface ModalProps {
  onClose: () => void;
  onSubmit: (review: ReviewCardPropsTypes) => Promise<void>; 
  currentReview: ReviewCardPropsTypes | null;
}
export interface ReviewSubmissionType {
  name: string;
  description: string;
  date: string;
  _id?: string;
}
export interface SearchbarTypes {
  _id: string;
  name: string;
  _type: string;
}
export interface ContactFormData {
  name: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}
export interface FAQ {
  question: string;
  answer: string;
}
export interface FAQSectionProps {
  faqs: FAQ[];
  query: string;
}
export interface FAQSearchBarProps {
  onSearch: (query: string) => void;
}
export interface Message {
  user: "User" | "Bot";
  text: string;
}
export interface Guide {
  title: string;
  content: TypedObject[]; // Change from string[] to TypedObject[]
  slug: { current: string };
}

export interface GuideDetailsProps {
  guide: Guide;
  onBack: () => void; 
}
export interface UserPageGuide {
  _id: string;
  title: string;
  content: TypedObject[];
  slug: { current: string };
}

export interface GuideList {
  slug: { current: string };
  title: string;
}
export interface UserGuideListProps {
  guides: GuideList[]; 
  onGuideClick: (guide: GuideList) => void;
}
export interface WishlistItems {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  discountPercent?: number;
}
export interface SideBarProps {
  handleCategoryChange: (category: string, index: number) => void;
  activeColor: number | null;
  setFilteredProducts: (products: any[]) => void;
  setTotalPages: (totalPages: number) => void;
}
export interface ProductSuggestion {
  _id: string;
  name: string;
  imageUrl: string;
  _type: string;
}
export interface Translations {
  signupMessage: string;
  signupNow: string;
  // ... add other translation keys for all your components
  heading?: string;  // Example for Banner component
  bannerSubtitle?: string; // Example for Banner component
  // ... more translations
}
export interface TopHeaderProps {
  translations: Translations;
  language: string;      
  onChangeLanguage: (lang: string) => void;
}

export interface UserTypes {
  _id: string; 
  name: string;
  email: string;
 }
export interface OrderTypes {
  _id: string;
  orderAmount: number; 
  orderDate: string;
  status: string;
 }
 