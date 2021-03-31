import React, { Component } from "react";
import SocialExposure from "../../../components/round/SocialExposure";
import PlayerResponse from "./PlayerResponse";

export class SummaryContainer extends Component {
  render() {
    return (
      <div className="summary-container">
        <SocialExposure {...this.props} isAltLayout />
        <PlayerResponse {...this.props} />
      </div>
    );
  }
}

export default SummaryContainer;
