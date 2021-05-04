import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";

export default class AttentionCheck extends Component {
    state = { answer: "" };

    // Update the selected answer
    handleChange = e => {
        const radio = e.currentTarget;
        this.setState({ answer: radio.value });
    };

    // Submit answer
    handleSubmit = event => {
        event.preventDefault();

        const { player, onNext } = this.props
        const { answer } = this.state

        player.set("attentionCheck", answer)
        // If there is no answer, alert the player
        if (answer === "") {
            alert("Please select an answer")
        } else if (answer === "Gorafi") {
            player.set("failedAttentionCheck", false)
            // Navigate to the next page
            onNext();
        } else {
            player.set("failedAttentionCheck", true)
        }
    };

    renderQuestion = () => {
        const { answer } = this.state

        return (
            <div>
                <br />
                <p>Please read the instructions to this questions carefully. This question asks you about your favourite news outlet. No matter which one is your actual favourite, we want you to select "Le Gorafi". This is so we can ensure that you are paying attention to the instructions in this study.</p>

                <p>Based on the instructions above, which news outlet have we asked you to select?</p>

                <form onSubmit={this.handleSubmit}>
                    <div className="mb-2">
                        <input
                            type="radio"
                            name="attentionCheck"
                            value="Washington Post"
                            onChange={this.handleChange}
                            checked={answer === "Washington Post"}
                        /> The Washington Post
                        <br />
                    </div>

                    <div className="mb-2">
                        <input
                            type="radio"
                            name="attentionCheck"
                            value="The Guardian"
                            onChange={this.handleChange}
                            checked={answer === "The Guardian"}
                            style={{ marginBottom: "10px" }}
                        /> The Guardian
                    <br />
                    </div>

                    <div className="mb-2">
                        <input
                            type="radio"
                            name="attentionCheck"
                            value="Gorafi"
                            onChange={this.handleChange}
                            checked={answer === "Gorafi"}
                            style={{ marginBottom: "10px" }}
                        /> Le Gorafi
                    <br />
                    </div>

                    <div className="mb-2">
                        <input
                            type="radio"
                            name="attentionCheck"
                            value="The Times"
                            onChange={this.handleChange}
                            checked={answer === "The Times"}
                            style={{ marginBottom: "10px" }}
                        /> The Times
                    <br />
                    </div>

                    <div className="mb-2">
                        <input
                            type="radio"
                            name="attentionCheck"
                            value="Other"
                            onChange={this.handleChange}
                            checked={answer === "Other"}
                            style={{ marginBottom: "10px" }}
                        /> Other
                    <br />
                    </div>

                    <p className="mt-8 mb-8" style={{
                        display: "flex",
                        justifyContent: "center",
                    }}>
                        <button
                            className="px-4 py-3 bg-gray-300 hover:opacity-50 disabled:opacity-50 active:bg-gray-400 text-gray-800 rounded flex items-center text-lg font-semibold leading-none shadow-md disabled:cursor-not-allowed transition-opacity duration-300"
                            type="submit"
                        >
                            Submit
                        </button>
                    </p>

                </form>

            </div>

        )
    }

    render() {
        const { player } = this.props
        const failedAttentionCheck = player.get("failedAttentionCheck") ?? false

        return (
            <Wrapper {...this.props}>
                <div className="flex justify-center items-center text-base text-gray-800">
                    <div className="max-w-2xl">
                        {failedAttentionCheck
                            ? <div>
                                <br />
                                <p>Sorry, it seems you were not paying careful attention to the instructions. Unfortunately you cannot continue with this study. Please return your participation to this study (this does not have any adverse effects for you).</p>
                            </div>
                            : this.renderQuestion()
                        }
                    </div>
                </div>
            </Wrapper >
        )
    }
}