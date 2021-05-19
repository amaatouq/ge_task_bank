import React, { Component } from 'react'

// Import the config from the db
import { withTracker } from "meteor/react-meteor-data"
import { Configs } from '../../../shared/api/collection'

// Import components
import IntroLayout from "../IntroLayout"
import CountdownTimer from "./components/CountdownTimer";
import ReadyButton from "./components/ReadyButton";

// Handles all the timing stuff
import { TimeSync } from "meteor/mizzao:timesync";
import calcTimeRemaining from "./components/timeHelpers.js";
import moment from "moment";

// Prepare the waiting page
export default class WaitingPage extends Component {
    render() {
        const { onNext, player } = this.props;

        return (
            <IntroLayout title="Wait Page" {...this.props}>
                {/* Load the db data which loads the page contents */}
                <WaitingPageContentContainer onNext={onNext} player={player} />
            </IntroLayout>
        )
    }
}

class WaitingPageContent extends React.Component {
    constructor(props) {
        super(props)

        const { loading, onNext, player, now, timeToStart, bufferTime } = props

        // calc some vars before setting state		
        var readyState = true;
        var timeoutState = undefined;

        player.set("readyState", readyState ? "active" : "timeout");

        // if localStorage already exists for ready state, load it.
        // otherwise, create it.
        const playerIsReadyLocalStorage = localStorage.getItem("ready" + player._id);
        if (playerIsReadyLocalStorage == undefined) {
            localStorage.setItem("ready" + player._id, readyState);
        } else {
            readyState = playerIsReadyLocalStorage == "true";

        }

        // set timeout state if its ready
        if (!loading) {
            timeoutState = calcTimeRemaining(timeToStart, now, bufferTime) <= 0;
        }

        this.state = {
            playerReady: readyState,
            timeout: timeoutState,
        }

        const { timeout, playerReady } = this.state

        // NOW HANDLE SOME RE-ROUTING IF NECESSARY

        // if game is timed out and player is ready, move on
        if (timeout & playerReady) {
            onNext();
        }

        // if the db is ready there is no timeToStart config, move on
        if (!loading & timeToStart === undefined) {
            onNext();
        }
    }

    setReady = (readyState) => {
        const { player } = this.props
        const { playerReady } = this.state

        // avoid loops in child component
        // and unnecessary updating
        if (playerReady != readyState) {
            player.set("readyState", readyState ? "active" : "timeout");
            this.setState({ playerReady: readyState });
            // store in browser in case they time out and refresh the page.
            // in that event, the game is closed.

            localStorage.setItem("ready" + this.props.player._id, readyState);
        }
    }

    static getDerivedStateFromProps(props, current_state) {

        const { now, timeToStart, bufferTime } = props;
        if (timeToStart) {
            const timeoutState = calcTimeRemaining(timeToStart, now, bufferTime) <= 0;

            const moveon = (timeoutState && current_state.playerReady);

            return ({
                timeout: timeoutState,
            });

        }
        return null
    }


    componentDidUpdate() {
        const { loading, player, onNext, timeToStart, bufferTime } = this.props
        const { playerReady, timeout } = this.state

        // if the db is ready and there is no timeToStart config, move on
        if (!loading & timeToStart === undefined) {
            onNext();
        }

        // if game is counted down...
        if (timeout && playerReady) {
            onNext()
        }

        // save  player buffer time if available
        if (bufferTime) {
            if (!player.get("bufferTime")) {
                player.set("bufferTime", bufferTime)
            }
        }
    }

    renderLoading() {
        return (<center>Loading...</center>);
    }


    renderWaitingPage = () => {
        const { now, timeToStart, bufferTime, loginRefresh } = this.props
        const { timeout, playerReady } = this.state

        const timeout_notready = (timeout && !playerReady);

        if (timeout_notready) {
            return (
                <div className="game-is-closed"><center>Login timed out, game is closed.</center></div>
            )
        } else {
            return (
                <><center>
                    <div className="game-start-timer">
                        Time to start: <CountdownTimer timeToStart={calcTimeRemaining(timeToStart, now, bufferTime)} handleTimeOut={this.handleTimeOut} />
                    </div>
                    <ReadyButton disabled={false} setReady={this.setReady} maxTime={loginRefresh} />
                </center></>
            )
        }
    }

    render() {
        const { loading } = this.props;

        return (

            <div className="bp3-non-ideal-state">
                <div className="bp3-non-ideal-state-description">
                    {loading ? this.renderLoading() : this.renderWaitingPage()}
                </div>
            </div>
        );
    }
}


WaitingPageContentContainer = withTracker(rest => {

    // Get the props
    const { player, onNext } = rest

    // Get collection information
    const loading = !Meteor.subscribe("admin-global-configs").ready();
    if (loading) {
        return {
            loading
        }
    }

    const globalConfigs = Configs.find({}).fetch()[0];

    // only refresh every second 
    const now = moment(TimeSync.serverTime(null, 1000));

    // const timeToStart = globalConfigs.timeToStart
    // const timeToStart = "18/05/2021, 21:06:54"
    // const timeToStart = new Date(globalConfigs.timeToStart)
    const timeToStart = "21:55"
    // console.log(new Date().toString())
    // console.log(Date.parse(timeToStart))
    // console.log(new Date('2021-05-18T21:24:54'))
    // "Tue May 18 2021 21:30:20 GMT+0100 (British Summer Time)"
    // console.log(timeToStart)


    // console.log([new Date(), new Date().getSeconds() + 20, new Date().toLocaleString()])

    const bufferTime = player.get("bufferTime") ? player.get("bufferTime") : _.random(globalConfigs.maxBuffer ?? 0)
    const loginRefresh = globalConfigs.loginRefresh ?? 30

    return {
        now,
        loading,
        timeToStart, bufferTime, loginRefresh,
        globalConfigs,
        ...rest
    };

})(WaitingPageContent);