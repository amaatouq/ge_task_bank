import React from "react";
import { nameToAvatar } from "../../shared/avatars";
import { getUnit } from "../../shared/unit";

export default class PlayersResponse extends React.Component {
  render() {
    const { game, player, stage, round } = this.props;
    const answerType = stage.name === "response" ? "tmpanswer" : "answer";
    const players = _.reject(game.players, (p) => p._id === player._id);
    players.unshift(player);

    return (
      <div className="py-10 overflow-y-auto">
        {players.map((p, i) => {
          if (!p.get("avatar")) {
            return null;
          }

          const avatar = nameToAvatar[p.get("avatar")];
          if (!avatar) {
            return null;
          }
          const answer = p.stage.get(answerType);
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
                  +{p.get("score")}
                </span>
              </div>
              <div className="mr-11 flex flex-row text-sm">
                <span className="text-gray-400">{answer}&nbsp;</span>
                <span className="text-gray-300">{unit}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
