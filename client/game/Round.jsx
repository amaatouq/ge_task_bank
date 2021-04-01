import React, { Fragment } from "react";
// import DebugButtons from "../components/DebugButtons";
import { Header } from "../components/partials";
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
      <div className="h-full text-base main-container">
        <Header isAltLayout={useAltLayout} {...this.props} />

        {useAltLayout ? (
          <NewLayout {...this.props} />
        ) : (
          <OldLayout {...this.props} />
        )}
      </div>
    );
  }
}
