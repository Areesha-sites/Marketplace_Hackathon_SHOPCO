const Recommendations = ({ products }: any) => {
  const fetchRecommendedProducts = async (category:any) => {
    const query = `
      *[_type == "casual" && category == $category][0...4] {
        _id,
        title,
        category,
        price,
        "imageUrl": mainImage.asset->url
      }
    `;
    const params = { category };
  
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
        },
        body: JSON.stringify({ query, params }),
      }
    );
  
    const data = await response.json();
    return data.result;
  };
  console.log("Recommendations Products:", products); // Debug log
  return (
    <div className="mt-8 w-full h-auto bg-red-400">
      <h2 className="text-2xl font-bold mb-4 ">Recommended for You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="bg-white shadow-md p-4 rounded-lg hover:scale-105 transform transition"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-primary font-bold mt-2">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
