import { flushAllTraces } from "next/dist/trace";
import React from "react";

export default function Spacer({ b }: { b: boolean }) {
  return (
    <div
      className={`w-full flex flex-col justify-center`}
      style={{ height: b ? "3rem" : "2rem" }}
    >
      {b && (
        <>
          <div className="border-b border-stone-600 border-foreground"></div>
        </>
      )}
    </div>
  );
}
