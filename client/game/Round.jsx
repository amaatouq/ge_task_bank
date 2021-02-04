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

    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 grid grid-cols-3 items-center px-6">
          <div>
            <span>
              {round.index + 1} <span className="icon-right-arrow" />{" "}
              <span className="stage-name">{stage.displayName}</span>
            </span>
          </div>
          {stage.name === "wait" ? <div></div> : <Timer {...this.props} />}
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            {feedback && <Score player={player} />}
          </div>
        </header>

        <div className="w-full bg-gray-50 py-4 px-6">
          <div>{playerCount > 0 && <Avatar bordered player={player} />}</div>
        </div>

        {stage.name === "wait" ? (
          <Wait {...this.props} />
        ) : (
          <section
            className={`bg-gray-50 h-full overflow-auto grid grid-flow-col auto-cols-max justify-center`}
          >
            <Response {...this.props} />
            {playerCount > 1 && <SocialExposure {...this.props} />}
          </section>
        )}
      </div>
    );
  }
}
