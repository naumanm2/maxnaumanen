import Spacer from "./spacer";
import Link from "next/link";

import logo from "@/public/logo-white.svg";

import Image from "next/image";

import arrow from "@/public/arrow.svg";
import Arrow from "./arrow";

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
      {address ? (
        <div className="w-full flex flex-col gap-2 md:flex-row border-t border-stone-600 group overflow-x-hidden">
          <Link
            href={address}
            className="flex-1 flex flex-col gap-3 md:flex-row cursor-pointer py-5 md:py-7"
          >
            <h3 className="flex-1 text-left">{headline}</h3>
            <div className="flex flex-1 flex-row">
              <div className="flex flex-1 flex-col md:flex-row gap-1 pl-[1px] flex-wrap text-secondary">
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
                <div className="flex-1 gap-4 w-full flex flex-row flex-wrap">
                  {tags.map((tag, index) => (
                    <small className="uppercase font-medium" key={index}>
                      {tag}
                    </small>
                  ))}
                </div>
              </div>
              <div className="flex-none group">
                <Arrow size={32} />
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <>
          <div
            className="w-full flex flex-col gap-2 md:flex-row pt-6 pb-4 group overflow-x-hidden"
            style={{ borderTop: border ? "1px solid rgb(87,83,78)" : "none" }}
          >
            <h3 className="flex-1 flex flex-row items-center gap-0">
              {headline}
            </h3>

            <div className="flex flex-1 flex-row">
              <div className="flex flex-1 flex-col md:flex-row pl-[1px] flex-wrap text-secondary">
                <div className="flex-1 flex flex-row max-md:items-center md:gap-0 md:flex-col w-full">
                  <small className="pb-1 mr-2">{time}</small>
                  {workurl && (
                    <Link href={workurl} className="pb-2">
                      <small className="underline hover:text-foreground transition-all duration-200 animate-fade-in">
                        {workurl}
                      </small>
                    </Link>
                  )}
                </div>
                <div className="flex-1 gap-4 w-full flex flex-row flex-wrap">
                  {tags.map((tag, index) => (
                    <small className="uppercase font-medium" key={index}>
                      {tag}
                    </small>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
