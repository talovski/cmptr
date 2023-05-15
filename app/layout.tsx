import clsx from "clsx";
import { Source_Serif_4, PT_Serif } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import stars from "../public/stars/stars.svg";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  style: ["italic", "normal"],
  axes: ["opsz"],
});
// weight: ["400", "700"],

export const metadata = {
  title: "Nika Talovski",
  description: "Nika Talovski, full stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          sourceSerif.className,
          "relative bg-[#212131] py-[10px] sm:px-0 md:px-[20px]"
        )}
      >
        <div className="flex items-center justify-between fill-inherit px-[10px] text-[#F8F8F9] md:px-0">
          <div className="relative top-[-5px] flex gap-[15px] font-sans underline-offset-4">
            <Link className="no-underline hover:underline" href="/">
              About
            </Link>
            <Link
              className="no-underline hover:underline"
              href="/books/antilibrary"
            >
              Books
            </Link>
          </div>
          <Image
            src={stars}
            height={20}
            className="relative bottom-[4px]"
            alt="Decorative stars"
          />
        </div>
        <div className="relative mx-auto my-0 bg-[#F8F8F9] transition duration-300 ease-out sm:rounded-none md:rounded-md">
          {children}
        </div>
        <div className="m-auto flex justify-center pt-1 font-sans text-white">
          made by moi in tel aviv
        </div>
      </body>
    </html>
  );
}
