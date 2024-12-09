import React from "react";
import Image from "next/image";
const DressStyleSection = () => {
  return (
    <>
      <section className="md:w-[1239px] bg-bgLightGrayColor md:h-[810px] w-[358px] h-[1000px]  absolute md:top-[2417px] md:left-[100px] md:rounded-[40px] rounded-[20px] top-[2123px] left-[16px] ">
        <h1 className="md:text-[48px] text-[32px] leading-[36px] w-[246px] md:w-[654px] font-extrabold tracking-tight text-black relative top-[70px] text-center uppercase left-[50px] md:left-[276px]">
          BROWSE BY dress STYLE
        </h1>
        <div className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] relative top-[100px] left-[24px] md:left-[64px] rounded-[20px] bg-white">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold text-black relative font-inter z-30 top-[25px] md:left-[36px]">
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
        <div className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] absolute md:top-[138px] top-[375px] left-[24px] md:left-[491px] rounded-[20px] bg-white">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-inter text-black relative z-30 top-[25px] md:left-[36px]">
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
        <div className="md:w-[684px] md:h-[289px] w-[310px] h-[190px] left-[24px] absolute top-[575px] md:top-[445px] md:left-[64px] rounded-[20px] bg-white  ">
          <h1 className="md:text-[36px] text-[24px] font-bold text-black font-inter relative z-30 top-[25px] md:left-[36px] left-[24px]">
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
        <div className="md:w-[407px] md:h-[289px] w-[310px] h-[190px] absolute top-[780px] md:top-[445px] md:left-[768px] rounded-[20px] bg-white left-[20px]">
          <h1 className="md:text-[36px] text-[24px] left-[24px] font-bold font-inter text-black relative z-30 top-[25px] ">
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
