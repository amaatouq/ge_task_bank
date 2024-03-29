import React from "react";

export default class RoundScore extends React.Component {
  render() {
    const { score } = this.props;

    return (
      <div className="flex">
        <div className="w-20 pr-3 text-right mb-2 font-semibold text-gray-500">
          Question Score
        </div>
        <div className="w-full pl-2 text-3xl text-gray-500 leading-snug">
          {score === 0 ? "" : "+"}
          {score.toFixed(2)}
        </div>
      </div>
    );
  }
}
