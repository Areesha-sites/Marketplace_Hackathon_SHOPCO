"use client"
import React, { useState, useEffect } from 'react';
import UserGuideList from './UserGuideList';
import { fetchGuides } from './FetchGuides';
import GuideDetails from './GuideDetails';

const UserGuidePage = () => {
  const [guides, setGuides] = useState([]);
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    const getGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };

    getGuides();
  }, []);

  const handleGuideClick = (guide: any) => {
    setSelectedGuide(guide);
  };

  return (
    <div className="mt-48 container mx-auto px-4">  
      {!selectedGuide ? (
        <UserGuideList guides={guides} onGuideClick={handleGuideClick} />
      ) : (
        <GuideDetails guide={selectedGuide} onBack={() => setSelectedGuide(null)} />
      )}
    </div>
  );
};

export default UserGuidePage;