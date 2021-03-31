import React, { Component } from "react";
import ChatContainer from "../chat/ChatContainer";
import ResponseContainer from "./response/ResponseContainer";
import SummaryContainer from "./summary/SummaryContainer";

export class MetaContainer extends Component {
  render() {
    const {
      stage,
      game: { treatment },
    } = this.props;
    const { chat = false } = treatment;

    // const showChat = chat && stage.name === "social";
    const showChat = true;
    return (
      <div className="meta-container">
        <ResponseContainer {...this.props} />
        {showChat ? <ChatContainer {...this.props} isAltLayout /> : <div></div>}
        <SummaryContainer {...this.props} />
      </div>
    );
  }
}

export default MetaContainer;
