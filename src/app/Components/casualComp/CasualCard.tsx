import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Grid from "./CasualGrid";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SideBar from "../SideBar";

const fetchProducts = async (
  page: number,
  pageSize: number,
  category: string | null
): Promise<any[]> => {
  const start = (page - 1) * pageSize;
  const categoryFilter = category ? `&& category == "${category}"` : "";
  const query = `*[_type == "casual" ${categoryFilter}] {
    _id,
    name,
    price,
    discountPercent,
    offer,
    "imageUrl": image.asset->url,
    ratingReviews
  }[${start}...${start + pageSize}]`;
  return await client.fetch(query);
};
const CasualCard = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string>(""); // New state for sorting order
  const pageSize = 9;
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(currentPage, pageSize, selectedCategory);
        setProducts(data);
        const countQuery = `count(*[_type == "casual" ${
          selectedCategory ? `&& category == "${selectedCategory}"` : ""
        }])`;
        const totalCount = await client.fetch(countQuery);
        setTotalPages(Math.ceil(totalCount / pageSize));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    loadProducts();
  }, [currentPage, selectedCategory]);
  // Function to handle sorting
  const handleSort = (order: string) => {
    setSortOrder(order);
    if (order === "lowToHigh") {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.price - b.price)
      );
    } else if (order === "highToLow") {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => b.price - a.price)
      );
    }
  };

  const handleCategoryChange = (category: string, index: number) => {
    setSelectedCategory(category);
    setActiveColor(index);
    setCurrentPage(1);
  };
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };
  return (
    <div>
      <div className="">
        <div className="">
          <SideBar
            handleCategoryChange={handleCategoryChange}
            activeColor={activeColor}
          />
        </div>
        {/* Dropdown for Sorting */}
        <div className="flex justify-end items-center w-full px-5">
          <div className="relative">
            <p className="text-[16px] font-normal text-black/60 whitespace-nowrap">
              Sort by: <span className="text-black">Most Popular</span>
            </p>
            <div className="absolute top-[25px] left-[0px] bg-white border border-gray-200 shadow-md rounded-md w-[150px] z-50">
              <ul className="text-black text-[14px] font-satoshi">
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("lowToHigh")}
                >
                  Price: Low to High
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSort("highToLow")}
                >
                  Price: High to Low
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setSortOrder("")}
                >
                  New Arrivals
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Grid products={products} />
      </div>

      <div className="flex items-center justify-between w-[90%] mx-auto mt-28">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="ml-4 px-4 py-2 rounded-[8px] bg-white text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
        >
          <FaArrowLeft className="text-black h-[16px] w-[16px]" />
          Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md text-sm font-medium font-satoshi ${
                currentPage === page
                  ? "bg-gray-300 text-gray-900"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="ml-4 px-4 py-2 rounded-[8px] bg-white text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
        >
          Next
          <FaArrowRight className="text-black h-[16px] w-[16px]" />
        </button>
        </div>
    </div>
  );
};

export default CasualCard;