"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Header from "@/components/Header";
import { IoIosArrowBack } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import axios from "axios";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GoHeartFill } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Button } from "@/components/ui/button";

const page = ({ params: { catalog } }) => {
  const [product, setProduct] = useState([]);
  const [like, setLike] = useState(false);

  catalog = catalog.split("_")[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_NGROK_LINK}/product/${catalog}`
        );
        console.log(response);
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
          <Link href="/shop/catalog">
            <IoIosArrowBack size={20} />
          </Link>

          <h1 className="font-semibold text-[18px] leading-[22px]">
            {product.name}
          </h1>

          <Link href="/">
            <IoShareSocial size={20} />
          </Link>
        </section>
        <section className="mt-[30px]">
          <div className="flex overflow-auto scrollbar w-full h-[400px]">
            <Image
              src={`${process.env.NEXT_PUBLIC_NGROK_LINK}/${product.image}`}
              alt=""
              width={400}
              height={300}
            />
            <Image
              src={"/product/dress1.png"}
              alt=""
              width={400}
              height={300}
            />
            <Image
              src={"/product/dress2.png"}
              alt=""
              width={400}
              height={300}
            />
          </div>
        </section>

        <section>
          <div className="mt-[12px] px-[15px] flex justify-between">
            <div className="flex space-x-[12px]">
              <Select>
                <SelectTrigger className="w-[130px] border-[1px] border-red-800">
                  <SelectValue placeholder="Size" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value={product.size}>{product.size}</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[130px] border-[1px] border-red-800">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value={product.color}>{product.color}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button
              onClick={() => setLike(!like)}
              className="bg-[rgb(255,255,255)] px-[13px] py-[10px] rounded-full flex flex-col items-center "
            >
              <GoHeartFill
                className={like ? "text-red-500" : "text-[rgb(155,155,155)]"}
              />
            </button>
          </div>

          <div className="mt-[12px] px-[15px]">
            <div className="flex justify-between">
              <h1 className="text-[24px] font-semibold">
                {product.brand_name}
              </h1>
              <h1 className="text-[24px] font-semibold">
                ${product.sell_price}
              </h1>
            </div>
            <h1 className="text-[11px] text-[rgb(155,155,155)]">
              {product.name}
            </h1>

            <div className="flex items-center space-x-[5px]">
              <MdOutlineStarPurple500 size={20} className="text-yellow-400" />
              <MdOutlineStarPurple500 size={20} className="text-yellow-400" />
              <MdOutlineStarPurple500 size={20} className="text-yellow-400" />
              <MdOutlineStarPurple500 size={20} className="text-yellow-400" />
              <MdOutlineStarPurple500 size={20} className="text-yellow-400" />
              <h1 className="text-[11px] font-normal mt-1 text-[rgb(155,155,155)]">
                (5.0)
              </h1>
            </div>

            <p className="mt-4 text-[14px]">
              Short dress in soft cotton jersey with decorative buttons down the
              front and a wide, frill-trimmed square neckline with concealed
              elastication. Elasticated seam under the bust and short puff
              sleeves with a small frill trim.
            </p>

            <Button className="w-full mt-4 bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(219,48,34)]  rounded-[24px] text-[14px] leading-[20px]l hover:border-[rgb(219,48,34)]">
              <Link href={"/bag"}>ADD TO CART</Link>
            </Button>
          </div>
        </section>
      </main>
      <Header />
    </>
  );
};

export default page;
