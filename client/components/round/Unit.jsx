import pluralize from "pluralize";
import React from "react";
import { magnitudesToEnglish } from "../../../shared/conversions";

export default class Unit extends React.Component {
  render() {
    const { input, result, magnitude, round, focused, answer } = this.props;
    const task = round.get("task");

    let unit = task.question.unit;
    if (!unit) {
      return "";
    }

    if (magnitude && task.question.magnitude) {
      unit = magnitudesToEnglish[task.question.magnitude] + " " + unit;
    }

    const a = parseInt(answer || 0, 10);
    unit = pluralize(unit, a);

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
