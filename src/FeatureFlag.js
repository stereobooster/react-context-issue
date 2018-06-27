// @flow
import React, { type Node } from "react";
import { Feature } from "react-feature";

export const FeatureContext = React.createContext({
  myFeature: true
});

export default ({ name, children }) => (
  <FeatureContext.Consumer>
    {config => (
      <Feature name={name} config={config}>
        {children}
      </Feature>
    )}
  </FeatureContext.Consumer>
);
