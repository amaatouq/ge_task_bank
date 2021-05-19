import React, { Component } from 'react'
import { TimeSync } from "meteor/mizzao:timesync"

export default class Countdown extends Component {
    state = {
        hours: '00',
        minutes: '00',
        seconds: '00'
    }

    componentDidMount() {
        setInterval(() => {
            let difference = +this.props.timeToStart - +new Date(TimeSync.serverTime(null, 1000))

            if (difference < 1) {
                this.props.setTimesUp(true)
            }

            let hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
            let minutes = Math.floor((difference / (1000 * 60)) % 60)
            let seconds = Math.floor((difference / (1000)) % 60)
            this.setState({
                hours: hours > 9 ? hours : `0${hours}`,
                minutes: minutes > 9 ? minutes : `0${minutes}`,
                seconds: seconds > 9 ? seconds : `0${seconds}`
            })

        }, 1000)
    }

    render() {
        const { hours, minutes, seconds } = this.state

        return (
            <span>{`${hours}:${minutes}:${seconds}`}</span>
        )
    }
}