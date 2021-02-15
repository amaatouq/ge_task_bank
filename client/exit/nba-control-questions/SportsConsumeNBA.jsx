import React, { Component } from 'react';
import Matrix from '../../components/survey/Matrix';

export default class SportsConsumeNBA extends Component {
    render() {
        const { player, questions } = this.props;

        const responseScale = [
            "Never",
            "Rarely",
            "Sometimes",
            "Often",
            "Always"
        ];

        return (
            <div>
                <p className="text-2xl font-semibold mt-8 mb-6">How often do you...</p>
                <br />
                <Matrix
                    player={player}
                    playerVariable={"sportsConsumeNBA"}
                    questions={questions}
                    responseScale={responseScale}
                />
            </div>
        )
    }
}
