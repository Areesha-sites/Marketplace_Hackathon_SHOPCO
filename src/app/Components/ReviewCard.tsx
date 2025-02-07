import React from "react";
import Image from "next/image";
import { ReviewCardPropsTypes } from "../../../types/ComponentsTypes";
import {   DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { CiEdit } from "react-icons/ci";
import { IoMdTrash } from "react-icons/io";
const ReviewsCard = ({
  name,
  correct,
  description,
  date,
}: ReviewCardPropsTypes) => {
  return (
    <>
      <div className="flex justify-center items-center sm:w-full mx-auto sm:px-5 w-[280px] xl:w-[570px] xxl:w-[610px]">
        <div className="md:w-[610px] xxl:w-[610px] xl:w-[570px] lg:w-[480px] md:h-[241.58px] sm:w-full h-[244px] p-[24px] rounded-[20px] border-black/10 border-[1px] md:py-[28px] md:px-[32px] ">
          <div className=" md:h-[139.58px] xxl:w-[560px] xl:w-[520px] lg:w-[400px] flex justify-between sm:w-full w-[280px]">
            <div className="md:w-[522px] xxl:w-[560px] xl:w-[500px] lg:w-[400px] md:h-[139.58px] w-[300px] sm:w-full h-[176px] flex flex-col gap-[15px]">
              <Image
                src="/rating-star.svg"
                alt="rating"
                height={22.58}
                width={127}
                className="h-[22.58px] md:w-[127px] w-[107px]"
              />
              <div className="md:w-[522px] lg:w-[480px] md:h-[102px] flex flex-col gap-[12px]">
                <div className="md:w-[146px] md:h-[24px] flex gap-[4px] items-center whitespace-nowrap">
                  <h1 className="md:text-[20px] text-[16px] font-bold text-black font-satoshiBold">
                    {name}
                  </h1>
                  <Image
                    src={correct}
                    alt="correct-icon"
                    height={24}
                    width={24}
                    className="md:h-[24px] md:w-[24px] h-[19px] w-[19px]"
                  />
                </div>
                <p className="md:w-[522px] text-left md:h-[66px] lg:w-[400px] w-[250px] sm:w-full font-satoshi font-normal text-[12px] md:text-[16px] text-black/60">
                  {" "}
                  {description}
                </p>
              </div>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="bg-white shadow-white hover:bg-white ml-[-30px]"
                  >
                    <PiDotsThreeOutlineFill className="h-[30px] w-[30px] text-black/80 " />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel className="font-satoshi">
                    Actions
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div className="flex justify-between items-center w-full">
                      <a
                        href="#"
                        className="flex items-center gap-x-2 font-satoshi"
                      >
                        <span>Edit</span>
                      </a>
                      <CiEdit className="text-black/45 h-[20px] w-[20px]" />
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div className="flex justify-between items-center w-full">
                      <a
                        href="#"
                        className="flex items-center gap-x-2 font-satoshi"
                      >
                        <span className="text-red-500">Remove</span>
                      </a>
                      <IoMdTrash className="text-red-500 h-[20px] w-[20px]" />
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <p className="font-satoshi text-left font-medium md:text-[16px] text-[12px] text-black/60 relative md:top-[25px]">
            Posted on {date}
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewsCard;
