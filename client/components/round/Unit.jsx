import React from "react";
import UnitSimple from "./UnitSimple";

export default class Unit extends React.Component {
  render() {
    const { result, input, focused } = this.props;

    return (
      <div
        className={
          result || input
            ? `pl-2 py-2 lg:text-xl xl:text-2xl text-md ${
                input
                  ? "border-b-2 border-gray-300 text-gray-400"
                  : "text-gray-500 pr-2"
              } whitespace-nowrap leading-snug ${
                focused ? "border-gray-500" : "border-gray-300"
              }`
            : ""
        }
      >
        <UnitSimple {...this.props} />
      </div>
    );
  }
}
