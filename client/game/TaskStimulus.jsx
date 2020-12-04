import React from "react";

export default class TaskStimulus extends React.Component {
  state = {
    question: {},
  };

  componentDidMount() {
    this.setState({
      question: this.props.round.get("task").question,
    });
  }
  render() {
    const {
      question: { text, image },
    } = this.state;

    return (
      <div className="task-stimulus">
        <p>{text}</p>
        {image && (
          <div>
            <img src={image} className="task-image" />
          </div>
        )}
      </div>
    );
  }
}
