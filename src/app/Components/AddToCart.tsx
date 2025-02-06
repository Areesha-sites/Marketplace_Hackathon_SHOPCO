import { useUser, SignInButton } from "@clerk/nextjs";

const AddToCartButton = ({ product, selectedSize, selectedColor, addToCart }:any) => {
  const { isSignedIn } = useUser();

  return (
    <button
      onClick={() => {
        if (!isSignedIn) {
          window.location.href = "/sign-in"; // User ko Sign-In page pr redirect karo
          return;
        }
        if (!selectedSize || !selectedColor) {
          alert("Please select a size and color before adding to cart.");
          return;
        }
        addToCart(product, selectedSize, selectedColor);
      }}
      className="md:w-[400px] xxl:w-[400px] xl:w-[300px] md:h-[52px] h-[44px] py-[16px] sm:px-[54px] rounded-[62px] bg-black text-white text-[14px] md:text-[16px] font-medium items-center flex justify-center font-satoshi w-[180px] sm:w-[236px] whitespace-nowrap"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
