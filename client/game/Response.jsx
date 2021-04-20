import React from "react";
import { applyMagnitude } from "../../shared/conversions";
import { deepCopy } from "../../shared/helperFunctions/deepCopy";
import { popChoice } from "../../shared/helperFunctions/popChoice";
import Button from "../components/Button";
import Answer from "../components/round/Answer";
import Question from "../components/round/Question";
import QuestionImage from "../components/round/QuestionImage";
import ResponseInput from "../components/round/ResponseInput";
import RoundScore from "../components/round/RoundScore";
import SocialExposure from "../components/round/SocialExposure";
import SocialInstructions from "../components/round/SocialInstructions";

export default class Response extends React.Component {
  revealHint = (event) => {
    const { player } = this.props;
    const revealed = player.round.get("hintsRevealed") || 0;
    player.round.set("hintsRevealed", revealed + 1);
  };

  renderHint(index, hint, hintName, isOnlyOneHint, revealed) {
    const isNext = revealed === index;
    const isRevealed = revealed > index;
    const hintText = hintName ? hintName : "Hint";
    let content = (
      <div
        key={index}
        className={`mt-6 flex text-md xl:text-xl ${
          isNext
            ? "text-gray-400 xl:text-shadow-md text-shadow-sm"
            : isRevealed
            ? "text-gray-800"
            : "text-gray-300"
        }`}
      >
        <div
          className={`whitespace-nowrap ${
            isNext ? "" : isRevealed ? "text-gray-400" : "text-gray-300"
          }`}
        >
          {hintText} {isOnlyOneHint ? "" : index + 1}
        </div>
        <div className="ml-4">
          {isNext
            ? "Reveal " + hintText
            : isRevealed
            ? hint
            : "Reveal previous " + hintText + " first"}
        </div>
      </div>
    );

    if (isNext) {
      content = (
        <button key={index} onClick={this.revealHint}>
          {content}
        </button>
      );
    }

    return content;
  }

  renderHints() {
    const { player, round, stage, game } = this.props;
    const { treatment } = game;
    const task = round.get("task");

    const possibleHints = task.question.hints;
    const hintName = task.question.hintName;

    if (!possibleHints || possibleHints.length === 0) {
      return null;
    }

    //To allow for random hints we need to ensure:
    // - the hint won't change every time the component updates
    // - the hint will have the possibility to be different for every participant
    // SOLUTION: Set the hints to the player
    // The player will get a "hints" attribute on gameInit which is an empty object
    // The round will have an index set according to the round number it is (0 to nRound)
    // As the rounds go, the "hints" of the player will be populated, where each key is the index of the round
    // BONUS: This allows us to track which hints player got at which round.

    // If the hints are already set you want to get those instead of resetting them...
    let hints;
    if (typeof player.get("hints")[round.get("index")] != "undefined") {
      hints = player.get("hints")[round.get("index")];
    } else {
      //If they are not set, you want to set them...
      hints = [];

      // If there is a configuration set in the treatment.hint, use it to select the hints
      if (treatment.hints) {
        const hintsConf = JSON.parse(treatment.hints);
        const configuration = hintsConf[player.get("index").toString()];

        if (!configuration) {
          return null;
        }

        // Everytime there is a non-numeric entry in the configuration, it will become a random hint.
        // Keep track of how many non-numeric entries there are
        let nbRandomHints = 0;
        // Create a copy of the possible hints, and take out each hint that is not randomly assigned to the hints
        // (namely, assigned based on indexes set in the configuration)
        // (this needs to be a deepCopy to not modify the possibleHints)
        let randomPossibleHints = deepCopy(possibleHints);

        // For each value of the configuration...
        configuration.forEach((config) => {
          // If numeric...
          if (typeof config == "number") {
            // ...check that there could be a hint with this index (it doesn't return undefined)
            if (typeof possibleHints[config - 1] != "undefined") {
              // ...push the hint that has this index
              hints.push(possibleHints[config - 1]);
              // and take this hint out of the hints ready to be selected randomly
              randomPossibleHints.splice(config - 1, 1);
            }
          } else {
            // Else, increase the number of random hints
            nbRandomHints++;
          }
        });

        // For every random hint that is needed...
        if (nbRandomHints > 0) {
          for (let i = 0; i < nbRandomHints; i++) {
            // Randomly select a hint (and take it out) with popChoice
            hints.push(popChoice(randomPossibleHints));
          }
        }
      } else {
        // Else, just allocate all the hints
        hints = possibleHints;
      }

      // Populate the player's hints
      let playerHints = player.get("hints");
      playerHints[round.get("index")] = hints;
      player.set("hints", playerHints);
    }

    const isOnlyOneHint = hints.length == 1;
    const revealed = player.round.get("hintsRevealed") || 0;
    return (
      <div className="mt-14">
        {hints.map((hint, i) => {
          const revealIndex = treatment.revealHints ? i + 1 : revealed;
          return this.renderHint(i, hint, hintName, isOnlyOneHint, revealIndex);
        })}
      </div>
    );
  }

  renderAnswer() {
    const { player, round, stage } = this.props;
    const task = round.get("task");

    switch (stage.name) {
      case "response":
      case "social":
        return (
          <>
            <ResponseInput {...this.props} />
            {this.renderHints()}
          </>
        );
      default:
        let answer = player.round.get("answer");
        if (task.question.magnitude) {
          answer = applyMagnitude(answer, task.question.magnitude);
        }
        return (
          <div className="w-full">
            <Answer answer={answer} {...this.props} />
            <Answer correct answer={task.answer} {...this.props} />
            <RoundScore score={player.round.get("score") || 0} />
            <div className="mt-8">
              <Button
                tick
                onClick={() => player.stage.submit()}
                text="OK"
                disabled={player.stage.submitted}
              />
            </div>
          </div>
        );
    }
  }

  render() {
    const { stage, game } = this.props;

    return (
      <>
        <QuestionImage {...this.props} />
        <div className="flex justify-center items-center w-full">
          <div className="xl:max-w-screen-lg max-w-screen-sm">
            {stage.name === "social" && <SocialInstructions game={game} />}
            <Question {...this.props}>{this.renderAnswer()}</Question>
          </div>
        </div>
        <SocialExposure {...this.props} />
      </>
    );
  }
}
