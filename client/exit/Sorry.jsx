import React from "react";
import Wrapper from "../components/Wrapper";
import { Meteor } from "meteor/meteor";

export default class Sorry extends React.Component {
  static stepName = "Sorry";

  render() {
    const { player, game } = this.props;

    let msg;
    switch (player.exitStatus) {
      case "gameFull":
        msg = "Sorry, we were not able to assign you to a game.  We will send you a $0.50 bonus in appreciation for your time.";
        break;
      case "gameLobbyTimedOut":
        msg = "Sorry, we were not able to assign you to a game.  We will send you a $0.50 bonus in appreciation for your time.";
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
    if (!game && Meteor.isDevelopment) {
      msg =
        "Unfortunately the Game was cancelled because of failed to init Game (only visible in development, check the logs).";
    }

    if (player.get("readyState") === "timeout") {
      return (
        <Wrapper {...this.props}>
          <div className="finished">
            <div>
              <h4 className="text-4xl font-semibold mt-8 mb-6">Sorry!</h4>
              <p>Sorry, your login wasn't active at the time the game started. The game is now closed.</p>
            </div>
          </div>
        </Wrapper>
      )
    }

    return (
      <Wrapper {...this.props}>
        <div className="finished">
          <div>
            <h4 className="text-4xl font-semibold mt-8 mb-6">Sorry!</h4>
            <p>{msg}</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
