import React, { Component } from "react";

export class Question extends Component {
  render() {
    const { round } = this.props;

    const task = round.get("task") || {};
    const { question } = task;
    const { text: qText, description: qDesc, image, hints = [] } = question;
    const classContainer = ["question-container"];
    const classQuestions = ["alt-question-container h-full"];
    if (image) {
      classQuestions.push("with-image-question");
      classContainer.push("with-image");
    }
    return (
      <div className={classContainer}>
        <div className="question-container-column bg-white w-full">
          <div className={classQuestions.join(" ")}>
            {image && (
              <div className="question-image-area">
                <div className="img-area w-100 bg-white h-full">
                  <img src={image} className="object-scale-down" />
                </div>
              </div>
            )}
            <div className="question-detail">
              <div className="flex ln-27">
                <div className="flex-initial mr-2">
                  <strong>Question: </strong>
                </div>
                <div className="flex-initial">{qText}</div>
              </div>
              <div className="flex-1 w-full pl-2 text-gray-700 leading-5">
                <div className="with-bullet">{qDesc}</div>
              </div>
              {hints.length > 0 && (
                <>
                  <div className="w-full ln-27">
                    <strong>More info:</strong>
                  </div>
                  {hints.map((h, i) => (
                    <div
                      className="w-full pl-2 text-gray-700 leading-5"
                      key={i}
                    >
                      {h}
                    </div>
                  ))}
                </>
              )}
              <div className="w-full ln-27">
                <strong>Update your response below to the right.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
