import { topSellingCardsData } from "../../../data/data";
import TopSellingCard from "./TopSellingCard";
const TopSellingCardList = () => {
  return (
    <div className=" ">
    {topSellingCardsData.map((item, index) => (
      <div
        key={item.id}
        className={`${
          index < 2 ? "block" : "hidden"
        } md:block `}
      >
        <TopSellingCard {...item} />
      </div>
    ))}
  </div>
  );
};

export default TopSellingCardList;
