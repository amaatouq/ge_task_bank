import React from "react";
import Timer from "../../game/Timer";
import { Avatar } from "../../game/Avatar";
import Score from "../../game/Score";
import DebugButtons from "../DebugButtons";
import { ButtonInstruction } from "./ButtonInstruction";

export function Header(props) {
  const {
    stage,
    isAltLayout = false,
    player,
    game: {
      treatment: { feedback, playerCount, hideAvatar, hideTimer },
    },
  } = props;
  let classNames = ["h-16 grid grid-cols-3 items-center px-6"];

  if (isAltLayout) {
    classNames.push("bg-white");
  } else {
    classNames.push("bg-gray-200");
  }

  return (
    <header className={classNames.join(" ")}>
      <div>
        {playerCount > 0 && !hideAvatar ? (
          <Avatar bordered player={player} isAltLayout={isAltLayout} />
        ) : (
          <div />
        )}
      </div>
      {(stage.name === "wait") | hideTimer ? <></> : <Timer {...props} />}
      <div className="flex justify-end items-center">
        <DebugButtons {...props} />
        {isAltLayout && stage.name === "social" && <ButtonInstruction />}
        {feedback && <Score player={player} />}
      </div>
    </header>
  );
}
