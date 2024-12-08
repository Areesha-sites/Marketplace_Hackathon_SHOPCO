import React from "react";
import Image from "next/image";
import { CasualCardsPropsTypes } from "../../../types/ComponentsTypes";
import Link from "next/link";

const CasualCards = ({
  id,
  image,
  title,
  price,
  rating,
  ratingReview,
  offer,
  positionStyles,
}: CasualCardsPropsTypes) => {
  return (
    <>
      <Link href={`/newArrival/${id}`} passHref>
        <div
          className="w-[295px] h-[298px] rounded-[20px] bg-BannerBgColor "
          style={{ position: "absolute", ...positionStyles }}
        >
          <Image
            src={image}
            alt="product-image"
            height={296}
            width={444}
            className="w-[444px] h-[296px] absolute rounded-[20px]"
          />
          <h1 className="absolute top-[317px] font-satoshi font-bold text-[20px] text-blackBgColor">
            {title}
          </h1>
          <div className="w-[150px] h-[19px] absolute top-[350px] flex gap-[13px] items-center">
            <Image
              src={rating}
              alt="rating-star"
              height={18.49}
              width={104}
              className="h-[18.49px] w-[104px]"
            />
            {ratingReview && (
              <p className="text-[14px] text-blackBgColor font-normal whitespace-nowrap">
                {ratingReview}{" "}
                <span className="text-opacity-60 text-black ">/5</span>
              </p>
            )}
          </div>
          <div className="w-[188px] h-[32px]  flex gap-[10px]">
            <p className="text-[24px] font-satoshi font-bold absolute  top-[374px] left-[3px] text-black">
              ${price}
            </p>
            <p className="text-[24px] font-satoshi font-bold absolute  top-[374px] left-[70px] text-black/40 line-through">
              ${price}
            </p>
          </div>
          <div className="w-[200px] h-[32px] top-[375px] flex gap-[10px] items-center absolute left-[150px] ">
            {offer && (
              <span className="w-[58px] h-[28px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-10 text-[12px] font-medium text-redTextOfferColor ">
                {offer}
              </span>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default CasualCards;
