import React, { Component } from "react";
import SocialExposure from "../../../components/round/SocialExposure";
import ResponseInput from "../../round/ResponseInput";

export class PlayerResponse extends Component {
  render() {
    return (
      <div className="player-response">
        <span className="text-dark-gray font-bold text-sm mb-2">
          Update your response
        </span>
        <ResponseInput {...this.props} isAltLayout />
      </div>
    );
  }
}

export default PlayerResponse;
