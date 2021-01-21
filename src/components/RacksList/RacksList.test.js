import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RacksList from "./RacksList";

describe("RacksList component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<RacksList />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
