import React, { Component, Fragment } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";

export default class GameOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      game: {
        treatment: { nRounds, responseDuration, playerCount, feedback, feedbackDuration, longTermEngagement, quitEarly },
      },
      hasPrev,
      onPrev,
      onNext,
      hasNext,
    } = this.props;

    return (
      <IntroLayout title="Instructions" {...this.props}>
        <p>
          After completing the instructions and comprehension check, you will
          begin the game.
        </p>
        <br />
        <p><strong>Rounds</strong></p>
        <p>
          The game consists of <strong>{nRounds} rounds</strong>. In each round
          you will see a question (possibly an image as well) and be asked to{" "}
          <strong>
            make an educated <a target="_blank" href="https://en.wikipedia.org/wiki/Estimation">
              estimation
          </a>; on what you believe the correct answer is
          </strong>
          . In other words, a rough calculation of the value, extent, or quantity of something.
          For instance, a common estimation question could involve approximating
          how many chocolates are in the image bellow.
        </p>
        <div
          key="image"
          className="p-8 pl-24 h-full w-5/12 m-w-full m-h-full overflow-hidden m-auto"
        >
          <img
            className="h-full w-full object-scale-down"
            src="/instructions/candies_C_268.jpg"
          />
        </div>

        <p>
          In each round, you will be given a question
          (possibly an image as well). You will then input your answer in a box.
        </p>
        <p>
          You might be shown <strong>hints</strong> to helps you answer the question.
        </p>
        <p>
          Once you start typing an answer, a <strong>Submit</strong> button will appear that you can click when you are ready.
        </p>
        <p>
          You have <strong>{responseDuration} seconds</strong> to submit your answer.
        </p>

        <br />

        <p><strong>Avatar</strong></p>
        <p>
          You will receive an avatar (an animal's icon and name). Your avatar appears in the top left corner of the screen during the game.
        </p>

        {playerCount > 1 &&
          <Fragment>
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
          </Fragment>
        }

        <br />

        <p><strong> Correct Answer and Scoring</strong></p>
        {feedback
          ? <p>Once you have submitted your answer, you will be shown the correct answer. You have {feedbackDuration} seconds to view the answer. You can click an "OK" button when you have finished reading the answer. </p>
          : <p>Once you have submitted your answer, you will NOT be shown the correct answer.</p>
        }
        <p>
          You will score points <strong>depending on how close to the true answer your estimation is</strong>.
        </p>

        <br />
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
            Once you have provided your answer and obtained your score, the next question starts.
          </p>}

        <br />

        <p><strong>Practice</strong></p>
        <p>
          On the next page, we will show you a demonstration of how a normal
          round works.
        </p>
        <p>
          Feel free to enter an answer, this will not count
          toward your final score.
        </p>
        <p>
          You are given more time than in the actual game to understand the layout better.
        </p>

        <br />
        <p style={{ display: "flex", justifyContent: "center" }}>
          <CustomButton onClick={onNext} disabled={!hasNext}>
            Continue to practice
          </CustomButton>
        </p>
      </IntroLayout>
    );
  }
}
