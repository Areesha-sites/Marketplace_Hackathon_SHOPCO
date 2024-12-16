import { topSellingCardsData } from "../../../data/data";
import TopSellingCard from "./TopSellingCard";
const TopSellingCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px]  ">
      {topSellingCardsData.map((item, index) => (
        <div
          key={item.id}
          className={`${index < 2 ? "block" : "hidden"} md:block `}
        >
          <TopSellingCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TopSellingCardList;
