"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Header = () => {
  const pathname = usePathname();

  return (
    <main className="absolute bottom-0 h-[83px]  px-[26px] pb-[20px] pt-2 border-none rounded-tr-[12px] rounded-tl-[12px] bg-[rgb(243,245,247)] overflow-x-hidden children">
      <ul className="flex space-x-[45px]">
        <li>
          <Link
            href={"/"}
            className={clsx(
              "flex flex-col items-center justify-center",
              pathname === "/"
                ? "text-[rgb(219,48,34)]"
                : "text-[rgb(155,155,155)]"
            )}
          >
            <IoMdHome size={30} />
            <h1
              className={clsx(
                pathname === "/" ? "font-bold" : "",
                "text-[10px] leading-[10px] mt-[2px]"
              )}
            >
              Home
            </h1>
          </Link>
        </li>

        <li>
          <Link
            href={"/shop"}
            className={clsx(
              "flex flex-col items-center justify-center",
              pathname === "/shop"
                ? "text-[rgb(219,48,34)]"
                : "text-[rgb(155,155,155)]"
            )}
          >
            <MdOutlineShoppingCart size={30} />
            <h1
              className={clsx(
                pathname === "/shop" ? "font-bold" : "",
                "text-[10px] leading-[10px] mt-[2px]"
              )}
            >
              Shop
            </h1>
          </Link>
        </li>

        <li>
          <Link
            href={"/bag"}
            className={clsx(
              "flex flex-col items-center justify-center",
              pathname === "/bag"
                ? "text-[rgb(219,48,34)]"
                : "text-[rgb(155,155,155)]"
            )}
          >
            <HiOutlineShoppingBag size={30} />
            <h1
              className={clsx(
                pathname === "/bag" ? "font-bold" : "",
                "text-[10px] leading-[10px] mt-[2px]"
              )}
            >
              Bag
            </h1>
          </Link>
        </li>

        <li>
          <Link
            href={"/favorites"}
            className={clsx(
              "flex flex-col items-center justify-center",
              pathname === "/favorites"
                ? "text-[rgb(219,48,34)]"
                : "text-[rgb(155,155,155)]"
            )}
          >
            <CiHeart size={30} />
            <h1
              className={clsx(
                pathname === "/favorites" ? "font-bold" : "",
                "text-[10px] leading-[10px] mt-[2px]"
              )}
            >
              Favorites
            </h1>
          </Link>
        </li>

        <li>
          <Link
            href={"/profile"}
            className={clsx(
              "flex flex-col items-center justify-center",
              pathname === "/profile"
                ? "text-[rgb(219,48,34)]"
                : "text-[rgb(155,155,155)]"
            )}
          >
            <HiOutlineUserCircle size={30} />
            <h1
              className={clsx(
                pathname === "/profile" ? "font-bold" : "",
                "text-[10px] leading-[10px] mt-[2px]"
              )}
            >
              Profile
            </h1>
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default Header;
