import Image from "next/image";
type Book = {
  id: string;
  title: string;
  cover: string;
  authors: string;
};
export default function Book({ book }: { book: Book }) {
  return (
    <div className="w-[280px]">
      <Image
        src={book.cover}
        alt={book.title}
        width={210}
        height={320}
        className="rounded-md"
      />
      <p className="pt-4 text-xl">{book.title}</p>
      <p className="text-xl italic">{book.authors}</p>
    </div>
  );
}
