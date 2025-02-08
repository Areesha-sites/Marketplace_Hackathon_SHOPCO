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
      <div className="w-full overflow-hidden">
        <div>
          <NewsLetter />
        </div>
        <footer className="bg-BannerBgColor py-6 px-0 lg:px-12 h-auto md:h-auto w-full mx-auto max-w-[1440px]">
          <div className="xl:justify-center xl:gap-[70px] lg:flex-row flex-col flex justify-between gap-y-[20px] md:flex-row px-3 pt-40 md:pt-24">
            <div className="flex flex-col md:gap-[35px] gap-y-[20px]">
              <div className="md:static font-black text-[33.4545px] leading-[20px] tracking-wider font-integralCf">
                SHOP.CO
              </div>
              <div className="font-satoshi font-normal md:text-[14px] text-[12px] leading-[22px] text-[#000000] opacity-[60%]">
                We have clothes that suits your style and <br /> which youre
                proud to wear. From women to men.
              </div>
              <div className="flex gap-[10px] justify-start">
                <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center group hover:bg-black">
                  <FaGithub className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer ease-in-out group-hover:text-white" />
                </div>
                <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center group hover:bg-black">
                  <FaInstagram className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer ease-in-out group-hover:text-white" />
                </div>
                <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-black rounded-full flex justify-center items-center group hover:bg-white">
                  <ImFacebook className="w-[12.96px] h-[12.65px] text-white transition-all duration-300 cursor-pointer ease-in-out group-hover:text-black" />
                </div>
                <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center group hover:bg-black">
                  <FaTwitter className="w-[12.96px] h-[12.65px] text-black transition-all duration-300 cursor-pointer ease-in-out group-hover:text-white" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-2 gap-y-[20px] md:grid-cols-4 gap-x-[100px]">
                <div className="flex flex-col md:gap-[26px] gap-[16px]">
                  <span className="font-satoshiBold font-medium leading-[18px] tracking-[3px] text-[14px]">
                    COMPANY
                  </span>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    About
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Features
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Works
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Career
                  </Link>
                </div>
                <div className="flex flex-col md:gap-[26px] gap-[16px]">
                  <Link href="/" className="font-medium leading-[18px] tracking-[3px] font-satoshiBold text-[14px]">
                    HELP
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] md:whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Customer Support
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Delievery Details
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] sm:whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Terms & Conditions
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Privacy policy
                  </Link>
                </div>
                <div className="flex flex-col md:gap-[26px] gap-[16px]">
                  <Link href="/" className="font-satoshiBold font-medium leading-[18px] tracking-[3px] text-[14px]">
                    FAQ
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Account
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Manage Delievries
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Orders
                  </Link>
                  <Link href="/" className="font-satoshi font-normal text-[14px] lg:text-[16px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Payment
                  </Link>
                </div>
                <div className="flex flex-col md:gap-[26px] gap-[16px]">
                  <Link href="/" className="font-satoshiBold font-medium leading-[18px] tracking-[3px] text-[14px]">
                    RESOURCES
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Free eBooks
                  </Link>
                  <Link href="" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] sm:whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Development Tutorial
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    How To-Blog
                  </Link>
                  <Link href="/" className="font-satoshi font-normal lg:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap hover:text-black hover:opacity-100 transition-all duration-300 ease-in-out">
                    Youtube Playlist
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[15px] mt-8 justify-center">
            <div className="border-[1px] border-[#000000] border-opacity-[10%] w-full px-4 mx-auto"></div>
            <div className="flex justify-center items-center gap-y-[10px] flex-col md:flex-row md:justify-between w-full px-6">
              <span className="font-satoshi font-normal text-[14px] leading-[18.9px] text-center text-[#00000] opacity-[60%] whitespace-nowrap">
                Shop.co © 2000-2023, All Rights Reserved
              </span>
              <div className="flex justify-center gap-x-[10px]">
                <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
                  <Image
                    src="/Visa (1).svg"
                    alt="visa-image"
                    height={10}
                    width={10}
                    className="md:w-[30px] md:h-[30px] h-[25px] w-[25px]"
                  />
                </div>
                <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
                  <Image
                    src="/Mastercard.svg"
                    alt="mastercard-image"
                    height={10}
                    width={10}
                    className="md:w-[25px] md:h-[25px] h-[25px] w-[25px]"
                  />
                </div>
                <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
                  <Image
                    src="/Paypal (1).svg"
                    alt="paypal-image"
                    height={10}
                    width={10}
                    className="md:w-[35px] md:h-[35px] h-[30px] w-[30px]"
                  />
                </div>
                <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
                  <Image
                    src="/ Pay (1).svg"
                    alt="twittwr-image"
                    height={10}
                    width={10}
                    className="md:w-[30px] md:h-[30px] h-[25px] w-[25px]"
                  />
                </div>
                <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
                  <Image
                    src="/G Pay.svg"
                    alt="twittwr-image"
                    height={10}
                    width={10}
                    className="md:w-[30px] md:h-[30px] h-[25px] w-[25px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;