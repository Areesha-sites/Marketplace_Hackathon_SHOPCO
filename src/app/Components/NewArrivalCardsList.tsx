import { newArrivalCardsData } from "../../../data/data";
import NewArrivalCard from "./NewArrivalCard";
const NewArrivalCardsList = () => {
  return (
    <div className="">
      {newArrivalCardsData.map((item) => (
        <NewArrivalCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NewArrivalCardsList;
