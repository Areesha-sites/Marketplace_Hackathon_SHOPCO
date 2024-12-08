import HappyCustomerCard from "./HappyCustomerCard";
import { happyCustomerCardData } from "../../../data/data";
const HappyCustomerCardList = () => {
  return (
    <div className=" overflow-hidden">
    {/* Card Container */}
    <div className="">
      {happyCustomerCardData.map((item) => (
        <HappyCustomerCard key={item.id} {...item} />
      ))}
    </div>
  </div>
  );
};

export default HappyCustomerCardList;
