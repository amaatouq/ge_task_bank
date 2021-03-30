import React from "react";
const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    showModal: false,
    toggleModal: () => {
      this.setState({ showModal: !this.state.showModal });
    },
    openModal: () => {
      this.setState({ showModal: true });
    },
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.triggerModal) {
      this.state.openModal();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
