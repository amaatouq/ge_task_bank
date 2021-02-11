import React from "react";
import Wrapper from "../components/Wrapper";

export default function IntroLayout({ children, title, ...rest }) {
  return (
    <Wrapper {...rest}>
      <div className="flex flex-row justify-center items-center text-gray-800 -mx-2">
        <div className="max-w-4xl px-2">
          <div className="text-4xl font-semibold text-gray-800 mt-8 mb-7">
            {title}
          </div>
          {children}
        </div>
      </div>
    </Wrapper>
  );
}
