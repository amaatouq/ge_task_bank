import React, { Component } from "react";
import { deepCopy } from "../../../../shared/helperFunctions/deepCopy";
import { Avatar } from "../../../game/Avatar";
import { Answer } from "./ResponseContainer";

export default class AutoRotate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: deepCopy(this.props.otherPlayers),
    };
    this.mouseInside = false;
    this.started = false;
    this.reverse = false;
    this.scrollRef = React.createRef();
    this.timer = null;
  }

  // https://stackoverflow.com/questions/1985260/rotate-the-elements-in-an-array-in-javascript
  arrayRotate = (arr, reverse) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  };

  componentDidMount() {
    if (
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight
    ) {
      this.start();
    }
  }

  componentDidUpdate(prevProps) {
    const canScroll =
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight;

    if (canScroll && !this.started && !this.mouseInside) {
      this.start();
    } else if (!canScroll && this.started) {
      this.stop();
    }

    if (!_.isEqual(prevProps.otherPlayers, this.props.otherPlayers)) {
      this.setState({
        players: this.arrayRotate(this.props.otherPlayers, this.reverse),
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  start = () => {
    this.started = true;

    const { rate } = this.props;

    this.timer = setInterval(() => {
      this.reverse = !this.reverse;
      this.setState({
        players: this.arrayRotate(this.props.otherPlayers, this.reverse),
      });
    }, rate);
  };

  stop() {
    this.started = false;
    clearTimeout(this.timer);
  }

  mouseEnter = () => {
    this.mouseInside = true;
    if (this.started) {
      this.stop();
    }
  };

  mouseLeave = () => {
    this.mouseInside = false;
    if (
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight
    ) {
      this.start();
    }
  };

  render() {
    const { unit } = this.props;
    const { players } = this.state;

    return (
      <div
        className="overflow-y-auto p-1"
        ref={this.scrollRef}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <ul>
          {players.map((p, i) => {
            let oAnswer = p.round.get("answer") ?? "_";
            return (
              <li className="flex justify-between text-sm" key={i}>
                <Avatar iconOnly player={p} />
                <span>
                  <Answer answer={oAnswer} /> {unit}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
