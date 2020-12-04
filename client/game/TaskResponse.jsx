import React from "react";

export default class TaskResponse extends React.Component {
  state = {
    question: {},
  };

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      question: this.props.round.get("task").question,
    });
    this.inputRef.current.focus();
  }
  handleChange = ({ currentTarget: input }) => {
    const { player } = this.props;
    this.setState({
      alert: {
        error: false,
      },
    });
    player.round.set("answer", input.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { player } = this.props;
    const {
      question: { max },
    } = this.state;
    if (max && player.round.get("answer") > max) {
      this.setState({
        error: {
          status: true,
          text: `Answer should be less than ${max}`,
        },
      });
      return;
    }
    this.props.player.stage.submit();
  };

  renderSubmitted() {
    return (
      <div className="task-response">
        <div className="response-submitted">
          <h5>Loading...</h5>
        </div>
      </div>
    );
  }

  render() {
    const { player } = this.props;
    const { question, error = {} } = this.state;

    // If the player already submitted, don't show the slider or submit button
    if (player.stage.submitted) {
      return this.renderSubmitted();
    }

    return (
      <div className="task-response">
        {error.status && <div className="alert">{error.text}</div>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="number"
              value={player.round.get("answer") || ""}
              onChange={this.handleChange}
              className="form-control"
              min={question.min}
              ref={this.inputRef}
              step={0.01}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
