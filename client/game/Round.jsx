import React, { Fragment } from "react";
import DebugButtons from "../components/DebugButtons";
import Wait from "../components/Wait";
import { Avatar } from "./Avatar";
import Response from "./Response";
import Score from "./Score";
import Timer from "./Timer";

export default class Round extends React.Component {
  render() {
    const {
      round,
      stage,
      player,
      game: {
        treatment: { feedback, playerCount, hideAvatar, hideTimer, chat },
      },
    } = this.props;

    const task = round.get("task");
    const hasQImage = task.question.image;
    const has3rdcol = stage.name === "feedback" || chat;
    const cols = `${hasQImage ? "1fr" : ""} 1fr ${has3rdcol ? "320px" : ""}`;

    return (
      <div className="h-full text-base main-container">
        <header className="h-16	bg-gray-200 grid grid-cols-3 items-center px-6">
          <div>
            {playerCount > 0 && !hideAvatar ? (
              <Avatar bordered player={player} />
            ) : (
              <Fragment></Fragment>
            )}
          </div>
          {(stage.name === "wait") | hideTimer ? (
            <div></div>
          ) : (
            <Timer {...this.props} />
          )}
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            {feedback && <Score player={player} />}
          </div>
        </header>

        {/* Why did we show the avatar twice? */}
        {/* <div className="w-full bg-gray-50 py-4 px-6">
          <div>{playerCount > 0 && <Avatar bordered player={player} />}</div>
        </div> */}

        {stage.name === "wait" ? (
          <Wait {...this.props} />
        ) : (
          <section
            className="grid-rows-1 overflow-hidden bg-gray-50 grid justify-center"
            style={{ gridTemplateColumns: cols }}
          >
            <Response {...this.props} />
          </section>
        )}
      </div>
    );
  }
}
