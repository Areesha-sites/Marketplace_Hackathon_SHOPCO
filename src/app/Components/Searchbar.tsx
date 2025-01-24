"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface SearchbarTypes {
  _id: string;
  name: string;
  _type: string;
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Ensure the type is explicitly string
  const [suggestions, setSuggestions] = useState<SearchbarTypes[]>([]); // Explicitly set the type as SearchbarTypes array
  const [products, setProducts] = useState<SearchbarTypes[]>([]); // Products are also of type SearchbarTypes array

  // Fetch all product data once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result: SearchbarTypes[] = await client.fetch(`
          *[_type in ["casualDetails", "newArrival", "topSelling", "productDetailsCard", "kidsDetails", "womenDetails", "menDetails"]] {
            _id,
            name,
            _type
          }
        `);
        console.log("Fetched Products:", result); // Debug log
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);
  

  // Handle input changes and filter suggestions
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
  
    if (query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );
      console.log("Filtered Suggestions:", filtered); // Debug log
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleMouseLeave = () => {
    setSuggestions([]);
  };

  return (
    <div className="xl:w-[377px] lg:w-[400px] md:w-[250px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor md:flex gap-[12px] items-center font-satoshi relative hidden">
      <Image
        src="/Frame (34).svg"
        alt="search-icon"
        height={24}
        width={24}
        className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[15px]"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="md:text-[12px] lg:text-[16px] font-normal text-black/40 border-none outline-none bg-bgLightGrayColor font-satoshi"
        placeholder="Search for products..."
      />
      {suggestions.length > 0 && (
        <div
          className="absolute top-[10px] bg-white shadow-md rounded-lg w-full mt-16 font-satoshi"
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-48 w-full max-h-[200px] overflow-y-auto">
            {suggestions.map((product) => (
              <Link key={product._id} href={`/${product._type}/${product._id}`}>
                <p className="block px-4 py-2 hover:bg-gray-200 text-black font-satoshi">
                  {product.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
