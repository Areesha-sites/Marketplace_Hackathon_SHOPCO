"use client";
import React from "react";
import { topSellingCardsData } from "../../../../data/data";
import Image from "next/image";
import TopSellingCardList from "@/app/Components/TopSellingCardsList";
import ReviewCardList from "@/app/Components/ReviewCardList";
interface Props {
  params: {
    id: string;
  };
}
const topSellingDetails: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const product = topSellingCardsData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <button
          onClick={() => (window.location.href = "/topSelling")}
          className="mt-4 px-4 py-2 bg-redBackgroundColor text-whiteText rounded"
        >
          Back to Sales
        </button>
      </div>
    );
  }
  return (
    <>
      <section className="">
        <div className="w-[1240px] absolute top-[134px] left-[100px] border-b-[1px] border-black opacity-10"></div>
        <Image
          src={product.image}
          alt={product.title}
          height={530}
          width={444}
          className="w-[444px] h-[530px] absolute top-[216px] left-[266px] rounded-[20px] bg-productDetailBbImageColor"
        />
        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="h-[167px] w-[152px] absolute top-[216px] left-[100px] rounded-[20px] border-[1px] border-black"
        />
        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="h-[167px] w-[152px] absolute top-[397px] left-[100px] rounded-[20px] "
        />
        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="h-[167px] w-[152px] absolute top-[579px] left-[100px] rounded-[20px] "
        />
        <h1 className="absolute top-[216px] left-[750px] text-[40px] font-bold text-black font-[Integral CF]">
          {product.title}
        </h1>
        <div className="w-[193px] h-[24.71px] absolute top-[278px] left-[750px] flex gap-[16px]">
          <Image
            src={product.rating}
            alt="rating"
            height={24.71}
            width={139}
            className="w-[139px] h-[24.71px] "
          />
          <span className="w-[139px] h-[24.71px] font-satoshi text-[16px] font-normal text-black">
            {product.ratingReview}
            <span className="text-black opacity-45">/5</span>
          </span>
        </div>
        <div className="w-[176px] h-[43px] absolute top-[317px] left-[750px] flex gap-[12px] items-center">
          <span className="font-satoshi text-[32px] font-bold text-black">
            ${product.price}
          </span>
          <span className="font-satoshi text-[32px] text-black font-bold opacity-30">
            {product.discount}
          </span>
          <p className="py-[6px] px-[14px] rounded-[62px]  bg-red-300 text-red-500  justify-center flex items-center h-[34px] w-[72px] bg-opacity-40 text-opacity-100">
            {product.offer}
          </p>
        </div>
        <p className="w-[590px] absolute top-[380px] left-[750px] font-satoshi text-[16px] font-normal text-black text-opacity-60 ">
          {product.des}
        </p>
        <div className="w-[590px] absolute top-[442px] left-[750px] border-b-[1px] border-black opacity-10"></div>
        <p className="absolute top-[461px] left-[750px] font-satoshi text-[16px] font-normal text-black opacity-60">
          Select Colors
        </p>
        <div className="w-[143px] h-[37px] absolute top-[494px] left-[750px] flex gap-[16px]">
          <div className="h-[37px] w-[37px] bg-productDetailBgCircle1 rounded-full flex justify-center items-center">
            <Image
              src="/check-icon.svg"
              alt="check-icon"
              height={16}
              width={16}
              className="h-[16px] w-[14px] "
            />
          </div>
          <div className="h-[37px] w-[37px] bg-productDetailBgCircle2 rounded-full"></div>
          <div className="h-[37px] w-[37px] bg-productDetailBgCircle3 rounded-full"></div>
        </div>
        <div className="w-[590px] absolute top-[549px] left-[750px] border-b-[1px] border-black  opacity-10"></div>
        <p className="absolute top-[573px] left-[750px] font-satoshi text-[16px] font-normal text-black text-opacity-60">
          Choose Size
        </p>
        <div className="w-[420px] h-[46px] absolute top-[607px] left-[750px] flex gap-[12px]">
          <button className="w-[86px] h-[46px] py-[12px] px-[24px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal text-black/60 ">
            Small
          </button>
          <button className="w-[105px] h-[46px] py-[12px] px-[24px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal text-black/60 ">
            Medium
          </button>
          <button className="w-[89px] h-[46px] py-[12px] px-[24px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal bg-black text-white ">
            large
          </button>
          <button className="w-[104px] h-[46px] py-[12px] px-[24px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal text-black/60 whitespace-nowrap text-center ">
            X-Large
          </button>
        </div>
        <div className="w-[590px] absolute top-[673px] left-[750px] border-b-[1px] border-black  opacity-10"></div>
        <div className="w-[170px] h-[52px] absolute top-[694px] left-[750px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor">
          <Image
            src="/decrease.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <span className="text-[16px] font-medium text-black">1</span>
          <Image
            src="/increase.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
        </div>
        <button className="w-[400px] h-[52px] absolute top-[694px] left-[940px] py-[16px] px-[54px] rounded-[62px] bg-black text-white text-[16px] font-medium font-satoshi">
          Add to Cart
        </button>
        <h3 className="absolute top-[826px] left-[240px] font-satoshi text-[20px] font-medium text-black/60">
          Product Details
        </h3>
        <h3 className="absolute top-[826px] left-[624px] font-satoshi text-[20px] font-medium text-black">
          Rating & Reviews
        </h3>
        <h3 className="absolute top-[826px] left-[1110px] font-satoshi text-[20px] font-medium text-black">
          FAQs
        </h3>
        <div className="w-[1240px] absolute top-[864px] left-[100px] border-b-[1px] border-black/10">
          <div className="w-[414px] border-b-[2px] border-black absolute left-[400px] "></div>
        </div>
        <div className="flex items-center">
          <h4 className="absolute top-[896px] left-[100px] text-[24px] font-bold text-black">
            All Reviews
          </h4>
          <span className="absolute top-[905px] left-[247px] font-satoshi text-[16px] font-normal text-black/60">
            (451)
          </span>
        </div>
        <div classNamew-="w-[354px] h-[48px]  absolute left-[986px] top-[888px] flex justify-between">
          <div className="h-[48px] w-[48px] bg-bgLightGrayColor rounded-full  absolute left-[986px] top-[888px] flex justify-center items-center">
            <Image
              src="/product-detail-review-icon.svg"
              alt="client-review"
              height={24}
              width={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[120px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute left-[1045px] top-[888px] flex justify-between items-center bg-bgLightGrayColor">
            <p className="text-[16px] font-medium font-satoshi text-black">
              Latest
            </p>
            <Image
              src="/dropdown (3).svg"
              alt="dropdown"
              height={16}
              width={16}
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="w-[166px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute left-[1178px] top-[888px] flex justify-center items-center bg-black text-white whitespace-nowrap text-[16px] font-medium ">
            Write a Review
          </div>
        </div>
       
       <ReviewCardList/>
       
        <button className="w-[230px] h-[52px] absolute top-[1762px] left-[605px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-[16px] font-satoshi font-medium whitespace-nowrap items-center flex justify-center">
          Load More Reviews
        </button>

        <h1 className="w-[579px] h-[58px] absolute top-[1878px] left-[431px] font-bold text-black text-[48px] font-integralCF text-center">
          You might also like
        </h1>
        <div className="absolute top-[1991px]">
          <TopSellingCardList/>
        </div>
      </section>
    </>
  );
};

export default topSellingDetails;
