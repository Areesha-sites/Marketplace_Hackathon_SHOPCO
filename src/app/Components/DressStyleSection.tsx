import React from "react";
import Image from "next/image";
const DressStyleSection = () => {
  return (
    <>
      <section className="w-[1239px] bg-bgLightGrayColor h-[866px] absolute top-[2417px] left-[100px] rounded-[40px]">
        <h1 className="text-[48px] font-bold text-black relative top-[70px] text-center uppercase">
          BROWSE BY dress STYLE
        </h1>
        <div className="w-[407px] h-[289px] relative top-[120px] left-[64px] rounded-[20px] bg-white">
          <h1 className="text-[36px] font-bold text-black relative z-30 top-[25px] left-[36px]">
            Casual
          </h1>
          <Image
            src="/image 11.svg"
            alt="dress-style"
            height={649}
            width={973}
            className="h-full w-auto object-cover object-right relative top-[-53px]  rounded-[20px]"
          />
        </div>
        <div className="w-[684px] h-[289px] absolute top-[192px] left-[491px] rounded-[20px] bg-white">
          <h1 className="text-[36px] font-bold text-black relative z-30 top-[25px] left-[36px]">
            Formal
          </h1>
          <Image
            src="/image 13.svg"
            className="h-full w-auto object-cover object-right relative top-[-53px]  rounded-[20px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
        <div className="w-[684px] h-[289px] absolute top-[501px] left-[64px] rounded-[20px] bg-white">
          <h1 className="text-[36px] font-bold text-black relative z-30 top-[25px] left-[36px]">
          Party
          </h1>
          <Image
            src="/image 12 (2).svg"
            className="h-full w-auto object-cover object-right relative top-[-53px]  rounded-[20px]"
            alt="dress-style"
            height={649}
            width={973}
          />
        </div>
        <div className="w-[407px] h-[289px] absolute top-[501px] left-[768px] rounded-[20px] bg-white">
          <h1 className="text-[36px] font-bold text-black relative z-30 top-[25px] left-[36px]">
          Party
          </h1>
          <Image
            src="/image 14 (1).svg"
            className="h-full w-auto object-cover object-right relative top-[-53px] left-[53px]  rounded-[20px]"
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
