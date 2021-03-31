import React from "react";
import NumberFormat from "react-number-format";
import { getSocialInfoValue } from "../../../../shared/helper";

export default function NeighborsStats({ info, neighbors, task }) {
  if (info.length == 0) {
    return null;
  }

  return (
    <div className="neighbors">
      <span className="text-dark-gray font-bold text-sm">
        Other Player Summary
      </span>

      <ul className="mt-1">
        {info.map((i) => {
          let value = getSocialInfoValue(i, neighbors, task);

          return (
            <li key={i} className="flex justify-between items-center">
              <span className="text-light-gray text-sm">
                <span className="text-dark-gray text-sm">{i}</span> of neighbors
              </span>
              <NumberFormat
                thousandSeparator={true}
                isNumericString
                className="text-sm"
                placeholder="0.0"
                autoFocus
                name="answer"
                displayType="text"
                value={value}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
