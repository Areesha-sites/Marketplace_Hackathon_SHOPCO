import { casualCardsData } from "../../../data/data";
import CasualCards from "./CasualCard";
const CasualCardsList = () => {
  return (
    <div
      className="
        grid 
        grid-cols-2 
        gap-y-[100px] 
        gap-x-[10px] 
        md:grid-cols-3 
        md:gap-[20px]
        items-start
      "
    >
      {casualCardsData.map((item, index) => (
        <div
          className={`${index < 6 ? "block" : "hidden"} md:block`}
          key={index}
        >
          <CasualCards {...item} />
        </div>
      ))}
    </div>
  );
};

export default CasualCardsList;
