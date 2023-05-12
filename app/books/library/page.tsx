import impressions from "../../../books/library.json";
import BookImpression from "./impression";
import starsSmall from "../../../public/stars-small.svg";
import Image from "next/image";
export default function Library() {
  return (
    <div>
      <h3 className="text-large">Books I've read and where I read them</h3>
      <div className="pt-10">
        <div className="flex flex-col sm:gap-4 md:gap-8">
          {impressions.map((impression) => (
            <>
              <BookImpression key={impression.id} impression={impression} />
              <Image
                src="/stars-small.svg"
                width={100}
                height={100}
                alt="Divider"
                className="m-auto py-16 last:hidden"
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
