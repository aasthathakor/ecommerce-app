"use client";
import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { Checkbox } from "@/components/ui/checkbox";

const page = () => {
  return (
    <>
      <main className="scrollbar min-h-[700px] overflow-y-auto overflow-clip">
        <section className="px-[15px] pt-[8px] pb-[12px] shadow-md  grid grid-cols-3 items-center">
          <Link href="/">
            <IoIosArrowBack size={20} />
          </Link>

          <h1 className="text-[18px] leading-[22px] font-semibold flex -ml-8 w-[200px] items-center justify-center">
            Shipping Addresses
          </h1>
        </section>

        <section className="mt-[36px] px-[15px] space-y-[24px]">
          <div className="bg-[rgb(255,255,255)] px-[23px] py-[18px] rounded-[8px]">
            <div className="flex justify-between">
              <h1 className="font-semibold text-[14px] leading-[20px]">
                Jane Doe
              </h1>
              <Link
                className="text-[14px] font-semibold text-[rgb(219,48,41)] leading-[20px]"
                href="/profile/shipping/edit"
              >
                Edit
              </Link>
            </div>
            <p className="mt-2 text-[14px] leading-[20px] font-medium">
              3 Newbridge Court
              <br />
              Chino Hills, CA 91709, United States
            </p>
            <div className="flex items-center space-x-2 mt-3.5">
              <Checkbox id="checkbox" defaultChecked />
              <h1 className="text-[14px] leading-[20px] mt-[1px] font-medium">
                Use as the shipping address
              </h1>
            </div>
          </div>
          <div className="bg-[rgb(255,255,255)] px-[23px] py-[18px] rounded-[8px]">
            <div className="flex justify-between">
              <h1 className="font-semibold text-[14px] leading-[20px]">
                Jane Doe
              </h1>
              <Link
                className="text-[14px] font-semibold text-[rgb(219,48,41)] leading-[20px]"
                href="/profile/shipping/edit"
              >
                Edit
              </Link>
            </div>
            <p className="mt-2 text-[14px] leading-[20px] font-medium">
              3 Newbridge Court
              <br />
              Chino Hills, CA 91709, United States
            </p>
            <div className="flex items-center space-x-2 mt-3.5">
              <Checkbox id="checkbox" />
              <h1 className="text-[14px] leading-[20px] mt-[1px] font-medium">
                Use as the shipping address
              </h1>
            </div>
          </div>
          <div className="bg-[rgb(255,255,255)] px-[23px] py-[18px] rounded-[8px]">
            <div className="flex justify-between">
              <h1 className="font-semibold text-[14px] leading-[20px]">
                Jane Doe
              </h1>
              <Link
                className="text-[14px] font-semibold text-[rgb(219,48,41)] leading-[20px]"
                href="/profile/shipping/edit"
              >
                Edit
              </Link>
            </div>
            <p className="mt-2 text-[14px] leading-[20px] font-medium">
              3 Newbridge Court
              <br />
              Chino Hills, CA 91709, United States
            </p>
            <div className="flex items-center space-x-2 mt-3.5">
              <Checkbox id="checkbox" />
              <h1 className="text-[14px] leading-[20px] mt-[1px] font-medium">
                Use as the shipping address
              </h1>
            </div>
          </div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
