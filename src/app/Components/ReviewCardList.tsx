import { reviewCardsdata } from "../../../data/data";
import ReviewCard from "./ReviewCard";
const ReviewCardList = () => {
  return (
    <div className="">
      {reviewCardsdata.map((item, index) => (
         <div
         key={item.id}
         className={`${
           index < 3 ? "block" : "hidden"
         } md:block `}
       >
         <ReviewCard {...item} />
       </div>
      ))}
    </div>
  );
};

export default ReviewCardList;