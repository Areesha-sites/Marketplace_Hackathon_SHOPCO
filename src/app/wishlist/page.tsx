"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PiSmileySad } from "react-icons/pi";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { WishlistItems } from "../../../types/ComponentsTypes";
const Wishlist: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItems[]>([]);
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(savedWishlist);
  }, []);
  const removeFromWishlist = (id: string) => {
    const updatedWishlist = wishlist.filter((item) => item._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };
  return (
    <>
      <div>
        {wishlist.length === 0 ? (
          <div className="flex flex-col justify-center gap-y-[10px] w-full items-center mx-auto min-h-screen mt-10">
            <h1 className="font-integralCf text-[28px] text-black text-center font-extrabold tracking-wider">
              Your Wishlist
            </h1>
            <div className="flex justify-center items-center gap-2">
              <p className="text-black/50 font-satoshi">
                Your Wishlist is Empty!
              </p>
              <PiSmileySad className="h-5 w-5 text-black/50" />
            </div>
            <Image
              src="/9824477.webp"
              alt=""
              height={1000}
              width={1000}
              priority
              quality={100}
              className="h-[200px] w-[200px]"
            />
            <Link href="/casual">
              <button className="bg-black w-[130px] h-[40px] rounded-[50px] border-none outline-none text-white font-satoshi flex justify-center items-center hover:bg-black/80">
                Back to Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center h-auto mt-[200px] w-full mx-auto gap-y-[20px] justify-center">
            <div className="flex justify-start items-start w-full px-32 mt-[-50px]">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/" className="font-satoshi">
                        Home
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink>
                      <Link href="/casual" className="font-satoshi">
                        Shop
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>
                      <Link href="/wishlist" className="font-satoshi">
                        Wishlist
                      </Link>
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="grid grid-cols-5 w-[1000px] px-6 py-2 bg-BannerBgColor border-b-[1px] border-black/90 rounded-[4px] font-satoshiBold text-center mt-6">
              <div>Product</div>
              <div>Product Name</div>
              <div>Price</div>
              <div>Status</div>
              <div>Actions</div>
            </div>
            <div className="flex flex-col gap-y-4 w-[1000px]">
              {wishlist.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-5 items-center px-6 py-4 border-b-[1px] border-gray-300 font-satoshi text-center"
                >
                  <div>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </div>
                  <div className="text-gray-700">{item.name}</div>
                  <div className="flex justify-center gap-1 items-center flex-row">
                    <div className="text-gray-700 text-[16px]">
                      ${item.price}
                    </div>
                    {item.discountPercent && (
                      <>
                        <div className="text-gray-500 text-[12px] line-through mt-2">
                          ${item.discountPercent}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="text-green-500 font-semibold">Available</div>
                  <div className="flex gap-x-2 justify-center">
                    <button
                      onClick={() => removeFromWishlist(item._id)}
                      className=" text-red-500 px-3 py-1 rounded-md "
                    >
                      Remove
                    </button>
                    <button className="bg-black text-white font-satoshi text-[14px] rounded-[50px] flex justify-center items-center w-[200px] h-[40px]">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
