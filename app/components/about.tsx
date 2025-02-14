"use client";

import Spacer from "./spacer";

import logo from "@/public/logo-white.svg";

import Image from "next/image";
import { useState } from "react";

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
      <button className="w-full transition-all duration-200" onClick={() => setOpen(!open)}>
        <div className=" w-full flex flex-col md:flex-row py-1 gap-3">
          <div className="flex flex-1 md:flex-row">
            <h3 className="">{headline}</h3>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex-1 flex flex-row">
              <div className="flex-1 w-full text-left text-secondary">
                <small className="">{time}</small>
              </div>
              <div className="flex-1 gap-4">
                <div className="flex flex-row flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <label
                      className="border-0 uppercase font-medium text-secondary"
                      key={index}
                    >
                      {tag}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {open && (
              <div className="animate-emerge">
                <p className="text-white py-4 text-left max-w-2xl">
                  {paragraph}
                </p>
              </div>
            )}
          </div>
        </div>
      </button>
    </>
  );
}
