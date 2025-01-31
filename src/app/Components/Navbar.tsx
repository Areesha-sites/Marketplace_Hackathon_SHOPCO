"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import NavbarSearchBar from "./ProductSearchBar";
const Navbar = () => {
  const dropdownItems = [
    {
      name: "Casual",
      href: "/casual",
      description:
        "Discover our curated selection of men's clothing and accessories.",
    },
    {
      name: "Women",
      href: "/women",
      description: "Explore our stylish collection for women.",
    },
    {
      name: "Kids",
      href: "/kids",
      description: "Find adorable outfits for your little ones.",
    },
    {
      name: "Men",
      href: "/men",
      description: "Shop our exclusive deals and discounts.",
    },
  ];
  const navbarLinks = [
    {
      name: "On Sale",
      href: "/",
    },
    {
      name: "Help Center",
      href: "/helpCenter",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);
  const [wishlistCount, setWishlistCount] = useState(0);
  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlistCount(wishlist.length);
    const handleStorageChange = () => {
      const updatedWishlist = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );
      setWishlistCount(updatedWishlist.length);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <>
      <nav className="w-full h-[41px] absolute md:top-[52px] lg:top-[62px] top-[47px] flex justify-center items-center xl:px-[20px] md:px-5 lg:px-[50px] xxl:px-[87px] 2xL:w-full">
        <div className="flex lg:justify-center md:justify-between items-center h-full w-full lg:gap-[20px] xl:gap-[40px]">
          <h1 className="lg:text-[32px] md:-mt-2 -mt-1 text-black font-bold md:static absolute md:left-[56px] text-[25.2px] font-integralCf tracking-wider md:block hidden">
            <Link href="/"> SHOP.CO</Link>
          </h1>
          <div className=" xl:gap-[14px] md:flex lg:gap-[10px] xxl:gap-[24px] md:gap-[10px] items-center hidden">
            <div className="">
              <div
                className="relative inline-block "
                onMouseLeave={closeDropdown}
              >
                <div
                  className="flex items-center gap-1
          cursor-pointer"
                  onMouseEnter={toggleDropdown}
                >
                  <span className="text-black font-satoshi xl:text-[16px] lg:text-[14px] text-[12px] mt-[-32px] xl:mt-[-23px] ">
                    Shop
                  </span>
                  <Image
                    height={16}
                    width={16}
                    src="/Frame (33).svg"
                    alt="dropdown"
                    className="xl:h-[16px] xl:w-[16px] w-[14px] h-[14px] mt-[-32px] xl:mt-[-23px] "
                  />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 z-30 w-[500px] grid grid-cols-2 ">
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block group"
                      >
                        <div className="px-3 py-3 hover:bg-gray-100 rounded-md">
                          <p className="text-black text-[16px]  font-medium group-hover:text-blue-600 font-satoshi">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-[12px] leading-[1.5] font-satoshi">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {navbarLinks.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className="xl:text-[16px] md:text-[12px] lg:text-[12px] font-normal text-black hover:text-gray-700 whitespace-nowrap font-satoshi ml-3"
              >
                {link.name}
              </Link>
            ))}
          </div>
        <NavbarSearchBar/>
          <div className="flex justify-center items-center md:gap-[14px] md:w-[62px] xxl:w-[62px] xl:w-[80px] xxl:gap-[14px] md:h-[24px] w-[96px] h-[24px] gap-[12px] xl:gap-[10px] absolute md:left-[278px] md:static">
            <Image
              src="/Frame (35).svg"
              alt="searchBar"
              height={24}
              width={24}
              className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[24px] w-[24px] md:h-[15px] md:hidden hidden"
            />
            <div className="flex flex-col ">
              <Link href="/cart" className="relative">
                <Image
                  src="/Frame (36).svg"
                  alt="cart-icon"
                  height={24}
                  width={24}
                  className="xl:h-[24px] xl:w-[24px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] md:block hidden"
                />
                {cartCount > 0 && (
                  <span className="absolute top-[-7px] right-[-10px] bg-black text-white rounded-full text-[10px] font-satoshi w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
            <Link href="/signup">
              <Image
                src="/Frame (37).svg"
                alt="user-icon"
                height={24}
                width={24}
                className="xl:h-[24px] xl:w-[24px] h-[24px] w-[24px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px] md:block hidden"
              />
            </Link>
            <Link href="/wishlist">
              <div className="relative hidden md:flex">
                <FaRegHeart className="text-black h-[20px] w-[20px]" />
                {wishlistCount > 0 && (
                  <span className="absolute top-[-7px] right-[-10px] bg-black text-white rounded-full text-[10px] font-satoshi w-4 h-4 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex justify-between py-2 px-6 md:hidden h-[41px] w-full absolute top-[46px]">
        <div className="">
          <div className="flex justify-center w-[180px] items-center">
            <Sheet>
              <SheetTrigger asChild>
                <div className="absolute left-[0px] top-[3px] md:hidden cursor-pointer w-[35px] h-[35px]">
                  <Button className="bg-white shadow-white hover:bg-white">
                    <IoMenu
                      className="absolute left-[16px] md:hidden cursor-pointer w-[35px] h-[35px] text-black"
                      onClick={toggleMenu}
                    />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-14">
                  <div
                    className="w-[57px] h-[22px] flex gap-[4px] flex-row justify-center items-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span className="text-[16px] font-normal text-black font-satoshi">
                      Shop
                    </span>
                    <Image
                      src="/Vector (4).svg"
                      alt="dropdown"
                      height={16}
                      width={16}
                      className="h-[13px] w-[13px]"
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="mt-[4px] bg-white shadow-lg absolute left-[20px] rounded-[4px] p-[8px] w-[200px] h-[300px] grid grid-cols-1 overflow-auto">
                      {dropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block group"
                        >
                          <div className="px-3 py-3 hover:bg-gray-100 rounded-md">
                            <p className="text-black text-[16px]  font-medium group-hover:text-blue-600 font-satoshi">
                              {item.name}
                            </p>
                            <p className="text-gray-500 text-[12px] leading-[1.5] font-satoshi">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {["On Sale", "New Arrivals", "Brands"].map((link, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="text-[14px] font-normal text-black mb-[8px] hover:text-gray-700 font-satoshi flex flex-col mt-4"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="md:hidden block text-[25px] -mt-2 font-bold text-black font-integralCf">
              <Link href="/"> SHOP.CO</Link>
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px] md:hidden">
          <Image
            src="/Frame (35).svg"
            alt="searchBar"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <Link href="/cart">
            <Image
              src="/Frame (36).svg"
              alt="cart-icon"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </Link>
          <Image
            src="/Frame (37).svg"
            alt="user-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <Link href="/wishlist">
            <div className="relative md:hidden flex">
              <FaRegHeart className="text-black h-[20px] w-[20px]" />
              {wishlistCount > 0 && (
                <span className="absolute top-[-7px] right-[-10px] bg-black text-white rounded-full text-[10px] font-satoshi w-4 h-4 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
