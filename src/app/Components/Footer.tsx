import React from "react";
import Image from "next/image";
import NewsLetter from "./NewsLetter";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="relative">
  <div className="absolute md:top-[-300px]">
    <NewsLetter />
  </div>
 
      {/* <footer className=" md:h-[499px] bg-BannerBgColor xl:h-[430px] xxl:h-[500px] xl:w-[1263px] xxl:w-[1440px] absolute top-[-160px] lg:w-[1024px]"> */}
        {/* <div className=" xxl:w-[1400px] h-[177px] xl:left-[130px] xxl:left-[100px] md:top-[130px] xl:justify-center xl:gap-[100px] lg:flex-row flex-col w-[1240px] absolute xxl:top-[150px] left-[100px] flex justify-between lg:left-[26px] lg:w-[980px]">
          <div className="md:w-[248px] md:h-[177px] w-[100px] flex flex-col md:gap-[35px]">
            <div className="md:w-[167px] md:h-[23px] md:static absolute top-[-10px] font-black text-[33.4545px] leading-[20px] left-[16px] tracking-wider font-integralCf">
              SHOP.CO
            </div>
            <div className="font-satoshi font-normal md:text-[14px] text-[12px] leading-[22px] text-[#000000] opacity-[60%] md:w-[248px] md:static absolute top-[30px] w-[357px] left-[16px]">
              We have clothes that suits your style and which youre proud to
              wear. From women to men.
            </div>
            <div className="w-[148px] h-[28px] flex justify-between flex-row-reverse md:static relative top-[90px] left-[16px]">
              <div
                className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center 
          group hover:bg-black"
              >
                <FaGithub
                  className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer 
          ease-in-out group-hover:text-white"
                />
              </div>
              <div
                className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center 
          group hover:bg-black"
              >
                <FaInstagram
                  className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer 
          ease-in-out group-hover:text-white"
                />
              </div>
              <div
                className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-black rounded-full flex justify-center items-center 
          group hover:bg-white"
              >
                <ImFacebook
                  className="w-[12.96px] h-[12.65px] text-white transition-all duration-300 cursor-pointer 
          ease-in-out group-hover:text-black"
                />
              </div>
              <div
                className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center 
          group hover:bg-black"
              >
                <FaTwitter
                  className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer 
          ease-in-out group-hover:text-white"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[104px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[120px] left-[16px]">
            <span className="w-[98px] h-[18px] font-satoshiBold font-medium leading-[18px] tracking-[3px]">
              COMPANY
            </span>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Features
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Works
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Career
            </Link>
          </div>
          <div className="md:w-[104px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[-25px] left-[196px] ">
            <Link
              href="/"
              className="w-[49px] h-[18px] font-medium leading-[18px] tracking-[3px] font-satoshiBold"
            >
              HELP
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Customer Support
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Delievery Details
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Privacy policy
            </Link>
          </div>
          <div className="md:w-[149px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[26px] left-[16px]">
            <Link
              href="/"
              className="w-[49px] h-[18px] font-satoshiBold font-medium leading-[18px] tracking-[3px]"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Account
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Manage Delievries
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Orders
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Payment
            </Link>
          </div>
          <div className="md:w-[149px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative left-[196px] top-[-118px] ">
            <Link
              href="/"
              className="w-[49px] h-[18px] font-satoshiBold font-medium leading-[18px] tracking-[3px]"
            >
              RESOURCES
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Free eBooks
            </Link>
            <Link
              href=""
              className="font-satoshi font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Development Tutorial
            </Link>
            <Link
              href="/"
              className="font-satoshi font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              How To-Blog
            </Link>
            <Link
              href="/"
              className="font-satoshi  font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out"
            >
              Youtube Playlist
            </Link>
          </div>
        </div> */}
        {/* <div className="md:w-[1240px] w-[358px] relative md:left-[100px] xl:left-[50px] xl:w-[1150px] md:top-[240px] border-[1px] border-[#000000] border-opacity-[10%] left-[16px] top-[560px] xxl:top-[380px] xxl:w-[1240px] xxl:left-[100px] xl:top-[350px] lg:w-[950px] lg:top-[370px] lg:left-[26px]"></div>
        <span className="md:w-[269px] h-[19px] relative  md:left-[100px] xxl:left-[100px] xl:left-[50px] left-[61px] font-satoshi font-normal text-[14px] leading-[18.9px] text-right text-[#00000] opacity-[60%] whitespace-nowrap md:top-[260px] top-[573px] xxl:top-[400px] xl:top-[370px] lg:top-[380px] lg:left-[26px]">
          Shop.co © 2000-2023, All Rights Reserved
        </span>
        <div className="md:w-[281.07px] h-[30.3px] w-[240px] relative md:left-[1059px] xxl:left-[1059px] xl:left-[925px] flex justify-between md:gap-[12px] top-[583px] left-[74px] gap-[10px] md:top-[235px] xxl:top-[380px] xl:top-[350px] lg:left-[700px] lg:top-[360px]">
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/Visa (1).svg"
              alt="visa-image"
              height={10}
              width={10}
              className="md:w-[30px] md:h-[30px] h-[25px] w-[25px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/Mastercard.svg"
              alt="mastercard-image"
              height={10}
              width={10}
              className="md:w-[25px] md:h-[25px] h-[25px] w-[25px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/Paypal (1).svg"
              alt="paypal-image"
              height={10}
              width={10}
              className="md:w-[35px] md:h-[35px] h-[30px] w-[30px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/ Pay (1).svg"
              alt="twittwr-image"
              height={10}
              width={10}
              className="md:w-[30px] md:h-[30px] h-[25px] w-[25px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/G Pay.svg"
              alt="twittwr-image"
              height={10}
              width={10}
              className="md:w-[30px] md:h-[30px] h-[25px] w-[25px]  "
            />
          </div>
        </div> */}
      {/* </footer> */}
      </div>
    </>
  );
};

export default Footer;
