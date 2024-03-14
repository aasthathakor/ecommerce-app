"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cf38-2405-201-2006-7d89-4136-c88f-ed9f-fdcd.ngrok-free.app/category"
        );
        console.log(response)  
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  },[]);

  useEffect(() => {
    // console.log(categories);
  }, [categories]);

  return (
    <div className="mt-[16px] divide-y">
      {categories &&
        categories.map((category) => (
          <div key={category.id} className="flex w-full h-[100px]">
            <h1 className="text-[18px] leading-[22px] font-bold py-[16px] w-full flex flex-col pl-[24px] justify-center">
              {category.name}
            </h1>

            <Image
              src={`https://cf38-2405-201-2006-7d89-4136-c88f-ed9f-fdcd.ngrok-free.app/${category.image}`}
              alt={category.name}
              width={400}
              height={100}
              className="w- h-full object-cover"
            />
          </div>
        ))}
    </div>
  );
  //
};

export default Category;
