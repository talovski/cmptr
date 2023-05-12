import clsx from "clsx";
import { Golos_Text } from "next/font/google";
import Image from "next/image";
type Impression = {
  id: string;
  title: string;
  cover: string;
  authors: string;
  photo: string;
  notes: string;
  date: string;
};

const golos = Golos_Text({
  style: "normal",
  weight: "400",
  subsets: ["cyrillic", "latin"],
});

export default function BookImpression({
  impression,
}: {
  impression: Impression;
}) {
  return (
    <>
      <div className="relative block md:hidden lg:hidden">
        <div className="z-20 flex gap-4">
          <Image
            width={230}
            height={100}
            src={impression.photo}
            alt="Photo"
            className="rounded-md"
          />
          <Image
            width={220}
            height={100}
            src={impression.cover}
            alt={impression.title}
            className="min-h-[60px] min-w-[160px] rounded-md"
          />
        </div>
        <h3 className="text-larger pb-2 pt-8 md:pt-12">
          {impression.title}, В Хайфе, Израиль
        </h3>
        <p className={clsx(golos.className, "text-medium")}>
          {impression.notes}
        </p>
      </div>
      <div className="w-full items-start sm:hidden md:flex md:gap-12 lg:flex lg:gap-24">
        <Image
          width={300}
          height={100}
          src={impression.photo}
          alt="Photo"
          className="min-w-[300px] rounded-md lg:min-w-[380px]"
        />
        <div className="max-w-[400px]">
          <Image
            width={250}
            height={100}
            src={impression.cover}
            alt={impression.title}
            className="rounded-md"
          />
          <h3 className={clsx("text-larger pb-2 pt-8")}>
            {impression.title}, В Хайфе, Израиль
          </h3>
          <p className={clsx(golos.className, "text-medium")}>
            {impression.notes}
          </p>
        </div>
      </div>
    </>
  );
}
