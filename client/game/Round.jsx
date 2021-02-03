import React from "react";
import { Avatar } from "./Avatar";
import DebugButtons from "../components/DebugButtons";
import Response from "./Response";
import Score from "./Score";
import Timer from "./Timer";
import Wait from "../components/Wait";
import SocialExposure from "../game/SocialExposure";

export default class Round extends React.Component {
  render() {
    const {
      round,
      stage,
      player,
      game: {
        treatment: { feedback, playerCount },
      },
    } = this.props;

    const task = round.get("task");

    let columns = 1;
    if (task.question.image) {
      columns++;
    }

    if (playerCount > 1) {
      columns++;
    }

    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 grid grid-cols-3 items-center px-6">
          <div>{playerCount > 0 && <Avatar bordered player={player} />}</div>
          {stage.name === "wait" ? <div></div> : <Timer {...this.props} />}
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            {feedback && <Score player={player} />}
          </div>
        </header>

        {stage.name === "wait" ? (
          <Wait {...this.props} />
        ) : (
          <section
            className={`bg-gray-50 h-full overflow-auto grid grid-cols-${columns}`}
          >
            <Response {...this.props} />
            {playerCount > 1 && <SocialExposure {...this.props} />}
          </section>
        )}
      </div>
    );
  }
}
