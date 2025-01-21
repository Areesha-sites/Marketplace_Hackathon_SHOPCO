"use client";
import React from "react";
import Footer from "../Components/Footer";
import { useState } from "react";
import axios from "axios";
import {
  Address,
  Rate,
  trackingObjType,
} from "../../../types/Tracking-ShipmentTypes";
import { cartProductsWhichCanBeShipped } from "../../../data";
import Link from "next/link";
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
    setSubmittedData(formData); // Add this line to save the form data
    alert("Details saved successfully!");
  };
  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   setSubmittedData(formData);
  // };
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "", // Optional
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no", // 'no' means a commercial address
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  // const [loading, setLoading] = useState(false);

  // Function to handle form submission of shipping rates
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        // map the cart products which can be shipped and use only weight and dimensions
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });
      // see the response in browser
      console.log(response.data);
      // Update the state with the fetched rates
      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while fetching rates."]);
    } finally {
      setLoading(false);
    }
  };

  // Function to create label from selected rate
  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
    }

    setLoading(true);
    setErrors([]);

    try {
      // get rateId which user selected
      const response = await axios.post("/api/shipengine/label", {
        rateId: rateId,
      });
      const labelData = response.data;
      // see the response of label in browser
      console.log(labelData);
      // set pdf url
      setLabelPdf(labelData.labelDownload.href);
      // set tracking obj
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.log(error);
      setErrors(["An error occurred while creating the label."]);
    } finally {
      setLoading(false);
    }
  };
  const handleGetShippingRates = async () => {
    setLoading(true);
    try {
      // Make API call to fetch shipping rates
      const response = await fetch("/api/calculate-shipping");
      const data = await response.json();
      // Handle the response data
    } catch (error) {
      console.error("Error fetching shipping rates:", error);
      // Handle the error (e.g., display an error message)
    } finally {
      setLoading(false);
    }
  };
  return (
    <section>
      <div className="checkout-container mt-44 h-auto pb-20">
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
                  {/* <button className="mt-4 text-white bg-black hover:bg-black/85 font-satoshi rounded-[50px] px-4 py-2 w-[200px] h-[50px]">
                Get Shipping Rates
              </button> */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-4 text-white bg-black hover:bg-black/85 font-satoshi rounded-[50px] px-4 py-2 w-[200px] h-[50px]"
                  >
                    {loading ? "Calculating..." : "Get Shipping Rates"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {rates.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl px-7 font-semibold font-satoshiBold text-gray-800 mb-4">
                Available Shipping Rates
              </h2>
              <div className="gap-4 grid grid-cols-3 px-5">
                {rates.map((rate) => (
                  <div
                    key={rate.rateId}
                    className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer font-satoshi ${
                      rateId === rate.rateId
                        ? "border-gray-600 bg-gray-100"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    onClick={() => setrateId(rate.rateId)}
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="shippingRate"
                        checked={rateId === rate.rateId}
                        onChange={() => setrateId(rate.rateId)}
                        className="form-radio h-4 w-4 text-gray-500 bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-satoshi font-medium text-gray-700">
                          <strong>Carrier:</strong> {rate.carrierFriendlyName}
                        </p>
                        <p className="text-gray-600 font-satoshi">
                          <strong>Service:</strong> {rate.serviceType}
                        </p>
                        <p className="text-gray-800 font-semibold font-satoshi">
                          <strong>Cost:</strong> {rate.shippingAmount.amount}{" "}
                          {rate.shippingAmount.currency}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {rateId && (
            <div className="mt-8 flex justify-center items-center">
              <button
                onClick={handleCreateLabel}
                disabled={loading}
                className="w-[700px] px-20 mx-auto py-2 bg-black text-white rounded-[50px] hover:bg-black/80 disabled:bg-gray-400 h-[50px] font-satoshi"
              >
                {loading ? "Creating Label..." : "Create Label"}
              </button>
            </div>
          )}

          {trackingObj && (
            <div className="mt-8  p-6 bg-gray-50 rounded-lg shadow px-16 mx-9">
              <h2 className="text-xl font-satoshi font-semibold text-gray-800 mb-4">
                Tracking thinks (We are using ShipEngine test api key so order
                will not trace)
              </h2>
              <p className="font-satoshi">
                tracking number: {trackingObj.trackingNumber}
              </p>
              <p className="font-satoshi"> labelId: {trackingObj.labelId}</p>
              <p className="font-satoshi">
                {" "}
                carrierCode: {trackingObj.carrierCode}
              </p>

              <div className="flex gap-4 mt-4 justify-center items-center">
                <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
                  <button className="px-6 py-3 font-satoshi bg-black text-white rounded-[50px]  hover:bg-black/80">
                    Track Order
                  </button>
                </Link>
                {labelPdf && (
                  <div className="flex justify-center items-center ">
                    <Link target="_blank" href={labelPdf}>
                      {" "}
                      <button className="px-6 py-3 font-satoshi bg-white border border-black/5  text-black rounded-[50px]  hover:bg-black hover:text-white">
                        Download Label
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          {errors.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Errors
              </h2>
              <div className="space-y-2">
                {errors.map((error, index) => (
                  <p key={index} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* footer */}
      <div className="absolute top-[2100px]">
        <Footer />
      </div>
    </section>
  );
};
export default Checkout;
