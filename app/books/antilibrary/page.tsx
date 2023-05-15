import clsx from "clsx";
import { Golos_Text } from "next/font/google";
import antilibraryBooks from "../../../books/antilibrary.json";
import Book from "./book";
const golos = Golos_Text({ subsets: ["latin", "cyrillic"], weight: "400" });
export default function Antilibrary() {
  return (
    <div>
      <div className="w-full">
        {/* <p className="text-md lg:text-lg">
          Books I love having the idea of having read
        </p> */}
        <p className={clsx("w-[88%] pt-4 text-md lg:text-lg")}>
          An <span className="italic">antilibrary</span> is a collection of
          books that are owned but have not yet been read. The term was coined
          by Nassim Nicholas Taleb. The concept it describes has been compared
          to the Japanese tsundoku.
        </p>
      </div>
      <div className="grid gap-12 pt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {antilibraryBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
