import React from "react";
import Button from "../components/Button";
import Wrapper from "../components/Wrapper";

export default class NewPlayerForm extends React.Component {
  state = { id: "" };

  handleUpdate = (event) => {
    const { value, name } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { handleNewPlayer } = this.props;
    const { id } = this.state;
    handleNewPlayer(id);
  };

  render() {
    const { id } = this.state;

    return (
      <Wrapper {...this.props}>
        <div className="flex justify-center items-center text-base text-gray-800">
          <div className="max-w-2xl">
            <form onSubmit={this.handleSubmit}>
              <div className="text-4xl font-semibold mt-8 mb-6">
                Identification
              </div>
              <label
                className="block mt-8 text-gray-500 text-medium"
                htmlFor="id"
              >
                Please enter your MTurk ID:
              </label>

              <input
                className="mt-2 w-72 px-3 py-1 rounded bordered border-gray-400 focus:border-gray-500 placeholder-gray-300"
                dir="auto"
                type="text"
                name="id"
                id="id"
                value={id}
                onChange={this.handleUpdate}
                placeholder=""
                required
                autoComplete="off"
              />

              <div className="mt-8">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
