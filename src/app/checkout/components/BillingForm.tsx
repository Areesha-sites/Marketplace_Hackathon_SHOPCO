'use client';
import { useCheckoutStore } from '@/app/lib/store';
import { useState } from 'react';
export default function BillingForm() {
  const { setBilling } = useCheckoutStore();
  const [form, setForm] = useState({ name: '', email: '', address: '' });
  const handleSubmit = () => {
    setBilling(form);
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mt-44">Billing Information</h2>
      <input className="border p-2 w-full" placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 w-full mt-2" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full mt-2" placeholder="Address" onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <button onClick={handleSubmit} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </div>
  );
}
