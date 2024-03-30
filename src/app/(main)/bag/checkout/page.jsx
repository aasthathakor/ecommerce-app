"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <>
        <div className=' py-5 w-full bg-white flex items-center px-3'>
        <Link href={"/bag"}>
    <Button className=" w-full mt-0 bg-white text-black hover:text-white border-[2px] hover:bg-[rgb(219,48,34)] 
     rounded-[24px] text-[30px] leading-[20px] ">
                   ‹
                    </Button>
                    </Link>
        <h1 className=' pl-28 text-[18px] text-[rgba(34,34,34,1)]'>Checkout</h1>
        </div>


        <div className=' px-3 py-5'>

        <h1 className=' text-[rgba(34,34,34,1)] text-[16px] font-bold py-3'>Shipping address</h1>
        <div className=' bg-white w-full rounded-xl py-5 px-5 text-sm'>
        <div className='flex justify-between'>

            <h1 className=' text-sm'>Jane Doe</h1>
            <h1 className=' text-[rgba(219,48,34,1)] text-sm'>Change</h1>
        </div>
        <h1>3 Newbridge Court</h1>
        <h1>Chino Hills, CA 91709, United States</h1>
        </div>

        </div>

        
        <div className=' px-3 py-5'>


        <div className=' flex justify-between text-sm'>
        <h1 className=' text-[rgba(34,34,34,1)] font-bold text-[16px]'>Payment</h1>
        <h1 className=' text-[rgba(219,48,34,1)] text-sm pr-5'>Change</h1>
        </div>

        <div className=' flex mt-5'>
        <div className=''>
                <Image
              src={"/bag/card.png"}
              alt=""
              width={64}
              height={38}
            />
        
        </div>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••3947"
                   class=" text-gray-900 sm:text-sm  p-2.5 dark:placeholder-gray-400 dark:text-white" required="">
              </input>

        </div>

        <div className=' mt-10'>
            <h1 className=' text-[16px] font-bold'>Delivery Method</h1>
          
            <div className=' flex flex-col-3 mt-2'>
            
            <Image
              src={"/bag/fedex.png"}
              alt=""
              width={120}
              height={72}
              className=' hover:cursor-pointer'
            />
       
     
                <Image
              src={"/bag/usps.png"}
              alt=""
              width={120}
              height={72}
              className=' hover:cursor-pointer'

            />
        
        
                <Image
              src={"/bag/dhl.png"}
              alt=""
              width={120}
              height={72}
              className=' hover:cursor-pointer'
            />
    
            </div>
        </div>

        <div className=' py-3'>
            <div className=' flex justify-between'>
            <h1 className=' text-[rgba(155,155,155,1)] text-[14px]'>Order:</h1>
            <h1 className=' text-[rgba(34,34,34,1)] font-bold text-[16px]'>112$</h1>
            </div>
            <div className=' flex justify-between'>
            <h1 className=' text-[rgba(155,155,155,1)] text-[14px]'>Delivery:</h1>
            <h1 className=' text-[rgba(34,34,34,1)] font-bold text-[16px]'>15$</h1>
            </div>
            <div className=' flex justify-between'>
            <h1 className=' text-[rgba(155,155,155,1)] text-[16px]'>Summary:</h1>
            <h1 className=' text-[rgba(34,34,34,1)] font-bold text-[18px]'>127$</h1>
            </div>
        </div>

        <div className=' mt-5'>
    <Link href={"/bag/checkout"}>
    <Button className=" w-full mt-0 bg-white text-black hover:text-white border-[2px] border-[rgb(20,23,24)] hover:bg-[rgb(219,48,34)]  rounded-[24px] text-[14px] leading-[20px] hover:border-[rgb(219,48,34)] ">
                  Check Out
                    </Button>
                    </Link>
                    </div>
</div>

    </>
  )
}

export default page