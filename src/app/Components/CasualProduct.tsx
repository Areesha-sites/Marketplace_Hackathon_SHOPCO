"use client"
import { client } from "@/sanity/lib/client";
import CasualCardsProductGrid from "./CasualCardsProductGrid";
import { useState, useEffect } from "react";
type Product = {
  _id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image_url: string;
  rating: number;
};

const getProducts = async () => {
  const products = await client.fetch(`
    *[_type=="product"][0..5]{
      _id,
      name,
      description,
      quantity,
      price,
      "image_url":image.asset->url,
      rating
    }
  `);
  return products;
};

export default async function CasualPrduct() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products'); // or use your API
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}
