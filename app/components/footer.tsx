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
          <Link
            href="https://github.com/naumanm2"
            className="underline hover:text-secondary animate-fade-in duration-200"
            rel="noopener noreferrer"
            target="_blank"
          >
            <small>GITHUB</small>
          </Link>
          <Link
            href="https://www.linkedin.com/in/max-n-969369138"
            className="underline hover:text-secondary animate-fade-in duration-200"
            rel="noopener noreferrer"
            target="_blank"
          >
            <small>LINKEDIN</small>
          </Link>
        </div>
      </div>
    </div>
  );
}
