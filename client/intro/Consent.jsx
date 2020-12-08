import { ConsentButton } from "meteor/empirica:core";
import React from "react";
import Wrapper from "../game/Wrapper";

export default class Consent extends React.Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <div className="flex justify-center items-center text-base text-gray-800">
          <div className="max-w-2xl">
            <div className="text-4xl font-semibold mt-8 mb-6">
              {" "}
              Consent Form{" "}
            </div>
            <p>
              This experiment is part of a MIT scientific project. Your decision
              to participate in this experiment is entirely voluntary. There are
              no known or anticipated risks to participating in this experiment.
              There is no way for us to identify you. The only information we
              will have, in addition to your responses, is the timestamps of
              your interactions with our site. The results of our research may
              be presented at scientific meetings or published in scientific
              journals. Clicking on the "AGREE" button indicates that you are at
              least 18 years of age, and agree to participate voluntary.
            </p>
            <br />
            <ConsentButton text="I AGREE" />
          </div>
        </div>
      </Wrapper>
    );
  }
}
