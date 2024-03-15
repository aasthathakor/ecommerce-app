"use client";
import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Image1 from "../../../../../../../public/order/1.png";
import Image2 from "../../../../../../../public/order/2.png";
import Image3 from "../../../../../../../public/order/3.png";
import { FaCcMastercard } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NGROK_LINK}/cart`
        );
        console.log(response);
        setCart(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
          <div className="mt-[15px] ">
            <h1 className="font-bold text-[14px] leading-[20px]">3 items</h1>
            <div>
              <div className="mt-[15px] bg-[hsl(0,0%,100%)] grid grid-cols-3 rounded-[8px] h-[104px]">
                <Image
                  src={Image1}
                  alt=""
                  width={104}
                  height={104}
                  className="w-[104px] h-[104px] rounded-l-[8px]"
                />
                <div className="py-[10px] pr-[20px] w-full col-span-2">
                  <h1 className="font-semibold text-[16px]">Pullover</h1>
                  <h1 className="text-[rgb(155,155,155)] text-[11px]">Mango</h1>
                  <div className="flex space-x-3">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Color: <span className="text-[rgb(20,23,24)]">Gray</span>
                    </h1>
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Size: <span className="text-[rgb(20,23,24)]">L</span>
                    </h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Units: <span className="text-[rgb(20,23,24)]">1</span>
                    </h1>
                    <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px]">
                      $51
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mt-[15px] bg-[hsl(0,0%,100%)] grid grid-cols-3 rounded-[8px] h-[104px]">
                <Image
                  src={Image2}
                  alt=""
                  width={104}
                  height={104}
                  className="w-[104px] h-[104px] rounded-l-[8px]"
                />
                <div className="py-[10px] pr-[20px] w-full col-span-2">
                  <h1 className="font-semibold text-[16px]">Pullover</h1>
                  <h1 className="text-[rgb(155,155,155)] text-[11px]">Mango</h1>
                  <div className="flex space-x-3">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Color: <span className="text-[rgb(20,23,24)]">Gray</span>
                    </h1>
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Size: <span className="text-[rgb(20,23,24)]">L</span>
                    </h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Units: <span className="text-[rgb(20,23,24)]">1</span>
                    </h1>
                    <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px]">
                      $51
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mt-[15px] bg-[hsl(0,0%,100%)] grid grid-cols-3 rounded-[8px] h-[104px]">
                <Image
                  src={Image3}
                  alt=""
                  width={104}
                  height={104}
                  className="w-[104px] h-[104px] rounded-l-[8px]"
                />
                <div className="py-[10px] pr-[20px] w-full col-span-2">
                  <h1 className="font-semibold text-[16px]">Pullover</h1>
                  <h1 className="text-[rgb(155,155,155)] text-[11px]">Mango</h1>
                  <div className="flex space-x-3">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Color: <span className="text-[rgb(20,23,24)]">Gray</span>
                    </h1>
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Size: <span className="text-[rgb(20,23,24)]">L</span>
                    </h1>
                  </div>
                  <div className="flex justify-between w-full">
                    <h1 className="text-[rgb(155,155,155)] text-[11px]">
                      Units: <span className="text-[rgb(20,23,24)]">1</span>
                    </h1>
                    <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px]">
                      $51
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-[34px] px-[15px]">
          <h1 className="text-[14px] leading-[20px] font-semibold">
            Order information
          </h1>

          <div className="space-y-[24px] mt-2">
            <div className="flex justify-between">
              <h1 className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
                Shipping Address:
              </h1>
              <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px] w-[60%]">
                3 Newbridge Court ,Chino Hills, CA 91709, United States
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
                Payment method:
              </h1>
              <div className="w-[60%] flex space-x-2">
                <FaCcMastercard />

                <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px]">
                  **** **** **** 3947
                </h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
                Delivery method:
              </h1>
              <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px] w-[60%]">
                FedEx, 3 days, 15$
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
                Discount:
              </h1>
              <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px] w-[60%]">
                10%, Personal promo code
              </h1>
            </div>
            <div className="flex justify-between">
              <h1 className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
                Total Amount:
              </h1>
              <h1 className="text-[rgb(20,23,24)] font-semibold text-[14px] leading-[20px] w-[60%]">
                133$
              </h1>
            </div>
          </div>

          <div className="my-[34px] flex justify-between space-x-[24px]">
            <Button className="w-full text-black bg-transparent data-[state=active]:bg-[rgb(20,23,24)] data-[state=active]:text-white px-[20px] border-[2px] hover:bg-[rgb(20,23,24)] border-[rgb(20,23,24)] rounded-[81px] hover:text-white">
              Reorder
            </Button>
            <Button className="w-full text-black bg-white   hover:bg-[rgb(219,68,55)] data-[state=active]:bg-[rgb(20,23,24)] data-[state=active]:text-white px-[20px] border-[2px] border-[rgb(20,23,24)] rounded-[81px] hover:text-white hover:border-[rgb(219,68,55)]">
              Reorder
            </Button>
          </div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
