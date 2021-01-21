import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RackItem from "./RackItem";

describe("RackItem component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<RackItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
