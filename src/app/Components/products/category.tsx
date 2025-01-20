"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import CategorySelection from "../CategorySelection";
interface Products {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  discountPercent: number | null;
  isNew: boolean | null;
  colors: string[];
  sizes: string[];
}
export const revalidate = 10;

export default function ProductsData() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type=="products"][0]{
        _id,
        name,
        description,
        price,
        "imageUrl": image.asset->url,
        category,
        discountPercent,
        "isNew": new,
        colors,
        sizes
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!activeCategory) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category.toLowerCase() === activeCategory.toLowerCase())
      );
    }
  }, [activeCategory, products]);
  return (
    <>
      <div className="mt-56">
        <CategorySelection
          selectedCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-11 mt-16">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow-md flex flex-col"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-800 font-bold mt-2">${product.price}</p>
              {product.discountPercent && (
                <p className="text-red-500 text-sm">
                  {product.discountPercent}% off
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}