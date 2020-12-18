import React, { Component } from "react";
import { magnitudesToEnglish } from "../../shared/conversions";
import NumberFormat from "react-number-format";
import numberToWords from "number-to-words";
import DebugButtons from "../game/DebugButtons";
import Timer from "../game/Timer";
import Score from "../game/Score";
import pluralize from "pluralize";
import Button from "../components/Button";

function NumberToWordsDemo({ answer }) {
  if (!answer || parseInt(answer, 10) < 1000) {
    return "";
  }

  let val = parseInt(answer, 10);

  let res;
  if (val > Number.MAX_SAFE_INTEGER) {
    try {
      res = numberToWords.toWords(val);
    } catch (err) {
      console.error(err);
    }
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
            <UnitDemo answer={answer} {...this.props} />
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
    this.timer = null;

    this.state = {
      answer: "",
      err: "",
      remainingSeconds: 120, // faketimer
      submitted: false,
      score: 0,
      correctAnswer: 150,
    };
  }
  handleChange = (change) => {
    this.setState({ answer: change.value, err: "" });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitted: true,
    });
    // this.props.onNext();
  };

  componentDidUpdate(prevProp, prevState) {
    const { remainingSeconds, submitted, correctAnswer, answer } = this.state;
    if (
      prevState.remainingSeconds !== remainingSeconds &&
      remainingSeconds === 0
    ) {
      this.setState({
        submitted: true, // force submitted
      });
    }
    if (prevState.submitted !== submitted) {
      if (submitted) {
        const score =
          answer === ""
            ? 0
            : 1 - Math.abs(answer - correctAnswer) / correctAnswer;

        this.setState({
          score,
        });
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const { remainingSeconds } = this.state;
      this.setState({
        remainingSeconds: remainingSeconds > 0 ? remainingSeconds - 1 : 0,
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  formAnswer() {
    const { answer } = this.state;
    const minmax = { min: 0 };

    return (
      <form action="#" onSubmit={this.handleSubmit} className="relative w-full">
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
          <UnitDemo input magnitude={false} focused={true} answer={answer} />
        </div>

        <NumberToWordsDemo answer={answer} />

        {answer === "" ? (
          ""
        ) : (
          <div className="absolute bottom-0">
            <div className="absolute">
              <div className="mt-12">
                <Button tick text="Submit" />
              </div>
            </div>
          </div>
        )}
      </form>
    );
  }
  renderAnswer(correct) {
    const { answer, correctAnswer } = this.state;

    const guess = correct ? correctAnswer : answer;

    return (
      <div className="flex flex-col mb-12">
        <div
          className={`mb-2 font-semibold ${correct ? "text-green-500" : ""}`}
        >
          {correct ? "Correct" : "Your"} answer
        </div>
        <div
          className={`relative flex ${correct ? "bg-green-50" : "bg-gray-100"}`}
        >
          <NumberFormat
            value={guess}
            displayType="text"
            thousandSeparator={true}
            className="w-full pl-2 py-2 text-3xl text-gray-500 leading-snug text-right tabular-nums"
          />
          <UnitDemo input magnitude={false} focused={true} answer={guess} />
          <NumberToWordsDemo answer={guess} />
        </div>
        {correct && (
          <div className="relative bottom-0">
            <div className="absolute">
              <div className="mt-12">
                <Button tick text="Submit" onClick={this.props.onNext} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  renderFeedback() {
    return (
      <>
        {this.renderAnswer(false)}
        {this.renderAnswer(true)}
      </>
    );
  }

  render() {
    const { answer, remainingSeconds, submitted, score } = this.state;
    const {
      player,
      game: {
        treatment: { feedback = false },
      },
    } = this.props;
    return (
      <div className="flex flex-col h-full text-base">
        <header className="h-16	bg-gray-200 grid grid-cols-3 items-center px-6">
          <div className="text-lg">Demonstration</div>
          <div className="text-lg">
            <Timer remainingSeconds={remainingSeconds} />
          </div>
          <div className="flex justify-end items-center">
            <DebugButtons {...this.props} />
            {feedback && <Score player={player} demoScore={score} />}
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
                  {!submitted && this.formAnswer()}
                  {submitted && feedback && this.renderFeedback()}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
