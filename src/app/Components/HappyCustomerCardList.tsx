import HappyCustomerCard from "./HappyCustomerCard";
import { happyCustomerCardData } from "../../../data/data";
const HappyCustomerCardList = () => {
  return (
    <div className="overflow-hidden">
      {happyCustomerCardData.map((item, index) => (
         <div
         key={item.id}
         className={`${
           index < 1 ? "block" : "hidden"
         } md:block `}
       >
         <HappyCustomerCard {...item} />
       </div>
      ))}
    </div>

  );
};

export default HappyCustomerCardList;
