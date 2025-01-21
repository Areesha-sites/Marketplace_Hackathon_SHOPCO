"use client";
import { useState, useEffect } from "react";
import ReviewsCard from "./ReviewCard";
import { client } from "@/sanity/lib/client";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
interface ReviewPropsTypes {
  _id: string;
  name: string;
  description: string;
  date: string;
}
const ReviewCardList = () => {
  const [reviewCardsData, setReviewCardsData] = useState<ReviewPropsTypes[]>(
    []
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await client.fetch(
          `*[_type == "customerReviews"]{
            _id,
            name,
            description,
            date
          }`
        );
        setReviewCardsData(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);
  const handleAddReview = async (newReview: {
    name: string;
    description: string;
    date: string;
  }) => {
    const reviewWithId: ReviewPropsTypes = {
      ...newReview,
      _id: uuidv4(),
    };
    try {
      await client.create({
        _type: "customerReviews",
        name: newReview.name,
        description: newReview.description,
        date: newReview.date,
      });
      console.log("Review added successfully to Sanity");
      setReviewCardsData((prevReviews) => [reviewWithId, ...prevReviews]);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] justify-items-center h-[800px] overflow-y-auto overflow-x-visible">
        {reviewCardsData.length > 0 ? (
          reviewCardsData.map((item) => (
            <ReviewsCard
              key={item._id}
              id={item._id}
              title={item.name}
              description={item.description}
              date={new Date(item.date).toLocaleDateString()}
              rating="/rating.svg"
              correct="/correct-icon.svg"
            />
          ))
        ) : (
          <div>No reviews yet. Be the first to leave a review!</div>
        )}
      </div>
      <div className="absolute top-10 left-10">
        <button
          onClick={() => setIsModalOpen(true)}
          className="md:w-[166px] sm:w-[113px] md:h-[48px] h-[40px] py-[10px] sm:py-[16px] px-[10px] sm:px-[20px] rounded-[62px] absolute md:left-[1178px] xl:top-[-120px] xxl:left-[1090px] xl:left-[970px] md:top-[888px] flex justify-center items-center bg-black text-white whitespace-nowrap text-[10px] sm:text-[12px] md:text-[16px] font-medium top-[-5px] left-[40px] font-satoshi sm:left-[80px]"
        >
          Write a Review
        </button>
      </div>
      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddReview}
        />
      )}
    </>
  );
};

export default ReviewCardList;
