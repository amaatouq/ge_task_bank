import React from "react";
import { isMultiPlayer } from "../../../shared/helper";

export default function SocialExposure({ stage, playerCount }) {
  if (stage.name !== "feedback" && isMultiPlayer(playerCount)) {
    return null;
  }
  return (
    <div className="flex justify-end items-center pr-20">
      <div className="w-full grid grid-rows-2 items-end">
        <div className="py-3 px-5 border-b border-gray-200">
          Social Exposure here
        </div>
        <div className="py-3 px-5">Chat Here</div>
      </div>
    </div>
  );
}
