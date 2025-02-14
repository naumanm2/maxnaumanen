import React from "react";

export default function Arrow({
  size,
  outline,
  rotate,
}: {
  size: number;
  outline?: boolean;
  rotate?: boolean;
}) {
  return (
    <div>
      {outline ? (
        <div
          className={`opacity-0 w-0 group-hover:opacity-100 overflow-visible transition-all duration-200 animate-fade-in ${
            rotate && "rotate-90"
          }`}
        >
          <svg
            height={size}
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
      ) : (
        <div
          className={`opacity-0 w-0 group-hover:opacity-100 overflow-visible [transform-origin:50%_50%] [transform-box:fill-box] transition-all duration-200 animate-fade-in`}
        >
          <svg
            width={size}
            transform={`${rotate && "rotate(-90)"}`}
            viewBox="0 0 94 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.5 1.5L92 35M92 35L61.5 68.5M92 35H0"
              stroke="white"
              strokeWidth="4"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
