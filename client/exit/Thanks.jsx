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
            <p>Thank you for participating.</p>
            <p>
              Accuracy bonuses will be processed within 3-5 business days after the forecasted events have occurred.
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}
