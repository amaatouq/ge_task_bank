import React from "react";

export default class QuestionImage extends React.Component {
  render() {
    const { round } = this.props;
    const task = round.get("task");

    if (!task.question.image) {
      return null;
    }

    return (
      <div className="flex justify-center items-center">
        <div className="xl:max-w-screen-lg max-w-screen-sm">
          <div key="image" className="p-8 pl-24 h-full overflow-hidden">
            <img
              className="h-full max-h-96 object-scale-down"
              src={task.question.image}
            />
          </div>
        </div>
      </div>
    );
  }
}
