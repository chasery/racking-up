import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Racks from "./Racks";

describe("Racks component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Racks />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
