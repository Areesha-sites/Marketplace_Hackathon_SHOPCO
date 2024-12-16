import ProductDetailCard from "./ProductDetailCard";
import { productDetailsCardData } from "../../../data/data";

const TopSellingCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]">
      {productDetailsCardData.map((item, index) => (
        <div 
          key={item.id} 
          className={`${index < 2 ? "block" : "hidden"} md:block`}
        >
          <ProductDetailCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TopSellingCardList;
