"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Grid from "./CasualGrid";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SideBar from "../SideBar";
import ComparisonTable from "../ComparisonTable";
import Image from "next/image";
import { Product } from "../../../../types/ComponentsTypes";
import { toast } from "sonner"; 
const fetchProducts = async (
  page: number,
  pageSize: number,
  category: string | null,
  sortOrder: string
): Promise<Product[]> => {
  const start = (page - 1) * pageSize;
  const categoryFilter = category ? `&& category == "${category}"` : "";
  let query = `*[_type == "casual" ${categoryFilter}] {
    _id,
    name,
    price,
    discountPercent,
    offer,
    "imageUrl": image.asset->url,
    ratingReviews
  }[${start}...${start + pageSize}]`;
  if (sortOrder === "lowToHigh") {
    query += ` | order(price asc)`;
  } else if (sortOrder === "highToLow") {
    query += ` | order(price desc)`;
  } else if (sortOrder === "topRated") {
    query += ` | order(ratingReviews desc)`;
  } else if (sortOrder === "bestSellers") {
    query += ` | order(discountPercent desc, offer desc)`;
  } else if (sortOrder === "newestFirst") {
    query += ` | order(_createdAt desc)`;
  }
  return await client.fetch(query);
};
const CasualCard = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const pageSize = 9;
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(
          currentPage,
          pageSize,
          selectedCategory,
          sortOrder
        );
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
  }, [currentPage, selectedCategory, sortOrder]);
  const handleSort = (order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
    toast.success(`Sorting applied: ${order}`, {
      description: "Product list updated successfully.",
    });
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);
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
  const [comparisonList, setComparisonList] = useState<Product[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const addToCompare = (product: Product) => {
    if (comparisonList.length === 2) {
      toast.warning("You can only compare two items at a time.", {
        description: "Do you want to clear the comparison list?",
        action: {
          label: "Yes, Clear",
          onClick: () => setComparisonList([]),
        },
      });
      return;
    }
    const isAlreadyAdded = comparisonList.some(
      (item) => item._id === product._id
    );  
    if (!isAlreadyAdded) {
      setComparisonList([...comparisonList, product]);
      if (comparisonList.length === 0) {
        toast.success("First product selected successfully.", {
          description: "Now select the second product.",
        });
      } else if (comparisonList.length === 1) {
        toast.success("Second product selected successfully.");
        setShowCompareDialog(true);
      }
    } else {
      toast.error("This item is already in the comparison list.");
    }
  };
  const removeCompareItem = (productId: string) => {
    const updatedList = comparisonList.filter((item) => item._id !== productId);
    setComparisonList(updatedList);
  
    if (updatedList.length === 0) {
      setShowCompareDialog(false);
    }
    toast.info("Item removed from comparison list.");
  };
  return (
    <div>
      <div className="absolute left-[-370px] top-[-270px] xl:left-0 xl:top-0 xxl:left-[-420px]">
        <SideBar
          handleCategoryChange={handleCategoryChange}
          activeColor={activeColor}
          setFilteredProducts={setProducts}
          setTotalPages={setTotalPages}
        />
      </div>
      <div className="flex justify-end w-full absolute top-[-45px] md:top-[-30px] lg:top-[-15px] xl:top-[-7px] md:left-[-70px]">
        <div className="flex justify-start w-full md:justify-end ">
          <div
            className="flex md:gap-[12px] items-start justify-start md:ml-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-start items-start w-full text-left gap-x-[10px] xl:gap-x-[15px] md:mt-[-40px] ml-3 ">
              <p className="md:text-[16px] xxl:text-[16px] xl:text-[16px] sm:text-[14px] text-[12px] font-normal font-satoshi text-black/60 whitespace-nowrap md:text-center">
                Showing 1-10 of {totalPages * pageSize} Products
              </p>
              <div className="flex justify-center items-center gap-x-[4px]">
                <p className="md:text-[16px] text-[12px] sm:text-[14px] font-normal font-satoshi text-black/60 whitespace-nowrap">
                  Sort by: <span className="text-black">Most Popular</span>
                </p>
                <Image
                  src="/sort-chevron.svg"
                  alt="icon"
                  height={16}
                  width={16}
                  className={`h-[16px] w-[16px] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                />
              </div>
            </div>
            {isOpen && (
              <div className="absolute top-[20px] md:top-[-15px] md:left-[630px] lg:left-[750px] left-[160px] bg-white border border-gray-200 shadow-md rounded-md w-[150px] z-50 sm:left-[220px] sm:top-[30px]">
                <ul className="text-black text-[14px] font-satoshi">
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500"
                    onClick={() => handleSort("lowToHigh")}
                  >
                    Price: Low to High
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500"
                    onClick={() => handleSort("highToLow")}
                  >
                    Price: High to Low
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500"
                    onClick={() => handleSort("topRated")}
                  >
                    Top Rated
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500"
                    onClick={() => handleSort("bestSellers")}
                  >
                    Best Sellers
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-satoshi hover:text-blue-500"
                    onClick={() => handleSort("newestFirst")}
                  >
                    Newest First
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:mt-[-30px] lg:ml-[-30px] mt-[20px] xxl:ml-[30px] 2xl:ml-0 ">
        <Grid products={products} addToCompare={addToCompare} />
      </div>
      <div>
        {showCompareDialog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-3/4 relative">
              <button
                className="absolute top-2 right-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowCompareDialog(false)}
              >
                ✖
              </button>
              <ComparisonTable
                products={comparisonList}
                removeCompareItem={removeCompareItem}
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between w-[90%] md:w-[90%] mx-auto mt-44 md:mt-36 lg:mt-[160px] xl:mt-[160px] xxl:mt-[190px]">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="md:ml-4 px-2 md:px-4 py-2 rounded-[8px] bg-white text-[12px] md:text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
        >
          <FaArrowLeft className="text-black sm:h-[16px] sm:w-[16px] w-[14px] h-[14px]" />
          Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`sm:px-4 sm:py-2 py-1 px-2 rounded-md text-[12px] sm:text-sm font-medium font-satoshi ${
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
          className="md:ml-4 px-2 md:px-4 py-2 rounded-[8px] bg-white text-[12px] md:text-sm font-medium border-gray-300 border-[1px] text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed font-satoshi flex justify-center gap-[7px] items-center"
        >
          Next
          <FaArrowRight className="text-black h-[16px] w-[16px]" />
        </button>
      </div>
    </div>
  );
};

export default CasualCard;
