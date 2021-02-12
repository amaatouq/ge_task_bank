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
          <p>This task asks you to forecast the outcome for {textRounds} NBA basketball games.</p>

          <p>You will be provided with some supporting information relevant to each game.</p>

          <p>Once you start typing an answer, a Submit button will appear that you can click when you are ready.</p>

          <p>You will earn $0.15 guaranteed pay for each question answered. This pay will be processed within 2 business days.</p>

          <p>You will also earn up to $0.15 bonus for accuracy for each forecast. The more accurate your forecast, the more you earn! These bonuses will be processed within 2 business days of the last game, so we can calculate scores.</p>

          <p>Maximum possible earnings are $1.50</p>

          <p>If you do not complete all 5 forecasts, you will be paid for whatever forecasts you complete before we close the session. This session will remain open for 24 hours from the time it was initially launched.</p>
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
