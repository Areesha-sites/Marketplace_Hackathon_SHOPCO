'use client';
import { useCheckoutStore } from '@/app/lib/store';
import { useState } from 'react';
export default function ShippingForm() {
  const { setShipping } = useCheckoutStore();
  const [form, setForm] = useState({ name: '', address: '' });
  const handleSubmit = () => {
    setShipping(form); 
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mt-36">Shipping Information</h2>
      <input
        type="text"
        className="border p-2 w-full mt-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="text"
        className="border p-2 w-full mt-2"
        placeholder="Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Save Shipping Info
      </button>
    </div>
  );
}
