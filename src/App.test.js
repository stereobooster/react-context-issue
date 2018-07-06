import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import App from "./App";
import { FeatureContext } from "./FeatureFlag";

describe("renders", () => {
  const subject = ({ myFeature }) => (
    <div>
      <FeatureContext.Provider value={{ myFeature }}>
        <App />
      </FeatureContext.Provider>
    </div>
  );

  it("with myFeature enabled", () => {
    const tree = renderer.create(subject({ myFeature: true })).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it("with myFeature disabled", () => {
  //   const tree = renderer.create(subject({ myFeature: false })).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it("mounts with myFeature disabled", () => {
    const tree = mount(subject({ myFeature: false }));
    expect(true).toBe(true);
    tree.unmount();
  });

  // it("mounts with myFeature enabled", () => {
  //   const tree = mount(subject({ myFeature: true }));
  //   expect(true).toBe(true);
  //   tree.unmount();
  // });
});
