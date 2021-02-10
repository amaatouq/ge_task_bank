import React from "react";
import DelayedDisplay from "./DelayedDisplay";

function WaitMessage() {
  return (
    <div className="text-gray-800 max-w-xl text-center">
      Please wait until all players are ready.
      <br />
      If this takes more than 5 seconds, please <em>Refresh the page</em>.
    </div>
  );
}

const DelayedMessage = DelayedDisplay(WaitMessage, 2500);

function Wait() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="spinner"></div>
      <div className="mt-8">
        <DelayedMessage />
      </div>
    </div>
  );
}

export default DelayedDisplay(Wait, 250);
