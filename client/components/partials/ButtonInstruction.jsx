import React from "react";
import { Consumer } from "../../context";
import { InfoIcon } from "../SvgIcon";

export function ButtonInstruction() {
  return (
    <Consumer>
      {({ openModal }) => {
        return (
          <button
            className="btn-instruction mr-3"
            type="button"
            onClick={openModal}
          >
            <InfoIcon />
            <span>Instructions</span>
          </button>
        );
      }}
    </Consumer>
  );
}
