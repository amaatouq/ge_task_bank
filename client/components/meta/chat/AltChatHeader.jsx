import React from "react";
import { getOtherPlayers } from "../../../../shared/helper";
import { Avatar } from "../../../game/Avatar";

export default class AltChatHeader extends React.Component {
  render() {
    const {
      player,
      chatNo,
      game: { players },
    } = this.props;
    const otherPlayers = getOtherPlayers(players, player);

    return (
      <div className="alt-chat-header font-bold flex justify-between">
        <span>Chat {chatNo.toString().padStart(2, "0")}</span>
        <Avatar iconOnly player={player} />
      </div>
    );
  }
}
