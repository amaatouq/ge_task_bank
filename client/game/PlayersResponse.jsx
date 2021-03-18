import React from "react";
import NumberFormat from "react-number-format";
import { nameToAvatar } from "../../shared/avatars";
import { getMinMaxErrorMessage } from "../../shared/helper";
import { getUnit } from "../../shared/unit";
import { CoinIcon } from "../components/icons/CoinIcon";
import { TickIcon } from "../components/icons/TickIcon";

export default class PlayersResponse extends React.Component {
  render() {
    const { player, round,
      game: { treatment: { hideSocialNumeric, feedback } },
      neighbors: players, stage
    } = this.props;

    const allPlayers = [player, ...players];
    const task = round.get("task");

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
          const answer = p.stage.get("tmpanswer") || p.round.get("answer");
          const unit = getUnit({ round, answer, magnitude: true });
          const subcn = p.stage.submitted ? "bg-green-100" : "";

          const err = getMinMaxErrorMessage(answer, task);
          let minmaxerr;
          if (err) {
            minmaxerr = "Out of bounds";
          }

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

                  {!hideSocialNumeric &&
                    <div
                      className={`text-sm ${minmaxerr ? "text-red-500" : "text-gray-500"
                        }`}
                    >
                      <NumberFormat
                        value={answer}
                        displayType={"text"}
                        thousandSeparator={true}
                      />{" "}
                      <span
                        className={minmaxerr ? "text-red-400" : "text-gray-400"}
                      >
                        {unit}
                      </span>
                    </div>
                  }
                </div>

                {minmaxerr ? (
                  <div className="flex items-center pr-1">
                    <div className="text-sm text-red-500 font-semibold">
                      Out of bounds
                    </div>
                  </div>
                ) : (
                    ""
                  )}
              </div>

              {feedback &&
                <div className="text-gray-500 pl-5 text-sm flex items-center">
                  <CoinIcon />
                  <div className="pl-2">
                    {stage.name === "feedback" ? p.round.get("score") : 0}
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>
    );
  }
}
