import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import GridKids from "./KidsGrid";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import SideBar from "../SideBar";
import ComparisonTable from "../ComparisonTable";
import Image from "next/image";
const fetchProducts = async (
  page: number,
  pageSize: number,
  category: string | null,
  sortOrder: string
): Promise<any[]> => {
  const start = (page - 1) * pageSize;
  const categoryFilter = category ? `&& category == "${category}"` : "";
  let query = `*[_type == "kids" ${categoryFilter}] {
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
const KidCards = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
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
        const countQuery = `count(*[_type == "kids" ${
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
  const handleSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };
  const handleSort = (order: string) => {
    setSortOrder(order);
    setCurrentPage(1);
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
  const [comparisonList, setComparisonList] = useState<any[]>([]);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const addToCompare = (product: any) => {
    if (comparisonList.length === 2) {
      if (
        window.confirm(
          "You can only compare two items at a time. Do you want to clear the comparison list?"
        )
      ) {
        setComparisonList([]);
      }
      return;
    }

    const isAlreadyAdded = comparisonList.some(
      (item) => item._id === product._id
    );

    if (!isAlreadyAdded) {
      setComparisonList([...comparisonList, product]);

      if (comparisonList.length === 0) {
        alert(
          "First product selected successfully. Now select the second product."
        );
      } else if (comparisonList.length === 1) {
        alert("Second product selected successfully.");
        setShowCompareDialog(true);
      }
    } else {
      alert("This item is already in the comparison list.");
    }
  };

  const removeCompareItem = (productId: string) => {
    const updatedList = comparisonList.filter((item) => item._id !== productId);
    setComparisonList(updatedList);
    if (updatedList.length === 0) {
      setShowCompareDialog(false);
    }
    alert("Item removed from comparison list.");
  };

  return (
    <div>
      {/* <div className="mt-[-100px]" >
  <SearchBar onSearch={handleSearch} />
  </div> */}
      <div className="">
        <div className="flex justify-end items-center w-full px-5">
          <div
            className="md:w-[396px] md:h-[16px] absolute lg:top-[217px] xl:top-[-50px] lg:left-[580px] xxl:left-[944px] xl:left-[380px] flex md:gap-[12px] top-[157px] left-[96px] items-center mt-1 md:mt-3 md:ml-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p
              data-aos="zoom-in"
              data-aos-delay="200"
              className="md:text-[16px] xxl:text-[16px] xl:text-[14px] sm:text-[14px] text-[12px] font-normal font-satoshi text-black/60 whitespace-nowrap text-center"
            >
              Showing 1-10 of {totalPages * pageSize} Products
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="md:flex gap-[4px] items-center hidden"
            >
              <p className="text-[16px] font-normal font-satoshi text-black/60 whitespace-nowrap">
                Sort by: <span className="text-black">Most Popular</span>
              </p>
              <Image
                src="/sort-chevron.svg"
                alt="icon"
                height={16}
                width={16}
                className={`h-[16px] w-[16px] transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
            {isOpen && (
              <div className="absolute top-[25px] left-[300px] bg-white border border-gray-200 shadow-md rounded-md w-[150px] z-50">
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
      <div className="">
        <SideBar
          handleCategoryChange={handleCategoryChange}
          activeColor={activeColor}
          setFilteredProducts={setProducts}
          setTotalPages={setTotalPages}
        />
      </div>
      <div>
        <GridKids products={products} addToCompare={addToCompare} />
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

export default KidCards;
