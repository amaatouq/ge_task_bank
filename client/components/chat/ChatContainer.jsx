import React, { Component } from "react";
import { Chat } from "@empirica/chat";
import ChatFooter from "./ChatFooter";
import ChatMessage from "./ChatMessage";
import { convertCharToNumber } from "../../../shared/helper";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeGroup: "", groups: [], newMessagesGroup: [] };
  }

  setGroups = () => {
    const { player } = this.props;

    this.setState(
      {
        groups: player.get("chatGroups"),
      },
      () => {
        const { groups } = this.state;
        // player doesn't have group chat
        if (groups.length === 0) {
          return;
        }

        this.setState({
          activeGroup: groups[0],
        });
      }
    );
  };

  componentDidMount() {
    this.setGroups();
  }

  setActiveGroup = (activeGroup) => {
    const { newMessagesGroup } = this.state;
    const groups = _.reject(newMessagesGroup, (g) => g === activeGroup);
    this.setState({
      activeGroup,
      newMessagesGroup: groups,
    });
  };

  handleIncomingMessage = (msgs, customKey) => {
    const { newMessagesGroup, activeGroup } = this.state;
    const { player } = this.props;

    // key already exist in groups
    if (newMessagesGroup.includes(customKey)) {
      return;
    }

    // player already on the same window
    if (activeGroup === customKey) {
      return;
    }

    const playerMessage = _.find(msgs, (m) => m.player._id === player._id);

    if (!playerMessage) {
      newMessagesGroup.push(customKey);
      this.setState({ newMessagesGroup });
    }
  };

  render() {
    const { activeGroup, groups, newMessagesGroup } = this.state;
    const { player, game } = this.props;

    const commonProps = {
      player,
      scope: game,
      timeStamp: new Date(TimeSync.serverTime(null, 1000)),
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
        {groups.map((g) => {
          const classnames = ["h-full"];
          if (g !== activeGroup) {
            classnames.push("hidden");
          }

          return (
            <div
              key={g}
              className={classnames.join(" ")}
              style={{ height: "calc(100vh - 180px)" }}
            >
              <Chat
                {...commonProps}
                customKey={g}
                footer={ChatFooter}
                message={ChatMessage}
                onIncomingMessage={this.handleIncomingMessage}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
