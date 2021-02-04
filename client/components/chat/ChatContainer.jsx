import React, { Component } from "react";
import { Chat } from "@empirica/chat";
import ChatFooter from "./ChatFooter";
import ChatMessage from "./ChatMessage";
import ChatGroups from "../../../chatGroups.json";
import { convertCharToNumber } from "../../../shared/helper";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeGroup: "", groups: [], newMessagesGroup: [] };
  }

  setGroups = () => {
    const { player } = this.props;
    const chatGroupsKey = 0;

    if (!ChatGroups) {
      console.warn("Chat Groups rule doesn\t exist!");
      return;
    }

    let chatGroups = ChatGroups[chatGroupsKey].split(",");
    chatGroups.forEach((g) => {
      const connection = g.split("-");
      const { groups } = this.state;

      if (player.get("index") !== parseInt(connection[0])) {
        return;
      }

      groups.push(connection[1]);

      this.setState({
        groups: groups.sort(),
      });
    });

    const { groups } = this.state;
    // player doesn't have group chat
    if (groups.length === 0) {
      return;
    }

    this.setState({
      activeGroup: groups[0],
    });
  };

  componentDidMount() {
    this.setGroups();
  }

  setActiveGroup = (activeGroup) => this.setState({ activeGroup: activeGroup });

  render() {
    const { activeGroup, groups, newMessagesGroup } = this.state;
    const { player, game } = this.props;

    const commonProps = {
      player,
      scope: game,
      timeStamp: new Date(TimeSync.serverTime(null, 1000)),
      customKey: activeGroup,
    };

    if (groups.length === 0) {
      return null;
    }

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
                  <span>Group {convertCharToNumber(g)}</span>
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
