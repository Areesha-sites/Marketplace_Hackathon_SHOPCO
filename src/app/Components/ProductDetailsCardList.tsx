import ProductDetailCard from "./ProductDetailCard";
import { productDetailsCardData } from "../../../data/data";
const TopSellingCardList = () => {
  return (
    <div className="">
      {productDetailsCardData.map((item) => (
        <ProductDetailCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TopSellingCardList;
