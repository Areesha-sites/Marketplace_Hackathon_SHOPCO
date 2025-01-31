'use client';
import { useCheckoutStore } from "@/app/lib/store";
export default function OrderSummary() {
  const { billing, shipping, payment } = useCheckoutStore();
  return (
    <div>
      <h2 className="text-xl font-semibold mt-48">Order Summary</h2>
      <p><strong>Billing:</strong> {billing.name}, {billing.address}</p>
      <p><strong>Shipping:</strong> {shipping.name}, {shipping.address}</p>
      <p><strong>Payment:</strong> **** **** **** {payment.cardNumber.slice(-4)}</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Confirm Order</button>
    </div>
  );
}
