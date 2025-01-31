'use client';
import { useCheckoutStore } from '../lib/store';
import CheckoutSteps from './components/CheckoutSteps';
import { useRouter } from 'next/navigation';
export default function Checkout() {
  const { step } = useCheckoutStore();
  const router = useRouter();
  return (
    <div className="max-w-3xl mx-auto p-6 mt-40">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <CheckoutSteps />
      <button 
        onClick={() => router.push(`/checkoutSteps/${step}`)} 
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Continue to Step {step}
      </button>
    </div>
  );
}
