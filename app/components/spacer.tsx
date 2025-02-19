import React from "react";

export default function Spacer({ b }: { b: boolean }) {
  return (
    <>
      {b ? (
        <div className="w-full flex flex-col justify-center h-8 md:h-12">
          <div className="border-b border-stone-600"></div>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center h-6 md:h-8"></div>
      )}
    </>
  );
}
