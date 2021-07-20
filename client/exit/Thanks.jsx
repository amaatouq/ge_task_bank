import React from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

// Allows you to sync time with the server
import { TimeSync } from "meteor/mizzao:timesync";

export default class Thanks extends React.Component {
  static stepName = "Thanks";
  render() {
    const { player } = this.props
    if (!player.get("finishedStudy")) {
      player.set("finishedStudy", true)
      player.set("finishStudyAt", new Date(TimeSync.serverTime(null, 1000)).toISOString())
    }

    return (
      <Wrapper {...this.props}>
        <div className="finished">
          <div>
            <h4 className="text-3xl font-semibold mt-8 mb-6">Finished!</h4>
            <p>Thank you for participating.</p>
            <p>
              Accuracy bonuses will be processed within 2 business days.
            </p>

            <h4 className="text-2xl font-semibold mt-8 mb-6">Here is a reminder of the contacts in case you had a problem with this study:</h4>
            <div>
              <p><strong>Department: </strong>UCL Organisations and Innovation</p>
              <p><strong>Name and contact details of the researchers: </strong>Dr. Joshua Becker (joshua.becker@ucl.ac.uk)</p>
              <p><strong>Name and contact details of the UCL Data Protection Officer: </strong>Lee Shailer (data-protection@ucl.ac.uk)</p>
              <p>This study has been approved in accordance with the ethical standards at University College London.</p>
            </div>

            {/* <p className="mt-8 mb-8 flex justify-center">
              <Button
                text={"Complete study on Prolific"}
                onClick={() => { window.location = "https://app.prolific.co/submissions/complete?cc=45296217" }}
              />
            </p> */}

          </div>
        </div>
      </Wrapper >
    );
  }
}