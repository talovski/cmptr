import impressions from "../../../books/library.json";
import BookImpression from "./impression";
import starsSmall from "../../../public/stars-small.svg";
import Image from "next/image";
export default function Library() {
  return (
    <div>
      <h3 className="w-[86%] text-xm sm:text-md lg:text-lg">
        Below is a list of books that I have read, accompanied by the places
        where I read them. This list is personal and reflects{" "}
        <span className="italic">my own associations</span>.
      </h3>
      <div className="pt-10">
        <div className="flex flex-col sm:gap-4 md:gap-8">
          {impressions.map((impression, index) => (
            <>
              <BookImpression
                key={impression.id}
                impression={impression}
                index={index}
              />
              <Image
                src={starsSmall}
                width={100}
                height={100}
                alt="Divider"
                className="m-auto py-16 text-[#686773] last:hidden sm:py-8"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
