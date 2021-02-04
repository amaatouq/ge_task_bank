import React from "react";
import { isMultiPlayer } from "../../../shared/helper";
import PlayersResponse from "../../game/PlayersResponse";
import ChatContainer from "../chat/ChatContainer";

export default function SocialExposure(props) {
  const { stage, game, player } = props;
  const { treatment } = game;
  const { chat = false, interactionMode = "discreet" } = treatment;
  let hasFeedback = true;

  if (interactionMode === "discreet" && stage.name === "response") {
    hasFeedback = false;
  }

  return (
    <div className="flex justify-end items-center pr-20">
      <div className="w-full grid grid-flow-row auto-rows-max max-h-96 items-end">
        {hasFeedback && <PlayersResponse {...props} withChat={chat} />}
        {chat && <ChatContainer player={player} game={game} />}
      </div>
    </div>
  );
}
