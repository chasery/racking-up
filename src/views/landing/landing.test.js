import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Landing from "./landing";

describe("Landing component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Landing />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
