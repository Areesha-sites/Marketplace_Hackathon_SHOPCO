"use client";
import React, { useContext } from "react";
import CartContext from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";
const Cart = () => {
  const { addItemToCart, deleteItemFromCart, cartItems } =
    useContext(CartContext);

  return (
    <section>
      <h1 className="absolute top-[204px] left-[100px] text-black font-bold font-integral  text-[40px]">
        Your cart
      </h1>

      <div className="w-[505px] h-[458px] absolute top-[276px] left-[835px] py-[20px] px-[24px] rounded-[20px] border-[1px] border-black/10 flex flex-col gap-[24px]">
        <h2 className="font-satoshi text-[24px] font-bold text-black">
          Order Summary{" "}
        </h2>

        <div className="w-[457px] h-[193px] flex flex-col gap-[20px] ">
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
              Subtotal
            </p>
            <p className="text-[20px] font-bold font-satoshi text-black">
              $565
            </p>
          </div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
            Discount (-20%)
            </p>
            <p className="text-[20px] font-bold font-satoshi text-redTextOfferColor">
            -$113
            </p>
          </div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black/60">
            Delivery Fee
            </p>
            <p className="text-[20px] font-bold font-satoshi text-black">
            $15
            </p>
          </div>
          <div className="w-[457px] border-b-[1px] border-black/10"></div>
          <div className="w-[457px] h-[27px] flex justify-between">
            <p className="text-[20px] font-normal font-satoshi text-black">
          Total
            </p>
            <p className="text-[24px] font-bold font-satoshi text-black">
            $467
            </p>
          </div>
        </div>

<div className="w-[457px] h-[48px] flex gap-[12px]">

<div className="w-[326px] h-[48px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px]">
<Image src="/tag-icon.svg" alt="tag-icon" height={24} width={24} className="h-[24px] w-[24px]" />
<p className="text-[16px] font-satoshi font-normal text-black/40">Add promo code</p>
</div>

<button className="py-[12px] px-[16px] bg-black text-white rounded-[62px] font-satoshi text-[16px] font-medium w-[119px] h-[48px]">Apply</button>
</div>



<div className="w-[457px] h-[60px] py-[16px] px-[56px] rounded-[62px] bg-black text-white flex items-center gap-[12px] justify-center">
  <span className="text-[16px] font-satoshi font-medium">Go to Checkout</span>
  <Image src="/arrow-down-bold 1.svg" alt="right-arrow" height={24} width={24} className="h-[24px] w-[24px]" />
</div>
      </div>
    </section>
    // <section className="py-10">
    //   <div className="container max-w-screen-xl mx-auto px-4">
    //     <h1 className="text-2xl font-semibold mb-4">
    //       Cart ({cartItems.length} items)
    //     </h1>
    //     {cartItems.map((cartItem: any) => (
    //       <div key={cartItem.id} className="mb-4 flex gap-4 items-center">
    //         <img
    //           src={cartItem.image}
    //           alt={cartItem.title}
    //           className="w-16 h-16 object-cover rounded"
    //         />
    //         <div className="flex-1">
    //           <h2>{cartItem.title}</h2>
    //           <p>${cartItem.price}</p>
    //           <div className="flex items-center">
    //             <button
    //               onClick={() => decreaseQty(cartItem)}
    //               className="px-2 py-1 bg-gray-200"
    //             >
    //               -
    //             </button>
    //             <span className="px-4">{cartItem.quantity}</span>
    //             <button
    //               onClick={() => increaseQty(cartItem)}
    //               className="px-2 py-1 bg-gray-200"
    //             >
    //               +
    //             </button>
    //           </div>
    //         </div>
    //         <button
    //           onClick={() => deleteItemFromCart(cartItem.id)}
    //           className="text-red-500"
    //         >
    //           Remove
    //         </button>
    //       </div>
    //     ))}
    //     <div>
    //       <h3>Subtotal: ${amountWithoutTax.toFixed(2)}</h3>
    //       <h3>Tax: ${taxAmount}</h3>
    //       <h3>Total: ${totalAmount}</h3>
    //     </div>
    //     <Link href="/">
    //       <button className="bg-blue-500 text-white px-4 py-2 mt-4">
    //         Back to Shop
    //       </button>
    //       </Link>
    //   </div>
    // </section>
  );
};

export default Cart;
