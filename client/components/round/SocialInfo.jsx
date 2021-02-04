import React from "react";
import { getSocialInfoValue } from "../../../shared/helper";

export default function SocialInfo({ type, neighbors }) {
  const socialInfoValue = getSocialInfoValue(type, neighbors);

  return (
    <div className="flex flex-row justify-between pr-20">
      <span className="lg:text-md xl:text-lg text-gray-500 font-semibold">
        {type} value of all neighbors{" "}
      </span>
      <span className="lg:text-sm xl:text-md text-gray-400 font-medium">
        {socialInfoValue}
      </span>
    </div>
  );
}
