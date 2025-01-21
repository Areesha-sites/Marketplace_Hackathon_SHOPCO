import { useState, useEffect } from "react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratingReviews?: number;
  imageUrl: string;
  category: string;
  discountPercent?: number;
  isNew?: boolean;
  colors: string[];
  offer?: string;
  sizes: string[];
}

const ProductGallery: React.FC<{ productId: string }> = ({ productId }) => {
  const [productData, setProductData] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<string[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "casual" && _id == $id][0] {
        _id,
        name,
        description,
        price,
        ratingReviews,
        "imageUrl": image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        offer,
        sizes
      }`;

      const response = await fetch(
        `/api/sanity?query=${encodeURIComponent(query)}&id=${productId}`
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setProductData(data[0]);
        setThumbnails(data[0].imageUrl); // Assuming a single image URL for thumbnails initially
        setMainImage(data[0].imageUrl); // Set initial main image
      }
    };

    fetchProduct();
  }, [productId]);

  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  return (
    productData && ( // Render only if product data is available
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex space-x-6 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col space-y-4">
            {thumbnails.map((thumb, index) => (
              <Image
                key={index}
                height={80}
                width={80}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(thumb)}
                className="w-24 h-24 object-cover cursor-pointer hover:opacity-75 border-2 border-gray-200"
              />
            ))}
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={mainImage}
              alt="Main Display"
              width={444} // Adjust width as needed
              height={480} // Adjust height as needed
              className="w-full h-full object-cover border-4 border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ProductGallery;
