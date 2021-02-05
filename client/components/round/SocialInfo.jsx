import React from "react";
import { getSocialInfoValue } from "../../../shared/helper";

export default function SocialInfo({ type, neighbors }) {
  const socialInfoValue = getSocialInfoValue(type, neighbors);

  return (
    <div className="flex flex-row justify-between">
      <span className="lg:text-md xl:text-lg text-gray-500 font-semibold mr-20">
        {type} answer of neighbors{" "}
      </span>
      <span className="lg:text-sm xl:text-md text-gray-400 font-medium">
        {socialInfoValue}
      </span>
    </div>
  );
}
