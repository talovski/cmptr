"use client";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  const [hover, setHover] = useState<
    "none" | "ace" | "haven" | "hse" | "books"
  >("none");

  return (
    <main
      className={clsx({
        "min-h-screen rounded-md transition-all": true,
        "bg-[#F8F8F9] text-[hsl(240,20%,25%)]": hover === "none",
        "bg-[#212131] text-[#F9DE78]": hover === "ace",
        "bg-[#0E2A6C] text-[#EDEDED]": hover === "hse",
        "bg-[#FCEDC1] text-[#713DA9]": hover === "haven",
        "bg-[#F5EDDF]": hover === "books",
      })}
    >
      <div className="relative m-auto h-full w-11/12 max-w-[1050px] pt-24 sm:w-5/6">
        <div className="pb-12">
          <div className="inline text-lg md:text-xl">
            <h1 className="inline">
              <span className="font-bold text-[#CF6C54]">Nika Talovski</span>,
              Full Stack Developer with strong affinity towards UX design.
            </h1>{" "}
            Available for <span className="italic">full-time</span> or{" "}
            <span className="italic">contract work in May 2023</span>.{" "}
          </div>
        </div>
        <div className="flex flex-wrap justify-between text-xm sm:text-md lg:text-lg">
          <div className="min-w-[222px] pt-12 sm:w-full md:w-[46%]">
            <p className=" italic">About me</p>

            <div className="flex flex-col gap-6 pt-5">
              <p>
                Most recently, I was a Frontend Engineer at Ace. I was focused
                on business logic and UI development in a small team of 3
                engineers.
              </p>
              <p>
                Before that, I spent some time doing freelance jobs, mainly
                working with small businesses and design studios in Russia and
                Europe. I also worked in academia, focuing on application of
                statistics to social sciences.
              </p>
              <p>
                In 2023 I made Aliyah to Israel and now live in Tel Aviv. I also
                love pottery and role-playing games.
              </p>
            </div>
          </div>
          <div className="min-w-[222px] pt-16 sm:w-full md:w-[46%] md:pt-12">
            <div>
              <p className="italic">Selected work</p>
              <div className="flex flex-col gap-4 pt-1">
                <div
                  onMouseEnter={() => setHover("ace")}
                  onMouseLeave={() => setHover("none")}
                  className="relative -left-2 max-w-[700px] cursor-alias px-2 py-4 hover:shadow-1px hover:shadow-[#F9DE78] sm:-left-6 sm:px-6"
                >
                  <p className="">
                    <span className="font-bold italic underline decoration-[#C2715A] underline-offset-4">
                      Frontend Engineer
                    </span>
                    , <a href="https://www.getace.io">Ace</a>, AI-copilot for
                    engineering managers.
                  </p>
                </div>
                <div
                  onMouseEnter={() => setHover("haven")}
                  onMouseLeave={() => setHover("none")}
                  className="relative -left-2 -top-6 max-w-[700px] cursor-alias px-2 py-4 hover:shadow-1px hover:shadow-[#713DA9] sm:-left-6 sm:px-6"
                >
                  <p className="">
                    <span className="font-bold italic underline decoration-[#C2715A] underline-offset-4">
                      Full Stack Developer, Designer
                    </span>
                    , <a href="https://www.getace.io">DM Haven</a>, a place to
                    play Dungeons and Dragons.
                  </p>
                </div>
                <Link href="/books/antilibrary">
                  <div
                    onMouseEnter={() => setHover("books")}
                    onMouseLeave={() => setHover("none")}
                    className="relative -left-2 -top-12 max-w-[700px] cursor-alias px-2 py-4 hover:shadow-1px hover:shadow-[#713DA9] sm:-left-6 sm:px-6"
                  >
                    <p className="">
                      <span className="font-bold italic underline decoration-[#C2715A] underline-offset-4">
                        Books
                      </span>
                      , I like the idea of having read, books I've read and
                      where I read them.
                    </p>
                  </div>
                </Link>
              </div>
              <p className=" italic">Links</p>

              <div
                className={
                  "flex flex-col flex-wrap gap-[10px] pt-[20px]  font-bold italic"
                }
              >
                <div>
                  <a
                    className="underline decoration-[#C2715A] underline-offset-4"
                    href="https://www.github.com/talovski"
                  >
                    Github
                  </a>
                </div>
                <a
                  className="underline decoration-[#C2715A] underline-offset-4"
                  href="https://www.linkedin.com/in/talovski"
                >
                  LinkedIn
                </a>
                <div>
                  <a
                    className="underline decoration-[#C2715A] underline-offset-4"
                    href="mailto:talovskx@icloud.com"
                  >
                    Mail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="pb-16 pt-24 text-lg lg:text-xl">
            <a
              href="mailto:talovskx@icloud.com"
              className="font-bold italic underline decoration-[#C2715A] underline-offset-4"
            >
              Reach out
            </a>
            , if you'd like to work together.
          </p>
        </div>
      </div>
    </main>
  );
}
