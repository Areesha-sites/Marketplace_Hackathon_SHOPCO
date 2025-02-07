"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { ProductSuggestion } from "../../../types/ComponentsTypes";
const NavbarSearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<ProductSuggestion[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!query) {
      setSuggestions([]);
      return;
    }
    const fetchProducts = async () => {
      const searchQuery = `*[_type in ["casual", "women", "kids", "men", "newArrivals", "topSelling", "products"] && name match "${query}*" ] {
        _id,
        name,
        "imageUrl": image.asset->url,
        _type
      }`;
      try {
        const results: ProductSuggestion[] = await client.fetch(searchQuery);
        setSuggestions(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    fetchProducts();
  }, [query]);

  const handleSelect = (product: ProductSuggestion) => {
    setQuery("");
    setSuggestions([]);
    switch (product._type) {
      case "casual":
        router.push(`/casualDetails/${product._id}`);
        break;
      case "women":
        router.push(`/womenDetails/${product._id}`);
        break;
      case "kids":
        router.push(`/kidsDetails/${product._id}`);
        break;
      case "men":
        router.push(`/menDetails/${product._id}`);
        break;
      case "newArrivals":
        router.push(`/newArrival/${product._id}`);
        break;
      case "topSelling":
        router.push(`/topSelling/${product._id}`);
        break;
      case "products":
        router.push(`/productDetailsCard/${product._id}`);
        break;
      default:
        console.warn(`Unknown product type: ${product._type}`);
    }
  };

  return (
    <div className=" w-[260px] sm:w-[340px] md:w-[400px] xl:w-[357px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[6px] md:py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px] items-center font-satoshi relative">
      <Image
        src="/Frame (34).svg"
        alt="search-icon"
        height={24}
        width={24}
        className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[15px]"
      />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:text-[12px] lg:text-[16px] font-normal text-black/40 border-none outline-none bg-bgLightGrayColor font-satoshi"
        placeholder="Search for products..."
      />
      {suggestions.length > 0 && (
        <div className="absolute left-0 top-[calc(100%+4px)] w-full lg:w-[calc(100vw-70vw)] bg-white shadow-lg rounded-md z-50 max-h-60 border overflow-auto">
          <ScrollArea>
            <ul className="p-2">
              {suggestions.map((product) => (
                <li
                  key={product._id}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(product)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={40}
                    width={40}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{product.name}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      )}
    </div>
  );
};

export default NavbarSearchBar;