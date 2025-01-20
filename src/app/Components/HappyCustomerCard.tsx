"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface CustomerCommnetsProps {
  name: string,
  description: string,
  date: string
}
const HappyCustomerCard = () => {
  const [customerComments, setCustomerComments] = useState<CustomerCommnetsProps[]>([]);
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
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6">
      {customerComments.map((comment) => (
        <div
          key={comment.name}
          className="md:w-[400px] md:h-[240px] w-[358px] h-[176px] rounded-[20px] border-[1px] border-black/10 p-[24px]"
        >
          <div className="flex flex-col justify-between h-full">
            <Image src="/rating-star.svg" alt="" height={30} width={20}  className="h-[22.58px] w-[138.84px] "/>
            <Image
                src="/correct-icon.svg" 
                alt="correct-icon"
                height={24}
                width={24}
                className="h-[19px] w-[19px] mt-[2px]"
              />
            </div>
            <p className="text-[12px] md:text-[14px] text-black/50 md:w-[306px] w-[270px] font-satoshi">
              {comment.description}
            </p>
          </div>
           ))}
    </div>
       
     
  );
};

export default HappyCustomerCard