import { topSellingCardsData } from "../../../data/data";
import TopSellingCard from "./TopSellingCard";
const TopSellingCardList = () => {
  return (
    <div className="">
      {topSellingCardsData.map((item) => (
        <TopSellingCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default TopSellingCardList;
