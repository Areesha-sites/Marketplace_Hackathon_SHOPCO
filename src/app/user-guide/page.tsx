"use client";
import React, { useState, useEffect } from "react";
import UserGuideList from "./UserGuideList";
import { fetchGuides } from "./FetchGuides";
import GuideDetails from "./GuideDetails";
import { UserPageGuide, GuideList, Guide } from "../../../types/ComponentsTypes";

const UserGuidePage: React.FC = () => {
  const [guides, setGuides] = useState<UserPageGuide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null); 
  useEffect(() => {
    const getGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };
    getGuides();
  }, []);

  // Convert UserPageGuide to GuideList for UserGuideList component
  const formattedGuides: GuideList[] = guides.map(({ title, _id }) => ({
    title,
    slug: { current: _id }, // Convert _id to slug format
  }));

  // Convert UserPageGuide to Guide for GuideDetails component
  const handleGuideClick = (guide: GuideList) => {
    const fullGuide = guides.find((g) => g._id === guide.slug.current);
    if (fullGuide) {
      setSelectedGuide({
        title: fullGuide.title,
        content: [fullGuide.content], 
        slug: fullGuide.slug,
      });
    }
  };

  return (
    <div className="mt-48 container mx-auto px-4">
      {!selectedGuide ? (
        <UserGuideList guides={formattedGuides} onGuideClick={handleGuideClick} />
      ) : (
        <GuideDetails guide={selectedGuide} onBack={() => setSelectedGuide(null)} />
      )}
    </div>
  );
};

export default UserGuidePage;
