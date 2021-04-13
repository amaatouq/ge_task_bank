import React from "react";
import { nameToAvatar } from "../../../shared/avatars";

export default class Message extends React.Component {
  renderTime = (timeStamp) => {
    const hours = new Date(timeStamp).getHours();
    const minutes = new Date(timeStamp).getMinutes();

    if (!hours || !minutes) {
      return null;
    }

    const time = `${hours
      .toString()
      .padStart(2, 0)}:${minutes.toString().padStart(2, 0)}`;

    return <div className="timeStamp text-gray-300">{time}</div>;
  };

  renderName = (isSelf, name) => {
    return <div className="name text-gray-300">{isSelf ? "You" : name}</div>;
  };

  render() {
    const { message, player, scope } = this.props;
    const { player: msgPlayer, text, timeStamp } = message;
    const isSelf = player._id == msgPlayer._id;

    // Get the sender's username
    const msgPlayerUsername = scope.players.filter(_player => _player._id === msgPlayer._id)[0].get("username")

    if (!msgPlayer.avatar) {
      return null;
    }

    const avatar = nameToAvatar[msgPlayer.avatar];
    if (!avatar) {
      return null;
    }

    return (
      <div
        className={`"message flex flex-col px-4 ${isSelf ? "items-end justify-end" : ""
          }"`}
      >
        <div className="flex flex-row items-center px-2 py-2">
          {!isSelf && (
            <div
              dangerouslySetInnerHTML={{ __html: avatar.svg }}
              className="avatar w-8 h-8 mr-2"
            />
          )}
          {this.renderName(isSelf, msgPlayerUsername)}
          <div
            className="mx-1 text-gray-300"
            dangerouslySetInnerHTML={{ __html: "&#183" }}
          ></div>
          {new Date(timeStamp).getTime() > 0 && this.renderTime(timeStamp)}
        </div>
        <div className={"max-w-sm"}>
          <div
            className={
              "px-4 py-2 bg-gray-200 text-gray-500 rounded-md break-words inline-block"
            }
          >
            {text}
          </div>
        </div>
      </div>
    );
  }
}
