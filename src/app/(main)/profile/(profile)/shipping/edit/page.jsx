"use client";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend or perform validation
    console.log("Form data:", formData);
    // Reset form fields after submission
    setFormData({
      fullName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
  };

  return (
    <>
    <main>
      <section className="px-[15px] pt-[8px] pb-[12px] shadow-md  flex  items-center mb-[36px]">
        <Link href="/">
          <IoIosArrowBack size={20} />
        </Link>

        <h1 className="text-[18px] leading-[22px] font-semibold ml-16  w-full items-center justify-center">
          Adding Shipping Address
        </h1>
      </section>
      <section className="address-form px-[15px] pb-[30px]">
        <form onSubmit={handleSubmit}>
          <div className="mt-[16px] bg-[rgb(255,255,255)] px-[20px] h-[64px]   py-[5px] rounded-[4px] shadow-sm form-group">
            <h1 className="text-[11px] text-[rgb(155,155,155)] w-full">
              Full Name
            </h1>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>

          <div className="mt-[16px] bg-[rgb(255,255,255)]  h-[64px] px-[20px] py-[5px] rounded-[4px] shadow-sm form-group">
            <h1 className="text-[11px] text-[rgb(155,155,155)]">Address</h1>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>
          <div className="mt-[16px] bg-[rgb(255,255,255)] h-[64px]  px-[20px]  py-[5px] rounded-[4px] shadow-sm form-group">
            <h1 className="text-[11px] text-[rgb(155,155,155)]">City</h1>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>

          <div className="mt-[16px] bg-[rgb(255,255,255)] h-[64px] px-[20px]  py-[5px] rounded-[4px] shadow-sm form-group">
            <h1 className="text-[11px] text-[rgb(155,155,155)]">
              State/Province/Region
            </h1>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>
          <div className="mt-[16px] bg-[rgb(255,255,255)] h-[64px]  px-[20px]  py-[5px] rounded-[4px] shadow-sm form-group w-full">
            <h1 className="text-[11px] text-[rgb(155,155,155)] w-full">
              Zip Code (Postal Code)
            </h1>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>
          <div className="mt-[16px] bg-[rgb(255,255,255)] h-[64px]  px-[20px]  py-[5px] rounded-[4px] shadow-sm form-group">
            <h1 className="text-[11px] text-[rgb(155,155,155)]">Country</h1>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="placeholder:text-[rgb(155,155,155)] py-1 placeholder:text-[14px] outline-none focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="btn btn-primary w-full mt-[40px] bg-white text-black hover:text-white hover:bg-[rgb(219,48,34)] rounded-[84px] border-[2px] border-[rgb(20,23,24)] hover:border-[rgb(219,48,34)] font-semibold"
          >
            SAVE ADDRESS
          </Button>
        </form>
        <style jsx>{`
          .address-form {
            max-width: 400px;
            margin: auto;
          }
          .form-group {
            margin-bottom: 1rem;
          }
          h1 {
            margin-bottom: 0.5rem;
          }
          .btn {
            display: block;
            width: 100%;
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 0.25rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .btn:hover {
            background-color: #0056b3;
          }
        `}</style>
      </section>
    </main>
    <Header />
    </>
  );
};

export default AddressForm;
