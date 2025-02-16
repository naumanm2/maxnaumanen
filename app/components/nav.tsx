"use client";

import Link from "next/link";

import Image from "next/image";

import logo from "@/public/logo-outline.svg";
import { useParams, usePathname } from "next/navigation";

export default function Nav() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <>
      <div className="flex fixed top-0 flex-row justify-between bg-background w-[calc(100%-12px*2)] md:w-[calc(100%-16px*2)] py-2">
        <Link href="/" className="flex-1">
          <div className="flex flex-1 flex-row gap-1 items-center">
            <h3>M</h3>
            <Image src={logo} alt="" className="animate-rotation" />
          </div>
        </Link>
        <div className="flex flex-col gap-0 text-end">
          <Link
            href="/work"
            className={`uppercase hover:text-foreground duration-200 animate-fade-in ${
              pathNames[0] == "work" ? "text-foreground" : "text-secondary"
            }`}
          >
            work
          </Link>
          <Link
            href="/about"
            className={`uppercase hover:text-foreground duration-200 animate-fade-in ${
              pathNames[0] == "about" ? "text-foreground" : "text-secondary"
            }`}
          >
            about
          </Link>
          {/* <Link href="/about">
            <small>about</small>
          </Link> */}
        </div>
      </div>
    </>
  );
}
