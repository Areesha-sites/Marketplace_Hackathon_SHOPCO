"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { CustomerCommnetsProps } from "../../../types/ComponentsTypes";
const HappyCustomerCardList = () => {
  const [customerComments, setCustomerComments] = useState<
    CustomerCommnetsProps[]
  >([]);
  const query = `*[_type == "customerComments"] {
    name,
    description,
    _id,
    date
  }`;
  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(query);
      setCustomerComments(data);
    };
    fetchData();
  }, [query]);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="w-full xl:px-14 xxl:px-20 lg:px-20">
      <Slider {...settings}>
        {customerComments.map((comment) => (
          <div
            key={comment.name}
            className="md:w-[200px] md:h-[220px] w-[358px] h-[176px] rounded-[20px] border-[1px] border-black/10 p-[24px] "
          >
            <div className="flex flex-col justify-center gap-[10px]">
              <Image
                src="/rating-star.svg"
                alt=""
                height={30}
                width={20}
                className="h-[22.58px] w-[138.84px] "
              />
              <div className="flex justify-start gap-[20px]">
                <h1 className="font-satoshiBold md:text-[20px] text-[16px] font-bold text-black ">
                  {comment.name}
                </h1>
                <Image
                  src="/correct-icon.svg"
                  alt="correct-icon"
                  height={24}
                  width={24}
                  className="h-[19px] w-[19px] mt-[2px]"
                />
              </div>
            </div>
            <p className="text-[12px] md:text-[14px] text-black/50 md:w-[306px] w-[270px] font-satoshi mt-2">
              {comment.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyCustomerCardList;
