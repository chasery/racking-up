import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewRacks from "./ViewRacks";

describe("ViewRacks component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<ViewRacks />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
