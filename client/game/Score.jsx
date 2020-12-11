import React from "react";

export default class Score extends React.Component {
  render() {
    const { player } = this.props;

    return (
      <div className="flex flex-col justify-center items-end text-gray-500">
        <div className="uppercase font-bold text-sm text-gray-400 leading-none tracking-wide">
          Score
        </div>
        <span className="text-3xl tabular-nums slashed-zero leading-none flex">
          {player.get("score") || "0.00"}
          {/* <div className="text-gray-400">pts</div> */}
        </span>
      </div>
    );
  }
}
