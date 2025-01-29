import Image from "next/image";
import { IoTrash } from "react-icons/io5";
import { Product } from "../../../types/ComponentsTypes";
const ComparisonTable = ({
  products,
  removeCompareItem,
}: {
  products: Product[];
  removeCompareItem: (id: string) => void;
}) => {
  return (
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-200 p-2">Product</th>
          <th className="border border-gray-200 p-2">Product Name</th>
          <th className="border border-gray-200 p-2">Price</th>
          <th className="border border-gray-200 p-2">Discount</th>
          <th className="border border-gray-200 p-2">Rating</th>
          <th className="border border-gray-200 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: Product) => (
          <tr key={product._id}>
            <td className="border border-gray-200 p-2 h-[60px] w-[60px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                height={100}
                width={100}
                className="h-full w-full object-contain"
              />
            </td>
            <td className="border border-gray-200 p-2">{product.name}</td>
            <td className="border border-gray-200 p-2">${product.price}</td>
            <td className="border border-gray-200 p-2 text-black/50 line-through">
              ${product.discountPercent}
            </td>
            <td className="border border-gray-200 p-2">
              {product.ratingReviews}
            </td>
            <td className="border border-gray-200 p-2 flex justify-center items-center w-full text-center">
              <button onClick={() => removeCompareItem(product._id)}>
                <IoTrash className="text-red-500 hover:text-red-400 h-5 w-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
