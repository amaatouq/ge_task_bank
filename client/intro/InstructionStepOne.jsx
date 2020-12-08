import React from "react";
import Wrapper from "../game/Wrapper";

export default class InstructionStepOne extends React.Component {
  render() {
    const { hasPrev, hasNext, onNext, onPrev, game } = this.props;

    return (
      <Wrapper {...this.props}>
        <h1> Instructions 1 </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
          animi? Quae autem asperiores officiis voluptatum fuga recusandae
          minima! Animi pariatur ex sapiente laborum. Ipsa quo quia ab,
          veritatis et labore.
        </p>

        <p>
          <button type="button" onClick={onPrev} disabled={!hasPrev}>
            Previous
          </button>
          <button type="button" onClick={onNext} disabled={!hasNext}>
            Next
          </button>
        </p>
      </Wrapper>
    );
  }
}
