import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="md:w-[1240px] h-[41px] md:absolute top-[62px] left-[100px] flex gap-[40px] items-center ">
        <Image
          src="/menu-icon.svg"
          alt=""
          height={24}
          width={24}
          className="absolute top-[54px] left-[16px] md:hidden"
        />
        <h1 className="md:text-[32px] text-left text-blackBgColor absolute top-[46px] font-black left-[56px] md:static text-[25.5px] ">
          SHOP.CO
        </h1>
        <div className="w-[321px] h-[22px] md:flex gap-[24px] items-center hidden">
          <div className="flex gap-[4px] items-center">
            <span className="font-inter text-[16px] font-normal text-blackBgColor">
              Shop
            </span>
            <Image
              src="/dropdown.svg"
              alt="dropdown"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
          </div>
          {["On Sale", "New Arrivals", "Brands"].map((link, index) => (
            <Link
              key={index}
              href="/"
              className="text-[16px] font-normal text-blackBgColorfont-inter whitespace-nowrap"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="w-[577px] h-[48px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor md:flex gap-[12px] items-center hidden">
          <Image
            src="/search-icon.svg"
            alt="search-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <input
            type="text"
            className="font-inter text-[16px] font-normal text-blackBgColor text-opacity-40 border-none outline-none bg-bgLightGrayColor"
            placeholder="Search for products..."
          />
        </div>

        <div className="flex md:gap-[14px] md:w-[62px] md:h-[24px] w-[96px] h-[24px] md:static absolute left-[278px] top-[54px] gap-[12px]">
          <Image
            src="/mobile-search-icon.svg"
            alt="searchBar"
            height={24}
            width={24}
            className="h-[24px] w-[24px] md:hidden"
          />
            <Link href="/cart">
          <Image
            src="/cart-icon.svg"
            alt="cart-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          </Link>
          <Image
            src="/user-icon.svg"
            alt="user-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
