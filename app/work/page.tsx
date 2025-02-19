import React from "react";
import Work from "../components/work";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected works",
};

export default function Works() {
  return (
    <>
      <div className="pt-40 md:pt-60 flex-1 w-full h-fit overflow-x-hidden">
        <h1 className="pb-6 md:pb-10">Selected works</h1>
        <Work
          border={true}
          headline={"Nokian Tyres"}
          time={"2023-2024"}
          tags={["ui design", "ux design"]}
          address="/work/nokian-tyres"
        />
        <Work
          border={true}
          headline={"Valio"}
          time={"Spring 2024"}
          tags={["ui design", "ux design"]}
          address="/work/valio"
        />
        <Work
          border={true}
          headline={"GE Healthcare"}
          time={"Spring 2024"}
          tags={["ui design", "ux design"]}
          address="/work/ge"
        />
        <Work
          border={true}
          headline={"PrimaPet"}
          time={"Winter 2023"}
          tags={["development"]}
          address="/work/primapet"
        />
        <Work
          border={true}
          headline={"Glitcher.com"}
          time={"2025"}
          tags={["ui design", "development"]}
          address="/work/glitcher"
        />
      </div>
    </>
  );
}
