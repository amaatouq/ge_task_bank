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
    feedback = false,
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
  let isFeedback = true;

  neighborIndexes.forEach((i) => {
    const neighbor = game.players.find((p) => p.get("index") === parseInt(i));

    if (neighbor) {
      neighbors.push(neighbor);
    }
  });

  if (stage.name === "response") {
    isFeedback = false;
  }

  if (individualNumeric) {
    isFeedback = false;
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
    <div className={`pr-4 h-full grid grid-rows-${feedback && chat ? 2 : 1}`}>
      {feedback && (
        <div className="overflow-y-auto h-full">
          <div className="py-4 flex flex-col min-h-full justify-center">
            {isFeedback && (
              <>
                {neighbors.length > 0 && info.length > 0 && (
                  <dl>
                    {info.map((i) => (
                      <SocialInfo key={i} type={i} neighbors={neighbors} />
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
      )}
      {chat && <ChatContainer player={player} game={game} />}
    </div>
  );
}
