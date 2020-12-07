import React from "react";

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

  renderQuestion() {
    const { round } = this.props;

    const task = round.get("task");

    return (
      <div
        key="question"
        className="flex flex-cols justify-center items-center p-8"
      >
        <div className="flex items-baseline">
          <div className="text-base text-gray-500">{round.index + 1}.</div>
          <div className="ml-3 text-2xl text-gray-400">
            {task.question.text}
          </div>
        </div>

        <div className="mt-5">
          <input type="text" />
        </div>
      </div>
    );
  }

  render() {
    const { player } = this.props;

    const cols = [];

    cols.push(this.renderQuestionImage());
    cols.push(this.renderQuestion());

    return cols;
  }
}
