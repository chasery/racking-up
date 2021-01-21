import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Rack from "./Rack";

describe("Rack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Rack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
