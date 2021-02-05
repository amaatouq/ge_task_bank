import React from "react";
import PlayersResponse from "../../game/PlayersResponse";
import ChatContainer from "../chat/ChatContainer";
import SocialInfo from "./SocialInfo";

export default function SocialExposure(props) {
  const { stage, game, player } = props;
  const { treatment } = game;
  const {
    chat = false,
    individualNumeric = false,
    meanSocialInfo = false,
    minSocialInfo = false,
    maxSocialInfo = false,
    medianSocialInfo = false,
    playerCount,
  } = treatment;

  if (playerCount === 1) {
    return null;
  }

  const neighborIndexes = player.get("neighbors");
  const neighbors = [];
  const info = [];
  let hasFeedback = true;

  neighborIndexes.forEach((i) => {
    const neighbor = game.players.find((p) => p.get("index") === parseInt(i));

    if (neighbor) {
      neighbors.push(neighbor);
    }
  });

  if (stage.name === "response") {
    hasFeedback = false;
  }

  if (individualNumeric) {
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
  const colHeight = hasFeedback ? "h-full" : "h-1/2";
  const chatHeight = hasFeedback ? "h-1/2" : "h-full";
  return (
    <div className="flex justify-end items-end sidebar-right pr-8">
      <div className={`w-full ${colHeight}`}>
        {hasFeedback && (
          <div className={`flex h-1/2 overflow-hidden pb-3`}>
            <div className={`w-full border-b border-gray-200`}>
              {neighbors.length > 0 &&
                info.length > 0 &&
                info.map((i) => (
                  <SocialInfo key={i} type={i} neighbors={neighbors} />
                ))}
              {neighbors.length > 0 && (
                <PlayersResponse
                  {...props}
                  neighbors={neighbors}
                  withInfo={info.length > 0}
                />
              )}
            </div>
          </div>
        )}
        <div className={`flex ${chatHeight}`}>
          <div className="w-full">
            {chat && <ChatContainer player={player} game={game} />}
          </div>
        </div>
      </div>
    </div>
  );
}
