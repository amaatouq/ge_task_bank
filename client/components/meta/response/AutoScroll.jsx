import React, { Component } from "react";
import Velocity from "../../../utils/velocity";

export class AutoScroll extends Component {
  constructor(props) {
    super(props);
    this.started = false;
    this.direction = true;
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    if (
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight
    ) {
      this.started = true;
      this.start();
    }
  }

  componentDidUpdate() {
    const canScroll =
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight;

    if (canScroll && !this.started) {
      if (this.started) {
        return;
      }

      this.start();
      this.started = true;
    } else {
      if (!this.started) {
        return;
      }
      this.stop();
      this.started = false;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.restartTimeout);
  }

  start = () => {
    const { rate } = this.props;
    let offset = 0;
    let duration = (this.scrollRef.current.scrollTop * rate) / 100;

    if (this.direction) {
      offset =
        this.scrollRef.current.scrollHeight -
        this.scrollRef.current.clientHeight;
      duration = ((offset - this.scrollRef.current.scrollTop) * rate) / 100;
    }

    Velocity(
      this.scrollRef.current,
      {
        scroll: offset,
      },
      {
        duration,
        easing: "linear",
        complete: (elements) => {
          this.direction = !this.direction;
          this.start();
        },
        delay: this.props.delay || 3000,
      }
    );
  };

  handleWheel = (e) => {
    this.stop();
    clearTimeout(this.restartTimeout);
    this.restartTimeout = setTimeout(
      this.start,
      this.props.restartAfter || 5000
    );
  };

  stop() {
    Velocity(this.scrollRef.current, "stop");
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="overflow-y-auto"
        ref={this.scrollRef}
        onWheel={this.handleWheel}
      >
        {children}
      </div>
    );
  }
}

export default AutoScroll;
