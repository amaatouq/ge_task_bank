import React, { Component } from "react";
import ResponseContainer from "./response/ResponseContainer";
import ChatContainer from "./chat/ChatContainer";
import SummaryContainer from "./summary/SummaryContainer";

export class MetaContainer extends Component {
  render() {
    return (
      <div className="alt-meta-container">
        <ResponseContainer {...this.props} />
        <ChatContainer {...this.props} />
        <SummaryContainer {...this.props} />
      </div>
    );
  }
}

export default MetaContainer;
