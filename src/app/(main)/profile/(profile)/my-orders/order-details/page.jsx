"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

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

            <h1 className="font-semibold text-[18px] leading-[22px]">
              Order Details
            </h1>

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
        <section className="mt-[30px] px-[15px]">
          <div>
            <div className="flex justify-between">
              <h1 className="text-[16px] font-semibold leading-[24px] ">
                Order №1947034
              </h1>
              <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                05-12-2019
              </h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                Tracking number:
                <span className="text-[rgb(20,23,24)] font-bold">
                  {" "}
                  IW3475453455
                </span>
              </h1>
              <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                Delivered
              </h1>
            </div>
          </div>
          <div className="mt-[15px]"></div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
