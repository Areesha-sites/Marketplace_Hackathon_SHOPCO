import { client } from "@/sanity/lib/client";
import { useState } from "react";
const RangeSlider = ({ setFilteredProducts, setTotalPages }: any) => {
  const [leftValue, setLeftValue] = useState(50);
  const [rightValue, setRightValue] = useState(200);
  const [currentPage, setCurrentPage] = useState(1);
  const handleLeftChange = async (e: any) => {
    const value = parseInt(e.target.value);
    if (value < rightValue) {
      setLeftValue(value);
      await fetchAndSetProducts(value, rightValue, currentPage);
    }
  };
  const handleRightChange = async (e: any) => {
    const value = parseInt(e.target.value);
    if (value > leftValue) {
      setRightValue(value);
      await fetchAndSetProducts(leftValue, value, currentPage);
    }
  };
  const fetchAndSetProducts = async (
    minPrice: any,
    maxPrice: any,
    page: number
  ) => {
    try {
      const productsPerPage = 9;
      const startIndex = (page - 1) * productsPerPage;
      const query = `*[_type == "women" && price >= ${minPrice} && price <= ${maxPrice}] | order(price asc) [${startIndex}...${
        startIndex + productsPerPage
      }] {
        _id,
        name,
        price,
        discountPercent,
        offer,
        "imageUrl": image.asset->url,
        ratingReviews
      }`;
      const products = await client.fetch(query);
      setFilteredProducts(products);
      const countQuery = `count(*[_type == "women" && price >= ${minPrice} && price <= ${maxPrice}])`;
      const totalCount = await client.fetch(countQuery);
      setTotalPages(Math.ceil(totalCount / productsPerPage));
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  };
  return (
    <div className="slider-container">
      <div className="slider-bar">
        <div
          className="slider-highlight"
          style={{
            left: `${(leftValue / 200) * 100}%`,
            right: `${100 - (rightValue / 200) * 100}%`,
          }}
        ></div>
      </div>
      <input
        type="range"
        min="0"
        max="200"
        value={leftValue}
        className="range-input"
        onChange={handleLeftChange}
      />
      <input
        type="range"
        min="0"
        max="200"
        value={rightValue}
        className="range-input"
        onChange={handleRightChange}
      />
      <div className="slider-values">
        <span>${leftValue}</span>
        <span>${rightValue}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
