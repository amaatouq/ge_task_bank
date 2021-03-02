import { Chat } from "@empirica/chat";
import React, { Component } from "react";
import ChatFooter from "./ChatFooter";
import ChatMessage from "./ChatMessage";
import { nameToAvatar } from "../../../shared/avatars";

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

  getPlayersFromGroup = group => {
    const { game } = this.props;

    const chatPlayers = game.players.filter(player => {
      let playerGroups = player.get("chatGroups");
      return playerGroups.includes(group);
    });

    return chatPlayers;
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
      <div
        style={{ gridTemplateRows: `${groups.length > 1 ? "58px" : ""} 1fr` }}
        className="grid h-full overflow-hidden chat-container border-t border-r border-l"
      >
        {groups.length > 1 ? (
          <div className="py-4 px-4 overflow-y-hidden overflow-x-auto whitespace-nowrap border-b">
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
                  className={`bg-transparent mr-10 md:text-md text-sm font-semibold leading-none outline-none focus:outline-none ${textColor}`}
                >
                  <div className="flex flex-row items-center">
                    {/* <span>Group {convertCharToNumber(g)}</span> */}
                    <span>Group {i + 1}</span>
                    {hasNewMessage && (
                      <div className="rounded-full w-3 flex items-center justify-center bg-blue-500 ml-2" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
            ""
          )}

        {groups.map((g) => {
          let chatPlayers = this.getPlayersFromGroup(g);
          return (
            <div
              key={g}
              className={`overflow-hidden ${g !== activeGroup ? "hidden" : ""}`}
            >
              <div className="bg-gray-100 p-1">
                <div className="text-gray-500 text-xs flex justify-center mb-1">Chat with:</div>
                <div className="flex justify-evenly">
                  {
                    chatPlayers.map((p, index) => {
                      const avatar = nameToAvatar[p.get("avatar")];
                      if (p._id !== player._id) {
                        return (
                          <div
                            key={index}
                            title={p.get("avatar")}
                            dangerouslySetInnerHTML={{ __html: avatar.svg }}
                            className="pr-1 w-7 h-icon-svg"
                          />
                        )
                      }
                    })
                  }
                </div>
              </div>


              <Chat
                {...commonProps}
                customKey={g}
                customClassName="experiment-chat"
                footer={ChatFooter}
                message={ChatMessage}
                onIncomingMessage={this.handleIncomingMessage}
              />
            </div>
          )
        })
        }
      </div >
    );
  }
}
