"use client";
import UserGuideList from "./UserGuideList";
import { fetchGuides } from "./FetchGuides";
import GuideDetails from "./GuideDetails";
import { UserPageGuide, GuideList, Guide } from "../../../types/ComponentsTypes";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
const UserGuidePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, [0, 100], ["0%", "100%"]); 
  const progressPercentage = useTransform(progress, (value) => `${Math.round(value)}%`); 
  useEffect(() => {
    const interval = setInterval(() => {
      progress.set(progress.get() + 10); 
      if (progress.get() >= 100) {
        clearInterval(interval);
        setIsLoading(false); 
      }
    }, 200);
    window.onload = () => {
      clearInterval(interval);
      setIsLoading(false);
    };
    return () => clearInterval(interval);
  }, [progress]);
 
  const [guides, setGuides] = useState<UserPageGuide[]>([]);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null); 
  useEffect(() => {
    const getGuides = async () => {
      const data = await fetchGuides();
      setGuides(data);
    };
    getGuides();
  }, []);

  const formattedGuides: GuideList[] = guides.map(({ title, _id }) => ({
    title,
    slug: { current: _id },
  }));

  const handleGuideClick = (guide: GuideList) => {
    const fullGuide = guides.find((g) => g._id === guide.slug.current);
    if (fullGuide) {
      setSelectedGuide({
        title: fullGuide.title,
        content: fullGuide.content,
        slug: { current: fullGuide._id },
      });
    }
  };
  return (
   <div className="">
     <AnimatePresence>
    {isLoading && (
      <motion.div
        key="loading-animation"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#f5f5f5", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#333", 
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "backOut" }}
            style={{
              fontSize: "64px",
              marginBottom: "20px",
            }}
          >
          </motion.div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "20px",
              fontFamily: "'Integralcf', sans-serif",
            }}
          >
            Welcome to SHOP.CO
          </h1>
          <div
            style={{
              width: "80%",
              maxWidth: "400px",
              height: "10px",
              backgroundColor: "#e0e0e0", 
              borderRadius: "5px",
              overflow: "hidden",
              margin: "0 auto",
            }}
          >
            <motion.div
               style={{
                width: progressWidth,
                height: "100%",
                backgroundColor: "#333",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(104, 85, 224, 0.6)",
              }}
              animate={{
                scale: progress.get() === 100 ? [1, 1.05, 1] : 1,
                transition: { repeat: Infinity, duration: 1 },
              }}
            />
          </div>
          <motion.div
            style={{
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {progressPercentage}
          </motion.div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
    <div className="mt-48 container mx-auto px-4">
      {!selectedGuide ? (
        <UserGuideList guides={formattedGuides} onGuideClick={handleGuideClick} />
      ) : (
        <GuideDetails guide={selectedGuide} onBack={() => setSelectedGuide(null)} />
      )}
    </div>
    {!isLoading && (
        <div className="absolute md:top-[1830px] lg:top-[2700px] xxl:top-[1800px] xl:top-[850px] top-[1800px] sm:top-[2000px] z-20">
          <Footer />
        </div>
      )}
   </div>
  );
};

export default UserGuidePage;
