import React from "react";
import { SCALE_NAMES } from "../constants";

export default class Temperature extends React.Component {
  ref = React.createRef();

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
    console.log('ref:', this.ref, 'event:', e);
  };

  render() {
    const { scale, temperature } = this.props;
    return (
      <fieldset>
        <legend>Температура в градусах {SCALE_NAMES[scale]}</legend>
        <input
          ref={this.ref}
          type="number"
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}
