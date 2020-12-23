import React from "react";
import Wrapper from "../components/Wrapper";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  render() {
    return (
      <Wrapper {...this.props}>
        <div className="finished">
          <div>
            <h4>Finished!</h4>
            <p>Thank you for participating!</p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
