import React from "react";

export default function DebugButtons({
  showOpenAltPlayer,
  onOpenAltPlayer,
  showReset,
  onReset,
}) {
  return (
    <>
      {showReset ? (
        <div className="mr-4 text-gray-500 text-medium">
          <button onClick={onReset}>Reset Player</button>
        </div>
      ) : (
          ""
        )}
      {showOpenAltPlayer ? (
        <div className="mr-6 text-gray-500 text-medium">
          <button onClick={onOpenAltPlayer}>New Player</button>
        </div>
      ) : (
          ""
        )}
    </>
  );
}
