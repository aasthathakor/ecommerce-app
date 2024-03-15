"use client";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Category from "@/components/Shop/Category";

const Page = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };

  return (
    <>
      <main className="min-h-[700px] overflow-y-auto">
        <section
          className={`px-[15px] pt-[8px] pb-[12px] shadow-md relative ${
            isSearchVisible ? "search-visible" : ""
          }`}
        >
          <section className="justify-between flex items-center">
            <Link href="/">
              <IoIosArrowBack size={20} />
            </Link>

            <h1 className="text-[18px] leading-[22px] font-bold text-center">
              Categories
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
        <section className="px-[15px] mt-[21px] w-full">
          <Tabs
            defaultValue="women"
            className="w-full flex flex-col items-center justify-center"
          >
            <TabsList className="w-full flex  items-center  md:justify-between children space-x-[40px]">
              <TabsTrigger
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-[rgb(219,48,34)] "
                value="women"
              >
                Women
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-[rgb(219,48,34)] "
                value="men"
              >
                Men
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:border-b-[3px] data-[state=active]:border-[rgb(219,48,34)] "
                value="kids"
              >
                Kids
              </TabsTrigger>
            </TabsList>
            <TabsContent value="women">
              <Category />
            </TabsContent>
            <TabsContent value="men">
              <Category />
            </TabsContent>
            <TabsContent value="kids">
              <Category />
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <Header />
    </>
  );
};

export default Page;
