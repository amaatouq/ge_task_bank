import React from "react";
import { Alert } from "../components/Alert";
import { CustomButton } from "../components/Button";
import { Label, Radio, Input } from "../components/Forms";
import IntroLayout from "./IntroLayout";

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: "",
      color: "",
      inCorrect: false,
    };

    this.handleClose = this._handleClose.bind(this);
    this.handleSubmit = this._handleSubmit.bind(this);
    this.handleChange = this._handleChange.bind(this);
  }

  _handleClose() {
    this.setState({
      inCorrect: false,
    });
  }
  _handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.goal !== "estimate" ||
      this.state.color.toLowerCase() !== "white"
    ) {
      this.setState({
        inCorrect: true,
      });
    } else {
      this.props.onNext();
    }
  }
  _handleChange({ currentTarget: input }) {
    this.setState({
      [input.name]: input.value,
      inCorrect: false,
    });
  }
  render() {
    const { goal, inCorrect, color } = this.state;
    const { hasPrev, onPrev, onNext, hasNext } = this.props;
    return (
      <IntroLayout title="Quiz" {...this.props}>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="my-8">
            <Label
              htmlFor="goal"
              text="Select the true statement about the goal of the task:"
            />
            <div>
              <Radio
                selected={goal}
                name="goal"
                value="estimate"
                onChange={this.handleChange}
                label="The goal of the task is to make the closest estimate possible to the right answer."
              />
              <div className="mb-3">
                <Radio
                  selected={goal}
                  name="goal"
                  value="close"
                  onChange={this.handleChange}
                  label="The goal of the task is to make a somewhat close guess as fast as possible."
                />
              </div>
            </div>
          </div>
          <div className="mb-8">
            <Label
              htmlFor="color"
              text="What color was Napoleon's white horse?"
            />
            <div>
              <Input
                name="color"
                onChange={this.handleChange}
                placeholder="e.g. brown"
                value={color}
                autoComplete="off"
              />
            </div>
          </div>
          {inCorrect && (
            <Alert oNclose={this.handleClose}>
              Please ensure that you answer the questions correctly, or go back
              to the instructions.
            </Alert>
          )}
          <p className="mt-20">
            <CustomButton
              onClick={onPrev}
              disabled={!hasPrev}
              color="secondary"
              className="mr-4"
              outline
            >
              Back to instructions
            </CustomButton>
            <CustomButton type="submit">Submit and begin game</CustomButton>
          </p>
        </form>
      </IntroLayout>
    );
  }
}
