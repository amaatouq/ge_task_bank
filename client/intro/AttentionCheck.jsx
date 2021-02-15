import React, { Component } from 'react';
import Wrapper from "../components/Wrapper";
import { CustomButton } from "../components/Button";

export default class AttentionCheck extends Component {

    handleRadioChange = e => {

        // Get the radio button
        let radio = e.currentTarget;

        // Get the player
        const { player } = this.props;

        if (radio.checked) {
            player.set("attentionCheck", radio.value);
        }

    }

    handleSubmit = e => {
        e.preventDefault();

        // Get the player
        const { player } = this.props;

        player.set("submitAttention", true);

    }

    renderQuestion = () => {
        const {

            player
        } = this.props;

        return (
            <div>
                <br />
                <p>Please read the instructions to this questions carefully. This question asks you about your favourite news outlet. No matter which one is your actual favourite, we want you to select "Le Gorafi". This is so we can ensure that you are paying attention to the instructions in this study.</p>

                <p>Based on the instructions above, which news outlet have we asked you to select?</p>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="radio"
                        name="attentionCheck"
                        value="Washington Post"
                        onChange={this.handleRadioChange}
                        checked={this.props.player.get("attentionCheck") == "Washington Post"}
                    /> The Washington Post
                            <br />

                    <input
                        type="radio"
                        name="attentionCheck"
                        value="The Guardian"
                        onChange={this.handleRadioChange}
                        checked={this.props.player.get("attentionCheck") == "The Guardian"}
                    /> The Guardian
                            <br />

                    <input
                        type="radio"
                        name="attentionCheck"
                        value="Gorafi"
                        onChange={this.handleRadioChange}
                        checked={this.props.player.get("attentionCheck") == "Gorafi"}
                    /> Le Gorafi
                            <br />

                    <input
                        type="radio"
                        name="attentionCheck"
                        value="The Times"
                        onChange={this.handleRadioChange}
                        checked={this.props.player.get("attentionCheck") == "The Times"}
                    /> The Times
                            <br />

                    <input
                        type="radio"
                        name="attentionCheck"
                        value="Other"
                        onChange={this.handleRadioChange}
                        checked={this.props.player.get("attentionCheck") == "Other"}
                    /> Other
                            <br />

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

    renderOutcome = () => {
        const {
            player,
            onNext,
            hasNext
        } = this.props;

        return (
            <div>
                {player.get("attentionCheck") === "Gorafi"
                    ? <div>
                        <br />
                        <p>Thank you for answering correctly. You can now continue to the instruction for the study.</p>
                        <p style={{ display: "flex", justifyContent: "center" }}>
                            <CustomButton onClick={onNext} disabled={!hasNext}>
                                Continue
                            </CustomButton>
                        </p>
                    </div>
                    : <div>
                        <br />
                        <p>Sorry, it seems you were not paying careful attention to the instructions. Unfortunately you cannot continue with this study. Please return your participation to this study (this does not have any adverse effects for you).</p>
                    </div>}
            </div>
        )
    }

    render() {
        const {
            player
        } = this.props;

        return (
            <Wrapper {...this.props}>
                <div className="flex justify-center items-center text-base text-gray-800">
                    <div className="max-w-2xl">
                        {!player.get("submitAttention")
                            ? this.renderQuestion()
                            : this.renderOutcome()}
                    </div>
                </div>
            </Wrapper >
        )
    }
}
