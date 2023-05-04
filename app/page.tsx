/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import clsx from "clsx";

export default function Home() {
  const [hover, setHover] = useState<
    "none" | "ace" | "haven" | "hse" | "books"
  >("none");

  return (
    <main
      className={clsx({
        "min-h-screen rounded-md": true,
        "bg-[#F8F8F9]": hover === "none",
        "bg-[#212131] text-[#F9DE78]": hover === "ace",
        "bg-[#0E2A6C] text-[#EDEDED]": hover === "hse",
        "color-[#713DA9] bg-[#FCEDC1]": hover === "haven",
        "bg-[#F5EDDF]": hover === "books",
      })}
    >
      <div className="relative ml-24 h-full w-3/4 max-w-[1280px] pt-24">
        <div className="max-w-[1050px] pb-12">
          <h1 className="text-4xl">
            <span className="font-bold">Nika Talovski</span>, Full Stack
            Developer with strong affinity towards UX design.
          </h1>
          <p className="pt-5 text-4xl">
            I'm available for full-time or contract work in May 2023.
            <a
              href="mailto:talovskx@icloud.com"
              className="font-bold no-underline hover:underline"
            >
              Reach out
            </a>
            , if you'd like to work together.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-1/2 min-w-[292px] md:w-11/12">
            <p className="pt-12 text-2xl italic">Selected work</p>
            <div className="flex flex-col gap-4 pt-1">
              <div
                onMouseEnter={() => setHover("ace")}
                onMouseLeave={() => setHover("none")}
                className="relative -left-6 max-w-[700px] cursor-alias px-6 py-4 hover:shadow-1px hover:shadow-[#F9DE78]"
              >
                <p className="text-2xl">
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
                <p className="text-2xl">
                  <span className="font-bold">
                    Full Stack Developer, Designer
                  </span>
                  , <a href="https://www.getace.io">DM Haven</a>, a place to
                  play Dungeons and Dragons.
                </p>
              </div>
              <div
                onMouseEnter={() => setHover("books")}
                onMouseLeave={() => setHover("none")}
                className="relative -left-6 -top-12 max-w-[700px] cursor-alias px-6 py-4 hover:shadow-1px hover:shadow-[#713DA9]"
              >
                <p className="text-2xl">
                  <span className="font-bold">Books</span>, I like the idea of
                  having read, books I've read and where I read them.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 min-w-[292px] md:w-11/12">
            <p className="pt-12 text-2xl italic">About me</p>
            <div className="flex flex-col gap-6 pt-3">
              <p className="text-2xl">
                Most recently, I was a Frontend Engineer at Ace. I was focused
                on business logic and UI development in a small team of 3
                engineers.
              </p>
              <p className="text-2xl">
                Before that, I spent some time doing freelance jobs, mainly
                working with small businesses and design studios in Russia and
                Europe. I also worked in academia, focuing on application of
                statistics to social sciences.
              </p>
              <p className="text-2xl">
                In 2023 I made Aliyah to Israel and now live in Tel Aviv. I also
                love pottery and role-playing games.
              </p>
            </div>
          </div>
        </div>
      </div>
      Nika Talovski
    </main>
  );
}
