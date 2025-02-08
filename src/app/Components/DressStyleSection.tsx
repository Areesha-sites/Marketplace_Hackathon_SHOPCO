import React from "react";
import Image from "next/image";
const DressStyleSection = () => {
  return (
    <>
    <div className="flex justify-center items-center w-full px-3 md:px-14">
    <section className="w-full bg-bgLightGrayColor xl:h-[746px] h-[1040px] xxl:px-24 md:h-[600px]  md:mt-[1817px] lg:mt-[1900px] xl:top-[2317px] md:left-[100px] xxl:left-[100px] xl:left-[50px] md:rounded-[40px] rounded-[20px] mt-[1523px] xxl:mt-[2000px] left-[18px] lg:left-[16px] lg:h-[720px]">
        <h1 className="lg:text-[48px] text-[32px] leading-[36px] font-extrabold text-black text-center uppercase tracking-wider font-integralCf md:whitespace-nowrap mt-8 ">
          BROWSE BY dress STYLE
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="xl:w-[407px] xl:h-[289px] w-[220px] ml-[14px] sm:w-[320px] h-[190px] mt-[80px] md:mt-[30px] sm:left-[30px] lg:top-[135px] md:left-[64px] xxl:left-[64px] xl:left-[40px] xl:ml-[20px] rounded-[20px] bg-white lg:w-[360px] lg:h-[250px] ">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-satoshiBold text-black relative z-30 top-[25px] md:left-[36px]">
            Casual
          </h1>
          <Image
            src="/image 11.svg"
            alt="dress-style"
            height={649}
            width={973}
            quality={100}
            priority
            className="h-full w-auto object-cover object-right relative md:top-[-53px] top-[-35px] md:left-0 left-[53px] rounded-[20px] lg:left-[10px]"
          />
        </div>
        <div className="xxl:w-[684px] xl:w-[675px] xl:h-[289px] w-[260px] sm:w-[310px] h-[190px] relative xl:top-[30px] top-[30px] left-[18px] lg:left-[-60px] xl:left-[-130px] xxl:left-[-100px] rounded-[20px] bg-white lg:w-[490px] lg:h-[250px]  ">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-satoshiBold text-black relative z-30 top-[25px] md:left-[36px]">
            Formal
          </h1>
          <Image
            src="/image 13.svg"
            className="h-full w-auto object-cover object-right relative md:top-[-53px] top-[-37px] md:left-0 left-[0px] rounded-[20px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
        </div>
       <div className="grid grid-cols-1 md:grid-cols-2">
         <div className="xl:w-[684px] xl:h-[289px] sm:w-[310px] h-[190px] left-[17px] relative top-[60px] xl:top-[33px] xxl:left-[10px] md:left-[14px] rounded-[20px] bg-white xl:left-[30px] w-[260px] lg:w-[520px] lg:h-[250px] lg:top-[50px]">
          <h1 className="md:text-[36px] text-[24px] font-bold text-black font-satoshiBold relative z-30 top-[25px] md:left-[36px] left-[24px]">
            Party
          </h1>
          <Image
            src="/image 12 (2).svg"
            className="h-full w-auto object-cover object-right relative md:top-[-53px] rounded-[20px] top-[-35px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
        <div className="xl:w-[407px] xl:h-[289px] sm:w-[310px] w-[170px] h-[190px] relative top-[90px] md:top-[60px] xl:top-[30px] xxl:left-[170px] rounded-[20px] bg-white left-[20px] md:left-[10px] lg:left-[100px] lg:w-[270px] lg:h-[250px] xl:left-[150px] lg:top-[50px]">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-satoshiBold text-black relative z-30 top-[25px] ">
            Gym
          </h1>
          <Image
            src="/image 14 (1).svg"
            className="h-full w-auto object-cover object-right relative md:top-[-53px] md:left-[53px] top-[-35px]  left-[80px] rounded-[20px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
       </div>
      </section>
    </div>
    </>
  );
};

export default DressStyleSection;
