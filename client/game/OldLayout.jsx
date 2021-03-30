import React from "react";
import Wait from "../components/Wait";
import Response from "./Response";

export default class OldLayout extends React.Component {
  render() {
    const {
      round,
      stage,
      game: {
        treatment: { chat, hideSocialNumeric = false },
      },
    } = this.props;

    const task = round.get("task");
    const hasQImage = task.question.image;
    const has3rdcol = stage.name === "feedback" || chat || !hideSocialNumeric;
    const cols = `${hasQImage ? "1fr" : ""} 1fr ${has3rdcol ? "320px" : ""}`;

    return (
      <>
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
      </>
    );
  }
}
