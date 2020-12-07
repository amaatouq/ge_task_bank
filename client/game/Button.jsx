import React from "react";

export default class Button extends React.Component {
  render() {
    const { text, tick, enter, onClick } = this.props;

    return (
      <button
        className="p-4 bg-gray-300 hover:bg-gray-200 active:bg-gray-400 text-gray-800 rounded flex items-center text-xl font-semibold leading-none shadow-lg"
        type="submit"
        onClick={onClick}
      >
        {text}
        {tick ? (
          <div className="ml-2">
            <svg
              width="16"
              height="13"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.293 0.29303L15.707 1.70703L4.99997 12.414L0.292969 7.70703L1.70697 6.29303L4.99997 9.58603L14.293 0.29303Z"
                fill="#344049"
              />
            </svg>
          </div>
        ) : (
          ""
        )}
      </button>
    );
  }
}
