import React from "react";

export default function Arrow({
  size,
  thicness,
  expand,
  rotate
}: {
  size: number;
  thicness?: number;
  expand?: boolean;
  rotate?: boolean;
}) {
  return (
    <div>
      {!expand ? (
        <div className="opacity-0 -mr-12 group-hover:mr-2 group-hover:opacity-100 [transform-origin:50%_50%] [transform-box:fill-box] transition-all duration-200 animate-fade-in mt-2">
          <svg
            width={size}
            viewBox="0 0 94 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M61.5 1.5L92 35M92 35L61.5 68.5M92 35H0"
              stroke="white"
              strokeWidth={`${thicness ? thicness : "4"}`}
            />
          </svg>
        </div>
      ) : (
        <div className={`opacity-0 w-0 group-hover:mr-10 group-hover:opacity-100 [transform-origin:50%_50%] [transform-box:fill-box] transition-all duration-200 animate-fade-in`}>
          <svg
            height={size}
            viewBox="0 0 70 94"
            style={{transform: rotate ? "scale(-1)" : "scale(1)"}}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.5 62L35 92.5M35 92.5L1.5 62M35 92.5L35 0.499999"
              stroke="white"
              strokeWidth={`${thicness ? thicness : "4"}`}
            />
          </svg>
        </div>
      )}
    </div>
  );
}
