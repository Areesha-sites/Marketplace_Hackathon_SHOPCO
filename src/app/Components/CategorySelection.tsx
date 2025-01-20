import React from "react";
import { CategorySelectionPropTypes } from "../../../types/ComponentsTypes";
import { CategorySelectionTypes } from "../../../types/ComponentsTypes";
import Image from "next/image";

const CategorySelection = ({
  onSelectCategory,
  activeCategory,
}: CategorySelectionPropTypes) => {
  const categories: CategorySelectionTypes[] = [
    { name: "All", bgColor: "#E0E0E0", imgSrc: "/category1.jpg" },
    { name: "tshirt", bgColor: "#E0E0E0", imgSrc: "/category1.jpg" },
    { name: "short", bgColor: "#FFEBCC", imgSrc: "/category2.jpg" },
    { name: "shirt", bgColor: "#E0F7FA", imgSrc: "/category3.jpg" },
    { name: "hoodie", bgColor: "#FCE4EC", imgSrc: "/category4.jpg" },
    { name: "jeans", bgColor: "#FFF9C4", imgSrc: "/category5.jpg" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() =>
            onSelectCategory(category.name === "All" ? null : category.name)
          }
          className={`flex items-center px-4 py-2 rounded-md text-[12px] ${
            activeCategory === category.name ? "active-button" : ""
          }`}
          style={{
            backgroundColor: category.bgColor,
          }}
        >
          <Image
            src={category.imgSrc}
            alt={category.name}
            height={20} 
            width={20}  
            priority
            quality={100} 
            className="w-5 h-5 rounded-full mr-2 object-cover" 
          />
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;