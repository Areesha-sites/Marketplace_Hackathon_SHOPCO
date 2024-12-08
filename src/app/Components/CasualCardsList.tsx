import CasualCards from "./CasualCard";
import { casualCardsData } from "../../../data/data";
const CausalCardsList = () => {
  return (
    <div className="">
      {casualCardsData.map((item) => (
        <CasualCards key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CausalCardsList;
