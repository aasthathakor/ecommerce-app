"use client";
import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ImageUser from "../../../../public/Profile/image.png";
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <main className="px-[15px]">
      <section
        className={`px-[15px] pt-[12px] pb-[12px] relative ${
          isSearchVisible ? "search-visible" : ""
        }`}
      >
        <div className="justify-end flex items-center">
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
        </div>

        {isSearchVisible && (
          <div
            className={`absolute z-50 w-[92%] top-10 rounded-[4px] border-[1px] border-[rgb(20,23,24)] ease-in-out transition-all duration-500 ${
              isSearchVisible ? "translate-x-[0]" : "translate-x-[100%]"
            }`}
          >
            <Input type="text" placeholder="Search" />
          </div>
        )}
      </section>
      <section className="pt-[40px]">
        <h1 className="text-[32px] font-bold">My Profile</h1>

        <div className="mt-[24px] flex space-x-[19px]">
          <Image
            src={ImageUser}
            alt="Picture of the author"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div>
            <h1 className="text-[18px] leading-[22px] font-bold">
              Matilda Brown
            </h1>
            <p className="text-[rgb(155,155,155)] text-[14px] leading-[20px]">
              matildabrown@mail.com
            </p>
          </div>
        </div>

        <ul className="mt-[28px]">
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/my-orders" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">My orders</h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  Already have 12 orders
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/shipping" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">
                  Shipping addresses
                </h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  3 ddresses
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/payment" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">Payment methods</h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  Visa **34
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/promocode" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">Promocodes</h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  You have special promocodes
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/review" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">My reviews</h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  Reviews for 4 items
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
          <li className="px-[15px] pb-[12px] pt-[18px] flex flex-col  justify-center">
            <Link href="/profile/settings" className="flex justify-between">
              <div className="">
                <h1 className="text-[16px] font-semibold">Settings</h1>
                <h1 className="text-[11px] text-[rgb(155,155,155)]">
                  Notifications, password
                </h1>
              </div>
              <div className="text-[rgb(155,155,155)] flex items-center">
                <IoIosArrowForward size={18} />
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default page;
