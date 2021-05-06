import React, { Component, Fragment } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";
import { isMultiPlayer } from "../../shared/helper";
import { instructions, taskData } from "../../shared/tasks/tasks";

import { instructionsInfo } from "./instructionsInfo"

export default class GameOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      pay,
      bonus,
      isForecasting,
      time
    } = instructionsInfo

    const {
      game: {
        treatment: { nRounds, responseDuration, playerCount, chat, hideTimer },
      },
      hasPrev,
      onPrev,
      onNext,
      hasNext,
    } = this.props;

    const tasks = taskData.slice();
    const textRounds = tasks.length < nRounds ? tasks.length : nRounds

    return (
      <IntroLayout title="Instructions" {...this.props}>
        <div>
          <p>
            This task asks you give your best guess or estimate for {textRounds > 1 ? textRounds : "a"} question{textRounds > 1 && "s"} about social or economic life (e.g., how much on average does a dozen eggs cost?).
          </p>

          {!hideTimer &&
            <p>You will have {responseDuration} seconds to answer each question.</p>
          }

          {
            playerCount > 1 &&
            <div className="mb-2">
              <p className="mb-0">First you answer a question, then you have a round where you interact with {playerCount - 1} other players where:</p>
              <ul className="instruction-list">
                <li>you will see information about the other players' answers</li>
                {chat && <li>you will be able to chat with the other players.</li>}
              </ul>
            </div>
          }

          <p>You will earn ${pay} guaranteed pay for each question answered. You will also earn up to ${bonus} bonus for accuracy. The more accurate your answer, the more you earn! This pay will be processed within 2 business days.</p>

          <p>Maximum possible earnings are ${(pay + bonus) * textRounds}0.</p>
        </div>

        <br />
        <br />

        <p style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton onClick={onNext} >
            Continue
          </CustomButton>
        </p>
      </IntroLayout >
    );
  }
}