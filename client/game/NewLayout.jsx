import React from "react";
import { Question } from "../components/question/Questions";
import MetaContainer from "../components/meta/MetaContainer";

export default class NewLayout extends React.Component {
  render() {
    return (
      <div className="h-full text-base alt-main-container">
        <div className="question-container">
          <div className="question-container-column bg-white w-full">
            <div className="w-full h-full">
              <Question />
            </div>
          </div>
        </div>
        <MetaContainer {...this.props} />
      </div>
    );
  }
}
