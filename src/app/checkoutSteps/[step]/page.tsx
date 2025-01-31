'use client';
import { useCheckoutStore } from '@/app/lib/store';
import BillingForm from '@/app/checkout/components/BillingForm';
import ShippingForm from '@/app/checkout/components/ShippingForm';
import PaymentForm from '@/app/checkout/components/PaymentForm';
import OrderSummary from '@/app/checkout/components/OrderSummary';
import { useRouter } from 'next/navigation';
export default function CheckoutStep({ params }: { params: { step: string } }) {
  const { setStep } = useCheckoutStore(); 
  const router = useRouter();
  const stepNumber = parseInt(params.step);
  const renderStep = () => {
    switch (stepNumber) {
      case 1:
        return <BillingForm />;
      case 2:
        return <ShippingForm />;
      case 3:
        return <PaymentForm />;
      case 4:
        return <OrderSummary />;
      default:
        return <BillingForm />;
    }
  };
  const nextStep = () => {
    if (stepNumber < 4) {
      setStep(stepNumber + 1); 
      router.push(`/checkoutSteps/${stepNumber + 1}`); 
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6">
      {renderStep()}
      {stepNumber < 4 && ( 
        <button
          onClick={nextStep}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Step
        </button>
      )}
    </div>
  );
}