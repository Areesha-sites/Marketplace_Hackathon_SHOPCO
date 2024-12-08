import { reviewCardsdata } from "../../../data/data";
import ReviewCard from "./ReviewCard";
const ReviewCardList = () => {
  return (
    <div className="">
      {reviewCardsdata.map((item) => (
        <ReviewCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ReviewCardList;