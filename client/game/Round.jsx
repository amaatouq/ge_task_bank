import React from "react";
import { ModalInstruction, Header } from "../components/partials";
import { Consumer, Provider } from "../context";
// import DebugButtons from "../components/DebugButtons";
// import Wait from "../components/Wait";
// import { Avatar } from "./Avatar";
// import Response from "./Response";
// import Score from "./Score";
// import Timer from "./Timer";
import NewLayout from "./NewLayout";

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
