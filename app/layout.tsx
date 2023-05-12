import clsx from "clsx";
import { Golos_Text, Playfair_Display, Source_Serif_4 } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "cyrillic"],
  style: ["italic", "normal"],
  axes: ["opsz"],
});

const golos = Golos_Text({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

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
          "relative bg-[#212131] px-[20px] py-[10px]"
        )}
      >
        <div
          className={clsx(
            golos.className,
            "relative top-[-5px] flex gap-[15px] text-[#F8F8F9]"
          )}
        >
          <Link className="no-underline hover:underline" href="/">
            About
          </Link>
          {/*          <Link className="no-underline hover:underline" href="/projects">
            Projects
          </Link>*/}
          <Link
            className="no-underline hover:underline"
            href="/books/antilibrary"
          >
            Books
          </Link>
        </div>{" "}
        <div className="relative mx-auto my-0 rounded-md bg-[#F8F8F9] transition duration-300 ease-out">
          {children}
          <div
            className={clsx(
              "m-auto flex justify-center pb-6 pt-24",
              golos.className
            )}
          >
            made by moi in tel aviv
          </div>
        </div>
      </body>
    </html>
  );
}
