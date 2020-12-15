import React from "react";
import Wrapper from "../game/Wrapper";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  render() {
    const { player, game } = this.props;
    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "All games you are eligible for have filled up too fast...";
        break;
      case "gameLobbyTimedOut":
        msg = "There were NOT enough players for the game to start...";
        break;
      case "playerEndedLobbyWait":
        msg =
          "You decided to stop waiting, we are sorry it was too long a wait.";
        break;
      default:
        msg = "Unfortunately the Game was cancelled...";
        break;
    }
    if (player.exitReason === "failedQuestion") {
      msg =
        "Unfortunately you did not meet the conditions required to play the game.";
    }
    // Only for dev
    if (!game) {
      msg =
        "Unfortunately the Game was cancelled because of failed to init Game.";
    }
    return (
      <Wrapper {...this.props}>
        <div className="finished">
          <div>
            <h4 className="text-4xl font-semibold mt-8 mb-6">Sorry!</h4>
            <p>Sorry, you were not able to play today! {msg}</p>
            <p>
              <strong>Please come back for the next scheduled game.</strong>{" "}
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
