"use "
import { useState } from "react";
const ImageGallery = ({ product }: any) => {
  const defaultImage = "/path/to/default/image.jpg"; // Replace with your default image path
  const [activeImage, setActiveImage] = useState(product?.image || defaultImage); // Default image

  const handleImageClick = (imageSrc: any) => {
    setActiveImage(imageSrc); // Update active image on click
  };

  return (
    <div className="flex flex-col items-center">
      {/* Main Display Area */}
      <div className="bg-gray-300 rounded-[20px] w-[444px] h-[530px] flex justify-center items-center">
        <img
          src={activeImage}
          alt="Active"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>

      {/* Smaller Images */}
      {product && product.image && (
        <div className="flex gap-4 mt-4">
          <img
            src={product.image}
            alt="Small 1"
            onClick={() => handleImageClick(product.image)}
            className="w-[112px] h-[106px] rounded-[20px] border-[1px] border-black cursor-pointer"
          />
          <img
            src={product.image}
            alt="Small 2"
            onClick={() => handleImageClick(product.image)}
            className="w-[112px] h-[106px] rounded-[20px] cursor-pointer"
          />
          <img
            src={product.image}
            alt="Small 3"
            onClick={() => handleImageClick(product.image)}
            className="w-[112px] h-[106px] rounded-[20px] cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
