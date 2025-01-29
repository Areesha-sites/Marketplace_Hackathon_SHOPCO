"use client";
import React, { useEffect, useRef } from "react";
import { GuideContentProps } from "../../../types/ComponentsTypes";
const GuideContent = ({ activeGuide, guides }: GuideContentProps) => {
  const guideRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (guideRef.current) {
      guideRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeGuide]);
  const guide = guides.find((g) => g.id === activeGuide);
  return (
    <div className="w-3/4 p-4" ref={guideRef}>
      {guide ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{guide.title}</h1>
          <p className="text-gray-700">{guide.content}</p>
        </>
      ) : (
        <p>Select a guide to view details.</p>
      )}
    </div>
  );
};

export default GuideContent;
