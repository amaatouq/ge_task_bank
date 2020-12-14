import React from "react";
import { Avatar } from "./Avatar";
import DebugButtons from "./DebugButtons";
import Response from "./Response";
import Score from "./Score";
import Timer from "./Timer";
import Wait from "./Wait";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    // return <Waiting />;

    const task = round.get("task");
    // console.log(stage.name);
    // console.log(task);

    let columns = 1;
    if (task.question.image) {
      columns++;
    }

    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 grid grid-cols-3 items-center px-6">
          <div>
            <Avatar bordered player={player} />
          </div>
          {stage.name === "wait" ? <div></div> : <Timer {...this.props} />}
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            <Score player={player} />
          </div>
        </header>

        {stage.name === "wait" ? (
          <Wait {...this.props} />
        ) : (
          <section
            className={`bg-gray-50 h-full overflow-auto grid grid-cols-${columns}`}
          >
            <Response {...this.props} />
          </section>
        )}
      </div>
    );
  }
}
