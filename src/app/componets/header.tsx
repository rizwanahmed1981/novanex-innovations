import React from "react";
import { Big_Shoulders_Stencil_Text } from "next/font/google";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const big = Big_Shoulders_Stencil_Text({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="text-myBlackText body-font shadow-sm">
      <div className=" mx-auto flex p-5 flex-row items-center justify-between font-bold">
        <nav className="md:flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto hidden">
          <Link href={"/"} className="mr-5 hover:text-myOrangeText">
            Services
          </Link>
          <Link href={"/"} className="mr-5 hover:text-myOrangeText">
            Resources
          </Link>
          <Link href={"/"} className="mr-5 hover:text-myOrangeText">
            Company
          </Link>
          <Link href={"/"} className="mr-5 hover:text-myOrangeText">
            Blog
          </Link>
          <Link href={"/"} className="hover:text-myOrangeText">
            Contact us
          </Link>
        </nav>
        <Link
          href={"/"}
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div
            className={`${big.className} scroll-m-20 text-2xl text-myTitle font-bold lg:text-2xl`}
          >
            <h1>
              NovaNex <span className="text-myBlack">Innovations</span>
            </h1>
          </div>
        </Link>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button className="md:inline-flex items-center bg-myButton hidden text-myWhiteBg border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Let's Talk
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <GiHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={"/"} className="mr-5 hover:text-myOrangeText">
                  Services
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                {" "}
                <Link href={"/"} className="mr-5 hover:text-myOrangeText">
                  Resources
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="mr-5 hover:text-myOrangeText">
                  Company
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="mr-5 hover:text-myOrangeText">
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/"} className="hover:text-myOrangeText">
                  Contact us
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
