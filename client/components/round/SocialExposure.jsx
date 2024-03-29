import React from "react";
import PlayersResponse from "../../game/PlayersResponse";
import ChatContainer from "../chat/ChatContainer";
import SocialInfo from "./SocialInfo";

export default function SocialExposure(props) {
  const { stage, round, game, player } = props;
  const { treatment } = game;
  const {
    chat = false,
    hideSocialNumeric = false,
    meanSocialInfo = false,
    minSocialInfo = false,
    maxSocialInfo = false,
    medianSocialInfo = false,
    playerCount,
  } = treatment;

  if (playerCount === 1) {
    return null;
  }

  const task = round.get("task");
  const showChat = chat && stage.name === "social";
  const neighborIndexes = player.get("neighbors");
  const neighbors = [];
  const info = [];

  neighborIndexes.forEach((i) => {
    const neighbor = game.players.find((p) => p.get("index") === parseInt(i));

    if (neighbor) {
      neighbors.push(neighbor);
    }
  });

  if (minSocialInfo) {
    info.push("min");
  }

  if (maxSocialInfo) {
    info.push("max");
  }

  if (medianSocialInfo) {
    info.push("median");
  }

  if (meanSocialInfo) {
    info.push("mean");
  }

  return (
    <div className={`pr-4 h-full grid grid-rows-${showChat ? 2 : 1}`}>
      <div className="overflow-y-auto h-full">
        <div className="py-4 flex flex-col min-h-full justify-center">
          {stage.name !== "response" && (
            <>
              {neighbors.length > 0 && info.length > 0 && !hideSocialNumeric && (
                <dl>
                  {info.map((i) => (
                    <SocialInfo
                      key={i}
                      type={i}
                      neighbors={neighbors}
                      task={task}
                    />
                  ))}
                </dl>
              )}
              {neighbors.length > 0 && (
                <div className="mt-5">
                  <PlayersResponse
                    {...props}
                    neighbors={neighbors}
                    withInfo={info.length > 0}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {showChat && <ChatContainer player={player} game={game} />}
    </div>
  );
}
