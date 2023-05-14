/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Golos_Text } from "next/font/google";

const golos = Golos_Text({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

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
      {/* ml-24 */}
      <div className="relative m-auto h-full w-3/4 max-w-[940px] pt-24">
        <div className="max-w-[1050px] pb-12">
          <h1 className="text-xl">
            <span className="font-bold">Nika Talovski</span>, Full Stack
            Developer with strong affinity towards UX design.
          </h1>
          <p className="pt-5 text-xl">
            I'm available for full-time or contract work in May 2023.{" "}
            <a
              href="mailto:talovskx@icloud.com"
              className="font-bold no-underline hover:underline hover:underline-offset-4"
            >
              Reach out
            </a>
            , if you'd like to work together.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="min-w-[222px] pt-12 md:w-1/2">
            <div>
              <p className="text-large italic">Selected work</p>
              <div className="flex flex-col gap-4 pt-1">
                <div
                  onMouseEnter={() => setHover("ace")}
                  onMouseLeave={() => setHover("none")}
                  className="relative -left-6 max-w-[700px] cursor-alias px-6 py-4 hover:shadow-1px hover:shadow-[#F9DE78]"
                >
                  <p className="text-large">
                    <span className="font-bold">Frontend Engineer</span>,{" "}
                    <a href="https://www.getace.io">Ace</a>, AI-copilot for
                    engineering managers.
                  </p>
                </div>
                <div
                  onMouseEnter={() => setHover("haven")}
                  onMouseLeave={() => setHover("none")}
                  className="relative -left-6 -top-6 max-w-[700px] cursor-alias px-6 py-4 hover:shadow-1px hover:shadow-[#713DA9]"
                >
                  <p className="text-large">
                    <span className="font-bold">
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
                    className="relative -left-6 -top-12 max-w-[700px] cursor-alias px-6 py-4 hover:shadow-1px hover:shadow-[#713DA9]"
                  >
                    <p className="text-large">
                      <span className="font-bold">Books</span>, I like the idea
                      of having read, books I've read and where I read them.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <p className="text-large italic">Links</p>
              <div
                className={
                  golos.className +
                  " text-medium flex flex-wrap gap-[10px] pt-[20px]"
                }
              >
                <div>
                  <a
                    className="hover:underline hover:underline-offset-4"
                    href="https://www.github.com/talovski"
                  >
                    Github
                  </a>
                </div>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="https://www.linkedin.com/in/talovski"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:underline hover:underline-offset-4"
                  href="mailto:talovskx@icloud.com"
                >
                  Mail
                </a>
              </div>
            </div>
          </div>
          <div className="min-w-[222px] pt-12 md:w-1/2 lg:w-1/2">
            <p className="text-large italic">About me</p>
            <div className="flex flex-col gap-6 pt-5">
              <p className="text-large">
                Most recently, I was a Frontend Engineer at Ace. I was focused
                on business logic and UI development in a small team of 3
                engineers.
              </p>
              <p className="text-large">
                Before that, I spent some time doing freelance jobs, mainly
                working with small businesses and design studios in Russia and
                Europe. I also worked in academia, focuing on application of
                statistics to social sciences.
              </p>
              <p className="text-large">
                In 2023 I made Aliyah to Israel and now live in Tel Aviv. I also
                love pottery and role-playing games.
              </p>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "m-auto flex justify-center pb-6 pt-24",
            golos.className
          )}
        >
          made by moi in tel aviv
        </div>
      </div>
    </main>
  );
}
