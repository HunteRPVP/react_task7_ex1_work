import React from "react";
import Temperature from "./Temperature";
import Boiling from "./Boiling";
import { CELSIUS, FAHRENHEIT } from "../constants";
import Panel from "./Panel";
import SplitPanel from "./SplitPanel";

export default class Calculator extends React.Component {
  c = 0;
  f = 0;

  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      scale: CELSIUS,
    };
  }

  toCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };

  toFahrenheit = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return "";
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === FAHRENHEIT
        ? this.tryConvert(temperature, this.toCelsius)
        : temperature;
    const fahrenheit =
      scale === CELSIUS
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature;
    return (
      <React.Fragment>
        <SplitPanel
          left={
            <Temperature
              scale={CELSIUS}
              temperature={celsius}
              onTemperatureChange={(temperature) => {
                this.setState({ temperature, scale: CELSIUS });
              }}
            />
          }
          right={
            <Temperature
              scale={FAHRENHEIT}
              temperature={fahrenheit}
              onTemperatureChange={(temperature) => {
                this.setState({ temperature, scale: FAHRENHEIT });
              }}
            />
          }
        />
        <Panel>
          <Boiling temperature={celsius} />
          <Boiling temperature={celsius} />
          <Boiling temperature={celsius} />
        </Panel>
      </React.Fragment>
    );
  }
}
