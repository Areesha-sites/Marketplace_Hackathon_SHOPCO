"use client";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
interface CustomerTypes {
  _id: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  email: string;
}
const fetchCustomers = async (): Promise<CustomerTypes[]> => {
  const customers = await client.fetch(
    `*[_type == "customer"]{
      _id,
      fullName,
      phone,
      city,
      address,
      email
    }`
  );
  return customers;
};
const CustomerDashboard = () => {
  const [customers, setCustomers] = useState<CustomerTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const allCustomers = await fetchCustomers();
        setCustomers(allCustomers);
      } catch (error) {
        console.error("Error fetching customers:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCustomers();
  }, []);
  const filteredCustomers = customers.filter((customer) =>
    customer.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="bg-black text-white p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </div>
      <div className="grid grid-cols-5 font-bold text-lg py-3 border-b border-gray-700 text-center font-satoshiBold">
        <p>Name</p>
        <p>Phone</p>
        <p>Email</p>
        <p>City</p>
        <p>Address</p>
      </div>
      <div className="mt-4">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="grid grid-cols-5 items-center py-4 border-b border-gray-700 text-center"
            >
              <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse"></div>
            </div>
          ))
        ) : filteredCustomers.length === 0 ? (
          <div className="text-center text-white">No customers found</div>
        ) : (
          filteredCustomers.map((customer) => (
            <div
              key={customer._id}
              className="grid grid-cols-5 items-center py-4 border-b border-gray-700 text-center"
            >
              <p className="font-semibold font-satoshi ">{customer.fullName}</p>
              <p className="text-gray-400 text-sm font-satoshi">
                {customer.phone}
              </p>
              <p className="text-white font-bold font-satoshi">
                {customer.email}
              </p>
              <p className="text-gray-400 text-sm font-satoshi">
                {customer.city}
              </p>
              <p className="text-gray-400 text-sm font-satoshi">
                {customer.address}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
