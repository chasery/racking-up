import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewRack from "./ViewRack";

describe("ViewRack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<ViewRack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
