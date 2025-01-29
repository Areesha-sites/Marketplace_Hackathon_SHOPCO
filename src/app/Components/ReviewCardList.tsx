"use client"
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import { ReviewCardPropsTypes } from "../../../types/ComponentsTypes";
const ReviewsCard: React.FC<ReviewCardPropsTypes> = ({
  _id,
  name,
  description,
  date,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="border p-4 rounded">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{date}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onRemove(_id)}>Remove</button> 
    </div>
  );
};

const ReviewCardList = () => {
  const [reviewCardsData, setReviewCardsData] = useState<ReviewCardPropsTypes[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [currentReview, setCurrentReview] = useState<ReviewCardPropsTypes | null>(null);

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
        const typedReviews = reviews as ReviewCardPropsTypes[];
        setReviewCardsData(typedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);
  const handleAddReview = async (newReview: { name: string; description: string; date: string }) => {
    const reviewWithId: ReviewCardPropsTypes = {
      _id: uuidv4(),
      name: newReview.name,
      description: newReview.description,
      date: newReview.date,
      rating: "/rating.svg", 
      correct: "/correct-icon.svg",
      onEdit: () => {},
      onRemove: async () => {},
    };
    try {
      await client.create({
        _type: "customerReviews",
        ...newReview, 
      });
      setReviewCardsData((prevReviews) => [reviewWithId, ...prevReviews]);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };
  const handleEditReview = async (updatedReview: ReviewCardPropsTypes) => {
    if (!currentReview) return;
    try {
      await client
        .patch(currentReview._id)
        .set({
          name: updatedReview.name,
          description: updatedReview.description,
          date: updatedReview.date,
        })
        .commit();
      setReviewCardsData((prevReviews) =>
        prevReviews.map((review) =>
          review._id === currentReview._id ? updatedReview : review
        )
      );
      setIsModalOpen(false);
      setIsEditModal(false);
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };
  const handleRemoveReview = async (id: string) => {
    try {
      await client.delete(id);
      setReviewCardsData((prevReviews) => prevReviews.filter((review) => review._id !== id));
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] xl:gap-y-[20px] justify-items-center h-[800px] overflow-y-auto overflow-x-visible">
        {reviewCardsData.length > 0 ? (
          reviewCardsData.map((item) => (
            <ReviewsCard
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              date={new Date(item.date).toLocaleDateString()}
              rating={item.rating || "/rating.svg"} 
              correct={item.correct || "/correct-icon.svg"} 
              onEdit={() => {
                setCurrentReview(item);
                setIsEditModal(true);
                setIsModalOpen(true);
              }}
              onRemove={async (id) => await handleRemoveReview(id)}
            />
          ))
        ) : (
          <div className="font-satoshi">No reviews yet. Be the first to leave a review!</div>
        )}
      </div>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSubmit={isEditModal ? handleEditReview : handleAddReview}
          currentReview={currentReview}
        />
      )}
    </>
  );
};

export default ReviewCardList;