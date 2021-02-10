import React from "react";
import NumberFormat from "react-number-format";
import { nameToAvatar } from "../../shared/avatars";
import { getUnit } from "../../shared/unit";
import { CoinIcon } from "../components/icons/CoinIcon";
import { TickIcon } from "../components/icons/TickIcon";

export default class PlayersResponse extends React.Component {
  render() {
    const { player, round, neighbors: players, stage } = this.props;

    const allPlayers = [player, ...players];

    return (
      <div className="max-h-social-side overflow-y-auto">
        {allPlayers.map((p, i) => {
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

          const subcn = p.stage.submitted ? "bg-green-100" : "";

          return (
            <div
              key={i}
              className={`p-1 rounded flex items-center mb-3 ${subcn}`}
            >
              <div className="flex flex-col items-end w-44">
                <div className="flex justify-end items-center">
                  <div
                    dangerouslySetInnerHTML={{ __html: avatar.svg }}
                    className="pr-1 w-7 h-icon-svg"
                  />

                  <span className="text-gray-400">
                    {p.get("avatar")}
                    {i === 0 && (
                      <span className="text-gray-700 font-medium text-sm">
                        {" "}
                        (You)
                      </span>
                    )}
                  </span>
                </div>

                <div className="flex items-center pr-1">
                  {p.stage.submitted && (
                    <TickIcon
                      width={12}
                      className="mr-2"
                      color="text-green-700"
                    />
                  )}

                  <div className="text-sm text-gray-500">
                    <NumberFormat
                      value={answer}
                      displayType={"text"}
                      thousandSeparator={true}
                    />{" "}
                    <span className="text-gray-400">{unit}</span>
                  </div>
                </div>
              </div>

              <div className="text-gray-500 pl-5 text-sm flex items-center">
                <CoinIcon />
                <div className="pl-2">
                  {stage.name === "feedback" ? p.round.get("score") : 0}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
