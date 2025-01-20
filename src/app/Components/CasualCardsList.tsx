// import { casualCardsData } from "../../../data/data";
// import CasualCards from "./CasualCard";
// const CasualCardsList = () => {
//   return (
//     <div
//       className="
//         grid 
//         grid-cols-2 
//         gap-y-[130px] 
//         sm:gap-y-[100px]
//         gap-x-[10px] 
//         lg:gap-y-[10px]
//         md:grid-cols-3
//         lg:grid-cols-2
//         xl:grid-cols-3
//         md:gap-[20px]
//         items-start
//         md:gap-y-[130px]
//       "
//     >
//       {casualCardsData.map((item, index) => (
//         <div
//           className={`${index < 9 ? "block" : "hidden"} md:block `}
//           key={index}
//         >
//           <CasualCards {...item} />
//         </div>
//       ))}
//     </div>
//   );
// };

import { client } from "@/sanity/lib/client";
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CasualCard from "./casualComp/CasualCard";
// export default CasualCardsList;
interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  colors: string[];
  sizes: string[];
}
// Fetch products
const getProducts = async (): Promise<Products[]> => {
  const products = await client.fetch(
    `*[_type=="products"]{
      _id,
      name,
      description,
      price,
      "imageUrl" : image.asset->url,
      category,
      discountPercent,
      "isNew": new,
      colors,
      sizes
    }`
  );
  return products;
};
export default function CasualCards() {
  // const products = await getProducts();
  // const [products, setProducts] = useState<Products[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadProducts = async () => {
  //     try {
  //       const data = await fetchProducts();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProducts();
  // }, []);

  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  return (
    <div className="grid grid-cols-3 w-full h-auto gap-[20px] px-14 py-9">
      {/* {products.map((item) => (
        <Link key={item._id} href={`/cardsDetails/${item._id}`}>
          <div className="w-full shadow-xl bg-slate-100 border-[1px] p-4">
            <Image
              src={item.imageUrl}
              alt={item.name}
              height={100}
              width={100}
            />
            <p className="text-black font-bold text-2xl">{item.name}</p>
            <p className="text-black font-semibold text-[15px]">
              <p>{item.description}</p>
              <p>{item.discountPercent}</p>

              <p>{item.colors}</p>
            </p>
            <p>{item.price}</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl">
              View Details
            </button>
          </div>
        </Link>
      ))} */}
      <CasualCard/>
    </div>
  );
};

// export default CasualCardsList;


