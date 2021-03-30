import React from "react";

export default class NewLayout extends React.Component {
  render() {
    return (
      <div className="h-full text-base alt-main-container">
        <div className=" question-container">
          <div className="question-container-column bg-white w-full bg-green-500">
            <div className="w-full bg-gray-500 h-full"></div>
          </div>
        </div>
        <div className="bg-blue-500 meta-container"></div>
      </div>
    );
  }
}
