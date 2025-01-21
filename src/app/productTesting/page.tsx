// "use client";
// import { client } from "@/sanity/lib/client";
// import React from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa";
// interface Products {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   category: string;
//   discountPercent: number | null;
//   isNew: boolean | null;
//   colors: string[];
//   sizes: string[];
//   ratingReviews: number;
//   offer: number;
// }
// // Fetch products
// const fetchProducts = async (): Promise<Products[]> => {
//   const products = await client.fetch(
//     `*[_type=="casual"] {
//   ratingReviews,
//     sizes,
//     colors,
//     offer,
//     name,
//     _id,
//     "imageUrl" : image.asset->url,
//     discountPercent,
//     category,
//     description,
//     price
    
// }`
//   );
//   return products;
// };
// const paginateProducts = async (page: number, limit: number) => {
//   const skip = (page - 1) * limit; 
//   const products = await client.fetch(
//     `*[_type=="casual"] {
//       ratingReviews,
//       sizes,
//       colors,
//       offer,
//       name,
//       _id,
//       "imageUrl" : image.asset->url,
//       discountPercent,
//       category,
//       description,
//       price
//     }[${skip}..${skip + limit - 1}]`
//   );

//   const totalProducts = await client.fetch('*[_type=="casual"]');
//   const totalPages = Math.ceil(totalProducts.length / limit);

//   return { products, totalPages };
// };
// const ProductTesting = () => {
//   const [products, setProducts] = useState<Products[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const limit = 9; 
//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }

//       // finally {
//       //   setLoading(false);
//       // }
//     };

//     loadProducts();
//   }, []);

//   // if (loading) {
//   //   return <p>Loading products...</p>;
//   // }
//   // const [products, setProducts] = useState<Products[]>([]);
//   // const [currentPage, setCurrentPage] = useState(1);
//   // const [totalPages, setTotalPages] = useState(0);
//   // const limit = 9; // Number of products per page

//   // Function to fetch products and handle pagination
//   // const loadProducts = async (page: number) => {
//   //   const { products, totalPages } = await paginateProducts(page, limit);
//   //   setProducts(products);
//   //   setTotalPages(totalPages);
//   // };

//   const loadProducts = async (page: number) => {
//     const { products, totalPages } = await paginateProducts(page, limit);
//     setProducts(products);
//     setTotalPages(totalPages);
//   };

//   // UseEffect to load products whenever currentPage changes
//   useEffect(() => {
//     loadProducts(currentPage);
//   }, [currentPage]);

//   // Handle page change
//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };
//   const handlePrevious = () => {
//     if (currentPage > 1) {
//       handlePageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       handlePageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="">
//       <div
//         className="
//          grid 
//          grid-cols-2 
//          gap-y-[130px] 
//          sm:gap-y-[100px]
//          gap-x-[10px] 
//          lg:gap-y-[10px]
//          md:grid-cols-3
//          lg:grid-cols-2
//          xl:grid-cols-4
//          md:gap-[20px]
//          items-start
//          md:gap-y-[130px]
//       "
//       >
//         {products.map((item) => (
//           <Link href={`/casualDetails/${item._id}`} passHref>
//             <div
//               data-aos="flip-left"
//               data-aos-easing="ease-out-cubic"
//               data-aos-duration="2000"
//               className="lg:h-[420px] xxl:h-[420px] xl:h-[350px] "
//             >
//               <div className="lg:w-[295px] lg:h-[298px] md:w-[230px] md:h-[230px] xxl:w-[295px] xxl:h-[298px] xl:w-[240px] xl:h-[180px] sm:w-[172px] sm:h-[174px] w-[140px] h-[104px] rounded-[20px] bg-bannerBg relative flex flex-col ">
//                 <Image
//                   src={item.imageUrl}
//                   alt="product-image"
//                   height={1000}
//                   width={1000}
//                   priority
//                   quality={100}
//                   className="md:w-[444px] md:h-[296px] xxl:w-[444px] xxl:h-[296px] xl:w-[240px] xl:h-[250px] sm:w-[180px] sm:h-[190px] object-cover rounded-[20px] w-[140px] h-[164px]"
//                 />
//                 <div
//                   data-aos="flip-left"
//                   data-aos-delay="300"
//                   className="flex flex-col h-[200px] justify-between gap-y-[20px] absolute xxl:top-[210px] lg:top-[210px] xl:top-[160px] top-[190px] sm:top-[230px] md:top-[140px]"
//                 >
//                   <h1 className="absolute  top-[-40px] md:top-[100px] left-[9px] font-satoshiBold font-semibold md:text-[20px] text-black text-[12px] w-[300px]">
//                     {item.name}
//                   </h1>
//                   <div className="md:w-[150px] w-[117px] h-[19px] md:top-[135px] absolute top-[-20px] left-[9px] flex gap-[11px] items-center md:gap-[13px] justify-start">
//                     <Image
//                       src="/Frame 10.svg"
//                       alt="rating-star"
//                       height={18.49}
//                       width={104}
//                       className="md:h-[18.49px] md:w-[104px] w-[75px] h-[15px]"
//                     />
//                     {item.ratingReviews && (
//                       <p className="md:text-[14px] text-[12px] text-black font-normal whitespace-nowrap font-satoshi ">
//                         {item.ratingReviews}{" "}
//                         <span className="text-opacity-60 text-black">/5</span>
//                       </p>
//                     )}
//                   </div>
//                   <div className="md:w-[200px] h-[32px] absolute top-[-5px] left-[9px] flex gap-[10px] items-center md:top-[155px]">
//                     <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold text-black font-satoshiBold">
//                       ${item.price}
//                     </span>
//                     {item.discountPercent && (
//                       <span className="md:text-[24px] text-[17px] sm:text-[20px] font-bold font-satoshiBold  text-black opacity-15 line-through">
//                         ${item.discountPercent}
//                       </span>
//                     )}
//                     {item.offer && (
//                       <span className="md:w-[58px] w-[32px] sm:w-[42px] md:h-[28px] h-[20px] py-[6px] px-[10px] sm:px-[14px] rounded-[62px] bg-red-400 bg-opacity-20 sm:text-[10px] text-[8px] md:text-[12px] font-medium text-redTextOfferColor flex justify-center items-center font-satoshi">
//                         -{item.offer}%
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//       <div className="flex items-center justify-between w-[60%] mx-auto mt-6">
//   {/* Left Button */}
//   <button
//     onClick={handlePrevious}
//     disabled={currentPage === 1}
//     className="ml-4 px-4 py-2 rounded-[8px] bg-white text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
//   >
//     <FaArrowLeft className="text-black h-[16px] w-[16px]"/>
//     Previous
//   </button>
//   <div className="flex items-center gap-2">
//     {Array.from({ length: 4 }, (_, i) => i + 1).map((page) => (
//       <button
//         key={page}
//         onClick={() => handlePageChange(page)}
//         className={`px-4 py-2 rounded-md text-sm font-medium font-satoshi ${
//           currentPage === page ? "bg-gray-300 text-gray-900" : "bg-white text-gray-700 hover:bg-gray-200"
//         }`}
//       >
//         {page}
//       </button>
//     ))}
//   </div>
//   <button
//     onClick={handleNext}
//     disabled={currentPage === 4}
//     className="ml-4 px-4 py-2 rounded-[8px] bg-white text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
//   >
    
//     Next
//     <FaArrowRight className="text-black h-[16px] w-[16px]"/>
//   </button>
// </div>
//     </div>
//   );
// };

// export default ProductTesting;

import React from 'react'

const ProductTesting = () => {
  return (
    <>
     <div className="">
      hellow</div> 
    </>
  )
}

export default ProductTesting
