import React from "react";
import { applyMagnitude } from "../../shared/conversions";
import Answer from "./Answer";
import Button from "./Button";
import ResponseInput from "./ResponseInput";
import RoundScore from "./RoundScore";

export default class Response extends React.Component {
  renderQuestionImage() {
    const { round } = this.props;
    const task = round.get("task");

    if (!task.question.image) {
      return null;
    }

    return (
      <div
        key="image"
        className="p-8 pl-24 h-full w-full m-w-full m-h-full overflow-hidden"
      >
        <img
          className="h-full w-full object-scale-down"
          src={task.question.image}
        />
      </div>
    );
  }

  renderAnswer() {
    const { player, round, stage } = this.props;
    const task = round.get("task");

    switch (stage.name) {
      case "response":
        return <ResponseInput {...this.props} />;
      default:
        let answer = player.round.get("answer");
        if (task.question.magnitude) {
          answer = applyMagnitude(answer, task.question.magnitude);
        }
        return (
          <>
            <Answer answer={answer} {...this.props} />
            <Answer correct answer={task.answer} {...this.props} />
            <RoundScore score={player.round.get("score") || 0} />
            <div className="mt-8">
              <Button tick onClick={() => player.stage.submit()} text="OK" />
            </div>
          </>
        );
    }
  }

  renderQuestion() {
    const { round, stage } = this.props;
    const task = round.get("task");

    return (
      <div
        key="question"
        className="flex flex-col justify-center items-center p-8 pr-24"
      >
        <div className="flex items-baseline justify-center w-full max-w-6xl">
          <div className="text-base text-gray-500">{round.index + 1}.</div>
          <div
            key="question"
            className="flex flex-col justify-center items-start w-full ml-4"
          >
            <div className="text-2xl text-gray-400">{task.question.text}</div>

            <div className="mt-5 w-full">{this.renderAnswer()}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return [this.renderQuestionImage(), this.renderQuestion()];
  }
}
