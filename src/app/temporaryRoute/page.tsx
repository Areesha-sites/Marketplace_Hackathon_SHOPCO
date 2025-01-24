import ProductCard from "../Components/CompareBox";
const App = () => {
  const products = [
    { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 300, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="app">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;