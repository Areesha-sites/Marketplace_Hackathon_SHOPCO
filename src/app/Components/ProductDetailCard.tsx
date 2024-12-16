import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductDetaildCardsPropsType } from "../../../types/ComponentsTypes";
const ProductDetailCard = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  ratingReview,
  offer,
}: ProductDetaildCardsPropsType) => {
  return (
    <>
      <Link href={`/productDetailsCard/${id}`} passHref>
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="md:w-[295px] md:h-[298px] w-[180px] h-[200px] rounded-[20px] bg-BannerBgColor top-[1991px] "
        >
          <Image
            src={image}
            alt="product-image"
            height={296}
            width={444}
            className="md:w-[444px] md:h-[296px] object-cover w-[180px] h-[200px] rounded-[20px]"
          />
          <h1 className="absolute md:top-[317px] top-[210px] font-satoshiBold font-semibold md:font-bold md:text-[20px] text-[14px] whitespace-nowrap text-blackBgColor">
            {title}
          </h1>
          <div className="w-[150px] h-[19px] absolute md:top-[350px] top-[232px] flex md:gap-[13px] gap-[11px] items-center">
            <Image
              src={rating}
              alt="rating-star"
              height={18.49}
              width={104}
              className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
            />
            {ratingReview && (
              <p className="md:text-[14px] text-[12px] text-blackBgColor font-satoshi font-normal whitespace-nowrap">
                {ratingReview}{" "}
                <span className="text-opacity-60 text-black">/5</span>
              </p>
            )}
          </div>
          <div className=" absolute md:top-[380px] top-[252px] flex gap-[10px] items-center">
            <span className="md:text-[24px] text-[16px] font-semibold font-satoshiBold md:font-bold text-blackBgColor">
              ${price}
            </span>
            {discount && (
              <span className="md:text-[24px] text-[16px] font-satoshiBold font-semibold md:font-bold text-black opacity-15 line-through">
                {discount}
              </span>
            )}
            {offer && (
              <span className="md:w-[58px] md:h-[28px] w-[42px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-200 bg-opacity-50 md:text-[12px] text-[10px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
                {offer}
              </span>
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductDetailCard;
