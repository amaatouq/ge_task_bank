import React, { Component } from 'react'

// Import the config from the db
import { withTracker } from "meteor/react-meteor-data"
import { Configs } from '../../../shared/api/collection'

// Import components
import IntroLayout from "../IntroLayout"
import CountdownTimer from "./components/CountdownTimer"
import ReadyButton from "./components/ReadyButton"
import Countdown from './components/Countdown'

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
    state = {
        timesUp: false
    }

    setTimesUp = bool => {
        this.setState({ timesUp: bool })
    }

    render() {
        const {
            loading,
            timeToStart
        } = this.props


        if (loading) {
            return (
                <div>loading...</div>
            )
        }

        return (
            <div>
                <p>The event starts at: {timeToStart.toLocaleTimeString()}</p>
                <center><Countdown {...this.props} /></center>

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
    const timeToStart = new Date("May 19, 2021 23:20:25")
    const bufferTime = player.get("bufferTime") ? player.get("bufferTime") : _.random(globalConfigs.maxBuffer ?? 0)
    const loginRefresh = globalConfigs.loginRefresh ?? 30

    return {
        loading,
        player,
        timeToStart, bufferTime, loginRefresh
    };

})(WaitingPageContent)
