import React from "react";
import { Avatar } from "./Avatar";
import Response from "./Response";
import Score from "./Score";
import Timer from "./Timer";

export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;
    const task = round.get("task");
    console.log(stage.name);
    console.log(task);

    let columns = 1;
    if (task.question.image) {
      columns++;
    }

    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 flex justify-between items-center px-6">
          {/* Always keep 3 children under <header> so they spread left, center and right */}
          <Avatar bordered player={player} />
          <Timer {...this.props} />
          <Score player={player} />
        </header>

        <section
          className={`bg-gray-50 h-full overflow-auto grid grid-cols-${columns}`}
        >
          <Response {...this.props} />
        </section>

        {/* <PlayerProfile player={player} stage={stage} game={game} />
          <Task game={game} round={round} stage={stage} player={player} /> */}
        {/* <SocialExposure stage={stage} player={player} game={game} /> */}
      </div>
    );
  }
}
