import React, { Component } from 'react'
import Wrapper from "../components/Wrapper";

// Import the config from the db
import { withTracker } from "meteor/react-meteor-data"
import { Configs } from '../../shared/api/collectionAdminGlobalConfigs'

export default class WaitingThankYou extends Component {
    static stepName = "Thanks";

    render() {
        return (
            <Wrapper {...this.props}>
                <WaitingThankYouContent {...this.props} />
            </Wrapper>
        )
    }
}

class WaitingThankYouPage extends Component {
    render() {
        const { loading, prolificCode, player } = this.props

        if (!player.get("finishedStudy")) {
            player.set("finishedStudy", true)
        }

        if (loading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className="finished">
                <div>
                    <h4 className="text-3xl font-semibold mt-8 mb-6">Finished!</h4>
                    <p>Thank you for participating.</p>
                    <p>
                        Accuracy bonuses will be processed within 2 business days.
                    </p>
                    {prolificCode !== "" && <p><strong>If you haven't already, please validate the study on Prolific with this code: {prolificCode}</strong></p>}

                    <h4 className="text-2xl font-semibold mt-8 mb-6">Here is a reminder of the contacts in case you had a problem with this study:</h4>
                    <div>
                        <p><strong>Department: </strong>UCL Organisations and Innovation</p>
                        <p><strong>Name and contact details of the researchers: </strong>Dr. Joshua Becker (joshua.becker@ucl.ac.uk)</p>
                        <p><strong>Name and contact details of the UCL Data Protection Officer: </strong>Lee Shailer (data-protection@ucl.ac.uk)</p>
                        <p>This study has been approved in accordance with the ethical standards at University College London.</p>
                    </div>

                </div>
            </div>
        )
    }
}


WaitingThankYouContent = withTracker(rest => {

    // Suscribe to collection information, and return nothing as long as it is loading
    const loading = !Meteor.subscribe("admin-global-configs").ready();
    if (loading) {
        return {
            loading
        }
    }

    // Get the globalConfigs collection
    const globalConfigs = Configs.find({}).fetch()[0];
    const prolificCode = globalConfigs.prolificCode

    return {
        loading,
        prolificCode
    }
})(WaitingThankYouPage)
