import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import AddRack from "./AddRack";

describe("AddRack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<AddRack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
