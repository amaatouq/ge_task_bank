import React from "react";
import { applyMagnitude } from "../../shared/conversions";
import Answer from "./Answer";
import Button from "./Button";
import Question from "./Question";
import QuestionImage from "./QuestionImage";
import ResponseInput from "./ResponseInput";
import RoundScore from "./RoundScore";

export default class Response extends React.Component {
  revealHint = (event) => {
    const { player } = this.props;
    const revealed = player.round.get("hintsRevealed") || 0;
    player.round.set("hintsRevealed", revealed + 1);
  };

  renderHint(index, hint, revealed) {
    const isNext = revealed === index;
    const isRevealed = revealed > index;
    let content = (
      <div
        key={index}
        className={`mt-6 flex text-xl ${
          isNext
            ? "text-gray-400 text-shadow-md"
            : isRevealed
            ? "text-gray-500"
            : "text-gray-300"
        }`}
      >
        <div
          className={`whitespace-nowrap ${
            isNext ? "" : isRevealed ? "text-gray-300" : "text-gray-300"
          }`}
        >
          Hint {index + 1}
        </div>
        <div className="ml-4">
          {isNext
            ? "Reveal Hint"
            : isRevealed
            ? hint
            : "Reveal previous hint first"}
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
    const { player, round, stage } = this.props;
    const task = round.get("task");

    const hints = task.question.hints;

    if (!hints || hints.length === 0) {
      return null;
    }

    const revealed = player.round.get("hintsRevealed") || 0;
    return (
      <div className="mt-36">
        {hints.map((hint, i) => this.renderHint(i, hint, revealed))}
      </div>
    );
  }

  renderAnswer() {
    const { player, round, stage } = this.props;
    const task = round.get("task");

    switch (stage.name) {
      case "response":
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
          <div className="w-min">
            <div className="h-1 w-96"></div>
            <Answer answer={answer} {...this.props} />
            <Answer correct answer={task.answer} {...this.props} />
            <RoundScore score={player.round.get("score") || 0} />
            <div className="mt-8">
              <Button tick onClick={() => player.stage.submit()} text="OK" />
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <>
        <QuestionImage {...this.props} />
        <Question {...this.props}>{this.renderAnswer()}</Question>
      </>
    );
  }
}
