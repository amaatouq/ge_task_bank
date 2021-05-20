import React, { Component } from 'react'

// Import components
import Wrapper from "../../components/Wrapper";

// Import the config from the db
import { withTracker } from "meteor/react-meteor-data"
import { Configs } from '../../../shared/api/collectionAdminGlobalConfigs'

// Handles all the timing stuff
import { TimeSync } from "meteor/mizzao:timesync";
import calcTimeRemaining from "./components/timeHelpers.js";
import moment from "moment";
import Consent from '../Consent';

export default class WaitingConsent extends Component {
    render() {
        return (
            <>
                {/* Load the db data which loads the page contents */}
                <WaitingConsentPageContents {...this.props} />
            </>

        )
    }
}

class WaitingConsentPage extends Component {
    render() {

        const { loading, now, timeToStart } = this.props


        if (loading) {
            return (
                <div>Loading...</div>
            )
        }

        const isUserLate = calcTimeRemaining(timeToStart, now, 0) <= 0

        if (isUserLate) {
            return (
                <Wrapper {...this.props}>
                    <center>
                        Sorry, you have arrived too late to participate in this study.
                    </center>
                </Wrapper>
            )
        }

        return <Consent {...this.props} />
    }
}

WaitingConsentPageContents = withTracker(rest => {

    // Suscribe to collection information, and return nothing as long as it is loading
    const loading = !Meteor.subscribe("admin-global-configs").ready();
    if (loading) {
        return {
            loading
        }
    }

    // Get the time it is now (only refresh every second)
    const now = moment(TimeSync.serverTime(null, 1000));

    // Get the globalConfigs collection
    const globalConfigs = Configs.find({}).fetch()[0];
    const timeToStart = globalConfigs.timeToStart

    return {
        now,
        loading,
        timeToStart
    };

})(WaitingConsentPage);
