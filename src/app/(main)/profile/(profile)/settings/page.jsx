"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Switch } from "@/components/ui/switch";

const page = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [salesNotification, setSalesNotification] = useState(true);
  const [newArrivalsNotification, setNewArrivalsNotification] = useState(false);
  const [deliveryStatusNotification, setDeliveryStatusNotification] =
    useState(false);

  const handleSalesNotificationChange = () => {
    setSalesNotification(!salesNotification);
  };

  const handleNewArrivalsNotificationChange = () => {
    setNewArrivalsNotification(!newArrivalsNotification);
  };

  const handleDeliveryStatusNotificationChange = () => {
    setDeliveryStatusNotification(!deliveryStatusNotification);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <main className="scrollbar min-h-[700px] overflow-y-auto overflow-clip">
        <section
          className={`px-[15px] pt-[8px] pb-[12px] shadow-md relative ${
            isSearchVisible ? "search-visible" : ""
          }`}
        >
          <section className="justify-between flex items-center">
            <Link href="/">
              <IoIosArrowBack size={20} />
            </Link>

            {!isSearchVisible && (
              <button onClick={toggleSearch}>
                <FaSearch size={18} />
              </button>
            )}

            {isSearchVisible && (
              <button onClick={toggleSearch}>
                <FaTimes size={18} />
              </button>
            )}
          </section>

          {isSearchVisible && (
            <div
              className={`absolute z-50 w-[92%] top-16 rounded-[4px] border-[1px] border-[rgb(20,23,24)] ease-in-out transition-all duration-500 ${
                isSearchVisible ? "translate-x-[0]" : "translate-x-[100%]"
              }`}
            >
              <Input type="text" placeholder="Search" />
            </div>
          )}
        </section>
        <section className="mt-[18px] px-[15px]">
          <h1 className="text-[32px] font-bold">Settings</h1>
          <div className="mt-5">
            <h1 className="text-[16px] font-semibold">Personal Information</h1>
            <div className="mt-[16px] bg-[rgb(255,255,255)] px-[20px] py-[22px] rounded-[4px] shadow-sm">
              <input
                type="text"
                placeholder="Full name"
                className="placeholder:text-[rgb(155,155,155)] placeholder:text-[14px] outline-none focus:outline-none"
              />
            </div>

            <div className="mt-[16px] bg-[rgb(255,255,255)] px-[20px] py-[22px] rounded-[4px] shadow-sm">
              <h1 className="text-[11px] text-[rgb(155,155,155)]">
                Date of Birth
              </h1>
              <input
                type="date"
                placeholder="Date of Birth"
                className="outline-none focus:outline-none placeholder:text-[rgb(155,155,155)] placeholder:text-[14px]"
              />
            </div>

            <div className="mt-[51px] flex items-center justify-between">
              <h1 className="text-[16px] font-semibold">Password</h1>
              <Link
                href="/forgot-password"
                className="text-[rgb(155,155,155)] text-[14px] leading-[20px]"
              >
                Change
              </Link>
            </div>

            <div className="mt-[16px] bg-[rgb(255,255,255)] px-[20px] py-[22px] rounded-[4px] shadow-sm">
              <h1 className="text-[11px] text-[rgb(155,155,155)]">Password</h1>
              <input
                type="password"
                placeholder="Date of Birth"
                className="outline-none focus:outline-none placeholder:text-[rgb(155,155,155)] placeholder:text-[14px]"
              />
            </div>
          </div>
        </section>
        <section className="mt-[51px] px-[15px]">
          <div>
            <h2 className="text-[16px] font-semibold">Notification Settings</h2>
            <div className="mt-[20px] space-y-[20px] mb-[20px]">
              <div className="flex justify-between items-center">
                <h1 className="text-[14px] font-semibold leading-[20px]">
                  Sales
                </h1>
                <Switch
                  checked={salesNotification}
                  onClick={handleSalesNotificationChange}
                  onChange={handleSalesNotificationChange}
                />
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[14px] font-semibold  leading-[20px]">
                  New Arrivals
                </h1>
                <Switch
                  checked={newArrivalsNotification}
                  onClick={handleNewArrivalsNotificationChange}
                  onChange={handleNewArrivalsNotificationChange}
                />
              </div>
              <div className="flex justify-between items-center">
                <h1 className="text-[14px] font-semibold  leading-[20px]">
                  Delivery Status Changes
                </h1>
                <Switch
                  checked={deliveryStatusNotification}
                  onClick={handleDeliveryStatusNotificationChange}
                  onChange={handleDeliveryStatusNotificationChange}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
