"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CasualCardsPropsTypes } from "../../../types/ComponentsTypes";
import { useMediaQuery } from "react-responsive";
const CasualCards = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  ratingReview,
  offer,
  positionStyles,
}: CasualCardsPropsTypes & { isSmallScreen: boolean }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const left = isDesktop
    ? positionStyles?.desktop?.left
    : positionStyles?.mobile?.left;
  const top = isDesktop
    ? positionStyles?.desktop?.top
    : positionStyles?.mobile?.top;
  return (
    <Link href={`/newArrival/${id}`} passHref>
       <div
          className="absolute"
          style={{
            left: left || "0px",
            top: top || "0px",
          }}
        >
        <div className="md:w-[295px] md:h-[298px] w-[172px] h-[174px] rounded-[20px] bg-BannerBgColor">
          <Image
            src={image}
            alt="product-image"
            height={296}
            width={444}
            className="md:w-[444px] md:h-[296px] w-[172px] h-[174px] absolute rounded-[20px]"
            layout="responsive"
          />
          <h1 className="md:absolute md:top-[317px] relative top-[185px]  font-bold md:text-[20px] text-[13px] text-blackBgColor font-inter">
            {title}
          </h1>
          <div className="w-[150px] h-[19px] md:absolute relative top-[185px] md:top-[350px] flex gap-[13px] items-center">
            <Image
              src={rating}
              alt="rating-star"
              height={18.49}
              width={104}
              className="md:h-[18.49px] md:w-[104px] w-[67px] h-[15px]"
            />
            {ratingReview && (
              <p className="md:text-[14px] text-[12px] font-inter text-blackBgColor font-normal whitespace-nowrap">
                {ratingReview}{" "}
                <span className="text-opacity-60 text-black font-inter">/5</span>
              </p>
            )}
          </div>
          <div className="md:w-[200px] h-[32px] flex md:gap-[10px] gap-[5px] relative md:top-[370px] top-[190px]">
            <p className="md:text-[24px] text-[20px] font-bold text-black font-inter">
              ${price}
            </p>
            <p className="md:text-[24px] text-[20px] font-inter font-bold text-black/40 line-through">
              {discount}
            </p>
          </div>
          <div className="md:w-[200px] h-[32px] flex md:gap-[10px] items-center justify-end">
            {offer && (
              <span className="md:w-[58px] md:h-[28px] w-[42px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-10 text-[10px] font-medium text-redTextOfferColor flex justify-center items-center md:relative md:top-[340px] font-inter">
                -{offer}%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CasualCards;
