import React from "react";
import { Avatar } from "../../../game/Avatar";

export default class AltChatHeader extends React.Component {
  render() {
    const { chatNo, playersGroup } = this.props;

    return (
      <div className="alt-chat-header font-bold flex justify-between">
        <span>Chat {chatNo.toString().padStart(2, "0")}</span>
        <div>
          {playersGroup.map((p, i) => (
            <Avatar key={i} iconOnly player={p} />
          ))}
        </div>
      </div>
    );
  }
}
