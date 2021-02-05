import React from "react";
import NumberFormat from "react-number-format";
import { nameToAvatar } from "../../shared/avatars";
import { getUnit } from "../../shared/unit";

export default class PlayersResponse extends React.Component {
  render() {
    const {
      player,
      round,
      withChat = false,
      neighbors: players,
      stage,
    } = this.props;
    players.unshift(player);

    return (
      <div
        className={`max-h-64 overflow-y-auto${
          withChat && " border-b border-gray-200"
        }`}
      >
        {players.map((p, i) => {
          if (!p.get("avatar")) {
            return null;
          }

          const avatar = nameToAvatar[p.get("avatar")];
          if (!avatar) {
            return null;
          }
          const answer =
            p.stage.get("tmpanswer") ||
            p.stage.get("answer") ||
            p.round.get("answer");
          const unit = getUnit({ round, answer, magnitude: true });

          return (
            <div key={i} className="flex flex-col justify-end items-end mb-4">
              <div className="flex flex-row items-center">
                {i === 0 && (
                  <span className="text-gray-300 pr-3 text-sm">You</span>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: avatar.svg }}
                  className="pr-3 h-10 w-10"
                />
                <span className="text-gray-400 pr-3">{p.get("avatar")}</span>
                <span className="text-gray-500 pr-3 text-sm">
                  +{stage.name === "feedback" ? p.round.get("score") : 0}
                </span>
              </div>
              <div className="mr-11 flex flex-row text-sm">
                <span className="text-gray-400">
                  {
                    <NumberFormat
                      value={answer}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  }
                  &nbsp;
                </span>
                <span className="text-gray-300">{unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
