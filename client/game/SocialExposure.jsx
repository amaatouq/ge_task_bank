import React from "react";
import ChatContainer from "../components/chat/ChatContainer";
import PlayersResponse from "./PlayersResponse";

export default class SocialExposure extends React.Component {
  render() {
    const { game, player, stage } = this.props;
    const { chat = false, interactionMode = "discreet" } = game.treatment;
    let hasFeedback = true;
    let rows = 1;

    if (interactionMode === "discreet" && stage.name === "response") {
      hasFeedback = false;
      rows--;
    }

    if (chat) {
      rows++;
    }

    return (
      <div className={`"grid grid-rows-${rows}" h-full overflow-auto`}>
        {hasFeedback && <PlayersResponse {...this.props} />}
        {chat && <ChatContainer player={player} game={game} />}
      </div>
    );
  }
}
