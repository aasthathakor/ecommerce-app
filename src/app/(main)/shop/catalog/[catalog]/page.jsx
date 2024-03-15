"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import axios from "axios";
import Image from "next/image";

const page = ({ params: { catalog } }) => {
  const [product, setProduct] = useState([]);

  catalog = catalog.split("_")[0];
  console.log("catalog", catalog);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NGROK_LINK}/product/${catalog}`
        );

        setProduct(response.data.data);
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
          className={`px-[15px] pt-[8px] pb-[12px] shadow-md relative justify-between flex items-center`}
        >
          <Link href="/">
            <IoIosArrowBack size={20} />
          </Link>

          <h1 className="font-semibold text-[18px] leading-[22px]">
            {product.name}
          </h1>

          <Link href="/">
            <IoShareSocial size={20} />
          </Link>
        </section>
        <section className="">
          <div className="w-full h-[300px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_NGROK_LINK}/${product.image}`}
              alt=""
              width={300}
              height={500}
              className="w-ful object-contain"
            />
          </div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
