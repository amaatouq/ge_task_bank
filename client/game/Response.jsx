import React from "react";
import { applyMagnitude } from "../../shared/conversions";
import Answer from "./Answer";
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
      <div key="image" className="p-8 h-full w-full">
        <div className="object-contain h-full w-full flex justify-center items-center">
          <img src={task.question.image}></img>
        </div>
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
            {/* <RoundScore score={player.round.get("score") || 0} /> */}
            <RoundScore score={10} />
          </>
        );
    }
  }

  renderQuestion() {
    const { round, stage } = this.props;
    const task = round.get("task");

    return (
      <div key="question" className="flex flex-col justify-center p-8">
        <div className="flex items-baseline justify-center">
          <div className="text-base text-gray-500">{round.index + 1}.</div>
          <div
            key="question"
            className="flex flex-col justify-center items-center ml-4"
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
