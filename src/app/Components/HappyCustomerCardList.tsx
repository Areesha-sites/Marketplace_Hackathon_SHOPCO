"use client";
import HappyCustomerCard from "./HappyCustomerCard";
import { happyCustomerCardData } from "../../../data/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
const HappyCustomerCardList = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false, // Ensures auto-play doesn't pause on hover
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1440, settings: { slidesToShow: 3 } },
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };
  return (
    <div className="w-full xl:px-12 xxl:px-20 lg:px-20">
      <Slider {...settings}>
        {happyCustomerCardData.map((item) => (
          <div key={item.id} className="px-2 flex justify-center">
            <HappyCustomerCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HappyCustomerCardList;
