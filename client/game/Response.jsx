import React from "react";
import { applyMagnitude } from "../../shared/conversions";
import { getHints } from "../../shared/helper";
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
    const { player, round, game } = this.props;
    const { treatment } = game;
    const hints = getHints(player, round, game);
    const task = round.get("task");

    if (!hints) {
      return null;
    }

    const hintName = task.question.hintName;
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
