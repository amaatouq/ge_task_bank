import React from "react";

export default class Score extends React.Component {
  state = {
    score: "0.00",
  };

  componentDidMount() {
    this.setScore();
  }
  componentDidUpdate(prevProp) {
    if (
      prevProp.demoScore !== this.props.demoScore ||
      prevProp.player.get("score") !== this.props.player.get("score")
    ) {
      this.setScore();
    }
  }

  setScore() {
    const { player, demoScore } = this.props;
    const getScore = demoScore ? demoScore : player.get("score");
    this.setState({
      score: getScore ? getScore.toFixed(2) : "0.00",
    });
  }
  render() {
    const { score } = this.state;

    return (
      <div className="flex flex-col justify-center items-end text-gray-500">
        <div className="uppercase font-bold text-sm text-gray-400 leading-none tracking-wide">
          Score
        </div>
        <span className="text-3xl tabular-nums slashed-zero leading-none flex">
          {score || "0.00"}
          {/* <div className="text-gray-400">pts</div> */}
        </span>
      </div>
    );
  }
}
