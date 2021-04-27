import React, { Component } from "react";
import { applyMagnitude } from "../../../../shared/conversions";
import { getMinMaxErrorMessage } from "../../../../shared/helper";
import ResponseInput from "../../round/ResponseInput";

export class PlayerResponse extends Component {
  renderError() {
    const { player, round } = this.props;
    const task = round.get("task");

    if (task.question.min === undefined && task.question.max === undefined) {
      return null;
    }

    let answer = player.stage.get("tmpanswer");
    if (task.question.magnitude) {
      answer = applyMagnitude(answer, task.question.magnitude);
    }

    const err = getMinMaxErrorMessage(answer, task);
    if (!err) {
      return null;
    }

    return (
      <div className="w-full mt-2 font-semibold text-sm mb-1 text-red-500">
        <div>{err}</div>
      </div>
    );
  }
  render() {
    const { player, stage } = this.props;
    return (
      <div className="player-response">
        {!player.stage.submitted && stage.name !== "social" &&
          <span className="text-dark-gray font-bold text-sm mb-2">
            Please submit your response
          </span>
        }
        {this.renderError()}
        <ResponseInput {...this.props} isAltLayout />
      </div>
    );
  }
}

export default PlayerResponse;
