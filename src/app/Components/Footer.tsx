import React from "react";
import Image from "next/image";
import NewsLetter from './NewsLetter'

const Footer = () => {
  return (
    <>
      <NewsLetter />
      <section className="w-[1440px] h-[499px] absolute left-[-1px] ">
        <div className="w-[1240px] h-[177px] absolute left-[100px] top-[4011px] flex justify-between ">
          <div className="w-[248px] h-[177px] flex flex-col gap-[35px]">
            <div className="w-[167px] h-[23px] font-integral font-bold text-[33.4545px] leading-[20px]">
              SHOP.CO
            </div>
            <div className="font-satoshi font-normal text-[14px] leading-[22px] text-[#000000] opacity-[60%]">
              We have clothes that suits your style and which youre proud to
              wear. From women to men.
            </div>
            <div className="w-[148px] h-[28px] flex justify-between flex-row-reverse">
              <div className="w-[28px] h-[28px] border-[1px] border-[#000000] border-opacity-[20%] bg-[#ffffff] rounded-full flex justify-center items-center">
                <Image
                  src="/Group (3).svg"
                  alt="github-image"
                  height={10}
                  width={10}
                  className="w-[15px] h-[15px] "
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
          <div className="w-[104px] h-[177px] flex flex-col gap-[26px]">
            <span className="w-[98px] h-[18px] font-satoshi font-medium leading-[18px] tracking-[3px]">
              COMPANY
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              About
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Features
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Works
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Career
            </span>
          </div>
          <div className="w-[104px] h-[177px] flex flex-col gap-[26px]">
            <span className="w-[49px] h-[18px] font-satoshi font-medium leading-[18px] tracking-[3px]">
              HELP
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Customer Support
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Delievery Details
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Terms & Conditions
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Privacy policy
            </span>
          </div>
          <div className="w-[149px] h-[177px] flex flex-col gap-[26px]">
            <span className="w-[49px] h-[18px] font-satoshi font-medium leading-[18px] tracking-[3px]">
              FAQ
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Account
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Manage Delievries
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] ">
              Orders
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] ">
              Payment
            </span>
          </div>
          <div className="w-[149px] h-[177px] flex flex-col gap-[26px]">
            <span className="w-[49px] h-[18px] font-satoshi font-medium leading-[18px] tracking-[3px]">
              RESOURCES
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%]">
              Free eBooks
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Development Tutorial
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              How To-Blog
            </span>
            <span className="font-satoshi font-normal text-[16px] leading-[19px] text-[#000000] opacity-[60%] whitespace-nowrap">
              Youtune Playlist
            </span>
          </div>
        </div>

        <div className="w-[1240px] absolute left-[100px] top-[4238px] border-[1px] border-[#000000] border-opacity-[10%]"></div>

        <span className="w-[269px] h-[19px] absolute top-[4263px] left-[100px] font-satoshi font-normal text-[14px] leading-[18.9px] text-right text-[#00000] opacity-[60%] whitespace-nowrap">
          Shop.co © 2000-2023, All Rights Reserved
        </span>

        <div className="w-[281.07px] h-[30.3px] absolute top-[4258px] left-[1059px] flex justify-between gap-[12px]">
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/.svg"
              alt="visa-image"
              height={10}
              width={10}
              className="w-[12.96px] h-[12.65px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/Mastercard.svg"
              alt="mastercard-image"
              height={10}
              width={10}
              className="w-[25.38px] h-[15.69px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/Paypal.svg"
              alt="paypal-image"
              height={10}
              width={10}
              className="w-[34.55px] h-[9.21px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/.svg"
              alt="twittwr-image"
              height={10}
              width={10}
              className="w-[12.96px] h-[12.65px] "
            />
          </div>
          <div className="w-[46.61px] h-[30.3px] rounded-[5.38px] border-[0.22px] bg-[#ffffff] border-[#D6DCE5] flex justify-center items-center">
            <Image
              src="/.svg"
              alt="twittwr-image"
              height={10}
              width={10}
              className="w-[12.96px] h-[12.65px] "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
