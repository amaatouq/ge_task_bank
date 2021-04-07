import React from "react";
import { ModalInstruction, Header } from "../components/partials";
import { Provider } from "../context";
import NewLayout from "./NewLayout";
import OldLayout from "./OldLayout";

export default class Round extends React.Component {
  render() {
    const useAltLayout = true;

    return (
      <Provider triggerModal={this.props.stage.name === "social"}>
        <div className="h-full text-base main-container">
          <Header isAltLayout={useAltLayout} {...this.props} />

          {useAltLayout ? (
            <>
              <NewLayout {...this.props} />
              <ModalInstruction {...this.props} />
            </>
          ) : (
            <OldLayout {...this.props} />
          )}
        </div>
      </Provider>
    );
  }
}
