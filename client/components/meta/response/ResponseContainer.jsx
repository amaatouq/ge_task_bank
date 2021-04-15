import React, { Component } from "react";
import NumberFormat from "react-number-format";

import { Avatar } from "../../../game/Avatar";
import AutoRotate from "./AutoRotate";
import AutoScroll from "./AutoScroll";

export const Answer = ({ answer }) => (
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
  constructor(props) {
    super(props);
    this.state = {
      shouldScroll: true,
      bottomDirection: true,
    };
  }

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
          <span className="text-dark-gray font-bold text-sm mb-2">
            Other Players Detailed
          </span>
          <AutoRotate otherPlayers={otherPlayers} unit={unit} rate={1000} />
        </div>
      </div>
    );
  }
}

export default ResponseContainer;
