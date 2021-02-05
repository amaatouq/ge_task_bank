import React, { Component, Fragment } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";
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
        <p>
          In this game you will complete <strong>{textRounds} round{textRounds > 1 && "s"}</strong>.
          In each round you will see a question about an event in the future, and you will have to <strong>make a prediction about this event</strong>.
          This event has not happened yey, so it is impossible to know the outcome with certainty.
        </p>

        <p>
          You might be shown <strong>additional information</strong> to help you answer the question.
        </p>

        <p>
          Once you start typing an answer, a <strong>Submit</strong> button will appear that you can click when you are ready.
        </p>

        {!hideTimer &&
          <p>
            You have <strong>{responseDuration} seconds</strong> to submit your answer.
          </p>
        }

        <br />

        {!hideAvatar &&
          <div>
            <p><strong>Avatar</strong></p>
            <p>
              You will receive an avatar (an animal's icon and name). Your avatar appears in the top left corner of the screen during the game.
          </p>
            <br />
          </div>
        }

        {playerCount > 1 &&
          <div>
            <br />
            <p><strong>Multiple Players</strong></p>
            <p>
              You might be playing with more than one player at a time. In this case, you will have to wait until everyone has provided their answer before proceeding to the next stage. The <strong>tick mark by your avatar</strong> indicates whether your have submitted an answer for this stage.
            </p>
            <p>
              Your avatar tells you appart from other players.
            </p>
            <p>
              {/*Need to set a conditional*/}
              You might have a stage where you are given information about the other players' answers.
            </p>
            <br />
          </div>
        }

        <div>
          <p><strong> Correct Answer and Reward</strong></p>

          <p>
            You will earn $X per question answered.

            For each question you may earn a bonus reward depending on your accuracy of $0 to $Y.
            When the event has occured, we will compare your prediction to the actual outcome of the event.
            The closer your prediction is to the actual outcome, the closer your bonus reward will be to $Y for this questions.
          </p>

          <br />
        </div>

        <div>
          <p><strong>Pace and Timing</strong></p>

          {longTermEngagement
            ?
            <Fragment>
              <div>
                <p>
                  Once you have provided your answer and obtained your score, there will be a <strong>wait stage</strong>. Here you can decide to take a break from the game and return later.
              </p>
                <p>
                  If you click the <strong>COPY LINK</strong> button, the link to this experiment will be copied to your clipboard and allow you to save it. That way, you can save it and return to the experiment even after closing your browser.
              </p>
                <p>
                  <strong>Note that the experimenter might decide to end the game after a certain date.</strong>
                </p>
              </div>
              {quitEarly &&
                <p>
                  The <strong>QUIT</strong> button allows you to end the experiment early without going through any more questions. This will send you to the debriefing stage. <strong>You will not be able to return and answer more questions.</strong>
                </p>
              }
            </Fragment>
            :
            <p>
              Once you have provided your prediction, the next round starts.
          </p>}

          <br />
        </div>

        <div>
          <p><strong>Practice</strong></p>
          <p>
            On the next page, we will show you a demonstration of how a normal
            round works.
          </p>
          <p>
            Feel free to enter an answer, this will not count
            toward your final reward. This is just to get you used to the layout and process of a round.
            For this reason, we are only giving you a fake event to predict.
          </p>
          <p>
            You are given a different amount of time than in the actual game, just for this practice stage.
          </p>

          <br />
        </div>

        <p style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton onClick={onNext} disabled={!hasNext}>
            Continue to practice
          </CustomButton>
        </p>
      </IntroLayout>
    );
  }
}
