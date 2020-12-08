import React from "react";
import Button from "../game/Button";
import Wrapper from "../game/Wrapper";

function Radio({ selected, name, value, label, onChange }) {
  return (
    <label className="mr-4 text-gray-600 font-medium">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={onChange}
        className="mr-2"
      />
      {label}
    </label>
  );
}

function Label({ text, htmlFor }) {
  return (
    <label
      className="block mt-6 mb-2 text-gray-600 font-medium"
      htmlFor={htmlFor}
    >
      {text}
    </label>
  );
}

function Input({ ...rest }) {
  return <input className="py-1 px-3" {...rest} />;
}

function Textarea({ ...rest }) {
  return <textarea className="w-96 h-24" {...rest} />;
}

export default class ExitSurvey extends React.Component {
  static stepName = "ExitSurvey";
  state = { age: "", gender: "", strength: "", fair: "", feedback: "" };

  handleChange = (event) => {
    const el = event.currentTarget;
    this.setState({ [el.name]: el.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player } = this.props;
    const { age, gender, strength, fair, feedback, education } = this.state;

    return (
      <Wrapper {...this.props}>
        <div className="flex justify-center items-center text-gray-800">
          <div className="max-w-7xl">
            <div className="text-4xl font-semibold mt-8 mb-6">
              {" "}
              Exit Survey{" "}
            </div>
            <p>
              Please submit the following code to receive your bonus:{" "}
              <strong>{player._id}</strong>.
            </p>
            <p>
              You final <strong>bonus</strong> is in addition of the{" "}
              <strong>1 base reward</strong> for completing the HIT.
            </p>
            <p className="mt-4">
              Please answer the following short survey.{" "}
              <em>
                You do not have to provide any information you feel
                uncomfortable with.
              </em>
            </p>
            <form onSubmit={this.handleSubmit}>
              <div className="form-line">
                <div>
                  <Label htmlFor="age" text="Age" />
                  <div>
                    <Input
                      id="age"
                      type="number"
                      min="0"
                      max="150"
                      step="1"
                      dir="auto"
                      name="age"
                      value={age}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gender" text="Gender" />
                  <div>
                    <Input
                      id="gender"
                      type="text"
                      dir="auto"
                      name="gender"
                      value={gender}
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="education"
                  text="Highest Education Qualification"
                />
                <div>
                  <Radio
                    selected={education}
                    name="education"
                    value="high-school"
                    label="High School"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="bachelor"
                    label="US Bachelor's Degree"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="master"
                    label="Master's or higher"
                    onChange={this.handleChange}
                  />
                  <Radio
                    selected={education}
                    name="education"
                    value="other"
                    label="Other"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-line thirds">
                <div>
                  <Label
                    htmlFor="strength"
                    text="How would you describe your strength in the game?"
                  />
                  <div>
                    <Textarea
                      dir="auto"
                      id="strength"
                      name="strength"
                      value={strength}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="fair" text="Do you feel the pay was fair?" />
                  <div>
                    <Textarea
                      dir="auto"
                      id="fair"
                      name="fair"
                      value={fair}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="feedback"
                    text="Feedback, including problems you encountered."
                  />
                  <div>
                    <Textarea
                      dir="auto"
                      id="feedback"
                      name="feedback"
                      value={feedback}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 mb-8">
                <Button text="Submit" />
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}
