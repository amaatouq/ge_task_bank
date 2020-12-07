import React from "react";
import NumberFormat from "react-number-format";
import Unit from "./Unit";

export default class Answer extends React.Component {
  render() {
    const { answer, correct } = this.props;

    return (
      <div className="flex flex-col mb-4">
        <div
          className={`mb-2 font-semibold ${correct ? "text-green-500" : ""}`}
        >
          {correct ? "Correct" : "Your"} answer
        </div>
        <div className={`flex ${correct ? "bg-green-50" : "bg-gray-100"}`}>
          {/* <div className="w-full pl-2 py-2 text-3xl text-gray-500 bg-gray-100 leading-snug">
          {answer}
        </div> */}
          <NumberFormat
            value={answer}
            displayType="text"
            thousandSeparator={true}
            className="w-full pl-2 py-2 text-3xl text-gray-500 leading-snug"
            value={answer}
          />
          <Unit answer={answer} {...this.props} />
        </div>
      </div>
    );
  }
}
