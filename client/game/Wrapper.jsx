import React from "react";
import DebugButtons from "./DebugButtons";

export default function Wrapper({ children, ...rest }) {
  return (
    <>
      <div className="w-full h-full relative text-base">
        <div className="absolute right-0 top-0 p-4 flex">
          <DebugButtons {...rest} />
        </div>

        {children}
      </div>
    </>
  );
}
