import ProductDetailCard from "./ProductDetailCard";
import { productDetailsCardData } from "../../../data/data";
const TopSellingCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] ">
      {productDetailsCardData.map((item, index) => (
        <div className={`${index < 2 ? "block" : "hidden"} md:block `}>
          <ProductDetailCard key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
};
export default TopSellingCardList;
