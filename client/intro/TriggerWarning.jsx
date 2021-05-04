import React, { Component } from 'react'

export default class TriggerWarning extends Component {
    render() {
        return (
            <div style={{
                border: "2px solid red",
                padding: "15px",
                color: "red",
                borderRadius: "10px"
            }}>
                <div>
                    <p>
                        <strong>
                            ATTENTION: The tasks in this study involve making forecasts about future events.
                        </strong>
                    </p>
                    <p>
                        These can ressemble gambling because they involve making prediction about
                        future events (e.g., sports games) that are uncertain and because your reward will be bigger if you make
                        accurate predictions.
                    </p>
                    <p>
                        If you have a history of <strong>gambling</strong>, you might want to stop the study now and close this browser. You will not be penalised in any way.
                    </p>
                </div>
            </div>

        )
    }
}