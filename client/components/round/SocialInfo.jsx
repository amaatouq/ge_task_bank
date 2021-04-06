import React from "react";
import NumberFormat from "react-number-format";
import { getSocialInfoValue } from "../../../shared/helper";

export default function SocialInfo({ type, neighbors, task }) {
  const socialInfoValue = getSocialInfoValue(type, neighbors, task);

  return (
    <div className="overflow-hidden">
      <div className="px-2 py-2 flex items-center">
        <dt className=" text-sm w-44 flex flex-col items-end text-gray-500 truncate">
          <div>
            <span className="capitalize text-gray-600 font-semibold">
              {type}{" "}
            </span>
            of neighbors
          </div>
        </dt>
        <NumberFormat
          thousandSeparator={true}
          isNumericString
          className="pl-5 text-lg font-semibold text-gray-900 flex items-center"
          placeholder="0.0"
          autoFocus
          name="answer"
          displayType="text"
          value={socialInfoValue}
        />
      </div>
    </div>
  );
}
