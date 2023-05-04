"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function BooksLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="relative ml-24 h-full w-11/12 max-w-[1280px] pt-24">
      <div className="flex gap-3 text-4xl">
        <Link
          href="books/library"
          className={clsx({
            "hover:underline": true,
            "text-[#CF6C54] underline": pathname === "/books/library",
          })}
        >
          Library
        </Link>
        <span>|</span>
        <Link
          href="books/antilibrary"
          className={clsx({
            "hover:underline": true,
            "text-[#CF6C54] underline": pathname === "/books/antilibrary",
          })}
        >
          Antilibrary
        </Link>
      </div>
      <div className="pt-8">{children}</div>
    </div>
  );
}
