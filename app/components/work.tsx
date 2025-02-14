import Spacer from "./spacer";
import Link from "next/link";

import logo from "@/public/logo-white.svg";

import Image from "next/image";

import arrow from "@/public/arrow.svg";

interface workOptions {
  headline: string;
  time: string;
  workurl?: string;
  address?: string;
  tags: string[];
  border: boolean;
}

export default function Work({
  headline,
  time,
  workurl,
  address,
  tags,
  border,
}: workOptions) {
  return (
    <>
      <Spacer b={border} />
      <div className=" w-full flex flex-col md:flex-row py-1 gap-3">
        {address ? (
          <Link href={address} className="flex-1 cursor-pointer group">
            <button className="flex flex-row items-center gap-2">
              <div className="opacity-0 w-0 overflow-visible group-hover:opacity-100 transition-all duration-200 animate-fade-in font-extralight">
                <svg
                  width="32"
                  viewBox="0 0 94 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M61.5 1.5L92 35M92 35L61.5 68.5M92 35H0"
                    stroke="white"
                    stroke-width="6"
                  />
                </svg>
              </div>
              <h3 className="group-hover:mx-8 transition-all duration-200 animate-fade-in">
                {headline}
              </h3>
            </button>
          </Link>
        ) : (
          <h3 className="flex-1 items-center gap-0">{headline}</h3>
        )}
        <div className="flex flex-1 flex-col md:flex-row flex-wrap text-secondary">
          <div className="flex-1 flex flex-row max-md:items-center gap-2 md:gap-0 md:flex-col w-full">
            <small>{time}</small>
            {workurl && (
              <Link href={workurl} className="pb-1">
                <small className="underline hover:text-foreground transition-all duration-200 animate-fade-in">
                  {workurl}
                </small>
              </Link>
            )}
          </div>
          <div className="flex-1 gap-4 py-1 w-full flex flex-row flex-wrap">
            {tags.map((tag, index) => (
              <small className="uppercase font-medium" key={index}>
                {tag}
              </small>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
