"use client"
import React from "react";
import Cart from "../Components/cart/Cart";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const CartPage = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    }, []);
  return <Cart />;
};

export default CartPage;