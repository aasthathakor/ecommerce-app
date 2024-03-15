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
          <h1 className="text-[32px] font-bold pb-[18px]">My Order</h1>

          <Tabs
            defaultValue="delivered"
            className="w-full flex flex-col items-center"
          >
            <TabsList className="w-full flex  items-center  md:justify-between children space-x-[40px] mb-[30px]">
              <TabsTrigger
                className="data-[state=active]:text-[rgb(255,255,255)] data-[state=active]:bg-[rgb(20,23,24)] data-[state=active]:rounded-[29px] data-[state=active]:px-[12px] text-[14px] leading-[20px]"
                value="delivered"
              >
                Delivered
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[rgb(255,255,255)] data-[state=active]:bg-[rgb(20,23,24)] data-[state=active]:rounded-[29px] data-[state=active]:px-[12px] text-[14px] leading-[20px]"
                value="processing"
              >
                Processing
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:text-[rgb(255,255,255)] data-[state=active]:bg-[rgb(20,23,24)] data-[state=active]:rounded-[29px] data-[state=active]:px-[12px] text-[14px] leading-[20px]"
                value="cancelled"
              >
                Cancelled
              </TabsTrigger>
            </TabsList>
            <TabsContent value="delivered">
              <div className="space-y-[24px]">
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      <Link href={"/profile/my-orders/order-details"}>
                        Order Details
                      </Link>
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Delivered
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      <Link href={"/profile/my-orders/order-details"}>
                        Order Details
                      </Link>
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Delivered
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      <Link href={"/profile/my-orders/order-details"}>
                        Order Details
                      </Link>
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Delivered
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="processing">
              <div className="space-y-[24px]">
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Processing
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Processing
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(42,169,82)] font-semibold">
                        Processing
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cancelled">
              <div className="space-y-[24px]">
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(155,155,155)]  font-semibold">
                        Cancelled
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(155,155,155)] font-semibold">
                        Cancelled
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="min-w-[360px] bg-[rgb(255,255,255)] p-5 rounded-[8px] shadow-lg">
                  <div className="flex justify-between">
                    <h1 className="text-[16px] font-semibold leading-[24px] ">
                      Order №1947034
                    </h1>
                    <h1 className="text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      05-12-2019
                    </h1>
                  </div>
                  <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                    Tracking number:
                    <span className="text-[rgb(20,23,24)] font-bold">
                      {" "}
                      IW3475453455
                    </span>
                  </h1>
                  <div className="flex justify-between">
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Quantity:
                      <span className="text-[rgb(20,23,24)] font-bold"> 3</span>
                    </h1>
                    <h1 className="mt-2 text-[14px] font-normal leading-[20px] text-[rgb(155,155,155)]">
                      Total Amount:
                      <span className="text-[rgb(20,23,24)] font-bold">
                        {" "}
                        $112
                      </span>
                    </h1>
                  </div>
                  <div className="mt-3 flex justify-between items-center">
                    <Button className="bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(20,23,24)] rounded-[24px] text-[14px] leading-[20px]">
                      Order Details
                    </Button>
                    <div>
                      <h1 className="text-[14px] leading-[20px] text-[rgb(155,155,155)]  font-semibold">
                        Cancelled
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
