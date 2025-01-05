"use client";
import React from "react";
import Image from "next/image";
import { TopSellingDetailPagePropsTypes } from "../../../types/ComponentsTypes";
import Link from "next/link";
const TopSellingCard = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  ratingReview,
  offer,
}: TopSellingDetailPagePropsTypes) => {
  return (
    <>
      <Link href={`/topSelling/${id}`} passHref>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-[295px] md:h-[298px] xxl:w-[295px] xxl:h-[298px] xl:w-[275px] xl:h-[298px] h-[180px] w-[180px] rounded-[20px] bg-BannerBgColor "
        >
          <Image
            src={image}
            alt="product-image"
            height={296}
            width={444}
            className="md:w-[444px] md:h-[296px] h-[180px] object-cover w-[180px] rounded-[20px]"
          />
          <h1 className="absolute md:top-[308px] top-[190px] font-satoshiBold font-bold md:text-[20px] text-[14px] text-black">
            {title}
          </h1>
          <div className="w-[150px] h-[19px] absolute md:top-[340px] top-[215px] flex  items-center justify-center gap-[10px]">
            <Image
              src={rating}
              alt="rating-star"
              height={18.49}
              width={104}
              className="h-[18.49px] md:w-[104px] w-[95px]"
            />
            {ratingReview && (
              <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi">
                {ratingReview}{" "}
                <span className="text-opacity-60 text-black">/5</span>
              </p>
            )}
          </div>
          <div className="md:w-[200px] md:h-[32px] absolute md:top-[360px] top-[240px] flex gap-[10px] items-center">
            <span className="md:text-[24px] text-[20px] font-bold text-black font-satoshiBold">
              ${price}
            </span>
            {discount && (
              <span className="md:text-[24px] text-[20px] font-bold  text-black opacity-15 line-through font-satoshiBold">
                {discount}
              </span>
            )}
            {offer && (
              <span className="md:w-[58px] md:h-[28px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20  md:text-[12px] text-[10px] font-medium text-redTextOfferColor flex justify-center items-center w-[42px] h-[20px]  font-satoshi">
                {offer}
              </span>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TopSellingCard;
