import clsx from "clsx";
import Image from "next/image";
type Impression = {
  id: string;
  title: string;
  link: string;
  cover: string;
  authors: string;
  photo: string;
  notes: {
    summary: string;
    highlights: string[];
  };
  date: string;
};

export default function BookImpression({
  impression,
  index,
}: {
  impression: Impression;
  index: number;
}) {
  const posY = Math.floor(Math.random() * 100) + 1 + "%";

  return (
    <>
      <div className="relative block md:hidden">
        <div className="relative z-20 flex gap-2">
          <div className="relative">
            <Image
              width={270}
              height={300}
              src={impression.photo}
              alt="Photo"
              className="rounded-md object-contain"
            />

            <div
              style={{ top: `${posY}` }}
              className={`absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#8A998F] text-xm`}
            >
              💬
            </div>
          </div>
          <div className="relative">
            <Image
              width={200}
              height={200}
              // fill={true}
              src={impression.cover}
              alt={impression.title}
              className="min-h-[50px] min-w-[100px] rounded-md object-contain"
            />
          </div>
        </div>
        <h3 className="pb-2 pt-8 text-md md:pt-12">
          <a
            href={impression.link}
            className="font-bold italic underline decoration-[#C2715A] underline-offset-4"
          >
            {impression.title}
          </a>
          , в Хайфе, Израиль
        </h3>
        <p className={clsx("pt-2 text-sm")}>{impression.notes.summary}</p>
        {!!impression.notes.highlights?.length && (
          <>
            <p className="pb-3 pt-4 text-xm">Highlighted</p>
            <div className="flex flex-col gap-3">
              {impression.notes.highlights.map((h) => (
                <div key={h} className="flex gap-3">
                  <p>{`>`}</p>
                  <p className="text-xs" key={h}>
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="hidden w-full items-start md:flex md:gap-12">
        <div className="relative">
          <Image
            width={400}
            height={100}
            src={impression.photo}
            alt="Photo"
            className="max-h-[590px] min-w-[300px] rounded-md object-contain lg:min-w-[380px]"
          />
          <div
            style={{ top: `${posY}` }}
            className={`absolute -left-7 flex h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-[#212130] bg-[#E3CEB8] text-lg`}
          >
            🔮
          </div>
        </div>
        <div className="max-w-[400px]">
          <Image
            width={200}
            height={100}
            src={impression.cover}
            alt={impression.title}
            className="rounded-md"
          />

          <h3 className={clsx("pb-2 pt-8 text-lg sm:text-md")}>
            <a
              href={impression.link}
              className="font-bold italic underline decoration-[#C2715A] underline-offset-4"
            >
              {impression.title}
            </a>
            , in Tel Aviv in 2023
          </h3>
          <p className={clsx("pt-2 text-sm")}>{impression.notes.summary}</p>
          {!!impression.notes.highlights?.length && (
            <>
              <p className="pb-3 pt-4 text-xm">Highlighted</p>
              <div className="flex flex-col gap-3">
                {impression.notes.highlights.map((h) => (
                  <div key={h} className="flex gap-3">
                    <p>{`>`}</p>
                    <p className="text-xs" key={h}>
                      {h}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
