"use ";
import { useState } from "react";
import Image from "next/image";
const ImageGallery = ({ product }: any) => {
  const defaultImage = "/path/to/default/image.jpg";
  const [activeImage, setActiveImage] = useState(
    product?.image || defaultImage
  );
  const handleImageClick = (imageSrc: string) => {
    setActiveImage(imageSrc);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-300 rounded-[20px] w-[444px] h-[530px] flex justify-center items-center">
        <Image
          height={100}
          width={100}
          src={activeImage}
          alt="Active"
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      {product && product.image && (
        <div className="flex gap-4 mt-4">
          <Image
            height={100}
            width={100}
            src={product.image}
            alt="Small 1"
            onClick={() => handleImageClick(product.image)}
            className="w-[112px] h-[106px] rounded-[20px] border-[1px] border-black cursor-pointer"
          />
          <Image
            height={100}
            width={100}
            src={product.image}
            alt="Small 2"
            onClick={() => handleImageClick(product.image)}
            className="w-[112px] h-[106px] rounded-[20px] cursor-pointer"
          />
          <Image
            height={100}
            width={100}
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
