import React, { Component } from 'react'

// Import the config from the db
import { withTracker } from "meteor/react-meteor-data"
import { Configs } from '../../../shared/api/collection'

// Import components
import IntroLayout from "../IntroLayout"
import CountdownTimer from "./components/CountdownTimer"
import ReadyButton from "./components/ReadyButton"

// Handles all the timing stuff
import { TimeSync } from "meteor/mizzao:timesync"
import calcTimeRemaining from "./components/timeHelpers.js"
import moment from "moment"

export default class WaitingPage extends Component {
    render() {
        const { onNext, player } = this.props

        return (
            <IntroLayout title="Wait Page" {...this.props}>
                {/* Load the db data which loads the page contents */}
                <WaitingPageContentContainer onNext={onNext} player={player} />
            </IntroLayout>
        )
    }
}

class WaitingPageContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPrepared: false,
            timeRemaining: null
        };
        this.timer = null
    }

    componentDidUpdate() {

        const { loading, timeToStart } = this.props
        const { timed, isPrepared } = this.state

        if (!isPrepared) {
            if (!loading) {
                this.setState({
                    timeRemaining: Math.abs(timeToStart.getTime() - new Date(TimeSync.serverTime(null, 1000)).getTime()),
                    isPrepared: true
                })

                this.timer = setInterval(() => {
                    let newTime = this.state.timeRemaining - 1;
                    // if (timed >= (this.props.timing / 1000)) {
                    //     this.setState({ show: true });
                    //     clearInterval(this.timer);
                    // } else {
                    //     this.setState({ timed: timed })
                    // }
                    this.setState({ timeRemaining: newTime })

                }, 1000);
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    secondsToHMS = (time) => {
        var days = Math.floor(time / (1000 * 60 * 60 * 24));
        var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60)) / 1000);

        return hours + ":" + minutes + ":" + seconds
    }

    render() {
        const {
            loading,
            player,
            timeToStart, bufferTime, loginRefresh
        } = this.props

        const { timeRemaining } = this.state

        if (loading) {
            return (
                <div>loading...</div>
            )
        }

        console.log(timeRemaining)

        return (
            <div>
                <p>The study starts at: {timeToStart.toLocaleString()} </p>
                <p>{timeRemaining}</p>
                <p>{this.secondsToHMS(timeRemaining)} left until the start of the study.</p>
            </div>
        )
    }
}

WaitingPageContentContainer = withTracker(rest => {

    // Get the props
    const { player, onNext } = rest

    // Get collection information
    const loading = !Meteor.subscribe("admin-global-configs").ready()
    if (loading) {
        return {
            loading
        }
    }

    const globalConfigs = Configs.find({}).fetch()[0]

    // const timeToStart = new Date(globalConfigs.timeToStart)
    const timeToStart = new Date("May 18, 2021 23:20:25")
    const bufferTime = player.get("bufferTime") ? player.get("bufferTime") : _.random(globalConfigs.maxBuffer ?? 0)
    const loginRefresh = globalConfigs.loginRefresh ?? 30

    return {
        loading,
        player,
        timeToStart, bufferTime, loginRefresh
    };

})(WaitingPageContent)
