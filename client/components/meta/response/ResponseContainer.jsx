import React, { Component } from "react";

import { Avatar } from "../../../game/Avatar";
import NumberFormat from "react-number-format";

const Answer = ({ answer }) => (
  <NumberFormat
    thousandSeparator={true}
    isNumericString
    className="text-dark-gray"
    placeholder="_"
    autoFocus
    name="answer"
    displayType="text"
    value={answer}
  />
);

export class ResponseContainer extends Component {
  render() {
    const { player, game, round } = this.props;
    const task = round.get("task");
    const { unit } = task.question;
    const otherPlayers = game.players.filter((p) => p._id !== player._id);
    let answer =
      player.stage.get("tmpanswer") || player.round.get("answer") || "_";
    return (
      <div className="response-container">
        <div className="player-response">
          <span className="text-dark-gray font-bold text-sm">
            Your response
          </span>
          <div className="pt-2 pb-2 flex justify-between text-sm">
            <Avatar iconOnly player={player} />

            <span>
              <Answer answer={answer} /> {unit}
            </span>
          </div>
          <span className="text-medium-gray text-sm leading-none">
            Update your reponse in the lower right corner of page.
          </span>
        </div>
        <div className="other-responses">
          <span className="text-dark-gray font-bold text-sm">
            Other Players Detailed
          </span>
          <ul className="overflow-y-auto mt-2">
            {otherPlayers.map((p, i) => {
              let oAnswer = p.round.get("answer") || "_";

              return (
                <li className="flex justify-between text-sm" key={i}>
                  <Avatar iconOnly player={p} />
                  <span>
                    <Answer answer={oAnswer} /> {unit}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ResponseContainer;
