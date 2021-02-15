import React, { Component } from 'react'

export default class FavTeamNBA extends Component {
    // When a radio button is changed
    handleRadioChange = e => {

        // Get the radio button
        let radio = e.currentTarget;

        // Get the player
        const { player } = this.props;

        const hasFavouriteTeam = radio.value == "Yes" ? true : false;
        player.set("hasFavouriteTeam", hasFavouriteTeam);
    }

    handleTextChange = e => {
        let text = e.currentTarget.value;
        // Get the player
        const { player } = this.props;
        player.set("favouriteTeam", text);
    }

    render() {
        const { player } = this.props;
        const hasFavouriteTeam = player.get("hasFavouriteTeam");
        const favouriteTeam = player.get("favouriteTeam");

        return (
            <div>
                <div>
                    <p className="text-2xl font-semibold mt-8 mb-6">Do you have a favourite NBA team?</p>
                    <span style={{
                        padding: "10px"
                    }}>
                        <input
                            type="radio"
                            name="favouriteTeam"
                            value="Yes"
                            checked={hasFavouriteTeam}
                            onChange={this.handleRadioChange}
                            style={{ transform: "scale(2)" }}
                        />
                        <span style={{
                            margin: "20px"
                        }}>
                            Yes
                        </span>
                    </span>
                    <span style={{
                        padding: "10px"
                    }}>
                        <input
                            type="radio"
                            name="favouriteTeam"
                            value="No"
                            checked={!hasFavouriteTeam}
                            onChange={this.handleRadioChange}
                            style={{ transform: "scale(2)" }}
                        />
                        <span style={{
                            margin: "20px"
                        }}>
                            No
                        </span>
                    </span>
                </div>
                {
                    hasFavouriteTeam
                        ? <div>
                            <br />
                            <p>Please enter the name of your favourite team:</p>
                            <input
                                type="text"
                                autoComplete="off"
                                value={favouriteTeam}
                                onChange={this.handleTextChange}
                            />
                        </div>
                        : <div></div>
                }

            </div >
        )
    }
}
