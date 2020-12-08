import React from "react";

export default class QuestionImage extends React.Component {
  render() {
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
}
