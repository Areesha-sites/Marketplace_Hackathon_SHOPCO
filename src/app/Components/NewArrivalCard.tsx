// "use client";
// import React from "react";
// import Image from "next/image";
// import { NewArrivalCardsPropsTypes } from "../../../types/ComponentsTypes";
// import Link from "next/link";
// const NewArrivalCard = ({
//   id,
//   image,
//   title,
//   price,
//   discount,
//   rating,
//   ratingReview,
//   offer,
// }: NewArrivalCardsPropsTypes) => {
//   return (
//     <>
//       <Link href={`/newArrival/${id}`} passHref>
//         <div className="h-[400px]">
//           <div
//             data-aos="fade-up"
//             data-aos-duration="3000"
//             className="lg:w-[295px] lg:h-[298px] md:w-[240px] md:h-[250px] xxl:w-[295px] xxl:h-[298px] xl:w-[275px] xl:h-[298px] h-[150px] w-[145px] sm:w-[175px] sm:h-[200px] rounded-[20px] bg-bannerBg "
//           >
//             <div className="relative">
//               <Image
//                 src={image}
//                 alt="product-image"
//                 height={296}
//                 width={444}
//                 className="lg:w-[444px] lg:h-[296px] md:w-[240px] md:h-[250px] w-[145px] sm:w-[175px] sm:h-[190px] h-[150px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out"
//               />
//               <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-20 rounded-[20px] duration-300 ease-in-out hover:scale-110 transition-all" />
//             </div>
//             <div className="flex flex-col h-[200px] justify-between absolute top-[160px] sm:top-[210px] md:top-[160px] lg:top-[200px]">
//               <h1 className="absolute top-[-8px] left-[10px] md:top-[100px] font-black md:text-[20px] text-black text-[12px] sm:text-[14px] whitespace-nowrap font-satoshiBold  ">
//                 {title}
//               </h1>
//               <div className="md:w-[150px] w-[117px] h-[19px] md:top-[135px] left-[10px] absolute top-[11px] flex gap-[13px] items-start justify-start">
//                 <Image
//                   src={rating}
//                   alt="rating-star"
//                   height={18.49}
//                   width={104}
//                   className="h-[18.49px] md:w-[104px] w-[65px] sm:w-[75px]"
//                 />
//                 {ratingReview && (
//                   <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi">
//                     {ratingReview}{" "}
//                     <span className="text-opacity-60 text-black">/5</span>
//                   </p>
//                 )}
//               </div>
//               <div className="md:w-[200px] h-[32px] absolute top-[30px] flex gap-[5px] sm:gap-[10px] items-center md:top-[155px] left-[10px] ">
//                 <span className="md:text-[24px] text-[18px] sm:text-[20px] font-black text-black  font-satoshiBold ">
//                   ${price}
//                 </span>
//                 {discount && (
//                   <span className="md:text-[24px] text-[18px] sm:text-[20px] font-black text-black font-satoshiBold opacity-15 line-through">
//                     {discount}
//                   </span>
//                 )}
//                 {offer && (
//                   <span className="md:w-[58px] w-[42px] md:h-[28px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 text-[10px] md:text-[12px] font-medium text-redTextOfferColor font-satoshi flex justify-center items-center">
//                     {offer}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default NewArrivalCard;

"use client";
import { client } from "@/sanity/lib/client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import { Item } from '@radix-ui/react-select';
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
  ratingReviews: number;
  offer: number;
}
// Fetch products
const fetchProducts = async (): Promise<Products[]> => {
  const products = await client.fetch(
    `*[_type=="casual"] {
  ratingReviews,
    sizes,
    colors,
    offer,
    name,
    _id,
    "imageUrl" : image.asset->url,
    discountPercent,
    category,
    description,
    price
    
}`
  );
  return products;
};
const NewArrivalCard = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }
  return (
    <>
      {products.map((item, index) => (
        <Link href={`/newArrival/${item._id}`} passHref>
          <div key={index} className="h-[400px]">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="lg:w-[295px] lg:h-[298px] md:w-[240px] md:h-[250px] xxl:w-[295px] xxl:h-[298px] xl:w-[275px] xl:h-[298px] h-[150px] w-[145px] sm:w-[175px] sm:h-[200px] rounded-[20px] bg-bannerBg "
            >
              <div className="relative">
                <Image
                  src={item.imageUrl}
                  alt="product-image"
                  height={296}
                  width={444}
                  className="lg:w-[444px] lg:h-[296px] md:w-[240px] md:h-[250px] w-[145px] sm:w-[175px] sm:h-[190px] h-[150px] object-cover rounded-[20px] transition-transform duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-20 rounded-[20px] duration-300 ease-in-out hover:scale-110 transition-all" />
              </div>
              <div className="flex flex-col h-[200px] justify-between absolute top-[160px] sm:top-[210px] md:top-[160px] lg:top-[200px]">
                <h1 className="absolute top-[-8px] left-[10px] md:top-[100px] font-black md:text-[20px] text-black text-[12px] sm:text-[14px] whitespace-nowrap font-satoshiBold  ">
                  {item.name}
                </h1>
                <div className="md:w-[150px] w-[117px] h-[19px] md:top-[135px] left-[10px] absolute top-[11px] flex gap-[13px] items-start justify-start">
                  <Image
                    src="/Frame 10.svg"
                    alt="rating-star"
                    height={18.49}
                    width={104}
                    className="h-[18.49px] md:w-[104px] w-[65px] sm:w-[75px]"
                  />
                  {item.ratingReviews && (
                    <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi">
                      {item.ratingReviews}{" "}
                      <span className="text-opacity-60 text-black">/5</span>
                    </p>
                  )}
                </div>
                <div className="md:w-[200px] h-[32px] absolute top-[30px] flex gap-[5px] sm:gap-[10px] items-center md:top-[155px] left-[10px] ">
                  <span className="md:text-[24px] text-[18px] sm:text-[20px] font-black text-black  font-satoshiBold ">
                    ${item.price}
                  </span>
                  {item.discountPercent && (
                    <span className="md:text-[24px] text-[18px] sm:text-[20px] font-black text-black font-satoshiBold opacity-15 line-through">
                      ${item.discountPercent}
                    </span>
                  )}
                  {item.offer && (
                    <span className="md:w-[58px] w-[42px] md:h-[28px] h-[20px] py-[6px] px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 text-[10px] md:text-[12px] font-medium text-redTextOfferColor font-satoshi flex justify-center items-center">
                      -{item.offer}%
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NewArrivalCard;
