import React, { Component } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";

export default class SoloResponseStage extends Component {
  render() {
    const {
      game: {
        treatment: { nRounds, responseDuration },
      },
      hasPrev,
      onPrev,
      onNext,
      hasNext,
    } = this.props;
    return (
      <IntroLayout title="Game overview" {...this.props} title="Round overview">
        <p className="mb-5">
          You will play <strong>{nRounds} rounds</strong> total.
        </p>
        <p className="text-xl mb-7 font-semibold">The Solo Response Stage</p>

        <p>
          In the <strong>Response</strong> stage you will be given a question
          (possibly an image as well) like the one shown below. You will then
          use the box to input your answer, and then click{" "}
          <strong>Submit</strong> when you are ready. You can take maximum{" "}
          <strong>{responseDuration}</strong> seconds to submit your answer (you
          are given more time here to understand the layout a better). The{" "}
          <strong>tick mark</strong> by the avatar indicates whether a final
          answer have been submitted for this stage.
        </p>
        <p className="mt-8">
          <strong>
            On the next page, we will show you a demonstration of how a normal
            round works. Feel free to enter an answer, this will not count
            toward your final score.
          </strong>
        </p>
        <p>
          <CustomButton
            onClick={onPrev}
            disabled={!hasPrev}
            color="secondary"
            className="mr-4"
            outline
          >
            Previous
          </CustomButton>
          <CustomButton onClick={onNext} disabled={!hasNext}>
            Next
          </CustomButton>
        </p>
      </IntroLayout>
    );
  }
}
