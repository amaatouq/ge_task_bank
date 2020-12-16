import React from "react";
import Button from "../components/Button";
import ConfirmBox from "../components/CofirmBox";

export default class Wait extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmShow: false,
    };

    this.handleQuit = this._handleQuit.bind(this);
    this.handleYes = this._handleYes.bind(this);
    this.handleCancel = this._handleCancel.bind(this);
  }

  _handleQuit() {
    this.setState({
      confirmShow: true,
    });
  }
  _handleYes() {
    this.setState({
      confirmShow: false,
    });
    player.exit("playerQuit");
  }
  _handleCancel() {
    this.setState({
      confirmShow: false,
    });
  }
  render() {
    const { player } = this.props;
    const { confirmShow } = this.state;

    return (
      <>
        <div className="flex h-full justify-center items-center text-gray-500">
          <div className="w-96">
            <div>
              Press CONTINUE when you are ready to go to the next round, or
              press QUIT if you've had enough and want to exit the experiment.
            </div>
            <div className="mt-8 flex">
              <Button
                tick
                onClick={() => player.stage.submit()}
                text="CONTINUE"
              />
              <div className="ml-4">
                <Button
                  tick
                  onClick={this.handleQuit}
                  // onClick={() => player.exit("playerQuit")}
                  text="QUIT"
                />
              </div>
            </div>
          </div>
        </div>
        {confirmShow && (
          <ConfirmBox onYes={this.handleYes} onCancel={this.handleCancel}>
            Are you sure?
          </ConfirmBox>
        )}
      </>
    );
  }
}
