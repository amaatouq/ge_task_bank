import React from "react";
import PlayersResponse from "../../game/PlayersResponse";
import ChatContainer from "../chat/ChatContainer";
import SocialInfo from "./SocialInfo";

export default function SocialExposure(props) {
  const { stage, game, player } = props;
  const { treatment } = game;
  const {
    chat = false,
    individualNumeric = true,
    meanSocialInfo = false,
    minSocialInfo = false,
    maxSocialInfo = false,
    medianSocialInfo = false,
  } = treatment;

  const neighbors = player.get("neighbors");
  const info = [];
  let hasFeedback = true;

  if (stage.name === "response") {
    hasFeedback = false;
  }

  if (!individualNumeric) {
    hasFeedback = false;
  }

  if (meanSocialInfo) {
    info.push("mean");
  }
  if (minSocialInfo) {
    info.push("min");
  }
  if (maxSocialInfo) {
    info.push("max");
  }
  if (medianSocialInfo) {
    info.push("median");
  }

  return (
    <div className="flex justify-end items-center pr-20">
      <div className="w-full grid grid-flow-row auto-rows-max max-h-96 items-end">
        {neighbors.length > 0 &&
          info.length > 0 &&
          info.map((i) => (
            <SocialInfo key={i} type={i} neighbors={neighbors} />
          ))}
        {hasFeedback && neighbors.length > 0 && (
          <PlayersResponse {...props} withChat={chat} />
        )}
        {chat && <ChatContainer player={player} game={game} />}
      </div>
    </div>
  );
}
