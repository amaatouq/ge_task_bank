import React from "react";


export default class Round extends React.Component {
  render() {
    const { round, stage, player, game } = this.props;

    return (
      <div className="round">
        <div className="content">
        <h1 class="text-xl text-blue-500 uppercase">Hello, TailwindCSS!</h1>

          {/* <PlayerProfile player={player} stage={stage} game={game} />
          <Task game={game} round={round} stage={stage} player={player} /> */}
          {/* <SocialExposure stage={stage} player={player} game={game} /> */}
        </div>
      </div>
    );
  }
}
