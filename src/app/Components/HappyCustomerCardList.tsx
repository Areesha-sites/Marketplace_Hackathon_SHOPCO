import HappyCustomerCard from "./HappyCustomerCard";
import { happyCustomerCardData } from "../../../data/data";
const HappyCustomerCardList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] justify-items-center">
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
