import React, { Component } from "react";
import { applyMagnitude, magnitudesToEnglish } from "../../shared/conversions";
import NumberFormat from "react-number-format";
import numberToWords from "number-to-words";
import DebugButtons from "../game/DebugButtons";
import Score from "../game/Score";
import pluralize from "pluralize";
import Button from "../components/Button";

function NumberToWordsDemo({ answer }) {
  if (!answer || parseInt(answer, 10) < 1000) {
    return "";
  }

  let val = parseInt(answer, 10);
  if (task.question.magnitude) {
    val = applyMagnitude(val, task.question.magnitude);
  }

  let res;
  try {
    res = numberToWords.toWords(val);
  } catch (err) {
    console.error(err);
  }

  if (!res) {
    return null;
  }

  res = res.charAt(0).toUpperCase() + res.slice(1);

  return (
    <div className="absolute bottom-0">
      <div className="absolute">
        <div className="mt-1 flex whitespace-nowrap w-full py-2 text-gray-400 leading-none tabular-nums">
          <div className="">{res}</div>
          <div className="ml-1">
            <Unit answer={answer} {...this.props} />
          </div>
          {/* <div className="ml-1">total</div> */}
        </div>
      </div>
    </div>
  );
}

function UnitDemo(props) {
  const { input, result, magnitude, focused, answer } = props;

  let unit = "chocolate";
  if (!unit) {
    return "";
  }

  if (magnitude) {
    unit = magnitudesToEnglish[magnitude] + " " + unit;
  }

  const a = parseInt(answer || 0, 10);
  unit = pluralize(unit, a);

  return (
    <div
      className={
        result || input
          ? `pl-2 py-2 text-3xl ${
              input
                ? "border-b-2 border-gray-300 text-gray-400"
                : "text-gray-500 pr-2"
            } whitespace-nowrap leading-snug ${
              focused ? "border-gray-500" : "border-gray-300"
            }`
          : ""
      }
    >
      {unit}
    </div>
  );
}

export default class DemoStage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };
  }
  handleChange = (change) => {
    this.setState({ answer: change.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onNext();
  };
  render() {
    const { player } = this.props;
    const { answer } = this.state;
    const minmax = { min: 0 };
    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 grid grid-cols-2 items-center px-6">
          <div className="text-lg">Demonstration</div>
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            <Score player={player} />
          </div>
        </header>

        <section className={`bg-gray-50 h-full overflow-auto grid grid-cols-2`}>
          <div
            key="image"
            className="p-8 pl-24 h-full w-full m-w-full m-h-full overflow-hidden"
          >
            <img
              className="h-full w-full object-scale-down"
              src="/instructions/candies_C_268.jpg"
            />
          </div>
          <div
            key="question"
            className="flex flex-col justify-center items-center p-8 pr-24"
          >
            <div className="flex items-baseline justify-center w-full max-w-6xl">
              <div className="text-base text-gray-500">Demo 1.</div>
              <div
                key="question"
                className="flex flex-col justify-center items-start w-full ml-4"
              >
                <div className="text-2xl text-gray-400">
                  Estimate the number of chocolates in the glass.
                </div>
                <div className="mt-8 w-full">
                  <form
                    action="#"
                    onSubmit={this.handleSubmit}
                    className="relative w-full"
                  >
                    <div className="flex">
                      <NumberFormat
                        thousandSeparator={true}
                        isNumericString
                        className="w-full px-0 m-0 py-2 text-3xl text-gray-500 bg-transparent placeholder-gray-300 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-gray-500 leading-snug tabular-nums"
                        placeholder="Type your answer here..."
                        autoFocus
                        name="answer"
                        value={answer}
                        onValueChange={this.handleChange}
                        autoComplete="off"
                        {...minmax}
                      />
                      <UnitDemo
                        input
                        magnitude={false}
                        focused={true}
                        answer={answer}
                      />
                    </div>

                    <NumberToWordsDemo answer={answer} />

                    {answer === "" ? (
                      ""
                    ) : (
                      <div className="absolute bottom-0">
                        <div className="absolute">
                          <div className="mt-12">
                            <Button tick text="OK" />
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
