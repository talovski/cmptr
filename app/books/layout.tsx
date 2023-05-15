"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BooksLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    // bg-[#F5EDDF]
    <div className="relative overflow-hidden rounded-md bg-[#F5EDDF] pt-24">
      <div className="m-auto h-full w-5/6 max-w-[1050px]">
        <div className="flex flex-wrap text-xl  leading-tight lg:text-xl">
          <Link
            href="/books/library"
            className={clsx({
              "hover:underline": true,
              "font-bold text-[#CF6C54] underline":
                pathname === "/books/library",
            })}
          >
            Library
          </Link>
          <span className="mx-8 text-gray-400">|</span>
          <Link
            href="/books/antilibrary"
            className={clsx({
              "hover:underline": true,
              "font-bold text-[#CF6C54] underline":
                pathname === "/books/antilibrary",
            })}
          >
            Antilibrary
          </Link>
        </div>
        <div className="max-w-[1280px] pb-16 pt-8">{children}</div>
      </div>
    </div>
  );
}
