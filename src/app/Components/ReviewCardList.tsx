"use client";
import { reviewCardsdata } from "../../../data/data";
import ReviewCard from "./ReviewCard";
import { useState, useEffect } from "react";
const ReviewCardList = () => {
  const [displayedCards, setDisplayedCards] = useState(6);
  const [allCardsLoaded, setAllCardsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setAllCardsLoaded(displayedCards === reviewCardsdata.length);
  }, [displayedCards]);
  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const delay = 2000;
      await new Promise((resolve) => setTimeout(resolve, delay));
      const newDisplayedCards = Math.min(
        displayedCards + 2,
        reviewCardsdata.length
      );
      setDisplayedCards(newDisplayedCards);
      setAllCardsLoaded(newDisplayedCards === reviewCardsdata.length);
    } catch (error) {
      console.error("Error loading more reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center h-[800px] overflow-y-auto overflow-x-visible">
        {reviewCardsdata.slice(0, displayedCards).map((item) => (
          <div key={item.id}>
            <ReviewCard {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          className={`md:w-[230px] w-[195px] h-[47px] md:h-[52px] py-[14px] md:py-[16px] px-[36px] md:px-[54px] rounded-[62px] border-[1px] border-black/10 md:text-[16px] text-[14px] font-satoshi hover:bg-black hover:text-white transition-all font-medium whitespace-nowrap items-center flex justify-center ${
            allCardsLoaded || isLoading ? "disabled cursor-not-allowed" : ""
          }`}
          onClick={handleLoadMore}
          disabled={allCardsLoaded || isLoading}
        >
          {isLoading
            ? "Loading..."
            : allCardsLoaded
            ? "No More Reviews"
            : "Load More Reviews"}
        </button>
      </div>
    </>
  );
};

export default ReviewCardList;
