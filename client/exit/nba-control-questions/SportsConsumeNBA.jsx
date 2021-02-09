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
