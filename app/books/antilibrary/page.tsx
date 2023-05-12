import clsx from "clsx";
import { Golos_Text } from "next/font/google";
import antilibraryBooks from "../../../books/antilibrary.json";
import Book from "./book";
const golos = Golos_Text({ subsets: ["latin", "cyrillic"], weight: "400" });
export default function Antilibrary() {
  return (
    <div>
      <div className="w-full max-w-[666px]">
        <p className="text-large">
          Books I love having the idea of having read
        </p>
        <p className={clsx("text-medium pt-4 italic")}>
          An antilibrary is a collection of books that are owned but have not
          yet been read. The term was coined by Nassim Nicholas Taleb. The
          concept it describes has been compared to the Japanese tsundoku.
        </p>
      </div>
      <div className="flex flex-wrap gap-12 pt-12">
        {antilibraryBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
