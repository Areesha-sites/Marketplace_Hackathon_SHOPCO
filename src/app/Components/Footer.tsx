import React from "react";
import Image from "next/image";
import NewsLetter from "./NewsLetter";
const Footer = () => {
  return (
    <>
      <div className="absolute md:top-[-1160px] top-[-1190px]">
        <NewsLetter />
      </div>
      <footer className="md:w-[1440px] md:h-[499px] absolute  bg-[#F0F0F0] w-[392px] h-[846px]">
        <div className="md:w-[1240px] h-[177px]  relative md:left-[100px] md:top-[130px]  flex md:justify-between md:flex-row flex-col top-[200px] ">
          <div className="md:w-[248px] md:h-[177px] w-[100px] flex flex-col md:gap-[35px]">
            <div className="md:w-[167px] md:h-[23px] md:static absolute font-black text-[33.4545px] leading-[20px] left-[16px]">
              SHOP.CO
            </div>
            <div className="font-inter font-normal md:text-[14px] text-[12px] leading-[22px] text-[#000000] opacity-[60%] md:w-[248px] md:static absolute top-[30px] w-[357px] left-[16px]">
              We have clothes that suits your style and which youre proud to
              wear. From women to men.
            </div>
            <div className="w-[148px] h-[28px] flex justify-between flex-row-reverse md:static relative top-[90px] left-[16px]">
              <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center">
                <Image
                  src="/logo-github 1.svg"
                  alt="github-image"
                  height={10}
                  width={10}
                  className="w-[16px] h-[16px] "
                />
              </div>
              <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center">
                <Image
                  src="/logo-instagram 1.svg"
                  alt="insta-image"
                  height={10}
                  width={10}
                  className="w-[12.96px] h-[12.65px] "
                />
              </div>
              <div className="w-[28px] h-[28px] border-[1px]  bg-[#000000] rounded-full flex justify-center items-center">
                <Image
                  src="/logo-fb-simple 2.svg"
                  alt="fb-image"
                  height={10}
                  width={10}
                  className="w-[12.96px] h-[12.65px] "
                />
              </div>
              <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center">
                <Image
                  src="/logo-twitter 2.svg"
                  alt="twittwr-image"
                  height={10}
                  width={10}
                  className="w-[12.96px] h-[12.65px] "
                />
              </div>
            </div>
          </div>
          <div className="md:w-[104px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[120px] left-[16px]">
            <span className="w-[98px] h-[18px] font-inter font-medium leading-[18px] tracking-[3px]">
              COMPANY
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              About
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Features
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Works
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Career
            </span>
          </div>
          <div className="md:w-[104px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[-25px] left-[196px] ">
            <span className="w-[49px] h-[18px] font-inter font-medium leading-[18px] tracking-[3px]">
              HELP
            </span>
            <span className="font-inter font-normal md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Customer Support
            </span>
            <span className="font-inter font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Delievery Details
            </span>
            <span className="font-inter font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Terms & Conditions
            </span>
            <span className="font-inter font-normal md:text-[16px] text-[14px]  leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Privacy policy
            </span>
          </div>
          <div className="md:w-[149px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative top-[26px] left-[16px]">
            <span className="w-[49px] h-[18px] font-inter font-medium leading-[18px] tracking-[3px]">
              FAQ
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Account
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Manage Delievries
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] ">
              Orders
            </span>
            <span className="font-inter font-normal text-[14px] md:text-[16px] leading-[19px] text-[#000000] opacity-[60%] ">
              Payment
            </span>
          </div>
          <div className="md:w-[149px] md:h-[177px] w-[91px] h-[146px] flex flex-col md:gap-[26px] gap-[16px] md:static relative left-[196px] top-[-118px]">
            <span className="w-[49px] h-[18px] font-inter font-medium leading-[18px] tracking-[3px]">
              RESOURCES
            </span>
            <span className="font-inter font-normal md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%]">
              Free eBooks
            </span>
            <span className="font-inter font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Development Tutorial
            </span>
            <span className="font-inter font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              How To-Blog
            </span>
            <span className="font-inter font-normal  md:text-[16px] text-[14px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Youtune Playlist
            </span>
          </div>
        </div>

        <div className="md:w-[1240px] w-[358px] relative md:left-[100px] md:top-[240px]  border-[1px] border-[#000000] border-opacity-[10%] left-[16px] top-[560px]"></div>

        <span className="md:w-[269px] h-[19px] relative  md:left-[100px] left-[61px] font-inter font-normal text-[14px] leading-[18.9px] text-right text-[#00000] opacity-[60%] whitespace-nowrap md:top-[260px] top-[573px]">
          Shop.co © 2000-2023, All Rights Reserved
        </span>

        <div className="md:w-[281.07px] h-[30.3px] w-[240px] relative  md:left-[1059px] flex justify-between md:gap-[12px] top-[583px] left-[74px] gap-[10px] md:top-[235px]">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
