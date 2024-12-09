"use client";
import React from "react";
import Image from "next/image";
import { NewArrivalCardsPropsTypes } from "../../../types/ComponentsTypes";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
const NewArrivalCard = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  ratingReview,
  offer,
  positionStyles,
}: NewArrivalCardsPropsTypes) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const left = isDesktop
    ? positionStyles?.desktop?.left
    : positionStyles?.mobile?.left;
  const top = isDesktop
    ? positionStyles?.desktop?.top
    : positionStyles?.mobile?.top;
  return (
    <>
      <Link href={`/newArrival/${id}`} passHref>
        <div
          className="absolute"
          style={{
            left: left || "0px",
            top: top || "0px",
          }}
        >
          <div
            className="md:w-[295px] md:h-[298px] w-[180px] h-[190px] rounded-[20px] bg-BannerBgColor "
            style={{ position: "absolute", ...positionStyles }}
          >
            <Image
              src={image}
              alt="product-image"
              height={296}
              width={444}
              className="md:w-[444px] md:h-[296px] w-[180px] h-[190px] absolute rounded-[20px]"
            />
            <h1 className="absolute md:top-[317px] top-[200px] font-inter font-semibold md:text-[20px] text-blackBgColor text-[12px] whitespace-nowrap">
              {title}
            </h1>
            <div className="md:w-[150px] w-[117px] h-[19px] absolute md:top-[350px] top-[220px] flex gap-[13px] items-center">
              <Image
                src={rating}
                alt="rating-star"
                height={18.49}
                width={104}
                className="h-[18.49px] md:w-[104px] w-[75px]"
              />
              {ratingReview && (
                <p className="md:text-[14px] text-[12px] text-blackBgColor font-normal whitespace-nowrap">
                  {ratingReview}{" "}
                  <span className="text-opacity-60 text-black">/5</span>
                </p>
              )}
            </div>
            <div className="md:w-[200px] h-[32px] absolute md:top-[380px] top-[235px] flex gap-[10px] items-center">
              <span className="md:text-[24px] text-[20px] font-bold text-blackBgColor font-inter">
                ${price}
              </span>
              {discount && (
                <span className="md:text-[24px] text-[20px]  font-bold  text-black opacity-15 line-through">
                  {discount}
                </span>
              )}
              {offer && (
                <span className="md:w-[58px] w-[42px] md:h-[28px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 text-[10px] md:text-[12px] font-medium text-redTextOfferColor flex items-center justify-center">
                  {offer}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewArrivalCard;
