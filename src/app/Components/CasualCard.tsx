"use client";
import React from "react";
import Image from "next/image";
import { CasualCardsPropsTypes } from "../../../types/ComponentsTypes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
const NewArrivalCard = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  ratingReview,
  offer,
}: CasualCardsPropsTypes) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <>
      <Link href={`/casualDetails/${id}`} passHref>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:h-[420px]"
        >
          <div className="md:w-[295px] md:h-[298px] w-[180px] h-[190px] rounded-[20px] bg-bannerBg relative ">
            <Image
              src={image}
              alt="product-image"
              height={296}
              width={444}
              className="md:w-[444px] md:h-[296px] w-[180px] h-[190px] object-cover rounded-[20px]"
            />
            <div
              data-aos="flip-left"
              data-aos-delay="300"
              className="flex flex-col h-[200px] justify-between absolute top-[210px]"
            >
              <h1 className="absolute  top-[-10px] md:top-[100px]  left-[9px] font-satoshiBold font-semibold md:text-[20px] text-black text-[12px] whitespace-nowrap">
                {title}
              </h1>
              <div className="md:w-[150px] w-[117px] h-[19px] md:top-[135px] absolute top-[10px] left-[9px] flex gap-[11px] items-center md:gap-[13px] justify-start">
                <Image
                  src={rating}
                  alt="rating-star"
                  height={18.49}
                  width={104}
                  className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
                />
                {ratingReview && (
                  <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi ">
                    {ratingReview}{" "}
                    <span className="text-opacity-60 text-black">/5</span>
                  </p>
                )}
              </div>
              <div className="md:w-[200px] h-[32px] absolute  top-[30px] left-[9px] flex gap-[10px] items-center md:top-[155px]">
                <span className="md:text-[24px] text-[20px] font-bold text-black font-satoshiBold">
                  ${price}
                </span>
                {discount && (
                  <span className="md:text-[24px] text-[20px]  font-bold font-satoshiBold  text-black opacity-15 line-through">
                    {discount}
                  </span>
                )}
                {offer && (
                  <span className="md:w-[58px] w-[42px] md:h-[28px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 text-[10px] md:text-[12px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
                    -{offer}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewArrivalCard;
