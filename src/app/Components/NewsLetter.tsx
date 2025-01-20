// import React from "react";
// import Image from "next/image";

// const NewsLetter = () => {
//   return (
//   <div className="flex justify-center items-center w-full mx-auto">
//       <div
//       data-aos="flip-down"
//       data-aos-delay="300"
//       className="md:w-[1240px] md:h-[180px] xxl:w-[1280px] xl:w-[1100px] h-[293px] top-[1052px] absolute md:left-[100px] xxl:left-[80px] xl:left-[78px] z-20 rounded-[20px] flex justify-between md:flex-row flex-col md:pt-[36px] md:px-[64px] md:pb-[36px] md:pl-[64px] lg:pl-[45px] bg-[#000000] sm:left-[16px] lg:w-[900px] sm:w-[358px] w-[300px] left-0 "
//     >
//       <span className="xl:w-[651px] font-extrabold xl:text-[40px] text-[28px] sm:text-[32px] leading-[35px] xl:leading-[45px] text-white xl:text-left md:static relative top-[32px] pl-4 tracking-wider font-integralCf lg:text-[28px] sm:w-[297px] lg:w-[440px] mx-auto w-[304px]">
//         STAY UPTO DATE ABOUT OUR LATEST OFFERS
//       </span>
//       <div className="sm:w-[349px] w-[280px] md:h-[108px] flex flex-col gap-[14px]  mx-auto">
//         <div className="sm:w-[349px] w-[280px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[12px] bg-[#ffffff] md:static absolute sm:left-[24px] top-[169px] flex items-center">
//           <Image
//             src="/Frame (38).svg"
//             alt="email.img"
//             height={20}
//             width={20}
//             className="w-[24px] h-[24px]"
//           />
//           <input
//             type="text"
//             placeholder="Enter your email address"
//             className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-[#000000] opacity-[40%] border-none outline-none w-[311px]"
//           />
//         </div>

//         <div className="sm:w-[349px] w-[280px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]  bg-[#ffffff] flex justify-center items-center md:static absolute top-[223px] sm:left-[24px]">
//           <span className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-black ">
//             Subscribe to Newsletter
//           </span>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default NewsLetter;

// import React from "react";
// import Image from "next/image";
// const NewsLetter = () => {
//   return (
//     <>
//       <div className="flex justify-center items-center px-[10px] w-full sm:w-full xxs:pl-[18px] xxs:pr-[12px] sm:pl-[25px]">
//         <div className="bg-black w-[300px] h-[293px] rounded-[20px] text-white flex justify-between flex-col items-center sm:w-full ">
//           <span className="xl:w-[651px] font-extrabold xl:text-[40px] text-[28px] sm:text-[32px] leading-[35px] xl:leading-[45px] text-white xl:text-left md:static relative top-[32px] pl-4 tracking-wider font-integralCf lg:text-[28px] sm:w-[340px] lg:w-[440px] mx-auto w-[304px]">
//             STAY UPTO DATE ABOUT OUR LATEST OFFERS
//           </span>
//           <div className="sm:w-[290px] w-[280px] md:h-[108px] flex flex-col justify-center items-center gap-[14px] mx-auto">
//             <div className="sm:w-[290px] w-[280px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[12px] bg-[#ffffff] md:static absolute top-[169px] flex items-center">
//               <Image
//                 src="/Frame (38).svg"
//                 alt="email.img"
//                 height={20}
//                 width={20}
//                 className="w-[24px] h-[24px]"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter your email address"
//                 className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-[#000000] opacity-[40%] border-none outline-none w-[311px]"
//               />
//             </div>

//             <div className="sm:w-[290px] w-[280px] h-[42px] md:h-[48px] rounded-[62px] pt-[12px] pr-[16px] pb-[12px] pl-[16px]  bg-[#ffffff] flex justify-center items-center md:static absolute top-[223px] ">
//               <span className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-black ">
//                 Subscribe to Newsletter{" "}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsLetter;

import React from "react";
import Image from "next/image";
const NewsLetter = () => {
  return (
    <>
      <div className="flex justify-center lg:justify-between items-center w-full mx-auto md:w-[700px] px-3 md:mx-8 lg:w-[950px] lg:mx-[37px] xl:mx-[40px] xxl:mx-[80px]" >
        <div className="h-auto w-full md:w-[700px] lg:w-full flex flex-col md:flex-row justify-center items-center mx-auto bg-black rounded-[20px] text-white py-8 lg:px-[34px] xl:w-[1170px] xxl:w-[1240px]">
          <h1 className="text-white font-integralCf uppercase font-extrabold w-full mx-auto text-[25px] sm:text-[32px] px-5 leading-[35px] tracking-wider lg:w-[551px] xl:w-[900px] xl:text-[40px] xl:leading-[45px] sm:w-full">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="flex flex-col justify-center items-center w-full md:w-[700px] mx-auto px-5 mt-8 gap-y-[10px]">
            <div className="sm:w-full w-[250px] lg:w-[349px] bg-white flex justify-start items-center gap-[7px] px-[16px] py-[14px] rounded-[62px] h-[42px]">
              <Image
                src="/Frame (38).svg"
                alt="email.img"
                height={20}
                width={20}
                className="w-[24px] h-[24px]"
              />
              <input
                type="text"
                placeholder="Enter your email address"
                className=" font-satoshi font-normal md:text-[16px] text-[14px] leading-[21.6px] text-[#000000] opacity-[40%] border-none outline-none "
              />
            </div>
            <div className="sm:w-full w-[250px] lg:w-[349px] bg-white flex items-center gap-[7px] px-[16px] py-[14px] rounded-[62px] h-[42px] justify-center">
              <span className=" font-satoshi text-center font-normal md:text-[16px] text-[14px] leading-[21.6px] text-black ">
                Subscribe to Newsletter{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
