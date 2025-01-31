'use client';
import { useCheckoutStore } from '@/app/lib/store';
import { useState } from 'react';
export default function PaymentForm() {
  const { setPayment } = useCheckoutStore();
  const [form, setForm] = useState({ cardNumber: '', expiry: '' });
  const handleSubmit = () => {
    setPayment(form);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mt-48">Payment Information</h2>
      <input
        type="text"
        className="border p-2 w-full mt-2"
        placeholder="Card Number"
        value={form.cardNumber}
        onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
      />
      <input
        type="text"
        className="border p-2 w-full mt-2"
        placeholder="Expiry Date (MM/YY)"
        value={form.expiry}
        onChange={(e) => setForm({ ...form, expiry: e.target.value })}
      />
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save Payment Info
      </button>
    </div>
  );
}
