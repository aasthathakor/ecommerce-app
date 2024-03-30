"use client";
import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from "@/components/ui/input"
import Component2 from './Component2';

  


const Component1 = () => {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    const [count3, setCount3] = useState(1);

    const [isSearchVisible, setSearchVisible] = useState(false);
    const toggleSearch = () => {
      setSearchVisible(!isSearchVisible);
    };

    const DecreaseButton = (n) => {
        if (n == 1) {
          setCount1((count1) => count1 - 1);
        } else if (n == 2) {
          setCount2((count2) => count2 - 1);
        } else if (n == 3) {
          setCount3((count3) => count3 - 1);
        }
      };
    
      const IncreaseButton = (n) => {
        if (n == 1) {
          setCount1((count1) => count1 + 1);
        } else if (n == 2) {
          setCount2((count2) => count2 + 1);
        } else if (n == 3) {
          setCount3((count3) => count3 + 1);
        }
      };
    return (

    <>
    
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

          <div className=' text-[rgba(34,34,34,1)] text-[34px]'>My Bag</div>
          <div className=' mt-5 bg-[rgba(255,255,255,1)] grid grid-cols-3 rounded-xl'>
                <div className=''>
                <Image
              src={"/bag/photo.png"}
              alt=""
              width={104}
              height={104}
            />
            </div>

                <div className=' py-3'>
                    <h1 className=' text-[#rgba(34, 34, 34,1)] text-base font-bold'>Pullover</h1>
                    <h1 className=' flex text-[11px] text-[rgba(155,155,155,1)]'>Color:<span className=' text-[rgba(34,34,34,1)]'>Black</span> <span className=' pl-3'>Size L</span></h1>
                
                <div className=' flex gap-5 mt-3'>
                <button disabled={count1 <= 1} onClick={() => DecreaseButton(1)} className=' text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>-</button>
                  <h1 className="text-[14px] leading-[22px]">{count1}</h1>
                  <button onClick={() => IncreaseButton(1)} className='text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>+</button>
                </div>
                </div>

                <div className=' text-right mt-3 pr-4 space-y-7'>
                <Popover className =' w-[40px]'>
                        <PopoverTrigger>
                        <div className=''>
                <Image
              src={"/bag/more.png"}
              alt=""
              width={10}
              height={4}
            />
            </div>
                        </PopoverTrigger>
                        <PopoverContent>Delete</PopoverContent>
                </Popover>
                <h1>51$</h1>
                </div>
          </div>


          <div className=' mt-5 bg-[rgba(255,255,255,1)] grid grid-cols-3 rounded-xl'>
                <div className=''>
                <Image
              src={"/bag/p2.png"}
              alt=""
              width={104}
              height={104}
            />
            </div>

                <div className=' py-3'>
                    <h1 className=' text-[#rgba(34, 34, 34,1)] text-base font-bold'>Tshirt</h1>
                    <h1 className=' flex text-[11px] text-[rgba(155,155,155,1)]'>Color:<span className=' text-[rgba(34,34,34,1)]'>Black</span> <span className=' pl-3'>Size L</span></h1>
                
                <div className=' flex gap-5 mt-3'>
                <button disabled={count2 <= 1} onClick={() => DecreaseButton(2)} className=' text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>-</button>
                  <h1 className="text-[14px] leading-[22px]">{count2}</h1>
                  <button onClick={() => IncreaseButton(2)} className='text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>+</button>
                </div>
                </div>

                <div className=' text-right mt-3 pr-4 space-y-7'>
                <Popover className =' w-[40px]'>
                        <PopoverTrigger>
                        <div className=''>
                <Image
              src={"/bag/more.png"}
              alt=""
              width={10}
              height={4}
            />
            </div>
                        </PopoverTrigger>
                        <PopoverContent>Delete</PopoverContent>
                </Popover>
                <h1>30$</h1>
                </div>
          </div>


          <div className=' mt-5 bg-[rgba(255,255,255,1)] grid grid-cols-3 rounded-xl'>
                <div className=''>
                <Image
              src={"/bag/p1.png"}
              alt=""
              width={104}
              height={104}
            />
            </div>

                <div className=' py-3'>
                    <h1 className=' text-[#rgba(34, 34, 34,1)] text-base font-bold'>Sport Dress</h1>
                    <h1 className=' flex text-[11px] text-[rgba(155,155,155,1)]'>Color:<span className=' text-[rgba(34,34,34,1)]'>Black</span> <span className=' pl-3'>Size L</span></h1>
                
                <div className=' flex gap-5 mt-3'>
                <button disabled={count3 <= 1} onClick={() => DecreaseButton(3)} className=' text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>-</button>
                  <h1 className="text-[14px] leading-[22px]">{count3}</h1>
                  <button onClick={() => IncreaseButton(3)} className='text-[rgba(155,155,155,1)]
                 bg-white rounded-full ring-2 w-5 ring-gray-50'>+</button>
                </div>
                </div>

                <div className=' text-right mt-3 pr-4 space-y-7'>
                <Popover className =' w-[40px]'>
                        <PopoverTrigger>
                        <div className=''>
                <Image
              src={"/bag/more.png"}
              alt=""
              width={10}
              height={4}
            />
            </div>
                        </PopoverTrigger>
                        <PopoverContent>Delete</PopoverContent>
                </Popover>
                <h1>43$</h1>
                </div>
          </div>

        

        <div class="relative flex w-full max-w-[24rem] mt-5">

        
                      <Popover className =' w-[40px]'>
                        <PopoverTrigger className=" w-full mt-0 bg-black text-white hover:text-white border-[2px] border-[rgb(20,23,24)]
   hover:bg-[rgb(219,48,34)] rounded-[24px] text-[14px] leading-[20px] py-2 hover:border-[rgb(219,48,34)] ">
                        
                        Promo code</PopoverTrigger>
                        <PopoverContent>
                       <Component2 />
                        </PopoverContent>
                </Popover>
                    
    </div> 

    <div className=' mt-5 flex justify-between'>
    <h1 className=' text-[14px] text-[rgba(155,155,155,1)]'>Total amount:</h1>
    <h1 className=' text-black font-bold'>124$</h1>
    </div> 

    <div className=' mt-5'>
    <Link href={"/bag/checkout"}>
    <Button className=" w-full mt-0 bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(219,48,34)]  rounded-[24px] text-[14px] leading-[20px] hover:border-[rgb(219,48,34)] ">
                  Check Out
                    </Button>
                    </Link>
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
    </>
  )
}

export default Component1