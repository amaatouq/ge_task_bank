import React, { Component } from 'react';
import Button from '../../components/Button';
import FavTeamNBA from './FavTeamNBA';
import SportsConsumeNBA from './SportsConsumeNBA';
import Wrapper from "../../components/Wrapper";

export default class SurveyNBA extends Component {
    static stepName = "SurveyNBA";

    render() {
        const { player, onSubmit } = this.props;
        const hasFavouriteTeam = player.get("hasFavouriteTeam");
        const favouriteTeam = player.get("favouriteTeam");
        const sportsConsumeNBA = player.get("sportsConsumeNBA");

        const questions = [
            "attend NBA games (before the pandemic)",
            "read/watch/listen to news about the NBA",
            "play basketball",
            "play fantasy basketball",
            "bet on NBA games",
            "watch NBA games",
            "search for statistics about NBA teams",
            "purchases NBA licensed merchandise",
            "please select 'Often'"
        ];

        return (
            <Wrapper {...this.props}>
                <div className="flex justify-center items-center text-base text-gray-800">
                    <div className="max-w-2xl">
                        <h4 className="text-3xl font-semibold mt-8 mb-6">Please answer the following questions about your personal experience with sports</h4>

                        <FavTeamNBA player={player} />
                        <br />
                        <br />

                        <SportsConsumeNBA questions={questions} player={player} />
                        <br />
                        <br />

                        <p style={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                            <Button
                                text={"Next"}
                                onClick={onSubmit}
                            />
                        </p>
                    </div>
                </div>
            </Wrapper>
        )
    }
}