import { reviewCardsdata } from "../../../data/data";
import ReviewCard from "./ReviewCard";
const ReviewCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center">
      {reviewCardsdata.map((item, index) => (
        <div
          key={item.id}
          className={`${index < 3 ? "block" : "hidden"} md:block `}
        >
          <ReviewCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default ReviewCardList;
