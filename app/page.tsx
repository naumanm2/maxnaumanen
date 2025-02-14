import Link from "next/link";

import Image from "next/image";

import logo from "@/public/logo-white.svg";
import bg from "@/public/bg.svg";

export default function Home() {
  return (
    <>
      <div className="fixed -z-20 h-[100vh] flex justify-center items-center opacity-5 w-[200vw] left-[-100%] md:w-full top-0 md:left-0">
        <Image src={bg} alt="" className="" />
      </div>
      <div className="flex flex-1 w-full h-full justify-start max-md:pb-16 items-end md:justify-center md:items-center ">
        <div className="max-md:hidden flex-1"></div>
        <div className="flex-1 flex flex-col gap-2 transition-all duration-200 animate-fade-in">
          <button className="group flex flex-row items-center gap-0">
            <div className="opacity-0 w-0 overflow-visible group-hover:opacity-100 transition-all duration-200 animate-fade-in pt-2">
              <svg
                height="48"
                viewBox="0 0 98 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M87.3429 34.3464L1 34.3464H0.5V34.8464V38.8464V39.3464H1L87.3429 39.3464L60.6514 68.6634L60.3148 69.0331L60.6845 69.3697L63.6423 72.0626L64.012 72.3992L64.3486 72.0295L96.0745 37.1831L96.3809 36.8464L96.0745 36.5098L64.3486 1.66339L64.012 1.29367L63.6423 1.63028L60.6845 4.32317L60.3148 4.65978L60.6514 5.0295L87.3429 34.3464Z"
                  stroke="white"
                />
              </svg>
            </div>
            <Link href="/work">
              <h2 className="group-hover:mx-20 transition-all duration-200 animate-fade-in">
                work
              </h2>
            </Link>
          </button>
          <button className="group flex relative flex-row items-center gap-0">
            <div className="opacity-0 w-0 overflow-visible group-hover:opacity-100 transition-all duration-200 animate-fade-in pt-2">
              <svg
                height="48"
                viewBox="0 0 98 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M87.3429 34.3464L1 34.3464H0.5V34.8464V38.8464V39.3464H1L87.3429 39.3464L60.6514 68.6634L60.3148 69.0331L60.6845 69.3697L63.6423 72.0626L64.012 72.3992L64.3486 72.0295L96.0745 37.1831L96.3809 36.8464L96.0745 36.5098L64.3486 1.66339L64.012 1.29367L63.6423 1.63028L60.6845 4.32317L60.3148 4.65978L60.6514 5.0295L87.3429 34.3464Z"
                  stroke="white"
                />
              </svg>
            </div>
            <Link href="/about">
              <h2 className="group-hover:mx-20 transition-all duration-200 animate-fade-in">
                about
              </h2>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
