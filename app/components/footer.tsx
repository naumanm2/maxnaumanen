import React from "react";
import Spacer from "./spacer";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pt-24">
      <Spacer b={true} />
      <div className="w-full flex flex-row">
        <div className="flex-1 flex flex-col gap-0">
          <Link href="mailto:naummaxc@gmail.com" className="hover:underline">
            <h2>EMAIL</h2>
          </Link>
        </div>
        <div className="flex flex-col flex-1 items-end md:items-start">
          <Link href="github.com" className="underline">
            <small>GITHUB</small>
          </Link>
          <Link href="github.com" className="underline">
            <small>LINKEDIN</small>
          </Link>
        </div>
      </div>
    </div>
  );
}
