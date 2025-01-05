import React from "react";
import Image from "next/image";
const Banner = () => {
  return (
    <>
      <section
        data-aos="zoom-up"
        data-aos-delay="200"
        className="md:w-[1440px] xxl:w-[1440px] xl:w-full h-[663px] absolute md:top-[134px] top-[98px] bg-BannerBgColor w-[390px] mx-auto lg:w-full"
      >
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="300"
          src="/Vector (2).svg"
          alt="star"
          height={56}
          width={56}
          className="md:w-[56px] md:h-[56px] absolute md:left-[785px] xxl:left-[785px] md:top-[300px] xxl:top-[300px] xl:left-[685px] z-20 w-[44px] h-[44px] top-[620px] left-[27px] star-rotate xl:top-[300px]"
        />
        <h1
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:w-[577px] md:h-[173px] absolute md:top-[80px] md:left-[100px] xxl:left-[100px] xl:left-[70px] md:text-[64px] xl:text-[54px] xl:leading-[54px] text-[36px] md:leading-[64px] leading-[34px] text-blackBgColor z-20 w-[370px] h-[93px] top-[40px] left-[16px] font-bold tracking-wider font-integralCf "
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p
          data-aos="fade-right"
          data-aos-delay="300"
          className="absolute md:top-[290px] xl:top-[270px] md:left-[100px] xxl:left-[100px] xl:left-[70px] md:text-[16px] font-normal text-black/60 text-opacity-60 md:leading-[22px] z-20 w-[358px] h-[50px] top-[160px] left-[16px] text-[14px] leading-[20px] md:w-[560px] font-satoshi"
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          data-aos="fade-right"
          data-aos-delay="300"
          className="md:w-[210px] h-[52px] absolute md:top-[355px] xxl:left-[100px] xl:top-[335px] md:left-[100px] xl:left-[70px] md:py-[16px] md:px-[54px] rounded-[62px] bg-black text-[16px] font-medium text-white flex items-center justify-center z-20 w-[358px] left-[16px] top-[238px] font-satoshi"
        >
          Shop Now
        </button>
        <div className="w-[278px] h-[52px] absolute top-[310px] left-[56px] flex justify-between md:hidden">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="w-[106px] h-[48px] flex flex-col"
          >
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              200+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              International Brands
            </p>
          </div>
          <span className="border-b-[1px] border-black/10 w-[52px] rotate-90 relative left-[27px] "></span>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-[106px] h-[48px] flex flex-col"
          >
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              2,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              High-Quality Products
            </p>
          </div>
        </div>
        <div className="w-[103px] h-[48px] absolute top-[390px] left-[144px] md:hidden">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className=" flex flex-col"
          >
            <h2 className="text-[24px] font-bold font-satoshiBold text-blackBgColor">
              30,000+
            </h2>
            <p className="font-satoshi text-[12px] font-normal text-black text-opacity-60 whitespace-nowrap">
              Happy Customers
            </p>
          </div>
        </div>
        <Image
          data-aos="fade-left"
          data-aos-delay="100"
          src="/Rectangle 2 (2).svg"
          alt="main-image"
          height={390}
          width={448}
          className="relative w-[390px] h-[448px] top-[450px] object-cover md:hidden"
        />
        <Image
          data-aos="fade-left"
          data-aos-delay="100"
          src="/Rectangle 2 (3).svg"
          alt="main-image"
          height={663}
          width={1440}
          className="h-[663px] w-[1440px] md:block hidden"
        />
        <Image
          data-aos="zoom-in-up"
          data-aos-delay="300"
          src="/Vector (3).svg"
          alt="star"
          height={104}
          width={104}
          className="md:w-[104px] md:h-[104px] w-[76px] h-[76px] absolute md:left-[1250px] xxl:left-[1250px] xxl:top-[85px] xl:left-[1100px] md:top-[85px] z-20 top-[490px] left-[293px] star-rotate xl:top-[85px]"
        />
      </section>
      <div
        data-aos="zoom-in"
        data-aos-delay="100"
        className="md:w-[1440px] xxl:w-[1440px] xl:w-full w-[390px] h-[146px] md:h-[122px] xxl:h-[122px] md:top-[797px] xxl:top-[797px] xl:top-[760px] absolute bg-black top-[951px] md:flex md:justify-between md:items-center "
      >
      <Image
          data-aos="fade-right"
          data-aos-delay="200"
          src="/Group (5).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] h-[23.25px] md:w-[166.48px] w-[116.74px] absolute md:left-[100px] xxl:left-[100px] xl:left-[80px] md:top-[50px] left-[16px] top-[40px]"
        />
        <Image
          data-aos="fade-right"
          data-aos-delay="300"
          src="/zara-logo-1 1 (2).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[146.48px] h-[26.65px] w-[63.81px] absolute md:left-[357.48px] xxl:left-[357.48px] xl:left-[290px] left-[166.74px] top-[40px] md:top-[50px]"
        />
        <Image
          data-aos="fade-right"
          data-aos-delay="400"
          src="/gucci-logo-1 1 (2).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[25.24px] w-[109.39px] absolute md:left-[569.48px] xxl:left-[569.48px] xl:left-[480px] left-[264.55px] top-[40px] md:top-[50px]"
        />
         <Image
          data-aos="fade-right"
          data-aos-delay="500"
          src="/prada-logo-1 1 (1).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] h-[21px] w-[127px] left-[50px] top-[90px] absolute md:left-[831.48px] xxl:left-[851.48px] xl:left-[740px] md:top-[50px] "
        />
         <Image
          data-aos="fade-right"
          data-aos-delay="600"
          src="/Group (6).svg"
          alt="brand-logo"
          height={33.16}
          width={166.48}
          className="md:h-[33.16px] md:w-[166.48px] w-[ 134.84px] h-[21.75px] left-[206.16px] top-[90px] absolute md:left-[1131.48px] xxl:left-[1131.48px] xl:left-[1000px] md:top-[50px]"
        />
      </div>
    </>
  );
};

export default Banner;
