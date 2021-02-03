import React from "react";
import { getUnit } from "../../../shared/unit";

export default class Unit extends React.Component {
  render() {
    const { input, result, magnitude, round, focused, answer } = this.props;
    const unit = getUnit({ round, answer, magnitude });

    return (
      <div
        className={
          result || input
            ? `pl-2 py-2 text-3xl ${
                input
                  ? "border-b-2 border-gray-300 text-gray-400"
                  : "text-gray-500 pr-2"
              } whitespace-nowrap leading-snug ${
                focused ? "border-gray-500" : "border-gray-300"
              }`
            : ""
        }
      >
        {unit}
      </div>
    );
  }
}
