import React, { Component } from "react";
import { applyMagnitude } from "../../../../shared/conversions";
import SocialExposure from "../../../components/round/SocialExposure";
import Answer from "../../round/Answer";
import PlayerResponse from "./PlayerResponse";

export class SummaryContainer extends Component {
  renderAnswer() {
    const { player, round, stage } = this.props;
    const task = round.get("task");

    switch (stage.name) {
      case "response":
      case "social":
        return <PlayerResponse {...this.props} />;
      default:
        let answer = player.round.get("answer");
        if (task.question.magnitude) {
          answer = applyMagnitude(answer, task.question.magnitude);
        }
        return (
          <div className="w-full">
            <Answer answer={answer} {...this.props} isAltLayout />
            <Answer correct answer={task.answer} {...this.props} isAltLayout />
            <div className="mt-5">
              <button
                type="button"
                className="w-full alt-submit-btn text-white rounded text-sm font-bold disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={() => player.stage.submit()}
                disabled={player.stage.submitted}
              >
                OK
              </button>
            </div>
          </div>
        );
    }
  }
  render() {
    const { isResponseStage } = this.props;

    return (
      <div className="summary-container">
        {!isResponseStage && <SocialExposure {...this.props} isAltLayout />}
        {this.renderAnswer()}
      </div>
    );
  }
}

export default SummaryContainer;
