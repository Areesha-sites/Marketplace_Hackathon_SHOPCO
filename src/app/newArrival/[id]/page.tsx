"use client";
import React from "react";
import { newArrivalCardsData } from "../../../../data/data";
import Image from "next/image";
import ReviewCardList from "@/app/Components/ReviewCardList";
import NewArrivalCardsList from "@/app/Components/NewArrivalCardsList";
import CartContext from "@/app/context/CartContext";
import { useContext } from "react";
interface Props {
  params: {
    id: string;
  };
}
const newArrivalDetails: React.FC<Props> = ({ params }) => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return null;
  }
  const { id } = params;
  const product = newArrivalCardsData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <button
          onClick={() => (window.location.href = "/newArrival")}
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
        <div className="md:w-[1240px] absolute md:top-[134px] md:left-[100px]  border-b-[1px] border-black opacity-10 w-[358px] top-[98px] left-[16px]"></div>
        <Image
          src={product.image}
          alt={product.title}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor h-[290px] w-[358px] top-[150px] left-[14px] "
        />

        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px]  absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] w-[112px] h-[106px] top-[459px] "
        />
        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] w-[112px] h-[106px] top-[459px] left-[139px] "
        />

        <Image
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] w-[111px] h-[106px] top-[459px] left-[263px]  "
        />

        <h1 className="absolute md:top-[216px] md:left-[750px] top-[585px] text-[24px] left-[16px] md:text-[40px] font-bold text-black font-[Integral CF] w-[267px] md:w-[600px]">
          {product.title}
        </h1>

        <div className="md:w-[193px] md:h-[24.71px] absolute md:top-[278px] md:left-[750px] flex gap-[16px] w-[154px] h-[19px] top-[656px] left-[16px]">
          <Image
            src={product.rating}
            alt="rating"
            height={24.71}
            width={139}
            className="md:w-[139px] md:h-[24.71px] w-[105px] h-[18.67px] "
          />
          <span className="w-[139px] h-[24.71px] font-satoshi text-[16px] font-normal text-black">
            {product.ratingReview}
            <span className="text-black opacity-45">/5</span>
          </span>
        </div>

        <div className="md:w-[176px] md:h-[43px] absolute md:top-[317px] md:left-[750px] left-[16px] flex gap-[12px] items-center top-[684px]">
          <span className="font-satoshi md:text-[32px] text-[20px] font-bold text-black">
            ${product.price}
          </span>
          <span className="font-satoshi text-[32px] text-black font-bold opacity-30">
            {product.discount}
          </span>
          <p className="py-[6px] px-[14px] rounded-[62px]  bg-red-100 text-redTextOfferColor justify-center flex items-center h-[34px] w-[72px] bg-opacity-40 text-opacity-100">
            {product.offer}
          </p>
        </div>
        <p className="md:w-[590px] absolute md:top-[380px] md:left-[750px] font-satoshi md:text-[16px] text-[14px] font-normal text-black text-opacity-60 top-[736px] left-[20px]">
          {product.des}
        </p>

        <div className="md:w-[590px] absolute md:top-[442px] md:left-[750px] border-b-[1px] border-black opacity-10  w-[350px] top-[810px] left-[16px]"></div>

        <p className="absolute md:top-[461px] md:left-[750px] left-[16px] font-satoshi text-[16px] font-normal text-black opacity-60 top-[834px]">
          Select Colors
        </p>
        <div className="w-[143px] h-[37px] absolute md:top-[494px] top-[870px] md:left-[750px] left-[16px] flex gap-[16px]">
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
        <div className="md:-[590px] absolute md:top-[549px] md:left-[750px] left-[16px] w-[358px] top-[1036px] border-b-[1px] border-black  opacity-10"></div>
        <p className="absolute md:top-[573px] top-[927px] md:left-[750px] font-satoshi text-[16px] font-normal text-black text-opacity-60 left-[16px]">
          Choose Size
        </p>
        <div className="md:w-[420px] w-[353px] h-[46px] absolute md:top-[607px] top-[955px] md:left-[750px] flex gap-[12px] left-[16px]">
          <button className="md:w-[86px] md:h-[46px] w-[74px] h-[39px] md:py-[12px]  md:px-[24px] py-[10px] px-[24px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 flex justify-center items-center ">
            Small
          </button>
          <button className="md:w-[105px] md:h-[46px] w-[90px] h-[39px]  md:py-[12px] md:px-[24px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 py-[10px] px-[20px] flex justify-center items-center">
            Medium
          </button>
          <button className="md:w-[89px] md:h-[46px] w-[76px] h-[39px] md:py-[12px] md:px-[24px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal bg-black text-white flex justify-center items-center">
            large
          </button>
          <button className="md:w-[104px] md:h-[46px] md:py-[12px] md:px-[24px] w-[80px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 whitespace-nowrap text-center flex justify-center items-center">
            X-Large
          </button>
        </div>
        <div className="md:w-[590px] absolute md:top-[673px] md:left-[750px] top-[] border-b-[1px] border-black  opacity-10"></div>
        <div className="md:w-[170px] w-[110px] h-[52px] absolute md:top-[694px] top-[1060px] md:left-[750px] left-[16px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor">
          <Image
            src="/decrease.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            className="md:h-[24px] md:w-[24px] h-[16px] w-[16px]"
          />
          <span className="text-[16px] font-medium text-black">1</span>
          <Image
            src="/increase.svg"
            alt="decrease-icon"
            height={24}
            width={24}
            className="md:h-[24px] md:w-[24px] h-[16px] w-[16px]"
          />
        </div>
        <button
          className="md:w-[400px] h-[52px] absolute md:top-[694px] md:left-[940px] top-[1060px] left-[16px] md:py-[16px] md:px-[54px] rounded-[62px] bg-black text-white text-[16px] font-medium font-satoshi"
        >
          Add to Cart
        </button>
        <h3 className="absolute top-[826px] md:left-[240px] font-satoshi text-[20px] font-medium text-black/60">
          Product Details
        </h3>
        <h3 className="absolute top-[826px] md:left-[624px] font-satoshi text-[20px] font-medium text-black">
          Rating & Reviews
        </h3>
        <h3 className="absolute top-[826px] md:left-[1110px] font-satoshi text-[20px] font-medium text-black">
          FAQs
        </h3>
        <div className="w-[1240px] absolute top-[864px] left-[100px] border-b-[1px] border-black/10">
          <div className="w-[414px] border-b-[2px] border-black absolute left-[400px] "></div>
        </div>
        <div className="flex items-center">
          <h4 className="absolute top-[896px] left-[100px] text-[24px] font-bold text-black">
            All Reviews
          </h4>
          <span className="absolute top-[905px] md:left-[247px] font-satoshi text-[16px] font-normal text-black/60">
            (451)
          </span>
        </div>
        <div classNamew-="w-[354px] h-[48px]  absolute md:left-[986px] top-[888px] flex justify-between">
          <div className="h-[48px] w-[48px] bg-bgLightGrayColor rounded-full  absolute left-[986px] top-[888px] flex justify-center items-center">
            <Image
              src="/product-detail-review-icon.svg"
              alt="client-review"
              height={24}
              width={24}
              className="w-[24px] h-[24px]"
            />
          </div>
          <div className="w-[120px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1045px] md:top-[888px] flex justify-between items-center bg-bgLightGrayColor">
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
          <div className="w-[166px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1178px] md:top-[888px] flex justify-center items-center bg-black text-white whitespace-nowrap text-[16px] font-medium top-[1206px]">
            Write a Review
          </div>
        </div>
        <ReviewCardList />
        <button className="w-[230px] h-[52px] absolute md:top-[1762px] md:left-[605px] py-[16px] px-[54px] rounded-[62px] border-[1px] border-black/10 text-[16px] font-satoshi font-medium whitespace-nowrap items-center flex justify-center top-[2030.19px]">
          Load More Reviews
        </button>

        <h1 className="md:w-[579px] md:h-[58px] absolute md:top-[1878px] md:left-[431px] font-bold text-black md:text-[48px] text-[32px] left-[16px] font-integralCF  top-[2127px] text-center">
          You might also like
        </h1>
        <div className="absolute md:top-[1991px]">
          <NewArrivalCardsList />
        </div>
      </section>
    </>
  );
};

export default newArrivalDetails;
