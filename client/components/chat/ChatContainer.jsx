import React, { Component } from "react";
import { Chat } from "@empirica/chat";
import ChatFooter from "./ChatFooter";
import ChatMessage from "./ChatMessage";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeGroup: "group1" };
  }

  setActiveGroup = (activeGroup) => this.setState({ activeGroup: activeGroup });

  render() {
    const { activeGroup } = this.state;
    const { player, game } = this.props;
    const groups = ["group1", "group2", "group3"];
    const newMessagesGroup = ["group3"];
    const commonProps = {
      player,
      scope: game,
      timeStamp: new Date(TimeSync.serverTime(null, 1000)),
      customKey: activeGroup,
    };

    return (
      <div className="max-h-64 overflow-y-auto">
        <div className="py-10 overflow-y-hidden overflow-x-auto whitespace-nowrap">
          {groups.map((g, i) => {
            let textColor = "text-gray-300";
            let hasNewMessage = false;
            if (g === activeGroup) {
              textColor = "text-gray-800";
            } else if (newMessagesGroup.includes(g)) {
              hasNewMessage = true;
              textColor = "text-blue-500";
            }

            return (
              <button
                key={i}
                onClick={() => this.setActiveGroup(g)}
                className={`bg-transparent ml-10 text-xl font-semibold leading-none outline-none focus:outline-none ${textColor}`}
              >
                <div className="flex flex-row items-center">
                  <span>{g}</span>
                  {hasNewMessage && (
                    <div className="rounded-full h-3 w-3 flex items-center justify-center bg-blue-500 ml-2" />
                  )}
                </div>
              </button>
            );
          })}
        </div>
        <div style={{ height: "calc(100vh - 180px)" }}>
          <Chat {...commonProps} footer={ChatFooter} message={ChatMessage} />
        </div>
      </div>
    );
  }
}
