import React from "react";
import Image from "next/image";
import Link from "next/link";
const TopHeader = () => {
  return (
    <>
      <header
        className="w-full h-[38px] absolute top-0 bg-black py-[9px] flex justify-center items-center "
      >
        <p
          className="font-normal text-white md:text-[14px] text-[12px] font-satoshi md:text-end text-center absolute md:left-[44px] top-[9px] md:static"
        >
          Sign up and get 20% off to your first order.
          <span
            className="font-medium underline hover:text-gray-200 cursor-pointer"
          >
            <Link href="/signup"> Sign Up Now</Link>
          </span>
        </p>
        <Image
          src="/Frame (32).svg"
          alt=""
          height={20}
          width={20}
          className="h-[20px] w-[20px] hidden md:flex absolute lg:right-[150px] md:right-[100px] xl:right-[100px]"
        />
      </header>
    </>
  );
};

export default TopHeader;
