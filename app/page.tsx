import Link from "next/link";

import Image from "next/image";

import logo from "@/public/logo-white.svg";
import bg from "@/public/bg.svg";
import Arrow from "./components/arrow";

export default function Home() {
  return (
    <>
      <div className="fixed -z-20 h-[100vh] flex flex-1 justify-center items-center opacity-20 md:opacity-10 w-[200vw] left-[-100%] md:w-full top-0 md:left-0">
        <Image src={bg} alt="" className="" />
      </div>
      <div className="flex flex-1 w-full justify-start max-md:pb-16 items-end md:justify-center md:items-center ">
        <div className="max-md:hidden flex-1"></div>
        <div className="flex-1 flex flex-col gap-2 transition-all duration-200 animate-fade-in">
          <button className="group flex flex-row items-center gap-0">
            <Arrow size={48} outline={false} />

            <Link href="/work">
              <h2 className="group-hover:mx-16 transition-all duration-200 animate-fade-in">
                work
              </h2>
            </Link>
          </button>
          <button className="group flex relative flex-row items-center gap-0">
            <Arrow size={48} outline={false} />

            <Link href="/about">
              <h2 className="group-hover:mx-16 transition-all duration-200 animate-fade-in">
                about
              </h2>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
