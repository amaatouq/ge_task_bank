import React from "react";
import { Avatar } from "../../../game/Avatar";
import Timer from "../../../game/Timer";
import DebugButtons from "../../DebugButtons";
import { InfoIcon } from "../../SvgIcon";

export function Header(props) {
  const {
    playerCount,
    hideAvatar = false,
    player,
    stage,
    hideTimer,
    onClickInstruction,
    // feedback,
  } = props;
  return (
    <header className="header-alt grid grid-cols-3 items-center px-6">
      <div>
        {playerCount > 0 && !hideAvatar ? (
          <Avatar bordered isAlt player={player} />
        ) : (
          <Fragment></Fragment>
        )}
      </div>
      {stage.name === "wait" || hideTimer ? (
        <div></div>
      ) : (
        <Timer isAlt {...props} />
      )}
      <div className="flex justify-end items-center">
        <DebugButtons {...props} />
        {/* {feedback && <Score player={player} />} */}
        <button
          className="btn-instruction"
          type="button"
          onClick={onClickInstruction}
        >
          <InfoIcon />
          <span>Instruction</span>
        </button>
      </div>
    </header>
  );
}
