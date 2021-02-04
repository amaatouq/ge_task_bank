import React from "react";
import { isMultiPlayer } from "../../../shared/helper";
import PlayersResponse from "../../game/PlayersResponse";
import ChatContainer from "../chat/ChatContainer";

export default function SocialExposure(props) {
  const { stage, game, player } = props;
  const { treatment } = game;
  const { playerCount, chat = false, interactionMode = "discreet" } = treatment;
  if (stage.name !== "feedback" && isMultiPlayer(playerCount)) {
    return null;
  }

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
    <div className="flex justify-end items-center pr-20">
      <div className="w-full grid grid-flow-row auto-rows-max max-h-96 items-end">
        {/* <div className="py-3 px-5 border-b border-gray-200">
          Social Exposure here
        </div> */}
        {hasFeedback && <PlayersResponse {...props} withChat={chat} />}
        {chat && <ChatContainer player={player} game={game} />}
      </div>
    </div>
  );
}
