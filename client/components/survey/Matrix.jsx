import React, { Component } from 'react'

export default class Matrix extends Component {

    // When a radio button is changed
    handleChange = e => {

        // Get the radio button
        let radio = e.currentTarget;

        // Get the answers of the player (if they are already assigne, i.e. did not return "undefined"), 
        // otherwise, set the answer to an empty object.
        let answers = typeof this.props.player.get(this.props.playerVariable) !== "undefined" ?
            this.props.player.get(this.props.playerVariable) :
            {};

        // If this radio button that was changed was checked 
        // (because two radio buttons change, the one checked and the one unchecked)
        if (radio.checked) {
            // Modify or create the value (the scale) of this radio button set to the name (the question) of this radio button
            answers[radio.name] = radio.value;
            // Set the answers object back to the player
            this.props.player.set(this.props.playerVariable, answers);
        }
    }

    render() {
        const { player, playerVariable, questions, responseScale } = this.props;

        let answers = player.get(playerVariable);

        // Create a table where the header are the options of the scale, and the lines are
        // the questions with radio buttons for each option of the scale.
        return (
            <div className="matrix">
                <table>
                    <thead>
                        <tr>
                            <th>Questions</th>
                            {responseScale.map((response, index) => <th key={index}>{response}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((question, index) => {
                            return <tr key={index}>
                                <td key={index}>{question}</td>
                                {responseScale.map((response, index) => {
                                    return <td className="matrix-input" key={index}>
                                        <input
                                            key={index}
                                            type="radio"
                                            name={question}
                                            value={response}
                                            checked={typeof answers !== "undefined" ? answers[question] === response : false}
                                            onChange={e => {
                                                this.handleChange(e)
                                            }}
                                        />
                                    </td>
                                })}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

