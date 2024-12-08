import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <section className="md:w-[1440px] h-[663px] absolute md:top-[134px] top-[98px] bg-BannerBgColor w-[390px]">
        <Image
          src="/bg-start1.svg"
          alt="star"
          height={56}
          width={56}
          className="md:w-[56px] md:h-[56px] absolute md:left-[785px] md:top-[300px] z-20 w-[44px] h-[44px] top-[620px] left-[27px]"
        />

        <h1 className="md:w-[577px] md:h-[173px] absolute md:top-[100px] md:left-[100px] font-[Integral CF] md:text-[64px] text-[36px] font-bold md:leading-[64px] leading-[34px] text-blackBgColor z-20 w-[315px] h-[93px] top-[40px]  left-[16px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>

        <p className="absolute md:top-[308px] md:left-[100px] md:text-[16px] font-satoshi font-normal text-black text-opacity-60 md:w-[640px] md:leading-[22px] z-20 w-[358px] h-[50px]  top-[160px] left-[16px] text-[14px] leading-[20px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="md:w-[210px] h-[52px] absolute md:top-[375px] md:left-[100px] md:py-[16px] md:px-[54px] rounded-[62px] bg-blackBgColor font-satoshi text-[16px] font-medium text-whiteBgColor flex items-center justify-center z-20 w-[358px] left-[16px] top-[238px]">
          Shop Now
        </button>

        <div className="w-[278px] h-[52px] absolute top-[310px] left-[56px] flex justify-between md:hidden">
          <div className="w-[106px] h-[48px] flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshi text-blackBgColor">
              200+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              International Brands
            </p>
          </div>
          <span className="border-b-[1px] border-black/10 w-[52px] rotate-90 relative left-[27px] "></span>
          <div className="w-[106px] h-[48px] flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshi text-blackBgColor">
              2,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              High-Quality Products
            </p>
          </div>
        </div>
        <div className="w-[103px] h-[48px] absolute top-[390px] left-[144px] md:hidden">
          <div className=" flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshi text-blackBgColor">
              30,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              Happy Customers
            </p>
          </div>
        </div>
        <Image
          src="/mobile-banner-image.svg"
          alt="main-image"
          height={390}
          width={448}
          className="relative w-[390px] h-[448px] top-[450px] object-cover md:hidden"
        />
        <Image
          src="/banner-image.svg"
          alt="main-image"
          height={663}
          width={1440}
          className="h-[663px] w-[1440px] md:block hidden"
        />
        <Image
          src="/bg-start2.svg"
          alt="star"
          height={104}
          width={104}
          className="md:w-[104px] md:h-[104px] w-[76px] h-[76px] absolute md:left-[1250px] md:top-[85px] z-20 top-[490px] left-[293px]"
        />
      </section>

      <div className="md:w-[1440px] w-[390px] h-[146px] md:h-[122px] md:top-[797px] absolute bg-blackBgColor top-[951px] md:flex md:justify-between md:items-center ">
        <Image
          src="/brand-logo1.svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] h-[23.25px] md:w-[166.48px] w-[116.74px] absolute md:left-[100px] md:top-[50px] left-[16px] top-[40px]"
        />

        <Image
          src="/brand-logo2.svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[26.65px] w-[63.81px] absolute md:left-[372.48px] left-[166.74px] top-[40px] md:top-[50px]"
        />

        <Image
          src="/brand-logo3.svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[25.24px] w-[109.39px] absolute md:left-[569.48px] left-[264.55px] top-[40px] md:top-[50px]"
        />

        <Image
          src="/brand-logo4.svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[21px] w-[127px] left-[50px] top-[90px] absolute md:left-[831.48px] md:top-[50px] "
        />

        <Image
          src="/brand-logo5.svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] w-[ 134.84px] h-[21.75px] left-[206.16px] top-[90px] absolute md:left-[1131.48px] md:top-[50px]"
        />
      </div>
    </>
  );
};

export default Banner;
