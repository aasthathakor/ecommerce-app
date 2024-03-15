import Image from "next/image";
import Image1 from "../../public/home/poster.png";
import ImageBlack from "../../public/home/black.png";
import Imagehoddies from "../../public/home/hoddie.png";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main className="min;-h-[600px] mb-0 overflow-clip">
        <section className="relative">
          <Image
            src={Image1}
            alt="Picture of the author"
            width={400}
            height={40}
            className="h-[366px]"
          />
          <h1 className="text-[rgb(255,255,255)] text-[34px] leading-[34px] right-[18px] font-bold absolute bottom-[27px] ">
            New collection
          </h1>
        </section>
        <section className="grid grid-cols-2 h-full gap-0">
          <div className="grid grid-rows-2 w-full">
            <div className="flex  items-center justify-center w-[100%] h-[187px]">
              <h1 className="ml-[15px] text-[rgb(219,48,34)]  font-bold text-[34px] leading-[34px]">
                Summer sale
              </h1>
            </div>
            <div className="w-[100%] h-[187px]">
              <Image
                src={ImageBlack}
                alt=""
                width={186}
                height={187}
                className="h-[186px] w-full object-cover"
              />
              <h1 className="ml-[15px] text-[rgb(255,255,255)]  font-bold text-[34px] leading-[34px]">
                Summer sale
              </h1>
            </div>
          </div>
          <div className="w-full h-[374px]">
            <Image src={Imagehoddies} className="h-[374px] object-cover" />
          </div>
        </section>
      </main>
      <Header />
    </>
  );
}
