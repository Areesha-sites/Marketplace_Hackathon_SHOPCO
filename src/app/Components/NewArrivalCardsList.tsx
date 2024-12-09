import { newArrivalCardsData } from "../../../data/data";
import NewArrivalCard from "./NewArrivalCard";

const NewArrivalCardsList = () => {
  return (
    <div className=" ">
      {newArrivalCardsData.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index < 2 ? "block" : "hidden"
          } md:block `}
        >
          <NewArrivalCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default NewArrivalCardsList;