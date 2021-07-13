import React, { Component } from "react";
import { getHints } from "../../../shared/helper";

export class Question extends Component {
  render() {
    const { round, stage, player, game } = this.props;

    const { treatment: { interactionMode } } = game
    const canUpdate = interactionMode !== "discreet"

    const task = round.get("task") || {};
    const hints = getHints(player, round, game);
    const { question } = task;
    const { text: qText, description: qDesc, image } = question;
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
                  <img src={image} className="object-scale-down img-question" />
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
                {qDesc && qDesc !== "" && (
                  <div className="with-bullet">{" " + qDesc}</div>
                )}
              </div>
              {hints && hints.length > 0 && (
                <div className="hintBox">
                  <div className="w-full ln-27">
                    <strong>Your private information:</strong>
                  </div>
                  {hints.map((h, i) => (
                    <div
                      className="w-full pl-2 text-gray-700 leading-5"
                      key={i}
                    >
                      <div className="with-bullet">{" " + h}</div>
                    </div>
                  ))}
                </div>
              )}
              {canUpdate ? (
                <div className="w-full ln-27">
                  <strong>{stage.name === "social" ? "Update your response below to the right. Use the chatroom to exchange information with other players and improve your answer." : "Submit your response below to the right."}</strong>
                </div>
              ) : stage.name !== "social" &&
              <div className="w-full ln-27">
                <strong>Submit your response below to the right.</strong>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
