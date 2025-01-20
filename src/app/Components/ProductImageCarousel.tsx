import React, { useState } from 'react';
import Image from 'next/image'; 

const ProductImageCarousel = ({ product }:any) => {
  const [activeImage, setActiveImage] = useState(product.image);

  const handleImageClick = (imageSrc:any) => {
    setActiveImage(imageSrc);
  };

  return (
    <>
     
      {/* ... other images with similar click handlers and conditional border classes */}
    </>
  );
};

export default ProductImageCarousel;