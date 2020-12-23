import React, { Component } from "react";
import { CustomButton } from "../components/Button";
import IntroLayout from "./IntroLayout";

export default class GameOverview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      game: {
        treatment: { nRounds },
      },
      hasPrev,
      onPrev,
      onNext,
      hasNext,
    } = this.props;
    return (
      <IntroLayout title="Game overview" {...this.props}>
        <p>
          After completing the instructions and comprehension check, you will
          begin the game.
        </p>
        <p>
          The game consists of <strong>{nRounds} rounds</strong>. At each round
          you will see a question (possibly an image as well) and be asked to{" "}
          <strong>
            make an educated guess on what you believe the correct answer is
          </strong>
          .
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
          <strong>What is an estimation?</strong>
          <br />
          An{" "}
          <a target="_blank" href="https://en.wikipedia.org/wiki/Estimation">
            estimation
          </a>{" "}
          is a rough calculation of the value, extent, or quantity of something.
          For instance, a common estimation question could involve approximating
          how many chocolates are in the image above.
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
