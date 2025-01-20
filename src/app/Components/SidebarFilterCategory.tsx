// const SideBarCategorySelection = ({
//   onSelectCategory,
//   activeCategory,
// }: {
//   onSelectCategory: (category: string | null) => void;
//   activeCategory: string | null;
// }) => {
//   const categories = [
//     { title: "All", value: null },
//     { title: "T-Shirts", value: "tshirt" },
//     { title: "Shorts", value: "short" },
//     { title: "Jeans", value: "jeans" },
//     { title: "Hoodies", value: "hoodie" },
//     { title: "Shirts", value: "shirt" },
//   ];

//   return (
//     <div className="w-[250px] p-4 bg-gray-100">
//       {categories.map((category, index) => (
//         <div
//           key={index}
//           className={`p-2 cursor-pointer ${
//             activeCategory === category.value ? "bg-gray-300 font-bold" : ""
//           }`}
//           onClick={() => onSelectCategory(category.value)}
//         >
//           {category.title}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SideBarCategorySelection;