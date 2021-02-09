import React, { Component } from 'react'
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

export default class ExitSurvey extends Component {
    static stepName = "ExitSurvey";

    handleChangeGender = e => {
        const { player } = this.props;
        const demographics = player.get("demographics");

        demographics.gender = e.currentTarget.value;

        player.set("demographics", demographics);
    }

    handleChangeAge = e => {
        const { player } = this.props;
        const demographics = player.get("demographics");

        demographics.age = e.currentTarget.value;

        player.set("demographics", demographics);
    }

    handleChangeComment = e => {
        const { player } = this.props;
        const demographics = player.get("demographics");

        demographics.comment = e.currentTarget.value;

        player.set("demographics", demographics);
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        const { player } = this.props;
        const demographics = player.get("demographics");
        return (
            <Wrapper {...this.props}>
                <div className="flex justify-center items-center text-gray-800">
                    <div className="max-w-4xl">
                        <h4 className="text-4xl font-semibold mt-8 mb-6">Exit Survey</h4>
                        <form onSubmit={this.handleSubmit}>
                            <p>Please indicate your gender</p>
                            <input
                                type="text"
                                name="gender"
                                autoComplete="off"
                                value={demographics.gender ? demographics.gender : ""}
                                size="100"
                                onChange={this.handleChangeGender}
                            />
                            <br />
                            <br />

                            <p>Please indicate your age</p>
                            <input
                                type="number"
                                name="age"
                                min="18"
                                size="20"
                                value={demographics.age ? demographics.age : "0"}
                                onChange={this.handleChangeAge}
                            />
                            <br />
                            <br />

                            <p>If you have any additional comments about the game, please write them here:</p>
                            <textarea name="comment"
                                autoComplete="off"
                                value={demographics.comment ? demographics.comment : ""}
                                onChange={this.handleChangeComment}
                                style={{ width: "500px", height: "200px" }}></textarea>
                            <br />
                            <br />

                            <p className="mt-8 mb-8" style={{
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Button text="Submit" />
                            </p>
                        </form>
                    </div>
                </div>
            </Wrapper>
        )
    }
}
