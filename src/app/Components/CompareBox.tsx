"use client"
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./App.css"; // Assuming you have some CSS for your cards and dialog.

const ProductCard = ({ product }: { product: { id: number; name: string; price: number; image: string } }) => {
  const [compareItems, setCompareItems] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCompareClick = (product: any) => {
    if (compareItems.includes(product)) {
      // Remove from compare
      setCompareItems(compareItems.filter((item) => item.id !== product.id));
    } else if (compareItems.length < 2) {
      // Add to compare
      setCompareItems([...compareItems, product]);
    } else {
      toast.warning("You can only compare two items at a time!");
    }
  };

  const handleCompareButtonClick = () => {
    if (compareItems.length < 2) {
      toast.error("Please select two items to compare.");
    } else {
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="card mt-8">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <div className="card-icons">
        <button className="wishlist-icon">❤️</button>
        <button className="compare-icon" onClick={() => handleCompareClick(product)}>
          {compareItems.includes(product) ? "✓ Compare" : "⇄ Compare"}
        </button>
      </div>
      <button className="compare-button" onClick={handleCompareButtonClick}>
        Compare Selected
      </button>

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <button className="dialog-close" onClick={closeDialog}>
              ✖
            </button>
            <h2>Compare Items</h2>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  {compareItems.map((item) => (
                    <th key={item.id}>{item.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Price</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>${item.price}</td>
                  ))}
                </tr>
                {/* Add more rows for other features */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard