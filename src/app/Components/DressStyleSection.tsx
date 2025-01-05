import React from "react";
import Image from "next/image";
const DressStyleSection = () => {
  return (
    <>
      <section
        data-aos="zoom-in"
        data-aos-delay="100"
        className="md:w-[1239px] xxl:w-[1239px] xl:w-[1180px] bg-bgLightGrayColor md:h-[846px] w-[358px] h-[995px] absolute md:top-[2417px] md:left-[100px] xxl:left-[100px] xl:left-[50px] md:rounded-[40px] rounded-[20px] top-[2123px] left-[18px] "
      >
        <h1
          data-aos="zoom-in"
          data-aos-delay="100"
          className="md:text-[48px] text-[32px] leading-[36px] w-[286px] md:w-[654px] font-extrabold text-black relative top-[40px] text-center uppercase left-[36px] md:left-[276px] md:top-[70px] tracking-wider font-integralCf md:whitespace-nowrap "
        >
          BROWSE BY dress STYLE
        </h1>
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] relative top-[80px] left-[24px] md:top-[135px]  md:left-[64px] xxl:left-[64px] xl:left-[34px] rounded-[20px] bg-white"
        >
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-satoshiBold text-black relative z-30 top-[25px] md:left-[36px]">
            Casual
          </h1>
          <Image
            src="/image 11.svg"
            alt="dress-style"
            height={649}
            width={973}
            className="h-full w-auto object-cover object-right relative md:top-[-53px] top-[-35px] md:left-0 left-[43px]  rounded-[20px]"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] relative md:top-[-155px] top-[100px] left-[24px] md:left-[491px] xxl:left-[491px] xl:left-[461px] rounded-[20px] bg-white "
        >
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-satoshiBold text-black relative z-30 top-[25px] md:left-[36px]">
            Formal
          </h1>
          <Image
            src="/image 13.svg"
            className="h-full w-auto object-cover object-right relative md:top-[-53px] top-[-37px] md:left-0 left-[0px]  rounded-[20px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] left-[24px] relative top-[115px] md:top-[-133px] md:left-[64px] rounded-[20px] bg-white  "
        >
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
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] relative top-[130px] md:top-[-423px]  md:left-[768px] rounded-[20px] bg-white left-[20px]"
        >
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
