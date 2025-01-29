import Image from "next/image";
const SideBarCategorySelection = ({
  onSelectCategory,
  activeCategory,
}: {
  onSelectCategory: (category: string | null) => void;
  activeCategory: string | null;
}) => {
  const categories = [
    { title: "T-Shirts", value: "tshirt" },
    { title: "Shorts", value: "short" },
    { title: "Jeans", value: "jeans" },
    { title: "Hoodie", value: "hoodie" },
    { title: "Shirts", value: "shirt" },
  ];
  return (
    <div className="lg:w-[247px] w-full h-auto flex flex-col gap-[20px]">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`lg:w-[247px] w-full h-[16px] justify-between flex items-center cursor-pointer ${
            activeCategory === category.value ? "bg-gray-200" : ""
          }`}
          onClick={() => onSelectCategory(category.value)}
        >
          <span
            className={`text-[16px] font-normal ${
              activeCategory === category.value
                ? "text-black font-semibold"
                : "text-black text-opacity-60"
            }`}
          >
            {category.title}
          </span>
          <Image
            src="/side-chveron.svg"
            alt="icon"
            height={16}
            width={16}
            className="h-[16px] w-[16px]"
          />
        </div>
      ))}
    </div>
  );
};
export default SideBarCategorySelection;
