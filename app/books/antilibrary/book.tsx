"use client";

import Image from "next/image";
import Star4 from "/public/stars/star-4.svg";
type Book = {
  id: string;
  title: string;
  cover: string;
  authors: string;
  notes: string;
};
import * as Tooltip from "@radix-ui/react-tooltip";

export default function Book({ book }: { book: Book }) {
  return (
    <div className="relative w-[260px]">
      <div className="flex items-start justify-between">
        <Image
          src={book.cover}
          alt={book.title}
          width={210}
          height={320}
          className="rounded-md"
        />
        <Tooltip.Provider delayDuration={100}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Image
                data-tooltip-trigger="tooltip"
                className="absolute -top-5 right-5"
                src={Star4}
                alt="Star"
                width={25}
                height={25}
              />
            </Tooltip.Trigger>
            <Tooltip.Content className="rounded-lg bg-gray-900 p-2 font-sans text-sm text-white shadow-sm duration-300">
              <Tooltip.Arrow />
              {book.notes}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <p className="pt-4 text-xm sm:text-xm">{book.title}</p>
      <p className="pt-2 text-xm italic sm:text-xm">{book.authors}</p>
    </div>
  );
}
