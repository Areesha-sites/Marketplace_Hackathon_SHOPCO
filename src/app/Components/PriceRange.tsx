"use client"
import { client } from "@/sanity/lib/client";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { RangeSliderProps } from "../../../types/ComponentsTypes";
const RangeSlider: React.FC<RangeSliderProps> = ({ category, setFilteredProducts, setTotalPages }) => {
  const [leftValue, setLeftValue] = useState(50);
  const [rightValue, setRightValue] = useState(200);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchAndSetProducts = useCallback(async (minPrice: number, maxPrice: number, page: number) => {
    try {
      const productsPerPage = 9;
      const startIndex = (page - 1) * productsPerPage;
      const query = `*[_type == "casual" && price >= ${minPrice} && price <= ${maxPrice}] | order(price asc) [${startIndex}...${startIndex + productsPerPage}] {
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

      const countQuery = `count(*[_type == "casual" && price >= ${minPrice} && price <= ${maxPrice}])`;
      const totalCount = await client.fetch(countQuery);
      setTotalPages(Math.ceil(totalCount / productsPerPage));
    } catch (error) {
      console.error("Error fetching filtered products:", error);
    }
  }, [category, setFilteredProducts, setTotalPages]); // Dependencies for useCallback

  useEffect(() => {
    fetchAndSetProducts(leftValue, rightValue, currentPage);
  }, [fetchAndSetProducts, leftValue, rightValue, currentPage]); // fetchAndSetProducts is now a dependency

  const handleLeftChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Removed async
    const value = parseInt(e.target.value, 10);
    if (value < rightValue) {
      setLeftValue(value);
      setCurrentPage(1);
    }
  };

  const handleRightChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Removed async
    const value = parseInt(e.target.value, 10);
    if (value > leftValue) {
      setRightValue(value);
      setCurrentPage(1);
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
