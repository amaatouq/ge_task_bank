import React from "react";
import { getUnit } from "../../../shared/unit";

export default class UnitSimple extends React.Component {
  render() {
    const { magnitude, round, answer, preventPluralize } = this.props;
    const unit = getUnit({ round, answer, magnitude, preventPluralize });

    return unit;
  }
}
