import React, { Component } from 'react'

export default class SocialInstructions extends Component {
    render() {
        const { game: {
            treatment: {
                interactionMode, chat, hideSocialNumeric
            }
        }
        } = this.props;

        return (

            <div className="mb-20 p-12 text-xl text-gray-700 bg-gray-100 rounded-md">
                <p>This is a social stage where you can:</p>

                {interactionMode === "continuous" && <>
                    <ul className={"list-disc pl-6"}>
                        {!hideSocialNumeric && <li>See information about the other players' responses (even if they change them)</li>}
                        {chat && <li>Chat with other players about their response</li>}
                        <li>Modify your response until you click 'submit' (cannot modify it once you click submit!) or the stage ends</li>
                    </ul>
                    <br />
                    <p>If everyone clicks 'submit', the stage will end early and you will go on to the next stage.</p>
                </>
                }

                {interactionMode === "discreet" && <>
                    <ul className={"list-disc pl-6"}>
                        {!hideSocialNumeric && <li>See information about the other players' responses</li>}
                        {chat && <li>Chat with other players about their response</li>}
                    </ul>
                    <br />
                    <p>If everyone clicks 'OK', the stage will end early and you will go on to the next stage.</p>
                </>
                }
            </div>
        )

    }
}
