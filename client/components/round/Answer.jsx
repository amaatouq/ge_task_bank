import React from "react";
import NumberFormat from "react-number-format";
import NumberToWords from "./NumberToWords";
import Unit from "./Unit";

export default class Answer extends React.Component {
  render() {
    const { answer, correct, round, isAltLayout } = this.props;
    const task = round.get("task");
    if (isAltLayout) {
      return (
        <div className={correct ? "" : "mb-2"}>
          <p>{correct ? "Correct" : "Your"} answer</p>
          <NumberFormat
            className={`alt-answer-input w-full m-0 text-sm disabled:border-gray-50 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-gray-500 leading-snug tabular-nums disabled:opacity-50 disabled:cursor-not-allowed w-full block px-2 ${
              correct
                ? "bg-green-100 text-green-600 border-green-200 disabled:text-green-600"
                : "disabled:text-gray-700 text-dark-gray"
            }`}
            disabled
            value={answer}
            displayType="text"
            thousandSeparator={true}
          />
          <NumberToWords
            isAltLayout
            answer={answer}
            task={task}
            {...this.props}
          />
        </div>
      );
    }
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
              className="w-full pl-2 py-2 questions-text text-gray-800 leading-snug text-right tabular-nums"
            />
            <Unit result answer={answer} {...this.props} />
            <NumberToWords answer={answer} task={task} {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
