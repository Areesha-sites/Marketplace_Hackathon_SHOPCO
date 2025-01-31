'use client';
import { useRouter } from 'next/navigation';
import { useCheckoutStore } from '@/app/lib/store';
export default function CheckoutSteps() {
  const { step, setStep } = useCheckoutStore(); 
  const router = useRouter();
  const steps = [
    'Shipping Information',  
    'Payment Information',   
    'Review & Place Order',  
  ];
  const goToStep = (step: number) => {
    setStep(step);  
    router.push(`/checkoutSteps/${step}`);  
  };
  return (
    <div className="flex space-x-4 mt-48">
      {steps.map((stepName, index) => (
        <div
          key={index}
          className={`cursor-pointer ${step === index ? 'text-blue-500' : 'text-gray-500'}`}
          onClick={() => goToStep(index)}
        >
          <span className="font-semibold">{stepName}</span>
        </div>
      ))}
    </div>
  );
}
