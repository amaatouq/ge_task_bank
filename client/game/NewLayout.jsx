import React, { Fragment } from "react";
import DebugButtons from "../components/DebugButtons";
import MetaContainer from "../components/meta/MetaContainer";

export default class NewLayout extends React.Component {
  render() {
    return (
      <div className="h-full text-base alt-main-container">
        <div className=" question-container bg-green-500">
          <div className="question-container-column bg-white w-full bg-green-500">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
        <MetaContainer {...this.props} />
      </div>
    );
  }
}
