import React from "react";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <>
     <div className="flex justify-center items-center w-full mt-[100px] xl:mt-[200px] xxl:mt-[240px]  lg:mt-[130px]">
  <section className="xxl:max-w-[1700px]  w-full mx-auto py-14 bg-BannerBgColor relative">
    <div className="flex justify-center items-center w-full mx-auto">
      <Image
        src="/Vector (2).svg"
        alt="star"
        height={56}
        width={56}
        className="xl:w-[56px] xl:h-[56px] absolute xxl:left-[785px] md:top-[160px] xxl:top-[200px] xl:left-[685px] z-20 w-[44px] h-[44px] top-[630px] left-[5px] sm:left-[27px] star-rotate xl:top-[200px] md:left-[400px] lg:left-[560px] lg:top-[200px]"
      />
      <div className="flex justify-center items-center mx-auto w-full">
        <h1 className="lg:w-[577px] lg:h-[173px] absolute lg:top-[80px] md:left-[20px] xxl:left-[100px] xl:left-[70px] xxl:text-[64px] xl:text-[54px] xl:leading-[54px] sm:text-[36px] xxl:leading-[64px] leading-[34px] text-blackBgColor z-20 sm:w-[350px] h-[93px] top-[40px] left-[16px] font-bold tracking-wider font-integralCf lg:left-[26px] lg:text-[50px] lg:leading-[45px] xl:top-[20px] w-[300px] text-[30px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="absolute md:top-[160px] xxl:top-[240px] xl:top-[210px] md:left-[20px] xxl:left-[100px] xl:left-[70px] md:text-[16px] font-normal text-black/60 text-opacity-60 md:leading-[22px] z-20 w-[300px] sm:w-[358px] h-[50px] top-[160px] left-[16px] text-[14px] leading-[20px] xl:w-[560px] font-satoshi lg:left-[26px] lg:top-[240px] lg:w-[500px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link href="/casual">
          <button className="lg:w-[210px] h-[52px] absolute xxl:left-[100px] xxl:top-[315px] md:left-[20px] xl:left-[70px] md:py-[16px] md:px-[54px] rounded-[62px] bg-black text-[16px] font-medium text-white flex items-center justify-center z-20 md:w-[250px] w-[290px] sm:w-[358px] left-[16px] top-[268px] sm:top-[238px] font-satoshi hover:bg-black/85 lg:left-[26px] lg:top-[310px] xl:top-[280px]">
            Shop Now
          </button>
        </Link>
        <div className="w-[278px] h-[52px] absolute top-[330px] sm:top-[310px] left-[20px] sm:left-[56px] flex justify-between md:hidden">
          <div className="w-[106px] h-[48px] flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              200+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              International Brands
            </p>
          </div>
          <span className="border-b-[1px] border-black/10 w-[52px] rotate-90 relative left-[27px]"></span>
          <div className="w-[106px] h-[48px] flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              2,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              High-Quality Products
            </p>
          </div>
        </div>
        <div className="w-[103px] h-[48px] absolute top-[420px] sm:top-[390px] left-[122px] sm:left-[144px] md:hidden">
          <div className="flex flex-col">
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              30,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/Rectangle 2 (2).svg"
        alt="main-image"
        height={390}
        width={448}
        className="relative w-full h-[448px] lg:top-[200px] xl:top-[450px] object-cover md:hidden top-[400px] sm:object-contain"
      />
      <Image
        src="/Rectangle 2 (3).svg"
        alt="main-image"
        height={663}
        width={1440}
        className="h-[663px] xxl:w-[1700px] md:block hidden lg:absolute lg:top-[-100px] md:absolute md:top-[-140px]"
      />
      <Image
        src="/Vector (3).svg"
        alt="star"
        height={104}
        width={104}
        className="xl:w-[104px] xl:h-[104px] sm:w-[76px] sm:h-[76px] h-[60px] w-[60px] absolute md:left-[670px] xxl:left-[1250px] xxl:top-[0px] xl:left-[1100px] md:top-[20px] z-20 top-[480px] right-[15px] sm:right-[18px] star-rotate xl:top-[0px] lg:top-[50px] lg:left-[920px] lg:w-[80px] lg:h-[80px]"
      />
    </div>
  </section>
</div>
      <div className=" xxl:w-[1440px] xl:w-full w-full sm:w-full h-[146px] md:h-[122px] xxl:h-[122px] md:top-[465px] lg:top-[590px] xxl:top-[797px] xl:top-[723px] absolute bg-black top-[1000px] flex justify-center sm:flex-row flex-wrap gap-x-[40px] px-[8px] items-center lg:w-full gap-y-0">
        <Image
          src="/Group (5).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] h-[23.25px] md:w-[166.48px] w-[116.74px] md:left-[100px] xxl:left-[100px] xl:left-[80px] md:top-[50px] left-[16px] top-[40px] lg:left-[50px]"
        />
        <Image
          src="/zara-logo-1 1 (2).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[146.48px] h-[26.65px] w-[63.81px]  md:left-[357.48px] xxl:left-[357.48px] xl:left-[290px] left-[166.74px] top-[40px] md:top-[50px] lg:left-[230px]"
        />
        <Image
          src="/gucci-logo-1 1 (2).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[25.24px] w-[109.39px]  md:left-[569.48px] xxl:left-[569.48px] xl:left-[480px] left-[264.55px] top-[40px] md:top-[50px] lg:left-[380px]"
        />
        <Image
          src="/prada-logo-1 1 (1).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[21px] w-[127px] left-[50px] top-[90px]  md:left-[831.48px] xxl:left-[851.48px] xl:left-[740px] md:top-[50px] lg:left-[580px]"
        />
        <Image
          src="/Group (6).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] w-[ 134.84px] h-[21.75px] left-[206.16px] top-[90px]  md:left-[1131.48px] xxl:left-[1131.48px] xl:left-[1000px] md:top-[50px] lg:left-[780px]"
        />
      </div>
    </>
  );
};

export default Banner;
