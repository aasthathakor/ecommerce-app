"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcFactory, FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="bg-[rgb(243,245,247)] px-[15px] pt-[10px] h-full">
      <section>
        <Link href="/">
          <IoIosArrowBack size={20} />
        </Link>
        <h1 className="mt-[30px] text-[34px] leading-[34px] font-bold">
          Forgot Password
        </h1>
      </section>
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-[10px] mt-[73px]"
        >
          <div>
            <h1 className="text-[14px] leading-[24px]">
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </h1>
          </div>

          <div className="bg-[rgb(255,255,255)] px-[20px] py-[15px] rounded-[4px] h-[64px]">
            <h1 className="text-[11px] leading-[11px] text-[rgb(155,155,155)] mb-1">
              Email
            </h1>
            <input
              type="text"
              placeholder="Email"
              className="border-none focus:outline-none placeholder:text-[14px] placeholder:leading-[14px]"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />

            {errors.email && (
              <h1 className="text-[rgb(240,31,14)] text-[11px] leading-[11px] mt-4">Not a valid email address. Should be your@email.com</h1>
            )}
          </div>

          <div className="mt-[55px]">
            <Button
              className="bg-[rgb(219,48,34)] w-full mt-[55px]"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
