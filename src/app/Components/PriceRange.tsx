import { client } from "@/sanity/lib/client";
import { useState } from "react";

const RangeSlider = ({ setFilteredProducts, setTotalPages }: any) => {
  const [leftValue, setLeftValue] = useState(50); // Default $50
  const [rightValue, setRightValue] = useState(200); // Default $200
  const [currentPage, setCurrentPage] = useState(1); // Track the current page

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

  const fetchAndSetProducts = async (minPrice: any, maxPrice: any, page: number) => {
    try {
      const productsPerPage = 9; // Limit to 9 products per page
      const startIndex = (page - 1) * productsPerPage;
      // Fetch filtered products with limit and offset for pagination
      const query = `*[_type == "casual" && price >= ${minPrice} && price <= ${maxPrice}] | order(price asc) [${startIndex}...${
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

      // Fetch total count of filtered products
      const countQuery = `count(*[_type == "casual" && price >= ${minPrice} && price <= ${maxPrice}])`;
      const totalCount = await client.fetch(countQuery);
      // Update total pages based on the product count
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