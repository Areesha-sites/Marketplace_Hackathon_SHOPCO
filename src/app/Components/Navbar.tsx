"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const dropdown = [
    {
      name: "Casual",
      href: "/casual",
    },
    {
      name: "Formal",
      href: "/",
    },
    {
      name: "Aesthetic",
      href: "/",
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
  return (
    <>
      <nav className="md:w-[1240px] h-[41px] absolute md:top-[62px] top-[42px] md:left-[100px] flex md:gap-[40px] items-center">
        <IoMenu
          className="absolute left-[16px] md:hidden cursor-pointer w-[24px] h-[24px]"
          onClick={toggleMenu}
        />
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:text-[32px] left-[56px] text-black absolute font-bold md:static text-[25.5px] font-integralCf tracking-wider"
        >
          <Link href="/"> SHOP.CO</Link>
        </h1>
        <div className="w-[321px] h-[22px] md:flex gap-[24px] items-center hidden">
          <div
            className="w-[57px] h-[22px] flex gap-[4px] items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span
              data-aos="fade-left"
              data-aos-delay="100"
              className=" text-[16px] font-normal text-black font-satoshi"
            >
              Shop
            </span>
            <Image
              data-aos="fade-left"
              data-aos-delay="100"
              src="/Frame (33).svg"
              alt="dropdown"
              height={16}
              width={16}
              className="h-[16px] w-[16px]"
            />
            {isDropdownOpen && (
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="absolute top-full left-[200px] mt-[4px] bg-white shadow-lg rounded-[4px] z-30 p-[8px]"
              >
                {dropdown.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block px-[8px] py-[4px] text-[14px] text-black hover:bg-gray-100 font-satoshi"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {["On Sale", "New Arrivals", "Brands"].map((link, index) => (
            <Link
              data-aos="fade-left"
              data-aos-delay="200"
              key={index}
              href="/"
              className="text-[16px] font-normal text-black hover:text-gray-700 whitespace-nowrap font-satoshi"
            >
              {link}
            </Link>
          ))}
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="w-[577px] h-[48px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor md:flex gap-[12px] items-center hidden font-satoshi"
        >
          <Image
            src="/Frame (34).svg"
            alt="search-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <input
            type="text"
            className="text-[16px] font-normal text-black/40 border-none outline-none bg-bgLightGrayColor font-satoshi"
            placeholder="Search for products..."
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="flex md:gap-[14px] md:w-[62px] md:h-[24px] w-[96px] h-[24px] md:static absolute left-[278px] gap-[12px]"
        >
          <Image
            src="/Frame (35).svg"
            alt="searchBar"
            height={24}
            width={24}
            className="h-[24px] w-[24px] md:hidden"
          />
          <Link href="/cart">
            <Image
              data-aos="fade-right"
              data-aos-delay="300"
              src="/Frame (36).svg"
              alt="cart-icon"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </Link>
          <Image
            data-aos="fade-left"
            data-aos-delay="300"
            src="/Frame (37).svg"
            alt="user-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
        </div>
      </nav>
      {isMenuOpen && (
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="absolute top-0 left-0  pt-[20%] transition-all ease-in-out duration-300 bg-white z-50 flex flex-col items-center space-y-4 p-[16px]"
        >
          <RxCross2
            data-aos="fade-right"
            data-aos-delay="300"
            className="mb-[16px] cursor-pointer absolute top-7 right-5 w-[24px] h-[24px]"
            onClick={toggleMenu}
          />
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="w-[57px] h-[22px] flex gap-[4px] items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span className="text-[16px] font-normal text-black font-satoshi">
              Shop
            </span>
            <Image
              data-aos="fade-right"
              data-aos-delay="300"
              src="/Vector (4).svg"
              alt="dropdown"
              height={16}
              width={16}
              className="h-[13px] w-[13px]"
            />
          </div>
          {isDropdownOpen && (
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="mt-[4px] bg-white shadow-lg absolute left-[70px]  rounded-[4px] p-[8px] ml-[50%] flex flex-col items-center w-[100px]"
            >
              {["Casual", "Formal", "Aesthetic"].map((item, index) => (
                <Link
                  key={index}
                  href="/casual"
                  className="block px-[8px] py-[4px] text-[14px] text-black hover:bg-gray-100 w-full text-center font-satoshi"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
          {["On Sale", "New Arrivals", "Brands"].map((link, index) => (
            <Link
              data-aos="fade-right"
              data-aos-delay="300"
              key={index}
              href="/"
              className="text-[14px] font-normal text-black mb-[8px] hover:text-gray-700 font-satoshi"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
