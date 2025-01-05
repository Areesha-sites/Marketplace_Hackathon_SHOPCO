"use client";
import React from "react";
import Image from "next/image";
import { NewArrivalCardsPropsTypes } from "../../../types/ComponentsTypes";
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
}: NewArrivalCardsPropsTypes) => {
  return (
    <>
      <Link href={`/newArrival/${id}`} passHref>
        <div className="h-[270px]">
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="md:w-[295px] md:h-[298px] xxl:w-[295px] xxl:h-[298px] xl:w-[275px] xl:h-[298px] w-[180px] h-[200px] rounded-[20px] bg-bannerBg "
          >
            <Image
              src={image}
              alt="product-image"
              height={296}
              width={444}
              className="md:w-[444px] md:h-[296px] w-[180px] h-[190px] object-cover rounded-[20px]"
            />
            <div className="flex flex-col h-[200px] justify-between absolute top-[210px]">
              <h1 className="absolute top-[-8px] left-[10px] md:top-[100px] font-black md:text-[20px] text-black text-[14px] whitespace-nowrap  font-satoshiBold  ">
                {title}
              </h1>
              <div className="md:w-[150px] w-[117px] h-[19px] md:top-[135px] left-[10px] absolute top-[11px] flex gap-[13px] items-start justify-start">
                <Image
                  src={rating}
                  alt="rating-star"
                  height={18.49}
                  width={104}
                  className="h-[18.49px] md:w-[104px] w-[75px]"
                />
                {ratingReview && (
                  <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi">
                    {ratingReview}{" "}
                    <span className="text-opacity-60 text-black">/5</span>
                  </p>
                )}
              </div>
              <div className="md:w-[200px] h-[32px] absolute  top-[30px] flex gap-[10px] items-center md:top-[155px] left-[10px] ">
                <span className="md:text-[24px] text-[20px] font-black text-black  font-satoshiBold ">
                  ${price}
                </span>
                {discount && (
                  <span className="md:text-[24px] text-[20px]  font-black text-black font-satoshiBold opacity-15 line-through">
                    {discount}
                  </span>
                )}
                {offer && (
                  <span className="md:w-[58px] w-[42px] md:h-[28px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 text-[10px] md:text-[12px] font-medium text-redTextOfferColor font-satoshi flex justify-center items-center">
                    {offer}
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
