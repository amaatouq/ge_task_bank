import marked from "marked";
import React from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional
import "tippy.js/themes/light.css";
import { applyMagnitude } from "../../../shared/conversions";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.instructionsRef = React.createRef();
  }

  componentDidMount() {
    const { round } = this.props;
    const task = round.get("task");
    if (task.instructions) {
      tippy(this.instructionsRef.current, {
        content: `<div class="p-4"> ${marked(task.instructions.text)} </div>`,
        allowHTML: true,
        placement: "auto",
        theme: "light",
      });
    }
  }

  renderError() {
    const { player, round, stage } = this.props;
    const task = round.get("task");

    if (task.question.min === undefined && task.question.max === undefined) {
      return null;
    }

    let answer = player.stage.get("tmpanswer");
    if (task.question.magnitude) {
      answer = applyMagnitude(answer, task.question.magnitude);
    }

    let err;
    if (task.question.min !== undefined) {
      if (answer < task.question.min) {
        err = `Answer should be at least ${task.question.min}.`;
      }
    }

    if (task.question.max !== undefined) {
      if (answer > task.question.max) {
        err = `Answer should be at most ${task.question.max}.`;
      }
    }

    if (!err) {
      return null;
    }

    return (
      <div className="w-full mt-2 font-semibold text-red-500">
        <div>{err}</div>
      </div>
    );
  }

  render() {
    const { round, stage, children } = this.props;
    const task = round.get("task");

    return (
      <div
        key="question"
        className="flex flex-col justify-center items-center pl-8 py-2 pr-24 w-full"
      >
        <div className="flex items-baseline justify-center w-full max-w-4xl">
          <div
            className={`${
              stage.name !== "response" && "text-right w-20 "
            }text-base text-gray-500 pr-3`}
          >
            {round.index + 1}.
          </div>
          <div
            key="question"
            className="flex flex-col justify-center items-start w-full"
          >
            <div className="questions-text text-gray-400">
              {task.question.text}
              {task.instructions ? (
                <div
                  ref={this.instructionsRef}
                  className="inline-block ml-2 w-5 h-5"
                >
                  <svg
                    className="fill-current text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z" />
                  </svg>
                </div>
              ) : (
                ""
              )}
            </div>

            {task.question.description ? (
              <div className="questions-text text-gray-400 italic mt-4">
                {task.question.description}
              </div>
            ) : (
              ""
            )}

            {this.renderError()}
          </div>
        </div>
        <div className="mt-4 w-full">{children}</div>
      </div>
    );
  }
}
