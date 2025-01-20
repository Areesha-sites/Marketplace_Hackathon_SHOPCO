import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    discountPercent: number | null;
    offer: number;
    imageUrl: string;
    ratingReviews: number;
  };
}
const WomenCard: React.FC<CardProps> = ({ product }) => {
  return (
    <Link href={`/womenDetails/${product._id}`} passHref>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="lg:h-[420px] xxl:h-[420px] xl:h-[380px] flex flex-col justify-between"
      >
        <div className="lg:w-[295px] lg:h-[298px] md:w-[230px] md:h-[230px] xxl:w-[295px] xxl:h-[298px] xl:w-[285px] xl:h-[278px] sm:w-[172px] sm:h-[174px] w-[140px] h-[104px] rounded-[20px] bg-bannerBg relative flex flex-col gap-[10px]">
          <Image
            src={product.imageUrl}
            alt="product-image"
            height={1000}
            width={1000}
            priority
            quality={100}
            className="md:w-[444px] md:h-[296px] xxl:w-[444px] xxl:h-[296px] xl:w-[260px] xl:h-[263px] sm:w-[180px] sm:h-[190px] object-cover rounded-[20px] w-[140px] h-[164px]"
          />
          <div
            data-aos="flip-left"
            data-aos-delay="300"
            className="flex flex-col justify-center "
          >
            <h1 className=" font-satoshiBold font-semibold md:text-[20px] text-black text-[12px] w-[280px] capitalize leading-[24px]">
              {product.name}
            </h1>
            <div className="md:w-[150px] w-[117px] h-[19px] flex gap-[11px] items-center md:gap-[13px] ">
              <Image
                src="/Frame 10.svg"
                alt="rating-star"
                height={18.49}
                width={104}
                className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
              />
              {product.ratingReviews && (
                <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi ">
                  {product.ratingReviews}{" "}
                  <span className="text-opacity-60 text-black">/5</span>
                </p>
              )}
            </div>
            <div className="md:w-[200px] h-[32px]  flex gap-[10px] items-center ">
              <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold text-black font-satoshiBold">
                ${product.price}
              </span>
              {product.discountPercent && (
                <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold font-satoshiBold  text-black opacity-15 line-through">
                  ${product.discountPercent}
                </span>
              )}
              {product.offer && (
                <span className="md:w-[58px] w-[32px] sm:w-[42px] md:h-[28px] h-[20px] py-[6px] px-[10px] sm:px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 sm:text-[10px] text-[8px] md:text-[12px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
                  -{product.offer}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WomenCard;
