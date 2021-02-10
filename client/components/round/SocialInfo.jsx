import React from "react";
import { getSocialInfoValue } from "../../../shared/helper";

export default function SocialInfo({ type, neighbors }) {
  const socialInfoValue = getSocialInfoValue(type, neighbors);

  return (
    <div className="overflow-hidden">
      <div className="px-2 py-2 flex">
        <dt className=" text-sm w-44 flex flex-col items-end text-gray-500 truncate">
          <div>
            <span className="capitalize text-gray-600 font-semibold">
              {type}{" "}
            </span>
            answer
          </div>
          <div>of neighbors</div>
        </dt>
        <dd className="pl-5 text-xl font-semibold text-gray-900 flex items-center">
          {socialInfoValue}
        </dd>
      </div>
    </div>
  );
}
