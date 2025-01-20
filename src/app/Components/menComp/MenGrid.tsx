import React from "react";
import MenCard from "./Card";

interface GridProps {
  products: {
    _id: string;
    name: string;
    price: number;
    discountPercent: number | null;
    offer: number;
    imageUrl: string;
    ratingReviews: number;
  }[];
}
const MenGrid: React.FC<GridProps> = ({ products }) => {
  return (
    <div
      className="
       grid 
       grid-cols-2 
       gap-y-[130px] 
       sm:gap-y-[100px]
       gap-x-[10px] 
       lg:gap-y-[10px]
       md:grid-cols-3
       lg:grid-cols-2
       xl:grid-cols-3
       md:gap-[20px]
       items-start
       md:gap-y-[130px]
      "
    >
      {products.map((product) => (
        <MenCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default MenGrid;
