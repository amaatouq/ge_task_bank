import React from "react";
import NumberFormat from "react-number-format";
import NumberToWords from "./NumberToWords";
import Unit from "./Unit";

export default class Answer extends React.Component {
  render() {
    const { answer, correct, round } = this.props;
    const task = round.get("task");

    return (
      <div className="flex flex-col mb-12">
        <div
          className={`mb-2 font-semibold ${correct ? "text-green-500" : ""}`}
        >
          {correct ? "Correct" : "Your"} answer
        </div>
        <div
          className={`relative flex ${correct ? "bg-green-50" : "bg-gray-100"}`}
        >
          <NumberFormat
            value={answer}
            displayType="text"
            thousandSeparator={true}
            className="w-full pl-2 py-2 text-3xl text-gray-500 leading-snug text-right tabular-nums"
          />
          <Unit result answer={answer} {...this.props} />
          <NumberToWords answer={answer} task={task} {...this.props} />
        </div>
      </div>
    );
  }
}
