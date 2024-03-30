"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const Component2 = () => {
  
  const [promocode, setPromocode] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_NGROK_LINK}/promo`
      );
      console.log(response);
      setPromocode(response.data.data);
      console.log(promocode);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <main className="">
     
        <section className="mt-[30px] px-[15px] ">
          <h1 className="text-[32px] font-bold pb-[18px]">Your Promocode</h1>
          <div className="space-y-[20px]">
            {promocode.map((item) => (
              <div
                className="bg-[rgb(255,255,255)] flex items-center justify-between space-x-3 rounded-[8px] h-[120px] p-0"
                key={item._id}
              >
                <div className="h-[120px] w-[200px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_NGROK_LINK}/${item.image}`}
                    alt=""
                    width={200}
                    height={120}
                    className="h-[120px] w-[200px] object-contain "
                  />
                </div>
                <div className="w-full flex justify-between items-center  pt-[20px] pb-[20px]">
                  <div className="w-full">
                    <h1 className="text-[14px] leading-[20px] font-semibold">
                      {item.code_name}
                    </h1>
                    <h1 className="text-[14px] leading-[20px] text-muted-foreground">
                      {item.promo_code_name}
                    </h1>
                  </div>
                  <div className="w-full py-[10px] ml-auto">
                    <h1 className="text-[14px] leading-[20px] text-muted-foreground">
                      6 days remaining
                    </h1>
                    <Button className="w-fit ml-8  mt-4 bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(219,48,34)]  rounded-[24px] text-[14px] leading-[20px] hover:border-[rgb(219,48,34)] ">
                      <Link href={"/bag"}>Apply</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
export default Component2;