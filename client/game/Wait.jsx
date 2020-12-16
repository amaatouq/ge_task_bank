import React from "react";
import Button from "../components/Button";

export default class Wait extends React.Component {
  render() {
    const { player, game } = this.props;
    const {
      treatment: { quitEarly },
    } = game;

    return (
      <div className="flex h-full justify-center items-center text-gray-500">
        <div className="w-96">
          <div>
            Press CONTINUE when you are ready to go to the next round
            {quitEarly &&
              `, or press QUIT if you've had enough and want to exit the experiment`}
            .
          </div>
          <div className="mt-8 flex">
            <Button
              tick
              onClick={() => player.stage.submit()}
              text="CONTINUE"
            />
            <div className="ml-4">
              {quitEarly && (
                <Button
                  tick
                  onClick={() => player.exit("playerQuit")}
                  text="QUIT"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
