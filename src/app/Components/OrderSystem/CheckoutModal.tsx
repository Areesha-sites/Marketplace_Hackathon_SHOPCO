"use client";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { createOrUpdateUser } from "@/actions/createUser";
import { createOrder } from "@/actions/CreateOrder";
import { createShipment } from "@/actions/createShipment";
import toast from "react-hot-toast";
const CheckoutModal = ({
  isOpen,
  closeModal,
  onSubmit,
  orderSuccess,
  setCartItems,
  calculateSubtotal,
  cartItems,
}: {
  isOpen: any;
  closeModal: () => void;
  onSubmit: (formData: any) => void;
  orderSuccess: any;
  setCartItems: any | any;
  calculateSubtotal: number | any;
  cartItems: any | any;
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    countryCode: "+92",
    address: "",
    city: "",
    zipCode: "",
    state: "",
    country: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [shipmentDetails, setShipmentDetails] = useState<any | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<string | null>(null);
  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState<any | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showShipmentDetails, setShowShipmentDetails] = useState(false); 
  const countries = [
    { code: "+92", name: "Pakistan", flag: "🇵🇰" },
    { code: "+1", name: "USA", flag: "🇺🇸" },
    { code: "+44", name: "UK", flag: "🇬🇧" },
    { code: "+91", name: "India", flag: "🇮🇳" },
    { code: "+61", name: "Australia", flag: "🇦🇺" },
  ];
  useEffect(() => {
    emailjs.init(`${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: e.target.value,
    }));
  };
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData].trim()) {
        newErrors[key] =
          `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    });
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  function generateOrderId(): string {
    const randomDigits = Math.floor(10000 + Math.random() * 90000); 
    return `ORDER${randomDigits}`;
  }
  function generateUserId(): string {
    const randomDigits = Math.floor(10000 + Math.random() * 90000); 
    return `User${randomDigits}`;
  }
  const orderId = generateOrderId();
  const userId = generateUserId();
  const handleSubmit = async (e: React.FormEvent) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to place this order?"
    );
    if (!isConfirmed) return;
    e.preventDefault();
    if (validateForm()) {
      const userData = { ...formData };
      handleCheckout(userData);
      const handleUserSubmit = async () => {
        const userData = {
          userId: userId,
          name: formData.fullName, 
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          countryCode: formData.countryCode,
          address: formData.address,
          city: formData.city,
          zipCode: formData.zipCode,
          state: formData.state,
          country: formData.country,
          order: cartItems.map((item: any) => ({
            orderId: orderId,
            productId: item.id,
            productName: item.name,
            productPrice: item.price,
            quantity: item.quantity,
          })),
        };
        console.log("User Data", userData);
        if (
          !userData.name ||
          !userData.email ||
          !userData.phoneNumber ||
          !userData.address
        ) {
          console.error("All form fields are required.");
          return;
        }
        try {
          const result = await createOrUpdateUser(userData);
          console.log("User created successfully:", result);
        } catch (error) {
          console.error("Failed to create user:", error);
        }
      };
      await handleUserSubmit();
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      let hours = currentDate.getHours();
      const minutes = String(currentDate.getMinutes()).padStart(2, "0");
      const seconds = String(currentDate.getSeconds()).padStart(2, "0");
      const amPm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; 
      const formattedDateTime = `${year}-${month}-${day} ${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${amPm}`;
      const handleOrderSubmit = async () => {
        const OrderData = {
          orderId: orderId,
          userId: userId,
          orderDate: formattedDateTime,
          orderData: cartItems.map((item: any) => ({
            productId: item.id,
            productName: item.name,
            originalPrice: item.price,
            quantity: item.quantity,
            totalAmount:
              (typeof item.price === "string"
                ? parseFloat(item.price)
                : item.price) * item.quantity,
            status: "Delivered",
          })),
        };
        console.log("Order Data", OrderData);
        try {
          const result = await createOrder(OrderData);
          console.log("Order created successfully:", result);
        } catch (error) {
          console.error("Failed to create order:", error);
        }
      };
      await handleOrderSubmit();
      const handleSendEmail = async () => {
        try {
          const orderItems = cartItems?.length
            ? cartItems
                .map(
                  (item: any) =>
                    `${item.name} (x${item.quantity})\nSKU: ${item.id || "N/A"}\nProduct Link: https://marketplacefurniture715.vercel.app/products/${item.id}`
                )
                .join("\n\n")
            : "No items found.";
          const customerEmailParams = {
            to_email: userData.email || "areesha21314@gmail.com",
            to_name: userData.fullName || "Customer",
            item_name: orderItems,
            total_price: `£${calculateSubtotal().toFixed(2)}`,
            recipient_name: userData.fullName || "N/A",
            shipping_address: userData.address || "N/A",
            city: userData.city || "N/A",
            postal_code: userData.zipCode || "N/A",
            contact_number: userData.phoneNumber || "N/A",
            support_email: "areesha21314@gmail.com",
            support_phone: "+923312969746",
            payment_method: "COD",
            company_name: "SHOP.CO",
          };
          if (!formData.email) {
            console.log("Email Error:", customerEmailParams);
            return;
          }
          const storeEmailParams = {
            ...customerEmailParams,
            customer_email: userData.email,
            to_email: "areesha21314@gmail.com",
          };
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CUSTOMER!,
            customerEmailParams
          );
          toast.success("Emails sent successfully!");
        } catch (error) {
          console.error("Error sending email:", error);
          toast.error("An error occurred while sending the email.");
        }
      };
      await handleSendEmail();
      localStorage.removeItem("cart");
      setCartItems([]);
    }
  };
  const handleCheckout = async (userData: any) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.length === 0) {
      setCheckoutStatus("Your cart is empty. Please add items to your cart.");
      setIsLoading(false);
      return;
    }
    setIsLoading(true); 
    const addressFrom = {
      name: "SHOP.CO",
      street1: "North Karachi",
      city: "Karachi",
      state: "Sindh",
      zip: "71500",
      country: "Pakistan",
    };
    const addressTo = {
      name: userData.fullName,
      street1: userData.address,
      city: userData.city,
      state: userData.state,
      zip: userData.zipCode,
      country: userData.country,
    };
    const parcels = [
      {
        length: "10",
        width: "10",
        height: "10",
        distance_unit: "in",
        weight: "5",
        mass_unit: "lb",
      },
    ];
    let amount = `2373232 -/Rs`;
    setIsLoading(true);
    try {
      const response = await fetch("/api/shippoOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addressFrom,
          addressTo,
          parcels,
          orderId: orderId,
          totalAmount: amount,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setShipmentDetails({
          orderId: data.orderId,
          totalAmount: data.totalAmount,
          eta: data.eta,
          trackingNumber: data.trackingNumber,
        });
        setShowShipmentDetails(true);
        setCheckoutStatus(
          "Your order has been successfully placed. We will notify you once it's shipped!"
        );
      } else {
        setCheckoutStatus("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      setCheckoutStatus("An error occurred. Please try again.");
    } finally {
      setIsLoading(false); 
    }
  };
  const handleTrackShipment = async () => {
    if (!trackingNumber) {
      alert("Please enter a tracking number");
      return;
    }
    setIsTracking(true);
    try {
      const carrier = "shippo";
      const orderId = shipmentDetails?.orderId;
      const response = await fetch("/api/liveTracking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ trackingNumber, carrier, orderId }),
      });
      const data = await response.json();
      console.log("Tracking API response:", data);
      if (response.ok && data?.trackingDetails) {
        setTrackingData(data);
        const currentDate = new Date();
        const formattedDateTime = currentDate.toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        const etaDate = new Date(data.trackingDetails.eta);
        const etaFormattedDate = etaDate.toLocaleString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        const status =
          data?.trackingDetails?.tracking_history?.find(
            (historyItem: any) => historyItem.status === "TRANSIT"
          )?.status || "Pending";
        const shipmentData = {
          orderId,
          userName: formData.fullName,
          userEmail: formData.email,
          userPhone: formData.phoneNumber,
          countryCode: formData.countryCode,
          shippingAddress: `${formData.address}, ${formData.state}, ${formData.city}, ${formData.country}`,
          status,
          trackingNumber: shipmentDetails.trackingNumber,
          shipmentDate: formattedDateTime,
          deliveryDate: etaFormattedDate,
          carrier,
          shipmentCharges: "Free",
          totalAmount: shipmentDetails.totalAmount,
        };
        console.log("Shipment Data:", shipmentData);
        try {
          const result = await createShipment(shipmentData);
          console.log("Shipment created successfully:", result);
        } catch (shipmentError) {
          console.error("Failed to create shipment:", shipmentError);
        }
      } else {
        console.error("Tracking details missing in response.");
        setTrackingData(null);
      }
    } catch (error) {
      console.error("Error fetching tracking status:", error);
      setTrackingData(null);
    } finally {
      setIsTracking(false);
    }
  };
  const userFormData = { ...formData };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {!shipmentDetails && orderSuccess ? (
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 font-integralCf tracking-wider">Enter Your Details</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block font-medium font-satoshi">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName} 
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 text-black  font-satoshi"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium font-satoshi">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="countryCode" className="block font-medium font-satoshi">
                      Country Code
                    </label>
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleCountryCodeChange}
                      className="w-full p-2 border border-gray-300 outline-none rounded-l-lg font-satoshi"
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="phoneNumber" className="block font-medium font-satoshi">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                      placeholder="Enter your phone number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm font-satoshi">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block font-medium font-satoshi">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border outline-none rounded-lg w-full p-2 font-satoshi"
                    placeholder="Enter your address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-sm font-satoshi">{errors.address}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="state" className="block font-medium font-satoshi">
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                      placeholder="Enter your state"
                    />
                    {errors.state && (
                      <p className="text-red-500 text-sm font-satoshi">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="city" className="block font-medium font-satoshi">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm font-satoshi">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block font-medium font-satoshi">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                      placeholder="Enter your zip code"
                    />
                    {errors.zipCode && (
                      <p className="text-red-500 text-sm font-satoshi">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="country" className="block font-medium font-satoshi">
                      Country Name
                    </label>
                    <input
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Enter your country name"
                      className="border outline-none rounded-lg w-full p-2 font-satoshi"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-6">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2 bg-black text-white rounded-[50px] border hover:bg-white hover:text-black transition-all duration-300 cursor-pointer ease-in-out border-black/30 font-satoshi"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-white rounded-[50px] border hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ease-in-out border-black/30 text-black font-satoshi"
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                  {isLoading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="w-12 h-12 border-4 border-gray-300 border-t-darkPrimary rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 max-h-[90vh] overflow-y-auto">              {checkoutStatus && (
                <div>
                  <p className="text-darkPrimary text-xl font-clash mt-4 p-2">
                    {checkoutStatus}
                  </p>
                  <p className="text-xl text-gray-500 p-4 outline-double outline-black/10 rounded-lg font-satoshi">
                  Thank you for shopping with us! Your order is on its way to bring you joy.  
                   Explore more amazing finds next time – we can not wait to see you again!   
                  </p>
                </div>
              )}
              {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-darkPrimary rounded-full animate-spin"></div>
                </div>
              )}
              {showShipmentDetails && shipmentDetails && (
                <div className="mt-8 bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold border-b border-darkPrimary py-1 mb-2 font-satoshiBold">
                    Shipment Details
                  </h3>
                  <p className="font-satoshi">Order ID: {shipmentDetails.orderId}</p>
                  <p className="font-satoshi">Total Amount: {shipmentDetails.totalAmount}</p>
                  <p className="font-satoshi">ETA: {shipmentDetails.eta}</p>
                  <p className="font-satoshi">
                    Tracking Number:{" "}
                    {shipmentDetails.trackingNumber ||
                      "Tracking information is not available yet."}
                  </p>
                </div>
              )}
              <div className="mt-6 bg-white p-6 rounded-lg  shadow-lg shadow-gray-600">
                <h1 className="text-2xl font-bold mb-4 font-integralCf tracking-wider">Track Your Shipment</h1>
                <p className="p-2 font-satoshi">
                  Write (SHIPPO_TRANSIT) in input field to track history
                </p>
                <div className="flex space-x-4 mb-6">
                  <input
                    type="text"
                    placeholder="Tracking Number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="p-2 border rounded-md w-full font-satoshi"
                  />
                  <button
                    onClick={handleTrackShipment}
                    className="bg-black text-white px-5 py-2 rounded-[50px] hover:text-black hover:bg-white hover:border hover:border-black/10 transition-all duration-300 ease-linear shadow-md"
                    disabled={isTracking}
                  >
                    Track
                  </button>
                  {isTracking && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="w-12 h-12 border-4 border-darkPrimary border-t-yellow-500 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>
                {trackingData && trackingData.trackingDetails && (
                  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl border-b-2 font-integralCf tracking-wider p-2 font-bold mb-4">
                      Shipment Tracking Details
                    </h2>
                    <p className="font-satoshi">
                      <strong className="font-satoshi">Carrier:</strong>{" "}
                      {trackingData.trackingDetails.carrier}
                    </p>
                    <p>
                      <strong className="font-satoshi">ETA:</strong>{" "}
                      {trackingData.trackingDetails.eta || "N/A"}
                    </p>
                    <p>
                      <strong className="font-satoshi">Origin:</strong>{" "}
                      {`North Karachi | Karachi, Sindh - Pakistan`}
                    </p>
                    <p>
                      <strong className="font-satoshi">Destination:</strong>{" "}
                      {`${userFormData.address}, ${userFormData.state}, ${userFormData.city}, ${userFormData.country}`}
                    </p>
                    <h3 className="text-lg font-bold mt-4 font-satoshiBold">Tracking History</h3>
                    {trackingData.trackingDetails.tracking_history?.filter(
                      (historyItem: any) => historyItem.status === "TRANSIT"
                    ).length > 0 ? (
                      <ul className="list-disc ml-6 font-satoshi">
                        {trackingData.trackingDetails.tracking_history
                          .filter(
                            (historyItem: any) =>
                              historyItem.status === "TRANSIT"
                          )
                          .map((historyItem: any, index: number) => (
                            <li key={index}>
                              <p className=" font-satoshi">
                                <strong>Date:</strong>{" "}
                                {new Date(
                                  historyItem.status_date
                                ).toLocaleString()}
                              </p>
                              <p>
                                <strong>Location:</strong>{" "}
                                {`${historyItem.location?.city || "N/A"}, ${historyItem.location?.state || "N/A"}, ${historyItem.location?.country || "N/A"}`}
                              </p>
                              <p>
                                <strong>Status:</strong> {historyItem.status}
                              </p>
                              <p>
                                <strong>Details:</strong>{" "}
                                {historyItem.status_details || "N/A"}
                              </p>
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-black">
                        No tracking history with status &apos;TRANSIT&apos;.
                      </p>
                    )}
                  </div>
                )}
                {!trackingData && !isTracking && (
                  <p className="text-gray-500">
                    Enter a tracking number to see shipment details.
                  </p>
                )}
              </div>
              <div className="flex justify-end mt-6 mb-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2 bg-black rounded-[50px] text-white hover:bg-white hover:text-black hover:border hover:border-black/10 transition-all duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CheckoutModal;

