import { useMediaQuery } from "react-responsive";
import { casualCardsData } from "../../../data/data";
import CasualCards from "./CasualCard";
const CausalCardsList = () => {
  const isSmallScreen = useMediaQuery({maxWidth: 767})
  return (
    <div className=" ">
    {casualCardsData.map((item, index) => (
      <div
        key={item.id}
        className={`${
          index < 6 ? "block" : "hidden"
        } md:block `}
      >
        <CasualCards {...item} isSmallScreen={isSmallScreen}/>
      </div>
    ))}
  </div>
  );
};

export default CausalCardsList;