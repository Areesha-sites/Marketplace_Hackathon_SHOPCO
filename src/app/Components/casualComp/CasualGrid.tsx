import React from "react";
import Card from "./Card";
import { Product } from "../../../../types/ComponentsTypes";
import { GridsProps } from "../../../../types/ComponentsTypes";
const Grid: React.FC<GridsProps> = ({
  products,
  addToCompare,
}: {
  products: Product[];
  addToCompare: (product: Product) => void;
}) => {
  return (
    <div
      className="flex justify-center flex-wrap gap-y-[160px] sm:gap-y-[100px] md:gap-y-[120px] xl:gap-y-[160px] gap-x-[10px] xl:grid grid-cols-3 xl:mt-[40px] mt-[-30px] lg:grid-cols-2 xl:grid-cols-3 2xl:flex 2xl:flex-wrap"
    >
      {products.map((product) => (
        <Card key={product._id} product={product} addToCompare={addToCompare} />
      ))}
    </div>
  );
};

export default Grid;
