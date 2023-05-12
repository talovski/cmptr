import Image from "next/image";
type Book = {
  id: string;
  title: string;
  cover: string;
  authors: string;
};
export default function Book({ book }: { book: Book }) {
  return (
    <div className="w-[260px]">
      <Image
        src={book.cover}
        alt={book.title}
        width={210}
        height={320}
        className="rounded-md"
      />
      <p className="text-medium pt-4">{book.title}</p>
      <p className="text-medium italic">{book.authors}</p>
    </div>
  );
}
