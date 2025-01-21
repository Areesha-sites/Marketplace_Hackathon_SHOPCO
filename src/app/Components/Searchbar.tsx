// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// interface SearchbarTypes {
// _id: string,
// name: string
// }
// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [suggestions, setSuggestions] = useState<SearchbarTypes[]>([]);
//   const fetchSuggestions = async (searchTerm: string) => {
//     const query = `*[_type == "casual" && name match "${searchTerm}*"] {
//       _id,
//       name
//     }`;
//     const results = await client.fetch(query);
//     return results;
//   };
//   const handleSearchChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const query = e.target.value;
//     setSearchTerm(query);

//     if (query) {
//       const fetchedSuggestions = await fetchSuggestions(query);
//       setSuggestions(fetchedSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <div className="xl:w-[577px] lg:w-[400px] md:w-[250px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor md:flex gap-[12px] items-center hidden font-satoshi ">
//       <Image
//         src="/Frame (34).svg"
//         alt="search-icon"
//         height={24}
//         width={24}
//         className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[15px]"
//       />
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         className="md:text-[12px] lg:text-[16px] font-normal text-black/40 border-none outline-none bg-bgLightGrayColor font-satoshi"
//         placeholder="Search for products..."
//       />
//       {suggestions.length > 0 && (
//         <div className="absolute bg-white w-full rounded-[12px] shadow-lg mt-2">
//           {suggestions.map((product) => (
//             <Link key={product._id} href={`/product/${product._id}`}>
//               <a className="block px-4 py-2 hover:bg-gray-200">
//                 {product.name}
//               </a>
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface SearchbarTypes {
  _id: string;
  name: string;
}

const SearchBar = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchbarTypes[]>([]);

  const fetchSuggestions = async (searchTerm: string) => {
    const query = `*[_type == "casual" && name match "${searchTerm}*"] {
      _id,
      name
    }`;
    const results = await client.fetch(query);  // Ensure client is properly imported
    setSuggestions(results);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query) {
      fetchSuggestions(query);  // Fetch suggestions as the user types
    } else {
      setSuggestions([]);  // Clear suggestions when input is empty
    }
    onSearch(query); // Send the search term to the parent component (CasualCard)
  };

  return (
    <div className="search-bar-container mt-[-40px] relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for products..."
        className="search-input p-2 rounded-lg border  font-satoshi"
      />
      {suggestions.length > 0 && (
        <div className="absolute bg-white shadow-md rounded-lg w-full mt-2 font-satoshi">
          {suggestions.map((product) => (
            <Link key={product._id} href={`/casualDetails/${product._id}`}>
              <p className="block px-4 py-2 hover:bg-gray-200 text-black font-satoshi">
                {product.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;