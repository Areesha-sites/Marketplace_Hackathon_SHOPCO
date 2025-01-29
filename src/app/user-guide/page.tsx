"use client";
import React, { useState, useEffect } from "react";
import UserGuideList from "./UserGuideList";
import { fetchGuides } from "./FetchGuides";
import GuideDetails from "./GuideDetails";
import { UserPageGuide } from "../../../types/ComponentsTypes";
const UserGuidePage: React.FC = () => {
  const [guides, setGuides] = useState<UserPageGuide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<UserPageGuide | null>(
    null
  );
  useEffect(() => {
    const getGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };
    getGuides();
  }, []);
  const handleGuideClick = (guide: UserPageGuide) => {
    setSelectedGuide(guide);
  };
  return (
    <div className="mt-48 container mx-auto px-4">
      {!selectedGuide ? (
        <UserGuideList guides={guides} onGuideClick={handleGuideClick} />
      ) : (
        <GuideDetails
          guide={selectedGuide}
          onBack={() => setSelectedGuide(null)}
        />
      )}
    </div>
  );
};

export default UserGuidePage;
