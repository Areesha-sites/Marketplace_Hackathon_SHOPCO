"use client";
import React from "react";
import Footer from "../Components/Footer";
import { useState } from "react";
const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSaveAll = () => {
    console.log("Form Data Saved:", formData);
    alert("Details saved successfully!");
  };
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData); // Update submittedData only when the form is submitted
  };
  return (
    <section>
      <div className="checkout-container mt-44">
        <h1 className="text-4xl tracking-widest font-bold text-center">
          Checkout
        </h1>
        <div className="checkout-content">
          <div className="bg-white border-1 rounded-lg shadow relative m-10">
            <div className="p-6 space-y-6">
              <form action="#" onSubmit={handleSubmit}>
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="full-name"
                      className="text-sm font-satoshiBold font-medium text-gray-900 block mb-2"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="shadow-sm font-satoshi bg-gray-50 text-gray-900 sm:text-sm rounded-lg border-none outline-none block w-full p-2.5"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone"
                      className="text-sm font-satoshiBold font-medium text-gray-900 block mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="shadow-sm bg-gray-50 font-satoshi text-gray-900 sm:text-sm rounded-lg border-none outline-none block w-full p-2.5"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="text-sm font-medium font-satoshiBold text-gray-900 block mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="shadow-sm bg-gray-50 border-none outline-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 font-satoshi"
                      placeholder="Enter your address"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="text-sm font-satoshiBold font-medium text-gray-900 block mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="shadow-sm font-satoshi bg-gray-50 border-none  outline-none text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="text-sm font-medium font-satoshiBold text-gray-900 block mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="shadow-sm bg-gray-50 border-none outline-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 font-satoshi"
                      placeholder="Enter your state"
                      required
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="price"
                      className="text-sm font-satoshiBold font-medium text-gray-900 block mb-2"
                    >
                      Postal Code
                    </label>
                    <input
                      type="number"
                      name="postalCode"
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      className="shadow-sm font-satoshi border-none outline-none bg-gray-50 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                      placeholder="Enter your postal code"
                      required
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b flex gap-4 ">
                  {/* <button
                    className="text-white bg-black hover:bg-black/85 font-satoshi font-medium rounded-lg text-sm px-5 py-2.5"
                    type="button"
                
                  >
                    Save All
                  </button> */}
                  <button
                    className=" text-white bg-black hover:bg-black/85 font-satoshi rounded-[50px] px-4 py-2 w-[200px] h-[50px]"
                    type="submit"
                    onClick={handleSaveAll}
                  >
                    Save all
                  </button>
                </div>
              </form>
            </div>
          </div>
          {submittedData && (
            <div className="mt-10 p-6 bg-gray-50 rounded-lg shadow px-16 mx-9">
              <h2 className="text-2xl font-extrabold font-satoshiBold uppercase">
                Your Submitted Details:
              </h2>
              <p className="font-satoshi">
                <strong>Full Name:</strong> {submittedData.fullName}
              </p>
              <p className="font-satoshi">
                <strong>Phone Number:</strong> {submittedData.phone}
              </p>
              <p className="font-satoshi">
                <strong>Address:</strong> {submittedData.address}
              </p>
              <p className="font-satoshi">
                <strong>City:</strong> {submittedData.city}
              </p>
              <p className="font-satoshi">
                <strong>State:</strong> {submittedData.state}
              </p>
              <p className="font-satoshi">
                <strong>Postal Code:</strong> {submittedData.postalCode}
              </p>
              <button className="mt-4 text-white bg-black hover:bg-black/85 font-satoshi rounded-[50px] px-4 py-2 w-[200px] h-[50px]">
                Get Shipping Rates
              </button>
            </div>
          )}
        </div>
      </div>
      {/* footer */}
      <div className="absolute top-[1500px]">
        <Footer />
      </div>
    </section>
  );
};
export default Checkout;
