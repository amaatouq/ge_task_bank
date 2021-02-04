import React from "react";
import NumberFormat from "react-number-format";
import NumberToWords from "./NumberToWords";
import Unit from "./Unit";

export default class Answer extends React.Component {
  render() {
    const { answer, correct, round } = this.props;
    const task = round.get("task");

    return (
      <div className="flex mb-6">
        <div
          className={`mb-2 font-semibold ${
            correct ? "text-green-500" : ""
          } w-20 pr-3 text-right`}
        >
          {correct ? "Correct" : "Your"} answer
        </div>
        <div className={`w-full`}>
          <div
            className={`${
              correct ? "bg-green-50" : "bg-gray-100"
            } items-center relative flex items-center`}
          >
            <NumberFormat
              value={answer}
              displayType="text"
              thousandSeparator={true}
              className="w-full pl-2 py-2 questions-text text-gray-500 leading-snug text-right tabular-nums"
            />
            <Unit result answer={answer} {...this.props} />
            <NumberToWords answer={answer} task={task} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
