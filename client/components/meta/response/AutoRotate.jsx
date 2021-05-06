import React, { Component } from 'react'
import { deepCopy } from '../../../../shared/helperFunctions/deepCopy';
import { Avatar } from '../../../game/Avatar';
import { Answer } from './ResponseContainer'

export default class AutoRotate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOrder: this.props.otherPlayers.map(_player => _player._id)
    }
    this.mouseInside = false
    this.started = false
    this.scrollRef = React.createRef()
    this.timer = null
  }

  // https://stackoverflow.com/questions/1985260/rotate-the-elements-in-an-array-in-javascript
  arrayRotate = (arr, reverse) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  }

  componentDidMount() {
    if (
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight
    ) {
      this.start();
    }
  }

  componentDidUpdate() {
    const canScroll =
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight;

    if (canScroll && !this.started && !this.mouseInside) {
      this.start();
    } else if (!canScroll && this.started) {
      this.stop();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  start = () => {
    this.started = true;

    const { playerOrder } = this.state
    const { rate } = this.props

    this.timer = setInterval(() => {
      this.setState({ playerOrder: this.arrayRotate(playerOrder) })
    }, rate)
  }

  stop() {
    this.started = false;
    clearTimeout(this.timer);
  }

  mouseEnter = () => {
    this.mouseInside = true
    if (this.started) {
      this.stop()
    }
  }

  mouseLeave = () => {
    this.mouseInside = false
    if (
      this.scrollRef.current.scrollHeight > this.scrollRef.current.clientHeight
    ) {
      this.start();
    }
  }

  render() {
    const { unit, otherPlayers } = this.props
    const { playerOrder } = this.state

    return (
      <div
        className="overflow-y-auto p-1"
        ref={this.scrollRef}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <ul>
          {playerOrder.map((p_id, i) => {

            const p = otherPlayers.filter(_player => _player._id === p_id)[0]
            let oAnswer = p.round.get("answer") ?? "N/A";

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
    )
  }
}