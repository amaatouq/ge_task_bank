import { ConsentButton } from "meteor/empirica:core";
import React from "react";
import Wrapper from "../components/Wrapper";
import TriggerWarning from "./TriggerWarning";

import { isMobile } from 'react-device-detect';

export default class Consent extends React.Component {
  render() {
    return !isMobile ?
      (
        <Wrapper {...this.props}>
          <div className="flex justify-center items-center text-base text-gray-800">
            <div className="max-w-2xl">

              <TriggerWarning />

              <div className="text-5xl font-semibold mt-8 mb-6">
                {" "}
              Consent Form{" "}
              </div>

              <div>
                <p><strong>Department: </strong>UCL Organisations and Innovation</p>
                <p><strong>Name and contact details of the researchers: </strong>Dr. Joshua Becker (joshua.becker@ucl.ac.uk)</p>
                <p><strong>Name and contact details of the UCL Data Protection Officer: </strong>Lee Shailer (data-protection@ucl.ac.uk)</p>
                <p><strong>This study has been approved in accordance with the ethical standards at University College London.</strong></p>
              </div>

              <h4 className="text-3xl font-semibold mt-8 mb-6">Information about this study</h4>
              <p>
                Thank you for considering taking part in this research. If you have any questions arising from the information on this page or explanation already given to you, please contact the researcher before you decide whether to join in. You may want to save or print this page to keep for your records. Please read the following information carefully.
				    </p>

              <p>The approximate duration of this study is <strong>5 minutes</strong>.</p>
              <p>Participation in this study is <strong>entirely anonymous.</strong> Data is collected and stored in accordance with the Data Protection Act 2018.</p>
              <p>You are free to end the study at any time. However, please note that <strong>we are only able to pay you for the parts of the study you have completed.</strong></p>
              <p>In addition to payment for your time, <strong>you could gain a bonus payment based on your performance</strong>. Please read the instructions carefully to find out how to gain the bonus.</p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">Eligibility</h4>
              <p>You are eligible to take part if you are <strong>at leat 18 years of age.</strong></p>
              <p>The study must be completed on a <strong>desktop or laptop</strong>. If you are currently using a mobile device or tablet, please switch to a laptop or desktop computer before starting this study.</p>
              <p>The study must be completed using <strong>Firefox or Chrome</strong>. If you are currently using another browser, please switch to Firefox or Chrome before starting this study.</p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">What happens if I take part?</h4>
              <p>
                In this study, we will ask you to predict certain events. ou will earn $0.10 guaranteed pay for each question answered with a bonus payment of $0-$0.10 per question based on how well you predicted the event. You will be paid once the events occur and we can compare you predictions to the actual outcomes. The closer your prediction was to the actual event, the higher your bonus payment.
            </p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">Should I take part in this study?</h4>
              <p>
                It is up to you to decide whether or not to take part. If you have any questions arising from the information or explanation already given to you, please ask the researcher before you decide whether to participate. You can withdraw at any time without giving a reason. If you decide to withdraw during the study, the data you have provided up that point will be destroyed (and we will be unable to pay you). As the data collected is anonymous, we may not be able to delete your data after you have completed the study.
           </p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">What if something goes wrong?</h4>
              <p>
                If you wish to raise a complaint about any aspect of this study, you should contact the Principal Researcher in the first instance. If you feel your complaint has not been handled to your satisfaction you can contact the Chair of the UCL Research Ethics Committee at ethics@ucl.ac.uk.
				    </p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">What will happen to the results of the research project?</h4>
              <p>
                The results of the research will be published in an article or other formats. If you'd like to receive a summary of the findings, you can contact the researcher. Anonymous data collected during the study may be made publically available on platforms such as the Open Science Framework (osf.io) and GitHub (github.com). This data will not include information which would allow others to identify you.
				    </p>

              <h4 className="text-3xl font-semibold mt-8 mb-6">Participant’s Statement</h4>
              <p>
                By clicking the button below I consent to the following:
			    	</p>
              <div style={{ paddingLeft: "20px" }}>
                <ul className="list-disc">
                  <li>I confirm that I have read and understood the information for this study. I have had an opportunity to consider the information and what will be expected of me. I have also had the opportunity to ask questions which have been answered to my satisfaction</li>
                  <li>I consent to participate in the study. I understand that my information (demographics and task performance) will be used for the purposes explained to me. I understand that according to data protection legislation, ‘public task’ will be the lawful basis for processing.</li>
                  <li>I understand that all personal information will remain confidential and that all efforts will be made to ensure I cannot be identified. I understand that my data gathered in this study will be stored anonymously and securely. It will not be possible to identify me in any publications.</li>
                  <li>I understand that my information may be subject to review by responsible individuals from the University for monitoring and audit purposes.</li>
                  <li>I understand the direct/indirect benefits of participating.</li>
                  <li>I understand that the data will not be made available to any commercial organisations but is solely the responsibility of the researcher(s) undertaking this study. </li>
                  <li>I understand that I will be compensated according to my performance as stated above.</li>
                  <li>I understand that other than this compensation, I will not benefit financially from this study or from any possible outcome it may result in in the future.</li>
                  <li>I agree that my anonymised research data may be used by others for future research. No one will be able to identify you when this data is shared.</li>
                  <li>I understand that the information I have submitted will be published as a report. If you wish to receive a copy of it, please email the researchers.</li>
                  <li>I confirm that I understand the inclusion criteria as detailed above.</li>
                  <li>I confirm that I understand the exclusion criteria as detailed in above; and I do not fall under the exclusion criteria.</li>
                  <li>I am aware of who I should contact if I wish to lodge a complaint.</li>
                </ul>
              </div>

              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ConsentButton text="I AGREE" />
              </div>

            </div>
          </div>
        </Wrapper>
      ) :
      (
        <Wrapper {...this.props}>
          <div className="flex justify-center items-center text-base text-gray-800">
            <div className="max-w-2xl">

              <TriggerWarning />

              <div className="text-5xl font-semibold mt-8 mb-6">
                {" "}
                Consent Form{" "}
              </div>

              <h4 className="text-3xl font-semibold mt-8 mb-6">Eligibility</h4>
              <p>You are eligible to take part if you are <strong>at leat 18 years of age.</strong></p>
              <p>The study must be completed on a <strong>desktop or laptop</strong>. If you are currently using a mobile device or tablet, please switch to a laptop or desktop computer before starting this study.</p>
              <p>The study must be completed using <strong>Firefox or Chrome</strong>. If you are currently using another browser, please switch to Firefox or Chrome before starting this study.</p>

            </div>
          </div>
        </Wrapper>
      );
  }
}
