"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
interface Product {
  id: string;
  title: string;
  price: number;
}
interface SearchbarTypes {
  _id: string;
  name: string;
  route: any;
}
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import SearchBar from "./Searchbar";
import { client } from "@/sanity/lib/client";
const Navbar = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  const dropdownItems = [
    {
      name: "Casual",
      href: "/casual",
      description:
        "Discover our curated selection of men's clothing and accessories.",
    },
    {
      name: "Women",
      href: "/women",
      description: "Explore our stylish collection for women.",
    },
    {
      name: "Kids",
      href: "/kids",
      description: "Find adorable outfits for your little ones.",
    },
    {
      name: "Men",
      href: "/men",
      description: "Shop our exclusive deals and discounts.",
    },
  ];

  const navbarLinks = [
    {
      name: "On Sale",
      href: "/",
    },
    {
      name: "New Arrivals",
      href: "/",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<SearchbarTypes[]>([]);
  const fetchSuggestions = async (searchTerm: string) => {
    const routes = [
      "casualDetails",
      "newArrival",
      "topSelling",
      "productDetailsCard",
      "kidsDetails",
      "womenDetails",
      "menDetails",
    ];
    const queries = routes.map((route) =>
      client.fetch(
        `*[_type == "${route}" && lower(name) match "${searchTerm.toLowerCase()}*"] {
          _id,
          name,
          _type
        }`
      )
    );
    const results = await Promise.all(queries);
    console.log("Results from all routes:", results); 
    const allResults = results.flat().map((product) => ({
      ...product,
      route: product._type,
    }));
  
    console.log("Flattened Results:", allResults);
  
    setSuggestions(allResults);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchTerm(query);
    if (query) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  };
  const handleMouseLeave = () => {
    setSuggestions([]);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const handleAddToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length);
  };
  // const fetchSuggestions = async (searchTerm: string, route: string) => {
  //   let query;
  //   switch (route) {
  //     case "casualDetails":
  //       query = `*[_type == "casual" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //     case "newArrivalDetails":
  //       query = `*[_type == "newArrivals" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //     case "topSellingDetails":
  //       query = `*[_type == "topSelling" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //     case "productsDetailedProduct":
  //       query = `*[_type == "products" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //       case "kids":
  //       query = `*[_type == "kids" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //       case "men":
  //       query = `*[_type == "men" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //       case "women":
  //       query = `*[_type == "women" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //     default:
  //       query = `*[_type == "casual" && name match "${searchTerm}*"] {
  //         _id,
  //         name
  //       }`;
  //       break;
  //   }
  //   const results = await client.fetch(query);
  //   setSuggestions(results);
  // };

  // const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const query = e.target.value;
  //   setSearchTerm(query);
  //   if (query) {
  //     // Pass the correct route name here based on where you are searching
  //     fetchSuggestions(query, "casualDetails"); // Adjust this based on the current route or search context
  //   } else {
  //     setSuggestions([]);
  //   }
  // };

  return (
    <>
      <nav className="w-full h-[41px] absolute md:top-[52px] lg:top-[62px] top-[47px] flex justify-center items-center xl:px-[60px] md:px-5 lg:px-[50px] xxl:px-[87px] ">
        <div className="flex lg:justify-center md:justify-between items-center h-full w-full lg:gap-[20px] xl:gap-[40px]">
          <h1 className="lg:text-[32px] md:-mt-2 -mt-1 text-black font-bold md:static absolute md:left-[56px] text-[25.2px] font-integralCf tracking-wider md:block hidden">
            <Link href="/"> SHOP.CO</Link>
          </h1>
          <div className=" xl:gap-[14px] md:flex lg:gap-[10px] xxl:gap-[24px] md:gap-[10px] items-center hidden">
            <div className="">
              <div
                className="relative inline-block"
                onMouseLeave={closeDropdown}
              >
                <div
                  className="flex items-center gap-1
          cursor-pointer"
                  onMouseEnter={toggleDropdown}
                >
                  <span className="text-black font-satoshi xl:text-[16px] lg:text-[14px] text-[12px]">
                    Shop
                  </span>
                  <Image
                    height={16}
                    width={16}
                    src="/Frame (33).svg"
                    alt="dropdown"
                    className="xl:h-[16px] xl:w-[16px] w-[14px] h-[14px]"
                  />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 z-30 w-[500px] grid grid-cols-2 ">
                    {dropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block group"
                      >
                        <div className="px-3 py-3 hover:bg-gray-100 rounded-md">
                          <p className="text-black text-[16px]  font-medium group-hover:text-blue-600 font-satoshi">
                            {item.name}
                          </p>
                          <p className="text-gray-500 text-[12px] leading-[1.5] font-satoshi">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            {["On Sale", "New Arrivals", "Contact"].map((link, index) => (
              <Link
                key={index}
                href="/"
                className="xl:text-[16px] md:text-[12px] lg:text-[12px] font-normal text-black hover:text-gray-700 whitespace-nowrap font-satoshi ml-3"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* <div className="xl:w-[577px] lg:w-[400px] md:w-[250px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px] items-center font-satoshi relative">
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
                <ScrollArea className="h-48 w-full max-h-[200px] overflow-y-auto">
                  {suggestions.map((product) => (
                    <Link
                      key={product._id}
                      href={`/casualDetails/${product._id}`}
                    >
                      <p className="block px-4 py-2 hover:bg-gray-200 text-black font-satoshi">
                        {product.name}
                      </p>
                    </Link>
                  ))}
                </ScrollArea>
              </div>
            )}
          </div> */}

          <div className="xl:w-[577px] lg:w-[400px] md:w-[250px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor flex gap-[12px] items-center font-satoshi relative">
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
                <ScrollArea className="h-48 w-full max-h-[200px] overflow-y-auto">
                  {suggestions.map((product) => (
                    <Link
                      key={product._id}
                      href={`/${product.route}/${product._id}`}
                    >
                      <p className="block px-4 py-2 hover:bg-gray-200 text-black font-satoshi">
                        {product.name}
                      </p>
                    </Link>
                  ))}
                </ScrollArea>
              </div>
            )}
          </div>

          {/* <div className="xl:w-[577px] lg:w-[400px] md:w-[250px] xl:h-[48px] lg:h-[45px] md:h-[30px] py-[12px] px-[16px] rounded-[62px] bg-bgLightGrayColor md:flex gap-[12px] items-center hidden font-satoshi ">
            <Image
              src="/Frame (34).svg"
              alt="search-icon"
              height={24}
              width={24}
              className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[15px]"
            />
            <input
              type="text"
              className=" md:text-[12px] lg:text-[16px] font-normal text-black/40 border-none outline-none bg-bgLightGrayColor font-satoshi"
              placeholder="Search for products..."
            />
          </div> */}

          <div className="flex justify-center items-center md:gap-[14px] md:w-[62px] xxl:w-[62px] xxl:gap-[14px] md:h-[24px] w-[96px] h-[24px] gap-[12px] xl:gap-[10px] absolute md:left-[278px] md:static">
            <Image
              src="/Frame (35).svg"
              alt="searchBar"
              height={24}
              width={24}
              className="xl:h-[24px] xl:w-[24px] lg:h-[20px] lg:w-[20px] md:w-[15px] h-[24px] w-[24px] md:h-[15px] md:hidden hidden"
            />
            <div className="flex flex-col ">
              <Link href="/cart">
                <Image
                  src="/Frame (36).svg"
                  alt="cart-icon"
                  height={24}
                  width={24}
                  className="xl:h-[24px] xl:w-[24px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] md:block hidden "
                />
              </Link>
            </div>
            <Link href="/signup">
              <Image
                src="/Frame (37).svg"
                alt="user-icon"
                height={24}
                width={24}
                className="xl:h-[24px] xl:w-[24px] h-[24px] w-[24px] md:w-[15px] md:h-[15px] lg:w-[25px] lg:h-[25px] md:block hidden"
              />
            </Link>
          </div>
        </div>
      </nav>
      <div className="flex justify-between py-2 px-6 md:hidden h-[41px] w-full absolute top-[46px]">
        <div className="">
          <div className="flex justify-center w-[180px] items-center">
            <Sheet>
              <SheetTrigger asChild>
                <div className="absolute left-[0px] top-[3px] md:hidden cursor-pointer w-[35px] h-[35px]">
                  <Button className="bg-white shadow-white hover:bg-white">
                    <IoMenu
                      className="absolute left-[16px] md:hidden cursor-pointer w-[35px] h-[35px] text-black"
                      onClick={toggleMenu}
                    />
                  </Button>
                </div>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-14">
                  <div
                    className="w-[57px] h-[22px] flex gap-[4px] flex-row justify-center items-center cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <span className="text-[16px] font-normal text-black font-satoshi">
                      Shop
                    </span>
                    <Image
                      src="/Vector (4).svg"
                      alt="dropdown"
                      height={16}
                      width={16}
                      className="h-[13px] w-[13px]"
                    />
                  </div>
                  {isDropdownOpen && (
                    <div className="mt-[4px] bg-white shadow-lg absolute left-[20px] rounded-[4px] p-[8px] w-[200px] h-[300px] grid grid-cols-1 overflow-auto">
                      {dropdownItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block group"
                        >
                          <div className="px-3 py-3 hover:bg-gray-100 rounded-md">
                            <p className="text-black text-[16px]  font-medium group-hover:text-blue-600 font-satoshi">
                              {item.name}
                            </p>
                            <p className="text-gray-500 text-[12px] leading-[1.5] font-satoshi">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {["On Sale", "New Arrivals", "Brands"].map((link, index) => (
                    <Link
                      key={index}
                      href="/"
                      className="text-[14px] font-normal text-black mb-[8px] hover:text-gray-700 font-satoshi flex flex-col mt-4"
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="md:hidden block text-[25px] -mt-2 font-bold text-black font-integralCf">
              <Link href="/"> SHOP.CO</Link>
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px] md:hidden">
          <Image
            src="/Frame (35).svg"
            alt="searchBar"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
          <Link href="/cart">
            <Image
              src="/Frame (36).svg"
              alt="cart-icon"
              height={24}
              width={24}
              className="h-[24px] w-[24px]"
            />
          </Link>
          <Image
            src="/Frame (37).svg"
            alt="user-icon"
            height={24}
            width={24}
            className="h-[24px] w-[24px]"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
