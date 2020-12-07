import React from "react";
import NumberFormat from "react-number-format";
import Unit from "./Unit";

export default class ResponseInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      answer: props.player.round.get("answer") || "",
      focused: false,
    };
  }

  // Replaced by handleChangeValue when started using NumberFormat
  // handleChange = (event) => {
  //   const { value, name } = event.currentTarget;
  //   this.setState({ [name]: value });
  // };

  handleChangeValue = (change) => {
    this.setState({ answer: change.value });
  };

  handleFocus = (event) => {
    this.setState({ focused: true });
  };

  handleBlur = (event) => {
    this.setState({ focused: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { player } = this.props;
    const { answer } = this.state;

    if (answer === "") {
      return;
    }

    // If answered as int, save int, otherwise save float

    const f = parseFloat(answer);
    const i = parseInt(answer, 10);

    let a = f;
    if (f === i) {
      a = i;
    }

    player.round.set("answer", a);
    player.stage.submit();
  };

  render() {
    const { round } = this.props;
    const { answer, focused } = this.state;
    const task = round.get("task");

    const minmax = {};
    if (task.question.min !== undefined) {
      minmax.min = task.question.min;
    }
    if (task.question.max !== undefined) {
      minmax.max = task.question.max;
    }

    return (
      <form action="#" onSubmit={this.handleSubmit} className="flex">
        <NumberFormat
          thousandSeparator={true}
          isNumericString
          className="w-full px-0 m-0 py-2 text-3xl text-gray-500 bg-transparent placeholder-gray-300 border-0 border-b-2 border-gray-300 focus:ring-0 focus:outline-none focus:border-b-2 focus:border-gray-500 leading-snug"
          placeholder="Type your answer here..."
          autoFocus
          name="answer"
          // type="number"
          value={answer}
          // onChange={this.handleChange}
          onValueChange={this.handleChangeValue}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...minmax}
        />
        <Unit
          input
          magnitude
          focused={focused}
          answer={answer}
          {...this.props}
        />
      </form>
    );
  }
}
