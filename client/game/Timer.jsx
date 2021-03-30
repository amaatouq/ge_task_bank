import { StageTimeWrapper } from "meteor/empirica:core";
import React from "react";

class timer extends React.Component {
  render() {
    const { remainingSeconds, isAltLayout = false } = this.props;

    const classes = ["flex flex-col items-center justify-center"];
    if (remainingSeconds <= 5) {
      classes.push("text-red-500");
    } else if (remainingSeconds <= 10) {
      classes.push("text-orange-500");
    } else {
      classes.push("text-gray-500");
    }

    let labelClassName =
      "uppercase font-bold text-sm text-gray-400 leading-none tracking-wide";
    let timerClassName = "text-3xl tabular-nums slashed-zero leading-none";
    if (isAltLayout) {
      labelClassName = "text-xs font-bold text-dark-grey";
      timerClassName = "text-18 font-bold text-dark-grey";
    }

    return (
      <div className={classes.join(" ")}>
        <div className={labelClassName}>Timer</div>
        <span className={timerClassName}>{format(remainingSeconds)}</span>
      </div>
    );
  }
}

export default Timer = StageTimeWrapper(timer);

function format(timestamp) {
  var hours = Math.floor(timestamp / 60 / 60);
  var minutes = Math.floor(timestamp / 60) - hours * 60;
  var seconds = timestamp % 60;

  const result =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");

  if (hours > 0) {
    return hours.toString().padStart(2, "0") + ":" + result;
  }

  return result;
}
