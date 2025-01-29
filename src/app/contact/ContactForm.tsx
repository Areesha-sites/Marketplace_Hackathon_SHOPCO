"use client";
import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { ContactFormData } from "../../../types/ComponentsTypes";
import { FormEvent } from "react";
const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent!");
  };
  return (
    <>
      <div className="">
        <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-6 p-4 lg:px-7 sm:px-7 xl:px-24 mx-auto mt-3 md:mt-10 bg-white font-satoshi">
          <div>
            <h1 className="text-gray-800 text-[18px] font-extrabold xxl:text-[23px]">
              Thanks for Choosing SHOP.CO!
            </h1>
            <p className="sm:text-sm text-[12px] text-gray-500 mt-4 xxl:text-[16px]">
              At SHOP.CO, we are passionate about helping businesses of all
              sizes thrive in the digital age. We offer a comprehensive suite of
              services, from concept development and branding to e-commerce
              solutions and marketing strategies. <br /> <br /> We have helped
              countless clients achieve their goals, and we are confident we can
              do the same for you. Let us turn your vision into a reality.
            </p>
            <div className="md:mt-12 mt-6">
              <h2 className="text-gray-800 text-base font-bold xxl:text-[20px]">
                Socials
              </h2>
              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-8 w-8 hover:bg-black cursor-pointer transition-all duration-300 ease-in-out rounded-full flex items-center justify-center shrink-0 hover:text-white">
                  <GrFacebookOption className="h-5 w-5 text-black hover:text-white " />
                </li>
                <li className="bg-[#e6e6e6cf] h-8 w-8 hover:bg-black cursor-pointer transition-all duration-300 ease-in-out rounded-full flex items-center justify-center shrink-0 hover:text-white">
                  <FaLinkedinIn className="h-4 w-4 text-black hover:text-white " />
                </li>
                <li className="bg-[#e6e6e6cf] h-8 w-8 hover:bg-black cursor-pointer transition-all duration-300 ease-in-out rounded-full flex items-center justify-center shrink-0 hover:text-white">
                  <FaInstagram className="h-4 w-4 text-black hover:text-white" />
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex md:flex-row flex-col gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/2 rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-none border-none font-satoshi xxl:text-[16px]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/2 rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-none border-none font-satoshi xxl:text-[16px]"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full md:w-1/2 rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-none border-none font-satoshi xxl:text-[16px]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Mobile Number"
                className="w-full md:w-1/2 rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-none border-none font-satoshi xxl:text-[16px]"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md py-3 px-4 xxl:text-[16px] bg-gray-100 text-gray-800 text-sm outline-none border-none font-satoshi"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="text-white bg-black xxl:text-[16px] rounded-[50px] hover:bg-black/90 tracking-wide text-sm px-4 py-3 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
