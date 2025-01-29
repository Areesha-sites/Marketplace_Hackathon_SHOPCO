import React from "react";
import Image from "next/image";
const DressStyleSection = () => {
  return (
    <>
      <section className="md:w-[1239px] xxl:w-[1239px] xl:w-[1180px] bg-bgLightGrayColor xl:h-[846px] w-[358px] h-[995px] absolute md:top-[2417px] xl:top-[2317px] md:left-[100px] xxl:left-[100px] xl:left-[50px] md:rounded-[40px] rounded-[20px] top-[2123px] left-[18px] lg:left-[16px] lg:w-[990px] lg:h-[720px]">
        <h1 className="lg:text-[48px] text-[32px] leading-[36px] w-[286px] md:w-[654px] font-extrabold text-black relative top-[40px] text-center uppercase left-[36px] xl:left-[276px] lg:top-[70px] tracking-wider font-integralCf md:whitespace-nowrap lg:left-[150px]">
          BROWSE BY dress STYLE
        </h1>
        <div className="xl:w-[407px] xl:h-[289px] w-[310px] h-[190px] relative top-[80px] left-[24px] lg:top-[135px] md:left-[64px] xxl:left-[64px] xl:left-[30px] rounded-[20px] bg-white lg:w-[360px] lg:h-[250px] ">
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
            className="h-full w-auto object-cover object-right relative md:top-[-53px] top-[-35px] md:left-0 left-[43px] rounded-[20px] lg:left-[10px]"
          />
        </div>
        <div className="xxl:w-[684px] xl:w-[675px] xl:h-[289px] w-[310px] h-[190px] relative xl:top-[-155px] top-[100px] left-[24px] md:left-[491px] xxl:left-[491px] xl:left-[468px] rounded-[20px] bg-white lg:w-[490px] lg:h-[250px] lg:left-[440px] lg:top-[-115px] ">
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
        <div className="xl:w-[684px] xl:h-[289px] w-[310px] h-[190px] left-[24px] relative top-[115px] xl:top-[-133px] xxl:left-[64px] md:left-[64px] rounded-[20px] bg-white xl:left-[30px] lg:w-[520px] lg:h-[250px] lg:top-[-100px]">
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
        <div className="xl:w-[407px] xl:h-[289px] w-[310px] h-[190px] relative top-[130px] xl:top-[-423px] md:left-[768px] xxl:left-[768px] rounded-[20px] bg-white left-[20px] xl:left-[740px] lg:w-[270px] lg:left-[600px] lg:h-[250px] lg:top-[-350px]">
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
      </section>
    </>
  );
};

export default DressStyleSection;
