import React, { Fragment } from "react";
import DebugButtons from "../components/DebugButtons";
import MetaContainer from "../components/meta/MetaContainer";

export default class NewLayout extends React.Component {
  render() {
    const {
      round,
      stage,
      player,
      game: {
        treatment: {
          feedback,
          playerCount,
          hideAvatar,
          hideTimer,
          chat,
          hideSocialNumeric = false,
        },
      },
    } = this.props;

    const task = round.get("task");
    const hasQImage = task.question.image;
    const has3rdcol = stage.name === "feedback" || chat || !hideSocialNumeric;
    const cols = `${hasQImage ? "1fr" : ""} 1fr ${has3rdcol ? "320px" : ""}`;

    return (
      <div className="h-full text-base alt-main-container">
        <div className=" question-container">
          <div className="question-container-column bg-white w-full bg-green-500">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
        <MetaContainer {...this.props} />
      </div>
    );
  }
}
