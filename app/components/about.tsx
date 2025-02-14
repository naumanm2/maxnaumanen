"use client";

import Spacer from "./spacer";

import logo from "@/public/logo-white.svg";

import Image from "next/image";
import { useState } from "react";
import Arrow from "./arrow";

interface workOptions {
  headline: string;
  time: string;
  paragraph: string;
  tags: string[];
  border: boolean;
}

export default function About({
  headline,
  time,
  paragraph,
  tags,
  border,
}: workOptions) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Spacer b={border} />
      <button className="w-full group" onClick={() => setOpen(!open)}>
        <div className=" w-full flex flex-col md:flex-row py-1 gap-3 text-left">
          <div className="flex flex-1 md:flex-row gap-0 items-start">
            <h3 className="">{headline}</h3>
          </div>
          <div className="flex flex-1 flex-row">
            <div className="flex flex-1 flex-col">
              <div className="flex-1 flex flex-col md:flex-row gap-0">
                <div className="flex-1 text-secondary pl-1 flex flex-row max-md:items-center gap-2 md:gap-0 md:flex-col w-full">
                  <small className="">{time}</small>
                </div>
                <div className="flex flex-1 flex-row flex-wrap gap-2 pl-1">
                  {tags.map((tag, index) => (
                    <small
                      className="pt-[6px] uppercase font-medium text-secondary"
                      key={index}
                    >
                      {tag}
                    </small>
                  ))}
                </div>
              </div>
              {open && (
                <div className="animate-emerge">
                  <p className="text-white py-4 pl-1 text-left max-w-2xl">
                    {paragraph}
                  </p>
                </div>
              )}
            </div>
            <div className="pt-[6px]">
              <Arrow size={32} expand={true} rotate={open} />
            </div>
          </div>
        </div>
      </button>
    </>
  );
}
