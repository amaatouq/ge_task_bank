import React from "react";
import { Question } from "../components/question/Questions";
import MetaContainer from "../components/meta/MetaContainer";

export default class NewLayout extends React.Component {
  render() {
    return (
      <div className="h-full text-base alt-main-container">
        <Question {...this.props} />
        <MetaContainer {...this.props} />
      </div>
    );
  }
}
