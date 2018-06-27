import React, { Component } from "react";
import FeatureFlag from "./FeatureFlag.js";

class App extends Component {
  render() {
    return (
      <div>
        <FeatureFlag name="myFeature">My feature is enabled</FeatureFlag>
        <FeatureFlag name="myFeature">My feature is disabled</FeatureFlag>
      </div>
    );
  }
}

export default App;
