import React, { Component, Fragment } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";
import { isMultiPlayer } from "../../shared/helper";
import { instructions, taskData } from "../../shared/tasks/tasks";

import { num2stringdecimals, instructionsInfo } from "./instructionsInfo"

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
        treatment: { nRounds, responseDuration, playerCount, chat, hideTimer, socialDuration },
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
            This task you'll be asked to give your best guess for {textRounds > 1 ? textRounds : "a"} question{textRounds > 1 && "s"} about social or economic life (e.g., what's the average price for a gallon of milk?).
          </p>
          {!hideTimer &&
            <p>You will have {responseDuration} seconds to answer{textRounds > 1 && " a question"}.</p>
          }

          {
            playerCount > 1 &&
            <>
              <p>
                You will be provided with some supporting information.  <b>Other people may have different information than you.</b>
              </p>
              <p>After providing your initial answer, you will have {socialDuration / 60} minutes to {chat && "chat with other players and "}learn about other players' answers.</p>
            </>
          }
          <br />

          <p>PAYEMENT:</p>
          <ul className="instruction-list">
            <li>${pay} guaranteed pay.</li>
            <li>UP TO ${bonus} bonus for accuracy. The more accurate your answer, the more you earn! </li>
            <li>Maximum possible earnings are ${num2stringdecimals((Number(pay) + Number(bonus)) * textRounds)}.</li>
            <li>Bonus pay will be processed within 2 business days.</li>
          </ul>

        </div>
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