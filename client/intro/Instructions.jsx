import React, { Component, Fragment } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";
import { isMultiPlayer } from "../../shared/helper";
import { instructions, taskData } from "../../shared/tasks/tasks";

export default class GameOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      game: {
        treatment: { nRounds, responseDuration, playerCount, feedback, feedbackDuration, longTermEngagement, quitEarly, hideAvatar, hideTimer },
      },
      hasPrev,
      onPrev,
      onNext,
      hasNext,
    } = this.props;

    let tasks = taskData.slice();
    let textRounds = tasks.length < nRounds ? tasks.length : nRounds

    return (
      <IntroLayout title="Instructions" {...this.props}>
        <div>
          <p>This task asks you to answer {textRounds} question{textRounds > 1 && "s"}. For each question you will be asked to make an estimation (provide an educated guess) as to the correct answer to the question. </p>

          <p>You will be provided with some additional information relevant to each question.</p>

          <p>Once you start typing an answer, a Submit button will appear that you can click when you are ready.</p>

          {!hideTimer &&
            <p>You will have {responseDuration} seconds per question.</p>
          }

          <p>You will earn $0.15 guaranteed pay for each question answered. You will also earn up to $0.15 bonus for accuracy. The more accurate your answer, the more you earn! This pay will be processed within 2 business days.</p>

          <p>Maximum possible earnings are ${0.30 * textRounds}0.</p>

          <p>If you do not complete all questions, you will be paid for whatever question you have completed before we close the session. This session will remain open for 24 hours from the time it was initially launched.</p>
        </div>

        <br />
        <br />

        <p style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton onClick={onNext} disabled={!hasNext}>
            Continue
          </CustomButton>
        </p>
      </IntroLayout >
    );
  }
}
