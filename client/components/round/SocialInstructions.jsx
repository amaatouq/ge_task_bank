import React, { Component } from 'react'

export default class SocialInstructions extends Component {
    render() {
        const { game: {
            treatment: {
                interactionMode, chat, individualNumeric
            }
        }
        } = this.props;

        return (

            <div className="mb-20 pl-12 text-xl text-gray-600">
                <p>This is a social stage where you can:</p>

                {interactionMode === "continuous" && <>
                    <ul className={"list-disc pl-6"}>
                        {!individualNumeric && <li>See information about the other players' responses (even if they change them)</li>}
                        {chat && <li>Chat with other players about their response</li>}
                        <li>Modify your response until you click 'submit' or the stage ends</li>
                    </ul>
                </>
                }

                {interactionMode === "discreet" && <>
                    <ul className={"list-disc pl-6"}>
                        {!individualNumeric && <li>See information about the other players' responses</li>}
                        {chat && <li>Chat with other players about their response</li>}
                    </ul>
                </>
                }
            </div>
        )

    }
}
