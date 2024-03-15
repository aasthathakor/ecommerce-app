"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NGROK_LINK}/category`
        );
        console.log(response);
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [categories]);

  return (
    <div className="mt-[16px] divide-y">
      {categories &&
        categories.map((category) => (
          
            <Link href="/shop/catalog">
              <div key={category.id} className="flex w-full h-[100px]">
            <h1 className="text-[18px] leading-[22px] font-bold py-[16px] w-full flex flex-col pl-[24px] justify-center">
              {category.name}
            </h1>

            <Image
              src={`${process.env.NEXT_PUBLIC_NGROK_LINK}${category.image}`}
              alt={category.name}
              width={400}
              height={100}
              className="w- h-full object-cover"
            />
             </div>
            </Link>
         
        ))}
    </div>
  );
  //
};

export default Category;
