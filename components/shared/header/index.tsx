import React from "react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import Menu from "./menu";
import CategoryDraw from "./category-draw";
import Search from "./search";

const Header = () => {
  return (
    <header>
      <div className="wrapper flex-between">
        <div className="flex-start">
          <CategoryDraw />
          <Link href="/" className="flex-start ml-4">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME}`}
              width={48}
              height={48}
              priority={true}
            />{" "}
            <span className="hidden md:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
