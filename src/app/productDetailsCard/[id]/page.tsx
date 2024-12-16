"use client";
import React from "react";
import { productDetailsCardData } from "../../../../data/data";
import Image from "next/image";
import ReviewCardList from "@/app/Components/ReviewCardList";
import ProductDetailsCardList from "@/app/Components/ProductDetailsCardList";
import CartContext from "@/app/context/CartContext";
import { useContext } from "react";
import Footer from "@/app/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
interface Props {
  params: {
    id: string;
  };
}
const NewArrivalDetails: React.FC<Props> = ({ params }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  const cartContext = useContext(CartContext);
  if (!cartContext) {
    return null;
  }
  const { id } = params;
  const product = productDetailsCardData.find((item: any) => item.id === id);
  if (!product) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }
  return (
    <>
      <section className="">
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="w-[259px] h-[22px] absolute md:top-[158px] md:left-[100px] left-[16px] top-[120px] flex gap-[12px]"
        >
          <div className="w-[63px] flex gap-[4px] items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi font-normal text-black/60">
              Home
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi  font-normal text-black/60">
              Shop
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi  font-normal text-black/60">
              Men
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
          <div className="w-[63px] flex gap-[4px]  items-center">
            <p className="md:text-[16px] text-[14px] font-satoshi  font-normal text-black whitespace-nowrap">
              T-Shirts
            </p>
            <Image
              src="/Frame (8).svg"
              alt="chevron"
              height={16}
              width={16}
              className="md:w-[16px] md:h-[16px] w-[14px] h-[14px]"
            />
          </div>
        </div>
        <div className="md:w-[1240px] absolute md:top-[134px] md:left-[100px]  border-b-[1px] border-black opacity-10 w-[358px] top-[98px] left-[16px]"></div>
        <Image
          data-aos="zoom-in-down"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={530}
          width={444}
          className="md:w-[444px] md:h-[530px] absolute md:top-[216px] md:left-[266px] rounded-[20px] bg-productDetailBbImageColor h-[290px] w-[358px] top-[170px] left-[18px] "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="200"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px]  absolute md:top-[216px] md:left-[100px] rounded-[20px] border-[1px] border-black left-[16px] w-[112px] h-[106px] top-[475px] "
        />
        <Image
          data-aos="flip-up"
          data-aos-delay="300"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[397px] md:left-[100px] rounded-[20px] w-[112px] h-[106px] top-[475px] left-[139px] "
        />

        <Image
          data-aos="flip-up"
          data-aos-delay="400"
          src={product.image}
          alt={product.title}
          height={167}
          width={152}
          className="md:h-[167px] md:w-[152px] absolute md:top-[579px] md:left-[100px] rounded-[20px] w-[111px] h-[106px] top-[475px] left-[263px]  "
        />

        <h1
          data-aos="fade-left"
          data-aos-delay="100"
          className="absolute md:top-[216px] md:left-[750px] top-[600px] text-[24px] left-[16px] md:text-[40px] text-black font-black w-[267px] md:w-[600px] leading-[28px] tracking-wider font-integralCf whitespace-nowrap"
        >
          {product.title}
        </h1>

        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[193px] md:h-[24.71px] absolute md:top-[278px] md:left-[750px] flex gap-[16px] w-[154px] h-[19px] top-[666px] left-[16px] items-center"
        >
          <Image
            data-aos="fade-left"
            data-aos-delay="200"
            src={product.rating}
            alt="rating"
            height={24.71}
            width={139}
            className="md:w-[139px] md:h-[24.71px] w-[105px] h-[18.67px] "
          />
          <span
            data-aos="fade-left"
            data-aos-delay="200"
            className="w-[139px] h-[24.71px] font-satoshi text-[16px] font-normal text-black"
          >
            {product.ratingReview}
            <span className="text-black opacity-45">/5</span>
          </span>
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="300"
          className="md:w-[176px] md:h-[43px] absolute md:top-[317px] md:left-[750px] left-[16px] flex gap-[12px] items-center top-[694px]"
        >
          <span className="font-satoshiBold md:text-[32px] text-[20px] font-bold text-black">
            ${product.price}
          </span>
          <span className="font-satoshi md:text-[32px] text-[20px]  text-black font-bold opacity-30">
            {product.discount}
          </span>
          {product.offer && (
            <p className="py-[6px] px-[14px] rounded-[62px] bg-red-100 text-redTextOfferColor justify-center flex items-center md:h-[34px] text-[14px] md:w-[72px] w-[62px] h-[31px] bg-opacity-40 text-opacity-100 font-satoshi">
              {product.offer}
            </p>
          )}
        </div>
        <p
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] absolute md:top-[380px] md:left-[750px] md:text-[16px] text-[12px] font-normal text-black text-opacity-60 top-[736px] left-[20px] w-[358px] font-satoshi"
        >
          {product.des}
        </p>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="md:w-[590px] absolute md:top-[442px] md:left-[750px] border-b-[1px] border-black/10 w-[358px] top-[810px] left-[16px]"
        ></div>

        <p
          data-aos="fade-right"
          data-aos-delay="200"
          className="absolute md:top-[461px] md:left-[750px] left-[16px] font-satoshi text-[16px] font-normal text-black/60 top-[834px]"
        >
          Select Colors
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="200"
          className="w-[143px] h-[37px] absolute md:top-[494px] top-[870px] md:left-[750px] left-[16px] flex gap-[16px]"
        >
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
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          className="md:w-[590px] absolute md:top-[549px] md:left-[750px] left-[16px] w-[358px] top-[923px] border-b-[1px] border-black/10"
        ></div>
        <p
          data-aos="fade-right"
          data-aos-delay="400"
          className="absolute md:top-[573px] top-[947px] md:left-[750px] font-satoshi  text-[16px] font-normal text-black text-opacity-60 left-[16px]"
        >
          Choose Size
        </p>
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="md:w-[420px] w-[353px] h-[46px] absolute md:top-[607px] top-[990px] md:left-[750px] flex gap-[12px] left-[16px]"
        >
          <button className="md:w-[86px] md:h-[46px] w-[74px] h-[39px] md:py-[12px]  md:px-[24px] py-[10px] px-[24px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 flex justify-center items-center font-satoshi  ">
            Small
          </button>
          <button className="md:w-[105px] md:h-[46px] w-[90px] h-[39px]  md:py-[12px] md:px-[24px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 py-[10px] px-[20px] flex justify-center items-center font-satoshi ">
            Medium
          </button>
          <button className="md:w-[89px] md:h-[46px] w-[76px] h-[39px] md:py-[12px] md:px-[24px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor text-[15px] font-normal bg-black text-white flex justify-center items-center font-satoshi ">
            large
          </button>
          <button className="md:w-[104px] md:h-[46px] md:py-[12px] md:px-[24px] w-[80px] h-[39px] py-[10px] px-[20px] rounded-[62px] bg-bgLightGrayColor md:text-[15px] text-[14px] font-normal text-black/60 whitespace-nowrap text-center flex justify-center items-center font-satoshi ">
            X-Large
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="md:w-[590px] w-[353px]  absolute md:top-[673px] md:left-[750px] top-[1056px] left-[16px] border-b-[1px] border-black/10"
        ></div>
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[170px] w-[110px] md:h-[52px] h-[44px] absolute md:top-[694px] top-[1080px] md:left-[750px] left-[16px] py-[16px] px-[20px] rounded-[62px] flex justify-between bg-bgLightGrayColor items-center"
        >
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
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[400px] md:h-[52px] h-[44px] absolute md:top-[694px] md:left-[940px] top-[1080px] py-[16px] px-[54px] rounded-[62px] bg-black text-white text-[14px] md:text-[16px] font-medium items-center font-satoshi flex justify-center w-[236px] left-[138px] "
        >
          Add to Cart
        </button>
        <h3
          data-aos="zoom-in-down"
          data-aos-delay="300"
          className="absolute md:top-[826px] md:left-[240px] font-satoshi md:text-[20px] font-medium text-black/60 left-[16px] top-[1170px] text-[16px]"
        >
          Product Details
        </h3>
        <h3
          data-aos="zoom-in-down"
          data-aos-delay="300"
          className="absolute md:top-[826px] md:left-[624px] font-satoshi md:text-[20px] font-medium text-black left-[168px] top-[1170px] text-[16px] "
        >
          Rating & Reviews
        </h3>
        <h3
          data-aos="zoom-in-down"
          data-aos-delay="300"
          className="absolute md:top-[826px] md:left-[1110px] top-[1170px] font-satoshi md:text-[20px] font-medium text-black/60 left-[336px] text-[16px] "
        >
          FAQs
        </h3>
        <div
          data-aos="zoom-in-down"
          data-aos-delay="300"
          className="md:w-[1240px] absolute md:top-[864px] md:left-[100px] border-b-[1px] border-black/10 w-[358px] left-[16px] top-[1210px]"
        >
          <div
            data-aos="zoom-in-down"
            data-aos-delay="300"
            className="md:w-[414px] border-b-[2px] border-black w-[123px] left-[168px] top-[0px] absolute md:left-[400px] "
          ></div>
        </div>
        <div className="flex items-center">
          <h4
            data-aos="fade-up-right"
            data-aos-delay="300"
            className="absolute md:top-[896px] md:left-[100px] left-[16px] text-[20px] top-[1245px] md:text-[24px] font-bold text-black  font-satoshiBold"
          >
            All Reviews
          </h4>
          <span
            data-aos="fade-up-right"
            data-aos-delay="300"
            className="absolute md:top-[905px] md:left-[240px] font-satoshi md:text-[16px] font-normal text-black/60 text-[14px] top-[1252px] left-[140px] "
          >
            (451)
          </span>
        </div>
        <div classNamew-="md:w-[354px] h-[48px]  absolute md:left-[986px] md:top-[888px] flex justify-between top-[1280px] ">
          <div
            data-aos="fade-up-left"
            data-aos-delay="300"
            className="md:h-[48px] md:w-[48px] w-[40px] h-[40px]  left-[213px] bg-bgLightGrayColor rounded-full  absolute md:left-[986px] md:top-[888px] flex justify-center items-center top-[1245px]"
          >
            <Image
              src="/product-detail-review-icon.svg"
              alt="client-review"
              height={24}
              width={24}
              className="w-[24px] h-[24px]"
            />
          </div>

          <div
            data-aos="fade-up-left"
            data-aos-delay="300"
            className="w-[120px] h-[48px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1045px] md:top-[888px] md:flex justify-between items-center bg-bgLightGrayColor hidden"
          >
            <p className="text-[16px] font-medium font-satoshi text-black ">
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
          <div
            data-aos="fade-up-left"
            data-aos-delay="300"
            className="md:w-[166px] w-[113px] md:h-[48px] h-[40px] py-[16px] px-[20px] rounded-[62px] absolute md:left-[1178px] md:top-[888px] flex justify-center items-center bg-black text-white whitespace-nowrap text-[12px] md:text-[16px] font-medium top-[1245px] left-[261px]  font-satoshi"
          >
            Write a Review
          </div>
        </div>
        <div className="absolute md:top-[980px] md:left-[100px] top-[1310px] left-[16px]">
          <ReviewCardList />
        </div>
        <button
          data-aos="zoom-in"
          data-aos-delay="200"
          className="md:w-[230px] w-[195px] h-[47px] left-[98px] md:h-[52px] absolute md:top-[1772px] md:left-[605px] py-[14px] md:py-[16px] px-[36px] md:px-[54px] rounded-[62px] border-[1px] border-black/10 md:text-[16px] text-[14px] font-satoshi font-medium whitespace-nowrap items-center flex justify-center top-[2100.19px]  "
        >
          Load More Reviews
        </button>
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="md:w-[579px] md:h-[58px] absolute md:top-[1878px] md:left-[431px] font-black text-black md:text-[48px] text-[32px] left-[89px] w-[200px] leading-[36px] mx-auto top-[2200px] text-center uppercase "
        >
          You might also like
        </h1>
        <div className="absolute md:top-[1991px] top-[2300px] md:left-[100px] left-[16px]">
          <ProductDetailsCardList />
        </div>
      </section>
      <div className="absolute md:top-[2572px] top-[2800px]">
        <Footer />
      </div>
    </>
  );
};

export default NewArrivalDetails;
