import React, { Fragment } from "react";
import OldLayout from "./OldLayout";
import NewLayout from "./NewLayout";

export default class Round extends React.Component {
  render() {
    const useAltLayout = true;

    if (useAltLayout) {
      return <NewLayout {...this.props} />;
    }

    return <OldLayout {...this.props} />;
  }
}
