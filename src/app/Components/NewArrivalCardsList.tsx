import { newArrivalCardsData } from "../../../data/data";
import NewArrivalCard from "./NewArrivalCard";

const NewArrivalCardsList = () => {
  return (
    <div className="flex flex-wrap justify-center md:flex-row gap-4 ">
      {newArrivalCardsData.map((item, index) => (
        <div
          key={item.id}
          className={`${
            index < 2 ? "block" : "hidden"
          } md:block md:w-auto flex-1`}
        >
          <NewArrivalCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default NewArrivalCardsList;